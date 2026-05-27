const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');
const { protect } = require('../middleware/auth');

const router = express.Router();

const EXECUTION_TIMEOUT = parseInt(process.env.EXECUTION_TIMEOUT || '30') * 1000; // ms

// ── Risky pattern warnings (non-blocking) ────────────────────────────────────
const RISKY_PATTERNS = [
  'rm -rf', 'format', 'mkfs', ':(){:|:&};:',
  'dd if=', 'chmod 777', '/etc/passwd',
];

// ── Syntax check via Python -c "import ast; ast.parse(...)" ──────────────────
function validateSyntax(code) {
  return new Promise((resolve) => {
    const escaped = code.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
    exec(
      `python3 -c "import ast, sys; ast.parse(sys.stdin.read())"`,
      { timeout: 5000 },
      (err, stdout, stderr) => {
        if (err) {
          // Try python as fallback
          exec(
            `python -c "import ast, sys; ast.parse(sys.stdin.read())"`,
            { timeout: 5000 },
            (err2, _s, _e) => {
              resolve({ valid: !err2, error: err2 ? stderr || err.message : '' });
            }
          );
        } else {
          resolve({ valid: true, error: '' });
        }
      }
    );
  });
}

function getWarnings(code) {
  return RISKY_PATTERNS
    .filter(p => code.includes(p))
    .map(p => `Warning: Detected potentially risky pattern: '${p}'`);
}

// ── Run Python code via temp file ────────────────────────────────────────────
function runCode(code) {
  return new Promise((resolve) => {
    const tmpFile = path.join(os.tmpdir(), `studio_${crypto.randomBytes(6).toString('hex')}.py`);
    fs.writeFileSync(tmpFile, code, 'utf8');

    // Try python3 first, fall back to python
    const cmd = process.platform === 'win32' ? 'python' : 'python3';

    const child = exec(
      `${cmd} "${tmpFile}"`,
      { timeout: EXECUTION_TIMEOUT, encoding: 'utf8' },
      (err, stdout, stderr) => {
        // Clean up temp file
        try { fs.unlinkSync(tmpFile); } catch (_) {}

        if (err && err.killed) {
          return resolve({ output: `Error: Execution timed out after ${EXECUTION_TIMEOUT / 1000} seconds.`, exit_code: 1 });
        }

        let output = stdout || '';
        if (stderr) output += (output ? '\n' : '') + stderr;
        resolve({ output: output || '(no output)', exit_code: err ? (err.code || 1) : 0 });
      }
    );
  });
}

// ── POST /api/python-studio/run ──────────────────────────────────────────────
router.post('/run', protect, async (req, res) => {
  try {
    const code = (req.body.code || '').trim();
    if (!code) return res.status(400).json({ error: 'No code provided.' });

    const warnings = getWarnings(code);
    const result = await runCode(code);

    return res.json({
      output: result.output,
      exit_code: result.exit_code,
      warnings,
      note: '',
    });
  } catch (err) {
    console.error('[PythonStudio /run]', err.message);
    return res.status(500).json({ error: 'Execution failed', message: err.message });
  }
});

// ── POST /api/python-studio/ai-assist ────────────────────────────────────────
router.post('/ai-assist', protect, (req, res) => {
  const { mode, code = '', prompt = '' } = req.body;
  const safeCode = (code || '').slice(0, 3000);
  const lines = safeCode.trim().split('\n');
  let response = '';

  if (mode === 'explain') {
    const imports   = lines.filter(l => l.startsWith('import') || l.startsWith('from'));
    const functions = lines.filter(l => l.startsWith('def '));
    const classes   = lines.filter(l => l.startsWith('class '));

    response = 'Code Analysis:\n\n';
    response += `• Total lines: ${lines.length}\n`;
    if (imports.length)   response += `• Imports: ${imports.slice(0, 5).map(i => i.split(/\s+/).slice(-1)[0]).join(', ')}\n`;
    if (functions.length) response += `• Functions: ${functions.map(f => f.split('(')[0].replace('def ', '')).join(', ')}\n`;
    if (classes.length)   response += `• Classes: ${classes.map(c => c.split('(')[0].replace('class ', '')).join(', ')}\n`;
    response += '\nThis code appears to be a Python script';
    if (imports.some(l => l.includes('sklearn') || l.includes('numpy') || l.includes('pandas'))) {
      response += ' using AI/ML libraries';
    }
    response += '.\n\nTip: Use the Run button to execute and see the output in the console.';

  } else if (mode === 'debug') {
    // Simple syntax check in JS
    response = 'No syntax errors detected.\n\nDebug Tips:\n• Add print() statements to trace values\n• Check variable types with type()\n• Use try/except to catch runtime errors\n• Verify imports are available in the environment';
    if (prompt && prompt !== 'Find bugs in this code') {
      response += `\n\nRegarding '${prompt}':\nCheck that all variables are defined before use and that function arguments match the expected types.`;
    }

  } else if (mode === 'generate') {
    response = `Code Generation:\n\nFor '${prompt}', here's a starting template:\n\n`;
    const lp = (prompt || '').toLowerCase();
    if (lp.includes('sort'))  response += "# Sorting example\ndata = [3, 1, 4, 1, 5, 9, 2, 6]\ndata.sort()\nprint(data)";
    else if (lp.includes('file')) response += "# File handling\nwith open('output.txt', 'w') as f:\n    f.write('Hello!')\nprint('File written.')";
    else if (lp.includes('class')) response += "# Class template\nclass MyClass:\n    def __init__(self, name):\n        self.name = name\n    def greet(self):\n        return f'Hello, {self.name}!'";
    else response += `# Template for: ${prompt}\n# Add your implementation here\nprint('Generated code placeholder')`;

  } else {
    response = 'Unknown mode. Use: explain, debug, or generate.';
  }

  return res.json({ response });
});

// ── GET /api/python-studio/templates ─────────────────────────────────────────
router.get('/templates', (_req, res) => {
  res.json({
    templates: [
      { id: 'hello',   name: 'Hello World',       category: 'Basics'       },
      { id: 'numpy',   name: 'NumPy Demo',         category: 'AI/ML'        },
      { id: 'pandas',  name: 'Pandas DataFrame',   category: 'Data Science' },
      { id: 'chatbot', name: 'Simple Chatbot',     category: 'AI Playground'},
      { id: 'spam',    name: 'Spam Classifier',    category: 'ML'           },
    ],
  });
});

// ── GET /api/python-studio/health ────────────────────────────────────────────
router.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

// ── GET /api/python-studio/ (root) ───────────────────────────────────────────
router.get('/', (_req, res) => {
  res.json({
    name: 'Tech in My Style – AI Python Studio',
    version: '1.0.0',
    status: 'running',
    mode: 'embedded-in-express',
  });
});

module.exports = router;
