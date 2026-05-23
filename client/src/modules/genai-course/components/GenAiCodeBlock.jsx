import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const langMeta = {
  javascript: { label: "JavaScript", icon: "fab fa-js",     color: "#facc15" },
  js:         { label: "JavaScript", icon: "fab fa-js",     color: "#facc15" },
  python:     { label: "Python",     icon: "fab fa-python", color: "#67e8f9" },
  bash:       { label: "Shell",      icon: "fas fa-terminal", color: "#4ade80" },
  json:       { label: "JSON",       icon: "fas fa-code",   color: "#fb923c" },
};

function highlight(code) {
  return code
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="code-string">$1$2$1</span>')
    .replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/|#[^\n]*)/g, '<span class="code-comment">$1</span>')
    .replace(/\b(const|let|var|function|async|await|return|import|export|from|default|if|else|for|while|class|new|this|typeof|instanceof|true|false|null|undefined|try|catch|throw|of|in|def|print|with|as|pass|lambda|yield|and|or|not|is)\b/g, '<span class="code-keyword">$1</span>')
    .replace(/\b(\d+\.?\d*)\b/g, '<span class="code-number">$1</span>')
    .replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g, '<span class="code-function">$1</span>');
}

export default function GenAiCodeBlock({ code, language = "javascript", title }) {
  const [copied, setCopied] = useState(false);
  const meta = langMeta[language] || langMeta.javascript;

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      borderRadius: 12, overflow: "hidden",
      background: "rgba(4,4,10,0.95)",
      border: "1px solid rgba(124,58,237,0.2)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
    }}>
      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 16px",
        background: "rgba(13,13,26,0.8)",
        borderBottom: "1px solid rgba(124,58,237,0.12)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* macOS dots */}
          <div style={{ display: "flex", gap: 6 }}>
            {["#f87171", "#fbbf24", "#4ade80"].map((c, i) => (
              <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.7 }} />
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: meta.color, opacity: 0.8 }}>
            <i className={meta.icon} />
            <span style={{ letterSpacing: "0.05em" }}>{title || meta.label}</span>
          </div>
        </div>

        <button onClick={copy} style={{
          display: "flex", alignItems: "center", gap: 6,
          fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
          background: copied ? "rgba(74,222,128,0.15)" : "rgba(124,58,237,0.1)",
          border: `1px solid ${copied ? "rgba(74,222,128,0.3)" : "rgba(124,58,237,0.25)"}`,
          color: copied ? "#4ade80" : "#a78bfa",
          padding: "4px 12px", borderRadius: 6, cursor: "pointer",
          transition: "all 0.2s",
        }}>
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <i className="fas fa-check" style={{ fontSize: 9 }} /> Copied
              </motion.span>
            ) : (
              <motion.span key="cp" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <i className="fas fa-copy" style={{ fontSize: 9 }} /> Copy
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Code */}
      <div style={{ overflowX: "auto" }}>
        <pre style={{
          margin: 0, padding: "20px 24px",
          fontSize: 13, lineHeight: 1.8,
          color: "#94a3b8",
          fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
        }}>
          <code dangerouslySetInnerHTML={{ __html: highlight(code) }} />
        </pre>
      </div>
    </div>
  );
}
