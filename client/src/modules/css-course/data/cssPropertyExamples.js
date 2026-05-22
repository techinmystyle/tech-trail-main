export const propertyExamples = [

  // ─── 1. width ───────────────────────────────────────────────────
  {
    property: "width",
    description: "Sets the width of an element. Accepts px, %, em, rem, vw, or keywords like auto and fit-content.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>width — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>width</span> Property</h1>
    <p class="page-desc">Controls how wide an element is. Try editing the values below.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">width: 100px</p>
        <div class="bar w-100px">100px</div>
      </div>
      <div class="demo-card">
        <p class="label">width: 50%</p>
        <div class="bar w-50p">50%</div>
      </div>
      <div class="demo-card">
        <p class="label">width: 100%</p>
        <div class="bar w-100p">100%</div>
      </div>
      <div class="demo-card">
        <p class="label">width: auto</p>
        <div class="bar w-auto">auto</div>
      </div>
      <div class="demo-card">
        <p class="label">width: fit-content</p>
        <div class="bar w-fit">fit-content</div>
      </div>
      <div class="demo-card">
        <p class="label">width: 75vw</p>
        <div class="bar w-vw">75vw</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.demo-grid {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
}

.label {
  font-size: 0.8rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  margin-bottom: 0.6rem;
  font-weight: 600;
}

.bar {
  background: linear-gradient(90deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  min-height: 40px;
  transition: all 0.3s ease;
}

.bar:hover {
  filter: brightness(1.2);
  transform: translateY(-2px);
}

.w-100px { width: 100px; }
.w-50p   { width: 50%; }
.w-100p  { width: 100%; }
.w-auto  { width: auto; }
.w-fit   { width: fit-content; }
.w-vw    { width: 75vw; max-width: 100%; }`,
  },

  // ─── 2. height ──────────────────────────────────────────────────
  {
    property: "height",
    description: "Sets the height of an element. Accepts px, %, em, rem, vh, or keywords like auto and fit-content.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>height — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>height</span> Property</h1>
    <p class="page-desc">Controls how tall an element is. Hover each box to see the label.</p>

    <div class="demo-row">
      <div class="demo-card">
        <div class="box h-50px">
          <span class="tag">50px</span>
        </div>
        <p class="label">height: 50px</p>
      </div>
      <div class="demo-card">
        <div class="box h-100px">
          <span class="tag">100px</span>
        </div>
        <p class="label">height: 100px</p>
      </div>
      <div class="demo-card">
        <div class="box h-150px">
          <span class="tag">150px</span>
        </div>
        <p class="label">height: 150px</p>
      </div>
      <div class="demo-card">
        <div class="box h-200px">
          <span class="tag">200px</span>
        </div>
        <p class="label">height: 200px</p>
      </div>
      <div class="demo-card">
        <div class="box h-auto">
          <span class="tag">auto</span>
          <p>Content<br/>drives<br/>height</p>
        </div>
        <p class="label">height: auto</p>
      </div>
      <div class="demo-card">
        <div class="box h-30vh">
          <span class="tag">30vh</span>
        </div>
        <p class="label">height: 30vh</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #2965f1;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  align-items: end;
}

.demo-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.box {
  width: 100%;
  background: linear-gradient(180deg, #264de4, #2965f1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  color: #fff;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.box:hover {
  filter: brightness(1.25);
  transform: scale(1.03);
}

.tag {
  font-weight: 800;
  font-size: 1rem;
}

.box p {
  font-size: 0.72rem;
  opacity: 0.8;
  text-align: center;
  padding: 0 0.5rem;
}

.label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  text-align: center;
}

.h-50px  { height: 50px; }
.h-100px { height: 100px; }
.h-150px { height: 150px; }
.h-200px { height: 200px; }
.h-auto  { height: auto; padding: 1rem; }
.h-30vh  { height: 30vh; }`,
  },

  // ─── 3. min-width ───────────────────────────────────────────────
  {
    property: "min-width",
    description: "Sets the minimum width of an element. The element cannot be narrower than this value, even if the container is smaller.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>min-width — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>min-width</span> Property</h1>
    <p class="page-desc">
      The element will never shrink below this width. Resize the window to see the effect.
    </p>

    <div class="demo-section">
      <p class="section-label">No min-width — shrinks freely</p>
      <div class="container">
        <div class="box no-min">I shrink freely</div>
      </div>
    </div>

    <div class="demo-section">
      <p class="section-label">min-width: 200px — won't go below 200px</p>
      <div class="container">
        <div class="box min-200">min-width: 200px</div>
      </div>
    </div>

    <div class="demo-section">
      <p class="section-label">min-width: 50% — at least half the container</p>
      <div class="container">
        <div class="box min-50p">min-width: 50%</div>
      </div>
    </div>

    <div class="demo-section">
      <p class="section-label">min-width: 300px on a button</p>
      <div class="container">
        <button class="btn">Wide Button</button>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-section {
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
}

.section-label {
  font-size: 0.8rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.container {
  background: rgba(255, 255, 255, 0.03);
  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 0.75rem;
  overflow: hidden;
  resize: horizontal;
}

.box {
  background: linear-gradient(90deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  white-space: nowrap;
  transition: all 0.3s;
}

.no-min  { min-width: 0; width: 100%; }
.min-200 { min-width: 200px; }
.min-50p { min-width: 50%; }

.btn {
  min-width: 300px;
  background: linear-gradient(90deg, #264de4, #2965f1);
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}

.btn:hover {
  filter: brightness(1.2);
  transform: translateY(-2px);
}`,
  },

  // ─── 4. max-width ───────────────────────────────────────────────
  {
    property: "max-width",
    description: "Sets the maximum width of an element. The element cannot be wider than this value, even if the container is larger.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>max-width — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>max-width</span> Property</h1>
    <p class="page-desc">
      The element will never grow beyond this width. Most used for responsive layouts.
    </p>

    <div class="demo-section">
      <p class="section-label">No max-width — stretches to fill container</p>
      <div class="box no-max">I stretch to fill the full width</div>
    </div>

    <div class="demo-section">
      <p class="section-label">max-width: 400px</p>
      <div class="box max-400">I stop at 400px</div>
    </div>

    <div class="demo-section">
      <p class="section-label">max-width: 60%</p>
      <div class="box max-60p">I stop at 60% of parent</div>
    </div>

    <div class="demo-section">
      <p class="section-label">max-width: 100% — responsive image pattern</p>
      <div class="img-wrap">
        <div class="fake-img">🖼 Responsive Image (max-width: 100%)</div>
      </div>
    </div>

    <div class="demo-section">
      <p class="section-label">Centered container — max-width: 600px + margin: auto</p>
      <div class="centered-card">
        This card is centered and capped at 600px wide.
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #2965f1;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-section {
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
}

.section-label {
  font-size: 0.8rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.box {
  background: linear-gradient(90deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  transition: all 0.3s;
}

.box:hover {
  filter: brightness(1.2);
}

.no-max  { width: 100%; }
.max-400 { width: 100%; max-width: 400px; }
.max-60p { width: 100%; max-width: 60%; }

.img-wrap {
  width: 100%;
  overflow: hidden;
}

.fake-img {
  width: 800px;
  max-width: 100%;
  background: linear-gradient(90deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.centered-card {
  max-width: 600px;
  margin: 0 auto;
  background: rgba(38, 77, 228, 0.2);
  border: 1px solid rgba(38, 77, 228, 0.4);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  font-weight: 600;
  color: #a5b4fc;
}`,
  },

  // ─── 5. min-height ──────────────────────────────────────────────
  {
    property: "min-height",
    description: "Sets the minimum height of an element. The element will grow taller if content requires it, but never shorter than this value.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>min-height — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>min-height</span> Property</h1>
    <p class="page-desc">
      The element is at least this tall. If content is taller, it grows beyond the minimum.
    </p>

    <div class="demo-row">
      <div class="demo-card">
        <p class="section-label">No min-height</p>
        <div class="box no-min">Short</div>
      </div>

      <div class="demo-card">
        <p class="section-label">min-height: 120px</p>
        <div class="box min-120">Short text, tall box</div>
      </div>

      <div class="demo-card">
        <p class="section-label">min-height: 120px + overflow</p>
        <div class="box min-120">
          This box has a lot of content that overflows beyond the minimum height.
          The box grows to fit all the text naturally.
        </div>
      </div>
    </div>

    <div class="demo-section">
      <p class="section-label">min-height: 100vh — full viewport hero section</p>
      <div class="hero">
        <h2>Hero Section</h2>
        <p>min-height: 100vh makes this fill the screen</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 1rem;
  border-radius: 10px;
  line-height: 1.6;
  transition: all 0.3s;
}

.box:hover {
  filter: brightness(1.2);
  transform: translateY(-2px);
}

.no-min  { /* no min-height set */ }
.min-120 { min-height: 120px; }

.demo-section {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
}

.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, #264de4 0%, #1b35b5 100%);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  padding: 2rem;
}

.hero h2 {
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: -0.03em;
}

.hero p {
  font-size: 1rem;
  opacity: 0.8;
  font-family: "Courier New", monospace;
}`,
  },

    // ─── 6. max-height ──────────────────────────────────────────────
  {
    property: "max-height",
    description: "Sets the maximum height of an element. The element cannot be taller than this value. Overflow content is handled by the overflow property.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>max-height — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>max-height</span> Property</h1>
    <p class="page-desc">
      The element stops growing at this height. Extra content is clipped or scrollable.
    </p>

    <div class="demo-row">
      <div class="demo-card">
        <p class="section-label">No max-height — grows freely</p>
        <div class="box no-max">
          Line 1<br/>Line 2<br/>Line 3<br/>Line 4<br/>Line 5<br/>Line 6
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">max-height: 80px + overflow: hidden</p>
        <div class="box max-hidden">
          Line 1<br/>Line 2<br/>Line 3<br/>Line 4<br/>Line 5<br/>Line 6
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">max-height: 80px + overflow: auto</p>
        <div class="box max-scroll">
          Line 1<br/>Line 2<br/>Line 3<br/>Line 4<br/>Line 5<br/>Line 6
        </div>
      </div>
    </div>

    <div class="demo-section">
      <p class="section-label">Collapsible panel — max-height: 0 → max-height: 200px</p>
      <button class="toggle-btn" onclick="this.nextElementSibling.classList.toggle('open')">
        Toggle Panel ▼
      </button>
      <div class="panel">
        <p>This panel animates open and closed using max-height transition.</p>
        <p>max-height: 0 hides it. max-height: 200px reveals it.</p>
        <p>This is a very common CSS accordion pattern!</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 1rem;
  border-radius: 10px;
  line-height: 2;
}

.no-max     { /* grows freely */ }
.max-hidden { max-height: 80px; overflow: hidden; }
.max-scroll { max-height: 80px; overflow: auto; }

.demo-section {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
}

.toggle-btn {
  background: linear-gradient(90deg, #264de4, #2965f1);
  color: #fff;
  border: none;
  padding: 0.65rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

.toggle-btn:hover {
  filter: brightness(1.2);
  transform: translateY(-2px);
}

.panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
  background: rgba(38, 77, 228, 0.15);
  border-radius: 8px;
  padding: 0 1rem;
}

.panel.open {
  max-height: 200px;
  padding: 1rem;
}

.panel p {
  color: #a5b4fc;
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 0.5rem;
}`,
  },

  // ─── 7. margin ──────────────────────────────────────────────────
  {
    property: "margin",
    description: "Sets the outer spacing on all four sides of an element. Shorthand for margin-top, margin-right, margin-bottom, margin-left.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>margin — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>margin</span> Property</h1>
    <p class="page-desc">
      Margin creates space <strong>outside</strong> the element border. The orange area shows the margin zone.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">margin: 0</p>
        <div class="outer"><div class="box m-0">Box</div></div>
      </div>
      <div class="demo-card">
        <p class="section-label">margin: 20px</p>
        <div class="outer"><div class="box m-20">Box</div></div>
      </div>
      <div class="demo-card">
        <p class="section-label">margin: 10px 30px</p>
        <div class="outer"><div class="box m-10-30">Box</div></div>
      </div>
      <div class="demo-card">
        <p class="section-label">margin: 5px 10px 20px 40px</p>
        <div class="outer"><div class="box m-4val">Box</div></div>
      </div>
      <div class="demo-card">
        <p class="section-label">margin: auto (center)</p>
        <div class="outer"><div class="box m-auto">Centered</div></div>
      </div>
      <div class="demo-card">
        <p class="section-label">margin: -10px (negative)</p>
        <div class="outer"><div class="box m-neg">Overlap</div></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.page-desc strong {
  color: #f97316;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

/* Orange outer = shows margin space visually */
.outer {
  background: rgba(249, 115, 22, 0.15);
  border: 2px dashed rgba(249, 115, 22, 0.5);
  border-radius: 8px;
  overflow: visible;
}

.box {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.box:hover {
  filter: brightness(1.2);
}

.m-0     { margin: 0; }
.m-20    { margin: 20px; }
.m-10-30 { margin: 10px 30px; }
.m-4val  { margin: 5px 10px 20px 40px; }
.m-auto  { margin: 10px auto; width: 70%; }
.m-neg   { margin: -10px; }`,
  },

  // ─── 8. margin-top ──────────────────────────────────────────────
  {
    property: "margin-top",
    description: "Sets the top margin of an element — the space between the element's top edge and the element above it.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>margin-top — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>margin-top</span> Property</h1>
    <p class="page-desc">
      Adds space above the element. The dashed line shows where the previous element ends.
    </p>

    <div class="reference-bar">↑ Reference element above</div>

    <div class="demo-col">
      <div class="box mt-0">margin-top: 0</div>
      <div class="box mt-16">margin-top: 16px</div>
      <div class="box mt-40">margin-top: 40px</div>
      <div class="box mt-80">margin-top: 80px</div>
      <div class="box mt-auto">margin-top: auto</div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 700px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 1.5rem;
}

.reference-bar {
  background: rgba(249, 115, 22, 0.2);
  border: 2px dashed rgba(249, 115, 22, 0.6);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
  color: #fb923c;
  font-weight: 600;
  text-align: center;
}

.demo-col {
  display: flex;
  flex-direction: column;
}

.box {
  background: linear-gradient(90deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-family: "Courier New", monospace;
  transition: all 0.3s;
  position: relative;
}

.box:hover {
  filter: brightness(1.2);
  transform: translateX(4px);
}

/* Show margin-top visually with a colored gap */
.box::before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  background: rgba(249, 115, 22, 0.12);
  border-left: 3px solid rgba(249, 115, 22, 0.5);
}

.mt-0    { margin-top: 0; }
.mt-16   { margin-top: 16px; }
.mt-40   { margin-top: 40px; }
.mt-80   { margin-top: 80px; }
.mt-auto { margin-top: auto; }`,
  },

  // ─── 9. margin-right ────────────────────────────────────────────
  {
    property: "margin-right",
    description: "Sets the right margin of an element — the space between the element's right edge and the element beside it.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>margin-right — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>margin-right</span> Property</h1>
    <p class="page-desc">
      Adds space to the right of the element. The orange zone shows the margin gap.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">margin-right: 0</p>
        <div class="row-wrap">
          <div class="box mr-0">Box A</div>
          <div class="sibling">Sibling</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">margin-right: 20px</p>
        <div class="row-wrap">
          <div class="box mr-20">Box A</div>
          <div class="sibling">Sibling</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">margin-right: 60px</p>
        <div class="row-wrap">
          <div class="box mr-60">Box A</div>
          <div class="sibling">Sibling</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">margin-right: auto (pushes sibling to far right)</p>
        <div class="row-wrap">
          <div class="box mr-auto">Box A</div>
          <div class="sibling">Sibling</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.row-wrap {
  display: flex;
  align-items: center;
  background: rgba(249, 115, 22, 0.08);
  border: 1px dashed rgba(249, 115, 22, 0.3);
  border-radius: 8px;
  padding: 0.5rem;
}

.box {
  background: linear-gradient(90deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.65rem 1.25rem;
  border-radius: 8px;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.3s;
}

.box:hover {
  filter: brightness(1.2);
}

.sibling {
  background: rgba(255, 255, 255, 0.1);
  color: #9ca3af;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.65rem 1.25rem;
  border-radius: 8px;
  white-space: nowrap;
}

.mr-0    { margin-right: 0; }
.mr-20   { margin-right: 20px; }
.mr-60   { margin-right: 60px; }
.mr-auto { margin-right: auto; }`,
  },

  // ─── 10. margin-bottom ──────────────────────────────────────────
  {
    property: "margin-bottom",
    description: "Sets the bottom margin of an element — the space between the element's bottom edge and the element below it.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>margin-bottom — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>margin-bottom</span> Property</h1>
    <p class="page-desc">
      Adds space below the element. Each box below has a different margin-bottom value.
    </p>

    <div class="demo-col">
      <div class="box mb-0">
        <span class="tag">margin-bottom: 0</span>
      </div>
      <div class="spacer s-0"></div>

      <div class="box mb-16">
        <span class="tag">margin-bottom: 16px</span>
      </div>

      <div class="box mb-40">
        <span class="tag">margin-bottom: 40px</span>
      </div>

      <div class="box mb-80">
        <span class="tag">margin-bottom: 80px</span>
      </div>

      <div class="reference-bar">↑ Space above this bar = margin-bottom of last box</div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 700px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-col {
  display: flex;
  flex-direction: column;
}

.box {
  background: linear-gradient(90deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.85rem 1.25rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
}

.box:hover {
  filter: brightness(1.2);
  transform: translateX(4px);
}

.tag {
  font-family: "Courier New", monospace;
  font-size: 0.82rem;
}

.mb-0  { margin-bottom: 0; }
.mb-16 { margin-bottom: 16px; }
.mb-40 { margin-bottom: 40px; }
.mb-80 { margin-bottom: 80px; }

.reference-bar {
  background: rgba(249, 115, 22, 0.15);
  border: 2px dashed rgba(249, 115, 22, 0.5);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
  color: #fb923c;
  font-weight: 600;
  text-align: center;
}`,
  },

    // ─── 11. margin-left ────────────────────────────────────────────
  {
    property: "margin-left",
    description: "Sets the left margin of an element — the space between the element's left edge and the element or container beside it on the left.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>margin-left — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>margin-left</span> Property</h1>
    <p class="page-desc">
      Adds space to the left of the element. The orange zone shows the margin gap from the left edge.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">margin-left: 0</p>
        <div class="track">
          <div class="box ml-0">Box</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">margin-left: 30px</p>
        <div class="track">
          <div class="box ml-30">Box</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">margin-left: 80px</p>
        <div class="track">
          <div class="box ml-80">Box</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">margin-left: 150px</p>
        <div class="track">
          <div class="box ml-150">Box</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">margin-left: auto (pushes element to the right)</p>
        <div class="track">
          <div class="box ml-auto">Auto →</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.track {
  background: rgba(249, 115, 22, 0.08);
  border: 1px dashed rgba(249, 115, 22, 0.35);
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
}

.box {
  background: linear-gradient(90deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.65rem 1.5rem;
  border-radius: 8px;
  white-space: nowrap;
  transition: all 0.3s;
}

.box:hover {
  filter: brightness(1.2);
  transform: translateY(-2px);
}

.ml-0    { margin-left: 0; }
.ml-30   { margin-left: 30px; }
.ml-80   { margin-left: 80px; }
.ml-150  { margin-left: 150px; }
.ml-auto { margin-left: auto; }`,
  },

  // ─── 12. padding ────────────────────────────────────────────────
  {
    property: "padding",
    description: "Sets the inner spacing on all four sides of an element — between the content and the border. Shorthand for padding-top, padding-right, padding-bottom, padding-left.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>padding — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>padding</span> Property</h1>
    <p class="page-desc">
      Padding creates space <strong>inside</strong> the element border. The blue zone is padding, the dark zone is content.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">padding: 0</p>
        <div class="box p-0"><span class="content">Content</span></div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding: 10px</p>
        <div class="box p-10"><span class="content">Content</span></div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding: 20px</p>
        <div class="box p-20"><span class="content">Content</span></div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding: 10px 40px</p>
        <div class="box p-10-40"><span class="content">Content</span></div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding: 5px 10px 20px 40px</p>
        <div class="box p-4val"><span class="content">Content</span></div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding: 2rem (button style)</p>
        <button class="btn">Click Me</button>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.page-desc strong {
  color: #60a5fa;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

/* Blue = padding zone, dark inner = content */
.box {
  background: rgba(37, 99, 235, 0.35);
  border: 2px solid rgba(37, 99, 235, 0.6);
  border-radius: 8px;
  display: inline-block;
  width: 100%;
  transition: all 0.3s;
}

.box:hover {
  background: rgba(37, 99, 235, 0.5);
}

.content {
  display: block;
  background: #1e3a8a;
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  border-radius: 4px;
  text-align: center;
  padding: 0.25rem;
}

.p-0     { padding: 0; }
.p-10    { padding: 10px; }
.p-20    { padding: 20px; }
.p-10-40 { padding: 10px 40px; }
.p-4val  { padding: 5px 10px 20px 40px; }

.btn {
  padding: 2rem;
  background: linear-gradient(90deg, #264de4, #2965f1);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s;
}

.btn:hover {
  filter: brightness(1.2);
  transform: translateY(-2px);
}`,
  },

  // ─── 13. padding-top ────────────────────────────────────────────
  {
    property: "padding-top",
    description: "Sets the top inner spacing of an element — the space between the top border and the content inside.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>padding-top — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>padding-top</span> Property</h1>
    <p class="page-desc">
      Adds space between the top border and the content. The blue zone shows the padding-top area.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">padding-top: 0</p>
        <div class="box pt-0"><span class="content">Content</span></div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding-top: 20px</p>
        <div class="box pt-20"><span class="content">Content</span></div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding-top: 50px</p>
        <div class="box pt-50"><span class="content">Content</span></div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding-top: 80px</p>
        <div class="box pt-80"><span class="content">Content</span></div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding-top: 50% (aspect ratio trick)</p>
        <div class="box pt-50p"><span class="content overlay">16:8 ratio</span></div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding-top on a hero section</p>
        <div class="hero-demo">
          <span class="content">Hero Content</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: rgba(37, 99, 235, 0.25);
  border: 2px solid rgba(37, 99, 235, 0.5);
  border-radius: 8px;
  width: 100%;
  position: relative;
  transition: all 0.3s;
}

.box:hover {
  background: rgba(37, 99, 235, 0.4);
}

.content {
  display: block;
  background: #1e3a8a;
  color: #fff;
  font-weight: 700;
  font-size: 0.8rem;
  text-align: center;
  padding: 0.4rem;
  border-radius: 0 0 4px 4px;
}

.pt-0   { padding-top: 0; }
.pt-20  { padding-top: 20px; }
.pt-50  { padding-top: 50px; }
.pt-80  { padding-top: 80px; }

.pt-50p {
  padding-top: 50%;
  position: relative;
}

.pt-50p .content.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0 0 6px 6px;
}

.hero-demo {
  background: rgba(37, 99, 235, 0.25);
  border: 2px solid rgba(37, 99, 235, 0.5);
  border-radius: 8px;
  padding-top: 60px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
}

.hero-demo .content {
  border-radius: 6px;
}`,
  },

  // ─── 14. padding-right ──────────────────────────────────────────
  {
    property: "padding-right",
    description: "Sets the right inner spacing of an element — the space between the right border and the content inside.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>padding-right — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>padding-right</span> Property</h1>
    <p class="page-desc">
      Adds space between the right border and the content. Blue zone = padding-right area.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">padding-right: 0</p>
        <div class="box pr-0">
          <span class="content">Content</span>
          <span class="pad-zone pr-zone-0">0</span>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding-right: 20px</p>
        <div class="box pr-20">
          <span class="content">Content</span>
          <span class="pad-zone">20px</span>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding-right: 60px</p>
        <div class="box pr-60">
          <span class="content">Content</span>
          <span class="pad-zone">60px</span>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding-right: 120px</p>
        <div class="box pr-120">
          <span class="content">Content</span>
          <span class="pad-zone">120px</span>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — input with icon space</p>
        <div class="input-wrap">
          <input class="input" type="text" placeholder="Search..." />
          <span class="icon">🔍</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 700px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.box {
  background: rgba(37, 99, 235, 0.2);
  border: 2px solid rgba(37, 99, 235, 0.5);
  border-radius: 8px;
  display: flex;
  align-items: center;
  width: 100%;
  transition: all 0.3s;
}

.box:hover {
  background: rgba(37, 99, 235, 0.35);
}

.content {
  background: #1e3a8a;
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  padding: 0.6rem 0.75rem;
  border-radius: 6px 0 0 6px;
  white-space: nowrap;
}

.pad-zone {
  flex: 1;
  text-align: center;
  font-size: 0.72rem;
  color: #60a5fa;
  font-weight: 600;
  font-family: "Courier New", monospace;
}

.pr-zone-0 { display: none; }

.pr-0   { padding-right: 0; }
.pr-20  { padding-right: 20px; }
.pr-60  { padding-right: 60px; }
.pr-120 { padding-right: 120px; }

.input-wrap {
  position: relative;
}

.input {
  width: 100%;
  padding: 0.75rem 1rem;
  padding-right: 3rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  color: #fff;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.3s;
}

.input:focus {
  border-color: #264de4;
  background: rgba(38, 77, 228, 0.1);
}

.icon {
  position: absolute;
  right: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
}`,
  },

  // ─── 15. padding-bottom ─────────────────────────────────────────
  {
    property: "padding-bottom",
    description: "Sets the bottom inner spacing of an element — the space between the bottom border and the content inside.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>padding-bottom — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>padding-bottom</span> Property</h1>
    <p class="page-desc">
      Adds space between the content and the bottom border. Blue zone = padding-bottom area.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">padding-bottom: 0</p>
        <div class="box pb-0">
          <span class="content">Content</span>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding-bottom: 20px</p>
        <div class="box pb-20">
          <span class="content">Content</span>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding-bottom: 50px</p>
        <div class="box pb-50">
          <span class="content">Content</span>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding-bottom: 80px</p>
        <div class="box pb-80">
          <span class="content">Content</span>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — card footer spacing</p>
        <div class="card">
          <p class="card-text">Card content goes here with some text.</p>
          <button class="card-btn">Action</button>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — section bottom spacing</p>
        <div class="section-demo">
          <span class="content">Section</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: rgba(37, 99, 235, 0.2);
  border: 2px solid rgba(37, 99, 235, 0.5);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
}

.box:hover {
  background: rgba(37, 99, 235, 0.35);
}

.content {
  background: #1e3a8a;
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  padding: 0.5rem 0.75rem;
  border-radius: 6px 6px 0 0;
  text-align: center;
}

.pb-0  { padding-bottom: 0; }
.pb-20 { padding-bottom: 20px; }
.pb-50 { padding-bottom: 50px; }
.pb-80 { padding-bottom: 80px; }

.card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem 1rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card-text {
  font-size: 0.82rem;
  color: #9ca3af;
  line-height: 1.6;
}

.card-btn {
  background: linear-gradient(90deg, #264de4, #2965f1);
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  align-self: flex-start;
  transition: all 0.3s;
}

.card-btn:hover {
  filter: brightness(1.2);
  transform: translateY(-2px);
}

.section-demo {
  background: rgba(37, 99, 235, 0.2);
  border: 2px solid rgba(37, 99, 235, 0.5);
  border-radius: 8px;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 3rem;
}

.section-demo .content {
  border-radius: 6px;
}`,
  },

    // ─── 16. padding-left ───────────────────────────────────────────
  {
    property: "padding-left",
    description: "Sets the left inner spacing of an element — the space between the left border and the content inside.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>padding-left — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>padding-left</span> Property</h1>
    <p class="page-desc">
      Adds space between the left border and the content. Blue zone = padding-left area.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">padding-left: 0</p>
        <div class="box pl-0">
          <span class="pad-zone zone-0">0</span>
          <span class="content">Content</span>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding-left: 20px</p>
        <div class="box pl-20">
          <span class="pad-zone">20px</span>
          <span class="content">Content</span>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding-left: 60px</p>
        <div class="box pl-60">
          <span class="pad-zone">60px</span>
          <span class="content">Content</span>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">padding-left: 120px</p>
        <div class="box pl-120">
          <span class="pad-zone">120px</span>
          <span class="content">Content</span>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — blockquote indent</p>
        <blockquote class="quote">
          "padding-left is perfect for creating indented blockquotes and sidebar accents."
        </blockquote>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — nav item with icon</p>
        <ul class="nav-list">
          <li class="nav-item">🏠 Home</li>
          <li class="nav-item">📚 Courses</li>
          <li class="nav-item">⚙️ Settings</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.box {
  background: rgba(37, 99, 235, 0.2);
  border: 2px solid rgba(37, 99, 235, 0.5);
  border-radius: 8px;
  display: flex;
  align-items: center;
  min-height: 44px;
  transition: all 0.3s;
}

.box:hover {
  background: rgba(37, 99, 235, 0.35);
}

.pad-zone {
  font-size: 0.7rem;
  color: #60a5fa;
  font-weight: 600;
  font-family: "Courier New", monospace;
  text-align: center;
  flex-shrink: 0;
}

.zone-0 {
  display: none;
}

.content {
  background: #1e3a8a;
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0 6px 6px 0;
  flex: 1;
}

.pl-0   { padding-left: 0; }
.pl-20  { padding-left: 20px; }
.pl-60  { padding-left: 60px; }
.pl-120 { padding-left: 120px; }

.quote {
  border-left: 4px solid #264de4;
  padding-left: 1.5rem;
  color: #a5b4fc;
  font-style: italic;
  font-size: 0.9rem;
  line-height: 1.7;
}

.nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.nav-item {
  padding-left: 1.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 6px;
  font-size: 0.88rem;
  font-weight: 600;
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: all 0.2s;
}

.nav-item:hover {
  background: rgba(38, 77, 228, 0.25);
  color: #a5b4fc;
  padding-left: 1.75rem;
}`,
  },

  // ─── 17. border ─────────────────────────────────────────────────
  {
    property: "border",
    description: "Shorthand property that sets border-width, border-style, and border-color in one declaration. All three values are required for the border to appear.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>border — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>border</span> Property</h1>
    <p class="page-desc">
      Shorthand for width + style + color. All three values work together to draw the border.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">border: 2px solid #264de4</p>
        <div class="box b-solid">Solid</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border: 3px dashed #f97316</p>
        <div class="box b-dashed">Dashed</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border: 3px dotted #22c55e</p>
        <div class="box b-dotted">Dotted</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border: 4px double #a855f7</p>
        <div class="box b-double">Double</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border: 4px groove #ec4899</p>
        <div class="box b-groove">Groove</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border: 4px ridge #14b8a6</p>
        <div class="box b-ridge">Ridge</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border: 4px inset #f59e0b</p>
        <div class="box b-inset">Inset</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border: 4px outset #6366f1</p>
        <div class="box b-outset">Outset</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border: none</p>
        <div class="box b-none">No Border</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 1.25rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
  cursor: default;
}

.box:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.b-solid  { border: 2px solid #264de4; }
.b-dashed { border: 3px dashed #f97316; }
.b-dotted { border: 3px dotted #22c55e; }
.b-double { border: 4px double #a855f7; }
.b-groove { border: 4px groove #ec4899; }
.b-ridge  { border: 4px ridge #14b8a6; }
.b-inset  { border: 4px inset #f59e0b; }
.b-outset { border: 4px outset #6366f1; }
.b-none   { border: none; background: rgba(255,255,255,0.08); }`,
  },

  // ─── 18. border-width ───────────────────────────────────────────
  {
    property: "border-width",
    description: "Sets the width of all four borders at once. Can use px, em, or keywords: thin, medium, thick. Can also set each side individually with 1–4 values.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>border-width — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>border-width</span> Property</h1>
    <p class="page-desc">
      Controls how thick the border is. Use keywords or pixel values. Combine with border-style and border-color.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">border-width: thin</p>
        <div class="box bw-thin">thin</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-width: medium</p>
        <div class="box bw-medium">medium</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-width: thick</p>
        <div class="box bw-thick">thick</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-width: 1px</p>
        <div class="box bw-1">1px</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-width: 4px</p>
        <div class="box bw-4">4px</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-width: 8px</p>
        <div class="box bw-8">8px</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-width: 2px 8px (top/bottom left/right)</p>
        <div class="box bw-2-8">2px 8px</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-width: 1px 4px 8px 12px</p>
        <div class="box bw-4val">4 sides</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-width: 0 0 4px 0 (underline)</p>
        <div class="box bw-underline">Underline</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 1.25rem;
  border-radius: 8px;
  text-align: center;
  border-style: solid;
  border-color: #264de4;
  transition: all 0.3s;
  cursor: default;
}

.box:hover {
  background: rgba(38, 77, 228, 0.15);
  transform: translateY(-3px);
}

.bw-thin      { border-width: thin; }
.bw-medium    { border-width: medium; }
.bw-thick     { border-width: thick; }
.bw-1         { border-width: 1px; }
.bw-4         { border-width: 4px; }
.bw-8         { border-width: 8px; }
.bw-2-8       { border-width: 2px 8px; }
.bw-4val      { border-width: 1px 4px 8px 12px; }
.bw-underline {
  border-width: 0 0 4px 0;
  border-radius: 0;
  background: transparent;
  border-color: #f97316;
  color: #f97316;
}`,
  },

  // ─── 19. border-style ───────────────────────────────────────────
  {
    property: "border-style",
    description: "Sets the style of all four borders. Without a border-style, no border will be shown even if border-width and border-color are set.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>border-style — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>border-style</span> Property</h1>
    <p class="page-desc">
      Defines the line style of the border. Without this, no border appears even with width and color set.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">border-style: none</p>
        <div class="box bs-none">none</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-style: solid</p>
        <div class="box bs-solid">solid</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-style: dashed</p>
        <div class="box bs-dashed">dashed</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-style: dotted</p>
        <div class="box bs-dotted">dotted</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-style: double</p>
        <div class="box bs-double">double</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-style: groove</p>
        <div class="box bs-groove">groove</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-style: ridge</p>
        <div class="box bs-ridge">ridge</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-style: inset</p>
        <div class="box bs-inset">inset</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-style: outset</p>
        <div class="box bs-outset">outset</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-style: hidden</p>
        <div class="box bs-hidden">hidden</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-style: solid dashed (top/bottom left/right)</p>
        <div class="box bs-mixed">mixed</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-style: dotted solid dashed double</p>
        <div class="box bs-4val">4 sides</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 1.25rem;
  border-radius: 6px;
  text-align: center;
  border-width: 3px;
  border-color: #264de4;
  transition: all 0.3s;
  cursor: default;
}

.box:hover {
  background: rgba(38, 77, 228, 0.15);
  transform: translateY(-3px);
}

.bs-none   { border-style: none; outline: 1px dashed rgba(255,255,255,0.15); }
.bs-solid  { border-style: solid; }
.bs-dashed { border-style: dashed; }
.bs-dotted { border-style: dotted; }
.bs-double { border-style: double; border-width: 6px; }
.bs-groove { border-style: groove; border-color: #a855f7; }
.bs-ridge  { border-style: ridge;  border-color: #22c55e; }
.bs-inset  { border-style: inset;  border-color: #f97316; }
.bs-outset { border-style: outset; border-color: #ec4899; }
.bs-hidden { border-style: hidden; outline: 1px dashed rgba(255,255,255,0.15); }
.bs-mixed  { border-style: solid dashed; border-color: #264de4; }
.bs-4val   { border-style: dotted solid dashed double; border-width: 4px; border-color: #f97316; }`,
  },

  // ─── 20. border-color ───────────────────────────────────────────
  {
    property: "border-color",
    description: "Sets the color of all four borders. Accepts any valid CSS color value. Can set each side individually with 1–4 values.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>border-color — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>border-color</span> Property</h1>
    <p class="page-desc">
      Sets the color of the border. Supports named colors, hex, rgb, hsl, and even transparent.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">border-color: #264de4</p>
        <div class="box bc-blue">Blue</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-color: #f97316</p>
        <div class="box bc-orange">Orange</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-color: #22c55e</p>
        <div class="box bc-green">Green</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-color: #a855f7</p>
        <div class="box bc-purple">Purple</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-color: rgba(255,255,255,0.3)</p>
        <div class="box bc-rgba">RGBA</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-color: transparent</p>
        <div class="box bc-transparent">Transparent</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-color: currentColor</p>
        <div class="box bc-current">currentColor</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-color: red blue (top/bottom left/right)</p>
        <div class="box bc-2val">2 values</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-color: red green blue orange</p>
        <div class="box bc-4val">4 sides</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 1.25rem;
  border-radius: 8px;
  text-align: center;
  border-style: solid;
  border-width: 3px;
  transition: all 0.3s;
  cursor: default;
}

.box:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.bc-blue        { border-color: #264de4; }
.bc-orange      { border-color: #f97316; }
.bc-green       { border-color: #22c55e; }
.bc-purple      { border-color: #a855f7; }
.bc-rgba        { border-color: rgba(255, 255, 255, 0.3); }
.bc-transparent { border-color: transparent; outline: 1px dashed rgba(255,255,255,0.15); }
.bc-current     { border-color: currentColor; color: #f97316; }
.bc-2val        { border-color: #f97316 #264de4; }
.bc-4val        { border-color: #f97316 #22c55e #264de4 #a855f7; border-width: 4px; }`,
  },

    // ─── 21. border-radius ──────────────────────────────────────────
  {
    property: "border-radius",
    description: "Rounds the corners of an element's border. Can set all corners at once or each corner individually. Use 50% for a perfect circle.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>border-radius — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>border-radius</span> Property</h1>
    <p class="page-desc">
      Rounds element corners. Use px for fixed rounding, % for relative, and 50% for a circle.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">border-radius: 0</p>
        <div class="box br-0">0</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-radius: 4px</p>
        <div class="box br-4">4px</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-radius: 8px</p>
        <div class="box br-8">8px</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-radius: 16px</p>
        <div class="box br-16">16px</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-radius: 9999px (pill)</p>
        <div class="box br-pill">Pill Shape</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-radius: 50% (circle)</p>
        <div class="box br-circle">Circle</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-radius: 20px 0 (diagonal)</p>
        <div class="box br-diag">Diagonal</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-radius: 50% 0 50% 0</p>
        <div class="box br-leaf">Leaf</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%</p>
        <div class="box br-blob">Blob</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  text-align: center;
}

.box {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.4s ease;
  cursor: default;
}

.box:hover {
  filter: brightness(1.25);
  transform: scale(1.08);
}

.br-0      { border-radius: 0; }
.br-4      { border-radius: 4px; }
.br-8      { border-radius: 8px; }
.br-16     { border-radius: 16px; }
.br-pill   { border-radius: 9999px; width: 140px; height: 48px; }
.br-circle { border-radius: 50%; }
.br-diag   { border-radius: 20px 0; }
.br-leaf   { border-radius: 50% 0 50% 0; }
.br-blob   {
  border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
  animation: blobPulse 4s ease-in-out infinite;
}

@keyframes blobPulse {
  0%, 100% { border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%; }
  50%       { border-radius: 60% 40% 40% 60% / 60% 60% 40% 40%; }
}`,
  },

  // ─── 22. border-top ─────────────────────────────────────────────
  {
    property: "border-top",
    description: "Shorthand for border-top-width, border-top-style, and border-top-color. Sets only the top border of an element.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>border-top — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>border-top</span> Property</h1>
    <p class="page-desc">
      Sets only the top border. Perfect for accent lines, card headers, and dividers.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">border-top: 2px solid #264de4</p>
        <div class="box bt-solid">Solid Top</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-top: 3px dashed #f97316</p>
        <div class="box bt-dashed">Dashed Top</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-top: 3px dotted #22c55e</p>
        <div class="box bt-dotted">Dotted Top</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-top: 4px solid #a855f7</p>
        <div class="box bt-thick">Thick Top</div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — accent card</p>
        <div class="accent-card">
          <h3>Card Title</h3>
          <p>border-top creates a colored accent line at the top of this card.</p>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — loading bar</p>
        <div class="loading-bar">
          <div class="loading-inner"></div>
        </div>
        <p class="hint">border-top used as progress indicator</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.hint {
  font-size: 0.72rem;
  color: #6b7280;
  font-style: italic;
}

.box {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 1.25rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
  cursor: default;
}

.box:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.bt-solid  { border-top: 2px solid #264de4; }
.bt-dashed { border-top: 3px dashed #f97316; }
.bt-dotted { border-top: 3px dotted #22c55e; }
.bt-thick  { border-top: 4px solid #a855f7; }

.accent-card {
  background: rgba(255, 255, 255, 0.05);
  border-top: 4px solid #264de4;
  border-radius: 0 0 10px 10px;
  padding: 1.25rem;
}

.accent-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #a5b4fc;
  margin-bottom: 0.5rem;
}

.accent-card p {
  font-size: 0.82rem;
  color: #9ca3af;
  line-height: 1.6;
}

.loading-bar {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  height: 60px;
  overflow: hidden;
  position: relative;
}

.loading-inner {
  height: 100%;
  width: 60%;
  background: rgba(38, 77, 228, 0.2);
  border-top: 4px solid #264de4;
  animation: loadPulse 2s ease-in-out infinite;
}

@keyframes loadPulse {
  0%, 100% { width: 30%; }
  50%       { width: 90%; }
}`,
  },

  // ─── 23. border-right ───────────────────────────────────────────
  {
    property: "border-right",
    description: "Shorthand for border-right-width, border-right-style, and border-right-color. Sets only the right border of an element.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>border-right — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>border-right</span> Property</h1>
    <p class="page-desc">
      Sets only the right border. Commonly used for sidebar dividers and vertical separators.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">border-right: 2px solid #264de4</p>
        <div class="box br-solid">Solid Right</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-right: 3px dashed #f97316</p>
        <div class="box br-dashed">Dashed Right</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-right: 4px solid #22c55e</p>
        <div class="box br-thick">Thick Right</div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — sidebar layout</p>
        <div class="sidebar-layout">
          <div class="sidebar">Nav</div>
          <div class="main-content">Main Content Area</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — vertical tab indicator</p>
        <div class="tab-list">
          <div class="tab active">Dashboard</div>
          <div class="tab">Profile</div>
          <div class="tab">Settings</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — step divider</p>
        <div class="steps">
          <div class="step">Step 1</div>
          <div class="step">Step 2</div>
          <div class="step last">Step 3</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 1.25rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.box:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.br-solid  { border-right: 2px solid #264de4; }
.br-dashed { border-right: 3px dashed #f97316; }
.br-thick  { border-right: 4px solid #22c55e; }

.sidebar-layout {
  display: flex;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
}

.sidebar {
  background: rgba(38, 77, 228, 0.25);
  border-right: 3px solid #264de4;
  padding: 0.75rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: #a5b4fc;
  display: flex;
  align-items: center;
  width: 60px;
  justify-content: center;
}

.main-content {
  flex: 1;
  background: rgba(255, 255, 255, 0.04);
  padding: 0.75rem;
  font-size: 0.82rem;
  color: #9ca3af;
  display: flex;
  align-items: center;
}

.tab-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.tab {
  padding: 0.6rem 1rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: #9ca3af;
  border-radius: 6px 0 0 6px;
  cursor: pointer;
  transition: all 0.2s;
  border-right: 3px solid transparent;
}

.tab:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #e2e8f0;
}

.tab.active {
  background: rgba(38, 77, 228, 0.2);
  color: #a5b4fc;
  border-right: 3px solid #264de4;
}

.steps {
  display: flex;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
}

.step {
  flex: 1;
  background: rgba(38, 77, 228, 0.2);
  border-right: 2px solid #264de4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 700;
  color: #a5b4fc;
  transition: all 0.2s;
}

.step:hover {
  background: rgba(38, 77, 228, 0.4);
}

.step.last {
  border-right: none;
}`,
  },

  // ─── 24. border-bottom ──────────────────────────────────────────
  {
    property: "border-bottom",
    description: "Shorthand for border-bottom-width, border-bottom-style, and border-bottom-color. Sets only the bottom border of an element.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>border-bottom — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>border-bottom</span> Property</h1>
    <p class="page-desc">
      Sets only the bottom border. Great for underlines, dividers, and active tab indicators.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">border-bottom: 2px solid #264de4</p>
        <div class="box bb-solid">Solid Bottom</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-bottom: 3px dashed #f97316</p>
        <div class="box bb-dashed">Dashed Bottom</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-bottom: 3px dotted #22c55e</p>
        <div class="box bb-dotted">Dotted Bottom</div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — underline link hover</p>
        <div class="link-demo">
          <a class="link" href="#">Hover over me</a>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — active tab indicator</p>
        <div class="tabs">
          <div class="tab active">HTML</div>
          <div class="tab">CSS</div>
          <div class="tab">JS</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — section divider heading</p>
        <div class="divider-heading">
          <h3>Section Title</h3>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 1.25rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.box:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.bb-solid  { border-bottom: 2px solid #264de4; }
.bb-dashed { border-bottom: 3px dashed #f97316; }
.bb-dotted { border-bottom: 3px dotted #22c55e; }

.link-demo {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.link {
  color: #a5b4fc;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;
  transition: all 0.3s;
}

.link:hover {
  color: #fff;
  border-bottom: 2px solid #264de4;
}

.tabs {
  display: flex;
  gap: 0;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  overflow: hidden;
}

.tab {
  flex: 1;
  padding: 0.75rem 0.5rem;
  text-align: center;
  font-size: 0.82rem;
  font-weight: 700;
  color: #6b7280;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.2s;
}

.tab:hover {
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.05);
}

.tab.active {
  color: #a5b4fc;
  border-bottom: 3px solid #264de4;
  background: rgba(38, 77, 228, 0.1);
}

.divider-heading h3 {
  font-size: 1rem;
  font-weight: 800;
  color: #e2e8f0;
  padding-bottom: 0.6rem;
  border-bottom: 2px solid #264de4;
  display: inline-block;
  letter-spacing: 0.02em;
}`,
  },

  // ─── 25. border-left ────────────────────────────────────────────
  {
    property: "border-left",
    description: "Shorthand for border-left-width, border-left-style, and border-left-color. Sets only the left border of an element.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>border-left — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>border-left</span> Property</h1>
    <p class="page-desc">
      Sets only the left border. Widely used for blockquotes, alerts, and timeline indicators.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">border-left: 2px solid #264de4</p>
        <div class="box bl-solid">Solid Left</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-left: 4px solid #f97316</p>
        <div class="box bl-orange">Orange Left</div>
      </div>

      <div class="demo-card">
        <p class="section-label">border-left: 4px solid #22c55e</p>
        <div class="box bl-green">Green Left</div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — blockquote</p>
        <blockquote class="quote">
          "border-left is the classic way to style a blockquote with a vertical accent line."
        </blockquote>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — alert messages</p>
        <div class="alerts">
          <div class="alert alert-info">ℹ Info message</div>
          <div class="alert alert-success">✅ Success message</div>
          <div class="alert alert-warning">⚠️ Warning message</div>
          <div class="alert alert-error">❌ Error message</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — timeline</p>
        <div class="timeline">
          <div class="timeline-item">
            <div class="dot"></div>
            <div class="timeline-content">Step One</div>
          </div>
          <div class="timeline-item">
            <div class="dot"></div>
            <div class="timeline-content">Step Two</div>
          </div>
          <div class="timeline-item">
            <div class="dot"></div>
            <div class="timeline-content">Step Three</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 1.25rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.box:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
  .bl-solid  { border-left: 2px solid #264de4; }
.bl-orange { border-left: 4px solid #f97316; }
.bl-green  { border-left: 4px solid #22c55e; }

.quote {
  border-left: 4px solid #264de4;
  padding-left: 1rem;
  color: #a5b4fc;
  font-style: italic;
  font-size: 0.85rem;
  line-height: 1.7;
  background: rgba(38, 77, 228, 0.08);
  border-radius: 0 8px 8px 0;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-right: 0.75rem;
}

.alerts {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.alert {
  padding: 0.6rem 0.85rem;
  border-radius: 0 6px 6px 0;
  font-size: 0.8rem;
  font-weight: 600;
}

.alert-info    { background: rgba(38,77,228,0.15);  border-left: 4px solid #264de4; color: #a5b4fc; }
.alert-success { background: rgba(34,197,94,0.12);  border-left: 4px solid #22c55e; color: #86efac; }
.alert-warning { background: rgba(249,115,22,0.12); border-left: 4px solid #f97316; color: #fdba74; }
.alert-error   { background: rgba(239,68,68,0.12);  border-left: 4px solid #ef4444; color: #fca5a5; }

.timeline {
  position: relative;
  padding-left: 1.5rem;
  border-left: 2px solid #264de4;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.timeline-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.dot {
  position: absolute;
  left: -1.65rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #264de4;
  border: 2px solid #1a1a2e;
  flex-shrink: 0;
}

.timeline-content {
  background: rgba(38, 77, 228, 0.15);
  color: #a5b4fc;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.5rem 0.85rem;
  border-radius: 6px;
  flex: 1;
}`,
  },

    // ─── 26. box-sizing ─────────────────────────────────────────────
  {
    property: "box-sizing",
    description: "Defines how the total width and height of an element is calculated. content-box excludes padding and border; border-box includes them.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>box-sizing — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>box-sizing</span> Property</h1>
    <p class="page-desc">
      Controls how width and height are calculated. <strong>border-box</strong> is the modern standard — padding and border are included in the declared size.
    </p>

    <div class="compare-grid">
      <div class="compare-card">
        <p class="card-title">box-sizing: content-box</p>
        <p class="card-sub">Default. width = content only. Padding + border added ON TOP.</p>
        <div class="demo-wrap">
          <div class="box content-box-demo">
            width: 200px<br/>
            + padding: 20px<br/>
            + border: 5px<br/>
            = <strong>250px total</strong>
          </div>
        </div>
        <p class="actual-size" id="cb-size">Actual rendered width: —</p>
      </div>

      <div class="compare-card">
        <p class="card-title">box-sizing: border-box</p>
        <p class="card-sub">Modern. width = content + padding + border. Total stays 200px.</p>
        <div class="demo-wrap">
          <div class="box border-box-demo">
            width: 200px<br/>
            padding: 20px ✓<br/>
            border: 5px ✓<br/>
            = <strong>200px total</strong>
          </div>
        </div>
        <p class="actual-size" id="bb-size">Actual rendered width: —</p>
      </div>
    </div>

    <div class="info-card">
      <p class="info-title">💡 Best Practice</p>
      <pre class="code-block">* {
  box-sizing: border-box;
}</pre>
      <p class="info-text">Apply border-box to all elements globally. This is the standard in every modern CSS reset and framework.</p>
    </div>
  </div>

  <script>
    const cb = document.querySelector('.content-box-demo');
    const bb = document.querySelector('.border-box-demo');
    document.getElementById('cb-size').textContent =
      'Actual rendered width: ' + cb.offsetWidth + 'px';
    document.getElementById('bb-size').textContent =
      'Actual rendered width: ' + bb.offsetWidth + 'px';
  </script>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
  box-sizing: border-box;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
  box-sizing: border-box;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong {
  color: #a5b4fc;
}

.compare-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.compare-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.25rem;
  box-sizing: border-box;
}

.card-title {
  font-size: 0.88rem;
  font-weight: 700;
  color: #a5b4fc;
  font-family: "Courier New", monospace;
  margin-bottom: 0.4rem;
}

.card-sub {
  font-size: 0.78rem;
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.demo-wrap {
  background: rgba(249, 115, 22, 0.08);
  border: 1px dashed rgba(249, 115, 22, 0.3);
  border-radius: 8px;
  padding: 0.5rem;
  overflow: hidden;
  margin-bottom: 0.75rem;
}

.box {
  width: 200px;
  padding: 20px;
  border: 5px solid #264de4;
  background: rgba(38, 77, 228, 0.25);
  color: #a5b4fc;
  font-size: 0.78rem;
  line-height: 1.7;
  border-radius: 6px;
}

.box strong {
  color: #fff;
}

.content-box-demo {
  box-sizing: content-box;
}

.border-box-demo {
  box-sizing: border-box;
}

.actual-size {
  font-size: 0.78rem;
  color: #f97316;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.info-card {
  background: rgba(38, 77, 228, 0.1);
  border: 1px solid rgba(38, 77, 228, 0.3);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
}

.info-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: #a5b4fc;
  margin-bottom: 0.75rem;
}

.code-block {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-family: "Courier New", monospace;
  font-size: 0.85rem;
  color: #22c55e;
  margin-bottom: 0.75rem;
  white-space: pre;
}

.info-text {
  font-size: 0.82rem;
  color: #9ca3af;
  line-height: 1.6;
}`,
  },

  // ─── 27. overflow ───────────────────────────────────────────────
  {
    property: "overflow",
    description: "Specifies what happens when content overflows an element's box. Shorthand for overflow-x and overflow-y.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>overflow — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>overflow</span> Property</h1>
    <p class="page-desc">
      Controls what happens when content is too big for its container. Each box below has the same fixed height with different overflow values.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">overflow: visible (default)</p>
        <div class="box ov-visible">
          This content overflows and is still visible outside the box boundary. It spills out freely.
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">overflow: hidden</p>
        <div class="box ov-hidden">
          This content overflows but is clipped. You cannot see or scroll to the hidden part.
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">overflow: scroll</p>
        <div class="box ov-scroll">
          This content overflows and scrollbars always appear — even if content fits. Scroll to see more text here.
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">overflow: auto</p>
        <div class="box ov-auto">
          This content overflows and a scrollbar appears only when needed. Scroll to see more text here.
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">overflow: clip</p>
        <div class="box ov-clip">
          This content is clipped like hidden but programmatic scrolling is also disabled. Hard clip.
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — text truncation</p>
        <div class="truncate-demo">
          <p class="truncate">This is a very long text that gets truncated with an ellipsis using overflow hidden.</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: rgba(38, 77, 228, 0.15);
  border: 2px solid rgba(38, 77, 228, 0.4);
  border-radius: 8px;
  padding: 0.85rem;
  height: 80px;
  font-size: 0.8rem;
  color: #a5b4fc;
  line-height: 1.6;
  transition: border-color 0.3s;
}

.box:hover {
  border-color: #264de4;
}

.ov-visible { overflow: visible; }
.ov-hidden  { overflow: hidden; }
.ov-scroll  { overflow: scroll; }
.ov-auto    { overflow: auto; }
.ov-clip    { overflow: clip; }

.truncate-demo {
  background: rgba(38, 77, 228, 0.15);
  border: 2px solid rgba(38, 77, 228, 0.4);
  border-radius: 8px;
  padding: 0.85rem;
  height: 80px;
  display: flex;
  align-items: center;
}

.truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.8rem;
  color: #a5b4fc;
  width: 100%;
}`,
  },

  // ─── 28. overflow-x ─────────────────────────────────────────────
  {
    property: "overflow-x",
    description: "Controls what happens when content overflows the left and right edges of an element's box. Only affects horizontal overflow.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>overflow-x — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>overflow-x</span> Property</h1>
    <p class="page-desc">
      Controls horizontal overflow only. Perfect for wide tables, code blocks, and horizontal scroll areas.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">overflow-x: visible — content spills out horizontally</p>
        <div class="box ox-visible">
          <div class="wide-content">This content is very wide and will overflow horizontally beyond the container boundary.</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">overflow-x: hidden — horizontal overflow clipped</p>
        <div class="box ox-hidden">
          <div class="wide-content">This content is very wide and will be clipped on the right side. You cannot scroll to see it.</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">overflow-x: scroll — always shows horizontal scrollbar</p>
        <div class="box ox-scroll">
          <div class="wide-content">This content is very wide. A horizontal scrollbar always appears. Scroll right to see more →</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">overflow-x: auto — scrollbar only when needed</p>
        <div class="box ox-auto">
          <div class="wide-content">This content is very wide. A horizontal scrollbar appears only because content overflows. Scroll →</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — horizontal scrollable code block</p>
        <div class="code-scroll">
          <pre class="code">const result = someVeryLongFunctionName(parameterOne, parameterTwo, parameterThree, parameterFour);</pre>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.box {
  background: rgba(38, 77, 228, 0.12);
  border: 2px solid rgba(38, 77, 228, 0.35);
  border-radius: 8px;
  padding: 0.75rem;
  height: 52px;
  display: flex;
  align-items: center;
}

.wide-content {
  white-space: nowrap;
  font-size: 0.82rem;
  color: #a5b4fc;
  min-width: 600px;
}

.ox-visible { overflow-x: visible; }
.ox-hidden  { overflow-x: hidden; }
.ox-scroll  { overflow-x: scroll; }
.ox-auto    { overflow-x: auto; }

.code-scroll {
  background: #0d1117;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 0.85rem 1rem;
  overflow-x: auto;
}

.code {
  font-family: "Courier New", monospace;
  font-size: 0.82rem;
  color: #22c55e;
  white-space: pre;
  margin: 0;
}`,
  },

  // ─── 29. overflow-y ─────────────────────────────────────────────
  {
    property: "overflow-y",
    description: "Controls what happens when content overflows the top and bottom edges of an element's box. Only affects vertical overflow.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>overflow-y — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>overflow-y</span> Property</h1>
    <p class="page-desc">
      Controls vertical overflow only. Each box has a fixed height with different overflow-y values.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">overflow-y: visible</p>
        <div class="box oy-visible">
          <p>Line 1</p><p>Line 2</p><p>Line 3</p>
          <p>Line 4</p><p>Line 5</p><p>Line 6</p>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">overflow-y: hidden</p>
        <div class="box oy-hidden">
          <p>Line 1</p><p>Line 2</p><p>Line 3</p>
          <p>Line 4</p><p>Line 5</p><p>Line 6</p>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">overflow-y: scroll</p>
        <div class="box oy-scroll">
          <p>Line 1</p><p>Line 2</p><p>Line 3</p>
          <p>Line 4</p><p>Line 5</p><p>Line 6</p>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">overflow-y: auto</p>
        <div class="box oy-auto">
          <p>Line 1</p><p>Line 2</p><p>Line 3</p>
          <p>Line 4</p><p>Line 5</p><p>Line 6</p>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — scrollable chat list</p>
        <div class="chat-list">
          <div class="chat-item">👤 Alice: Hey there!</div>
          <div class="chat-item">👤 Bob: What's up?</div>
          <div class="chat-item">👤 Alice: Working on CSS</div>
          <div class="chat-item">👤 Bob: Nice! overflow-y?</div>
          <div class="chat-item">👤 Alice: Exactly 😄</div>
          <div class="chat-item">👤 Bob: Cool stuff!</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — fixed sidebar nav</p>
        <div class="sidebar-nav">
          <div class="nav-item">🏠 Home</div>
          <div class="nav-item">📚 Courses</div>
          <div class="nav-item">🎨 CSS</div>
          <div class="nav-item">⚡ JS</div>
          <div class="nav-item">🐍 Python</div>
          <div class="nav-item">☕ Java</div>
          <div class="nav-item">⚙️ Settings</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: rgba(38, 77, 228, 0.12);
  border: 2px solid rgba(38, 77, 228, 0.35);
  border-radius: 8px;
  padding: 0.75rem;
  height: 100px;
}

.box p {
  font-size: 0.8rem;
  color: #a5b4fc;
  padding: 0.15rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.oy-visible { overflow-y: visible; }
.oy-hidden  { overflow-y: hidden; }
.oy-scroll  { overflow-y: scroll; }
.oy-auto    { overflow-y: auto; }

.chat-list {
  background: rgba(38, 77, 228, 0.1);
  border: 1px solid rgba(38, 77, 228, 0.3);
  border-radius: 8px;
  height: 100px;
  overflow-y: auto;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.chat-item {
  font-size: 0.78rem;
  color: #a5b4fc;
  padding: 0.3rem 0.5rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 4px;
  white-space: nowrap;
}

.sidebar-nav {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  height: 100px;
  overflow-y: auto;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.nav-item {
  font-size: 0.78rem;
  font-weight: 600;
  color: #9ca3af;
  padding: 0.35rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.nav-item:hover {
  background: rgba(38, 77, 228, 0.2);
  color: #a5b4fc;
}`,
  },

  // ─── 30. outline ────────────────────────────────────────────────
  {
    property: "outline",
    description: "Draws a line outside the element's border. Unlike border, outline does not take up space and does not affect layout. Shorthand for outline-width, outline-style, outline-color.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>outline — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>outline</span> Property</h1>
    <p class="page-desc">
      Draws outside the border without affecting layout. Key difference from border: outline takes up <strong>zero space</strong>.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">outline: 2px solid #264de4</p>
        <div class="box ol-solid">Solid</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline: 3px dashed #f97316</p>
        <div class="box ol-dashed">Dashed</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline: 3px dotted #22c55e</p>
        <div class="box ol-dotted">Dotted</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline: 4px double #a855f7</p>
        <div class="box ol-double">Double</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline: none (removes focus ring)</p>
        <input class="input ol-none" type="text" placeholder="Focus me — no outline" />
      </div>

      <div class="demo-card">
        <p class="section-label">outline: 2px solid #264de4 (custom focus)</p>
        <input class="input ol-custom" type="text" placeholder="Focus me — custom outline" />
      </div>

      <div class="demo-card">
        <p class="section-label">outline vs border — no layout shift</p>
        <div class="compare-row">
          <div class="compare-box border-box-demo">border</div>
          <div class="compare-box outline-box-demo">outline</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline: 0 (accessibility warning)</p>
        <button class="btn-no-outline">Button (bad a11y)</button>
      </div>

      <div class="demo-card">
        <p class="section-label">outline with outline-offset: 4px</p>
        <div class="box ol-offset">Offset</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong {
  color: #f97316;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 1.25rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
  cursor: default;
  }

.box:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.ol-solid  { outline: 2px solid #264de4; }
.ol-dashed { outline: 3px dashed #f97316; }
.ol-dotted { outline: 3px dotted #22c55e; }
.ol-double { outline: 4px double #a855f7; }
.ol-offset { outline: 2px solid #264de4; outline-offset: 6px; }

.input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: #fff;
  font-size: 0.88rem;
  font-family: "Segoe UI", sans-serif;
}

.input::placeholder {
  color: #6b7280;
}

.ol-none:focus {
  outline: none;
}

.ol-custom:focus {
  outline: 2px solid #264de4;
  outline-offset: 2px;
  border-color: transparent;
}

.compare-row {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
}

.compare-box {
  padding: 0.65rem 1rem;
  border-radius: 6px;
  font-size: 0.82rem;
  font-weight: 700;
  color: #fff;
  background: rgba(38, 77, 228, 0.25);
  text-align: center;
}

.border-box-demo {
  border: 3px solid #f97316;
}

.outline-box-demo {
  outline: 3px solid #22c55e;
}

.btn-no-outline {
  width: 100%;
  padding: 0.75rem;
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.4);
  border-radius: 8px;
  color: #fca5a5;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  outline: 0;
  transition: all 0.3s;
}

.btn-no-outline:hover {
  background: rgba(239, 68, 68, 0.3);
}`,
  },
  // ─── 31. outline-width ──────────────────────────────────────────
  {
    property: "outline-width",
    description: "Sets the width of an outline. Works only when outline-style is set. Accepts px, em, or keywords: thin, medium, thick.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>outline-width — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>outline-width</span> Property</h1>
    <p class="page-desc">
      Controls how thick the outline is. Must be used with outline-style to be visible.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">outline-width: thin</p>
        <div class="box ow-thin">thin</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-width: medium</p>
        <div class="box ow-medium">medium</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-width: thick</p>
        <div class="box ow-thick">thick</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-width: 1px</p>
        <div class="box ow-1">1px</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-width: 4px</p>
        <div class="box ow-4">4px</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-width: 8px</p>
        <div class="box ow-8">8px</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-width: 12px</p>
        <div class="box ow-12">12px</div>
      </div>

      <div class="demo-card">
        <p class="section-label">Hover to see outline-width change</p>
        <div class="box ow-hover">Hover Me</div>
      </div>

      <div class="demo-card">
        <p class="section-label">Focus input — outline-width: 3px</p>
        <input class="input-demo" type="text" placeholder="Click to focus" />
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 1.25rem;
  border-radius: 8px;
  text-align: center;
  outline-style: solid;
  outline-color: #264de4;
  transition: all 0.3s;
  cursor: default;
}

.box:hover {
  background: rgba(38, 77, 228, 0.15);
}

.ow-thin   { outline-width: thin; }
.ow-medium { outline-width: medium; }
.ow-thick  { outline-width: thick; }
.ow-1      { outline-width: 1px; }
.ow-4      { outline-width: 4px; }
.ow-8      { outline-width: 8px; }
.ow-12     { outline-width: 12px; }

.ow-hover {
  outline-width: 1px;
  outline-style: solid;
  outline-color: #264de4;
  transition: outline-width 0.3s ease;
}

.ow-hover:hover {
  outline-width: 6px;
  outline-color: #f97316;
}

.input-demo {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: #fff;
  font-size: 0.88rem;
  font-family: "Segoe UI", sans-serif;
  outline-style: solid;
  outline-color: transparent;
  outline-width: 0px;
  transition: outline-width 0.2s ease, outline-color 0.2s ease;
}

.input-demo::placeholder {
  color: #6b7280;
}

.input-demo:focus {
  outline-width: 3px;
  outline-color: #264de4;
  outline-offset: 2px;
  border-color: transparent;
}`,
  },

  // ─── 32. outline-style ──────────────────────────────────────────
  {
    property: "outline-style",
    description: "Sets the style of an outline. Without outline-style set to a value other than none, no outline will appear regardless of other outline properties.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>outline-style — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>outline-style</span> Property</h1>
    <p class="page-desc">
      Defines the line style of the outline. This is required — without it, no outline appears.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">outline-style: none</p>
        <div class="box os-none">none</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-style: solid</p>
        <div class="box os-solid">solid</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-style: dashed</p>
        <div class="box os-dashed">dashed</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-style: dotted</p>
        <div class="box os-dotted">dotted</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-style: double</p>
        <div class="box os-double">double</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-style: groove</p>
        <div class="box os-groove">groove</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-style: ridge</p>
        <div class="box os-ridge">ridge</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-style: inset</p>
        <div class="box os-inset">inset</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-style: outset</p>
        <div class="box os-outset">outset</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 1.25rem;
  border-radius: 8px;
  text-align: center;
  outline-width: 3px;
  outline-color: #264de4;
  transition: all 0.3s;
  cursor: default;
}

.box:hover {
  background: rgba(38, 77, 228, 0.15);
  transform: translateY(-3px);
}

.os-none   {
  outline-style: none;
  border: 1px dashed rgba(255,255,255,0.15);
}
.os-solid  { outline-style: solid; }
.os-dashed { outline-style: dashed; }
.os-dotted { outline-style: dotted; }
.os-double { outline-style: double; outline-width: 6px; }
.os-groove { outline-style: groove; outline-color: #a855f7; }
.os-ridge  { outline-style: ridge;  outline-color: #22c55e; }
.os-inset  { outline-style: inset;  outline-color: #f97316; }
.os-outset { outline-style: outset; outline-color: #ec4899; }`,
  },

  // ─── 33. outline-color ──────────────────────────────────────────
  {
    property: "outline-color",
    description: "Sets the color of an outline. Accepts any valid CSS color value including the special keyword 'invert' which inverts the background color.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>outline-color — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>outline-color</span> Property</h1>
    <p class="page-desc">
      Sets the color of the outline. Requires outline-style to be visible. Supports all CSS color formats.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">outline-color: #264de4</p>
        <div class="box oc-blue">Blue</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-color: #f97316</p>
        <div class="box oc-orange">Orange</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-color: #22c55e</p>
        <div class="box oc-green">Green</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-color: #a855f7</p>
        <div class="box oc-purple">Purple</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-color: #ec4899</p>
        <div class="box oc-pink">Pink</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-color: rgba(255,255,255,0.4)</p>
        <div class="box oc-rgba">RGBA</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-color: currentColor</p>
        <div class="box oc-current">currentColor</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-color: transparent</p>
        <div class="box oc-transparent">transparent</div>
      </div>

      <div class="demo-card">
        <p class="section-label">Animated outline-color on hover</p>
        <div class="box oc-animated">Hover Me</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 1.25rem;
  border-radius: 8px;
  text-align: center;
  outline-style: solid;
  outline-width: 3px;
  transition: all 0.3s;
  cursor: default;
}

.box:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.oc-blue        { outline-color: #264de4; }
.oc-orange      { outline-color: #f97316; }
.oc-green       { outline-color: #22c55e; }
.oc-purple      { outline-color: #a855f7; }
.oc-pink        { outline-color: #ec4899; }
.oc-rgba        { outline-color: rgba(255, 255, 255, 0.4); }
.oc-current     { outline-color: currentColor; color: #f97316; }
.oc-transparent { outline-color: transparent; }

.oc-animated {
  outline-color: #264de4;
  transition: outline-color 0.4s ease, outline-width 0.4s ease;
}

.oc-animated:hover {
  outline-color: #f97316;
  outline-width: 5px;
}`,
  },

  // ─── 34. outline-offset ─────────────────────────────────────────
  {
    property: "outline-offset",
    description: "Sets the amount of space between an outline and the edge of the element. Positive values push the outline outward; negative values pull it inward.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>outline-offset — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>outline-offset</span> Property</h1>
    <p class="page-desc">
      Controls the gap between the element edge and its outline. Positive = outward, negative = inward.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">outline-offset: 0</p>
        <div class="box oo-0">0px</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-offset: 4px</p>
        <div class="box oo-4">4px</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-offset: 8px</p>
        <div class="box oo-8">8px</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-offset: 16px</p>
        <div class="box oo-16">16px</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-offset: -4px (inward)</p>
        <div class="box oo-neg4">-4px</div>
      </div>

      <div class="demo-card">
        <p class="section-label">outline-offset: -8px (inward)</p>
        <div class="box oo-neg8">-8px</div>
      </div>

      <div class="demo-card">
        <p class="section-label">Hover to animate offset</p>
        <div class="box oo-hover">Hover Me</div>
      </div>

      <div class="demo-card">
        <p class="section-label">Focus ring with offset — accessible button</p>
        <button class="btn-accessible">Focus Me</button>
      </div>

      <div class="demo-card">
        <p class="section-label">Image with outline-offset frame effect</p>
        <div class="frame-demo">CSS</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  text-align: center;
}

.box {
  background: rgba(38, 77, 228, 0.25);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 1.25rem 2rem;
  border-radius: 8px;
  text-align: center;
  outline: 2px solid #264de4;
  outline-style: solid;
  transition: all 0.3s;
  cursor: default;
}

.oo-0    { outline-offset: 0; }
.oo-4    { outline-offset: 4px; }
.oo-8    { outline-offset: 8px; }
.oo-16   { outline-offset: 16px; }
.oo-neg4 { outline-offset: -4px; }
.oo-neg8 { outline-offset: -8px; }

.oo-hover {
  outline-offset: 0px;
  transition: outline-offset 0.3s ease, outline-color 0.3s ease;
}

.oo-hover:hover {
  outline-offset: 8px;
  outline-color: #f97316;
}

.btn-accessible {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(90deg, #264de4, #2965f1);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: 4px;
  transition: all 0.2s;
}

.btn-accessible:focus {
  outline-color: #f97316;
}

.btn-accessible:hover {
  filter: brightness(1.2);
}

.frame-demo {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #264de4, #2965f1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 900;
  color: #fff;
  outline: 2px solid #264de4;
  outline-offset: 6px;
}`,
  },

  // ─── 35. display ────────────────────────────────────────────────
  {
    property: "display",
    description: "Specifies the display behavior of an element. Controls whether an element is treated as block, inline, flex, grid, or removed from the layout entirely.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>display — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>display</span> Property</h1>
    <p class="page-desc">
      The most important layout property. Controls how an element participates in the document flow.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">display: block — takes full width, stacks vertically</p>
        <div class="demo-area">
          <div class="item d-block">Block 1</div>
          <div class="item d-block">Block 2</div>
          <div class="item d-block">Block 3</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">display: inline — flows with text, no width/height</p>
        <div class="demo-area">
          <span class="item d-inline">Inline 1</span>
          <span class="item d-inline">Inline 2</span>
          <span class="item d-inline">Inline 3</span>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">display: inline-block — inline flow but accepts width/height</p>
        <div class="demo-area">
          <div class="item d-inline-block">IB 1</div>
          <div class="item d-inline-block">IB 2</div>
          <div class="item d-inline-block">IB 3</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">display: flex — flexible one-dimensional layout</p>
        <div class="demo-area d-flex">
          <div class="item">Flex 1</div>
          <div class="item">Flex 2</div>
          <div class="item">Flex 3</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">display: grid — two-dimensional grid layout</p>
        <div class="demo-area d-grid">
          <div class="item">Grid 1</div>
          <div class="item">Grid 2</div>
          <div class="item">Grid 3</div>
          <div class="item">Grid 4</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">display: none — completely removed from layout</p>
        <div class="demo-area">
          <div class="item">Visible 1</div>
          <div class="item d-none">Hidden (display: none)</div>
          <div class="item">Visible 2</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.demo-area {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  min-height: 48px;
}

.item {
  background: linear-gradient(90deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-align: center;
  transition: all 0.3s;
}

.item:hover {
  filter: brightness(1.2);
}

/* display values */
.d-block        { display: block; margin-bottom: 0.4rem; }
.d-block:last-child { margin-bottom: 0; }
.d-inline       { display: inline; margin: 0.2rem; }
.d-inline-block { display: inline-block; margin: 0.2rem; }
.d-none         { display: none; }

.d-flex {
  display: flex;
  gap: 0.5rem;
}

.d-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}`,
  },

    // ─── 36. flex-direction ─────────────────────────────────────────
  {
    property: "flex-direction",
    description: "Sets the direction flex items are placed in the flex container. Defines the main axis: row (horizontal) or column (vertical), and whether items flow forward or in reverse.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>flex-direction — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>flex-direction</span> Property</h1>
    <p class="page-desc">
      Controls which direction flex items flow inside the container. The main axis changes based on this value.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">flex-direction: row (default) — left to right</p>
        <div class="flex-box fd-row">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex-direction: row-reverse — right to left</p>
        <div class="flex-box fd-row-reverse">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex-direction: column — top to bottom</p>
        <div class="flex-box fd-column">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex-direction: column-reverse — bottom to top</p>
        <div class="flex-box fd-column-reverse">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.flex-box {
  display: flex;
  gap: 0.6rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  min-height: 60px;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 800;
  font-size: 1rem;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s;
}

.item:hover {
  filter: brightness(1.3);
  transform: scale(1.1);
}

.fd-row            { flex-direction: row; }
.fd-row-reverse    { flex-direction: row-reverse; }
.fd-column         { flex-direction: column; }
.fd-column-reverse { flex-direction: column-reverse; }`,
  },

  // ─── 37. flex-wrap ──────────────────────────────────────────────
  {
    property: "flex-wrap",
    description: "Controls whether flex items are forced onto one line or can wrap onto multiple lines. By default flex items try to fit on one line.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>flex-wrap — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>flex-wrap</span> Property</h1>
    <p class="page-desc">
      Controls whether flex items wrap to the next line when they run out of space.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">flex-wrap: nowrap (default) — all items on one line, may overflow</p>
        <div class="flex-box fw-nowrap">
          <div class="item">Item 1</div>
          <div class="item">Item 2</div>
          <div class="item">Item 3</div>
          <div class="item">Item 4</div>
          <div class="item">Item 5</div>
          <div class="item">Item 6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex-wrap: wrap — items wrap to next line when needed</p>
        <div class="flex-box fw-wrap">
          <div class="item">Item 1</div>
          <div class="item">Item 2</div>
          <div class="item">Item 3</div>
          <div class="item">Item 4</div>
          <div class="item">Item 5</div>
          <div class="item">Item 6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex-wrap: wrap-reverse — wraps in reverse order</p>
        <div class="flex-box fw-wrap-reverse">
          <div class="item">Item 1</div>
          <div class="item">Item 2</div>
          <div class="item">Item 3</div>
          <div class="item">Item 4</div>
          <div class="item">Item 5</div>
          <div class="item">Item 6</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.flex-box {
  display: flex;
  gap: 0.6rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  min-height: 60px;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  padding: 0.6rem 0.85rem;
  border-radius: 8px;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.3s;
}

.item:hover {
  filter: brightness(1.3);
  transform: scale(1.05);
}

.fw-nowrap       { flex-wrap: nowrap; overflow-x: auto; }
.fw-wrap         { flex-wrap: wrap; }
.fw-wrap-reverse { flex-wrap: wrap-reverse; }`,
  },

  // ─── 38. flex-flow ──────────────────────────────────────────────
  {
    property: "flex-flow",
    description: "Shorthand for flex-direction and flex-wrap. Sets both the direction of the main axis and whether items can wrap onto multiple lines.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>flex-flow — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>flex-flow</span> Property</h1>
    <p class="page-desc">
      Shorthand combining <strong>flex-direction</strong> + <strong>flex-wrap</strong> in one declaration.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">flex-flow: row nowrap — horizontal, no wrap</p>
        <div class="flex-box ff-row-nowrap">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
          <div class="item">4</div>
          <div class="item">5</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex-flow: row wrap — horizontal, wraps</p>
        <div class="flex-box ff-row-wrap">
          <div class="item">Item 1</div>
          <div class="item">Item 2</div>
          <div class="item">Item 3</div>
          <div class="item">Item 4</div>
          <div class="item">Item 5</div>
          <div class="item">Item 6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex-flow: column nowrap — vertical, no wrap</p>
        <div class="flex-box ff-col-nowrap">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex-flow: row-reverse wrap — reversed + wraps</p>
        <div class="flex-box ff-row-rev-wrap">
          <div class="item">Item 1</div>
          <div class="item">Item 2</div>
          <div class="item">Item 3</div>
          <div class="item">Item 4</div>
          <div class="item">Item 5</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong {
  color: #a5b4fc;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.flex-box {
  display: flex;
  gap: 0.6rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  min-height: 60px;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  padding: 0.6rem 0.85rem;
  border-radius: 8px;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.3s;
}

.item:hover {
  filter: brightness(1.3);
  transform: scale(1.05);
}

.ff-row-nowrap   { flex-flow: row nowrap; overflow-x: auto; }
.ff-row-wrap     { flex-flow: row wrap; }
.ff-col-nowrap   { flex-flow: column nowrap; }
.ff-row-rev-wrap { flex-flow: row-reverse wrap; }`,
  },

  // ─── 39. justify-content ────────────────────────────────────────
  {
    property: "justify-content",
    description: "Aligns flex or grid items along the main axis. Controls how space is distributed between and around items when there is extra space in the container.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>justify-content — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>justify-content</span> Property</h1>
    <p class="page-desc">
      Distributes space along the main axis (horizontal in row direction). Each row shows a different value.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">justify-content: flex-start (default)</p>
        <div class="flex-box jc-flex-start">
          <div class="item">A</div>
          <div class="item">B</div>
          <div class="item">C</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">justify-content: flex-end</p>
        <div class="flex-box jc-flex-end">
          <div class="item">A</div>
          <div class="item">B</div>
          <div class="item">C</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">justify-content: center</p>
        <div class="flex-box jc-center">
          <div class="item">A</div>
          <div class="item">B</div>
          <div class="item">C</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">justify-content: space-between</p>
        <div class="flex-box jc-space-between">
          <div class="item">A</div>
          <div class="item">B</div>
          <div class="item">C</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">justify-content: space-around</p>
        <div class="flex-box jc-space-around">
          <div class="item">A</div>
          <div class="item">B</div>
          <div class="item">C</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">justify-content: space-evenly</p>
        <div class="flex-box jc-space-evenly">
          <div class="item">A</div>
          <div class="item">B</div>
          <div class="item">C</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.flex-box {
  display: flex;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  min-height: 60px;
  align-items: center;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 800;
  font-size: 1rem;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s;
}

.item:hover {
  filter: brightness(1.3);
  transform: scale(1.1);
}

.jc-flex-start    { justify-content: flex-start; }
.jc-flex-end      { justify-content: flex-end; }
.jc-center        { justify-content: center; }
.jc-space-between { justify-content: space-between; }
.jc-space-around  { justify-content: space-around; }
.jc-space-evenly  { justify-content: space-evenly; }`,
  },

  // ─── 40. align-items ────────────────────────────────────────────
  {
    property: "align-items",
    description: "Aligns flex or grid items along the cross axis (perpendicular to the main axis). Controls vertical alignment in a row-direction flex container.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>align-items — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>align-items</span> Property</h1>
    <p class="page-desc">
      Aligns items along the cross axis. In a row container this means vertical alignment. Each box has different heights to show the effect clearly.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">align-items: stretch (default) — items fill the container height</p>
        <div class="flex-box ai-stretch">
          <div class="item">A</div>
          <div class="item tall">B</div>
          <div class="item">C</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">align-items: flex-start — items align to the top</p>
        <div class="flex-box ai-flex-start">
          <div class="item">A</div>
          <div class="item tall">B</div>
          <div class="item">C</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">align-items: center — items align to the middle</p>
        <div class="flex-box ai-center">
          <div class="item">A</div>
          <div class="item tall">B</div>
          <div class="item">C</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">align-items: flex-end — items align to the bottom</p>
        <div class="flex-box ai-flex-end">
          <div class="item">A</div>
          <div class="item tall">B</div>
          <div class="item">C</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">align-items: baseline — items align by text baseline</p>
        <div class="flex-box ai-baseline">
          <div class="item small-text">small</div>
          <div class="item big-text">BIG</div>
          <div class="item medium-text">Med</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.flex-box {
  display: flex;
  gap: 0.6rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  height: 120px;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 800;
  font-size: 0.9rem;
  width: 56px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s;
}

.item:hover {
  filter: brightness(1.3);
  transform: scale(1.05);
}

.item.tall        { height: 90px; align-self: auto; }
.item.small-text  { font-size: 0.65rem; height: 36px; }
.item.big-text    { font-size: 1.4rem; height: 70px; }
.item.medium-text { font-size: 1rem; height: 52px; }

.ai-stretch    { align-items: stretch; }
.ai-flex-start { align-items: flex-start; }
.ai-center     { align-items: center; }
.ai-flex-end   { align-items: flex-end; }
.ai-baseline   { align-items: baseline; }`,
  },

    // ─── 41. align-content ──────────────────────────────────────────
  {
    property: "align-content",
    description: "Aligns flex lines (rows) along the cross axis when there is extra space. Only works when flex-wrap is set and there are multiple lines of flex items.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>align-content — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>align-content</span> Property</h1>
    <p class="page-desc">
      Aligns multiple flex lines vertically. Requires <strong>flex-wrap: wrap</strong> and a fixed height to see the effect.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">align-content: flex-start</p>
        <div class="flex-box ac-flex-start">
          <div class="item">1</div><div class="item">2</div>
          <div class="item">3</div><div class="item">4</div>
          <div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">align-content: flex-end</p>
        <div class="flex-box ac-flex-end">
          <div class="item">1</div><div class="item">2</div>
          <div class="item">3</div><div class="item">4</div>
          <div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">align-content: center</p>
        <div class="flex-box ac-center">
          <div class="item">1</div><div class="item">2</div>
          <div class="item">3</div><div class="item">4</div>
          <div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">align-content: space-between</p>
        <div class="flex-box ac-space-between">
          <div class="item">1</div><div class="item">2</div>
          <div class="item">3</div><div class="item">4</div>
          <div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">align-content: space-around</p>
        <div class="flex-box ac-space-around">
          <div class="item">1</div><div class="item">2</div>
          <div class="item">3</div><div class="item">4</div>
          <div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">align-content: stretch (default)</p>
        <div class="flex-box ac-stretch">
          <div class="item">1</div><div class="item">2</div>
          <div class="item">3</div><div class="item">4</div>
          <div class="item">5</div><div class="item">6</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong {
  color: #a5b4fc;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.flex-box {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(38, 77, 228, 0.3);
  border-radius: 8px;
  padding: 0.5rem;
  height: 160px;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 800;
  font-size: 0.85rem;
  width: 44px;
  height: 44px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s;
}

.item:hover {
  filter: brightness(1.3);
  transform: scale(1.1);
}

.ac-flex-start    { align-content: flex-start; }
.ac-flex-end      { align-content: flex-end; }
.ac-center        { align-content: center; }
.ac-space-between { align-content: space-between; }
.ac-space-around  { align-content: space-around; }
.ac-stretch       { align-content: stretch; }
.ac-stretch .item { height: auto; flex: 1 0 40%; }`,
  },

  // ─── 42. align-self ─────────────────────────────────────────────
  {
    property: "align-self",
    description: "Overrides the align-items value for a specific flex or grid item. Allows individual items to have different cross-axis alignment than the rest.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>align-self — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>align-self</span> Property</h1>
    <p class="page-desc">
      Overrides <strong>align-items</strong> for a single item. Each colored box below has its own align-self value.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">All items with different align-self values in one container</p>
        <div class="flex-box">
          <div class="item as-auto">auto</div>
          <div class="item as-flex-start">flex-start</div>
          <div class="item as-center">center</div>
          <div class="item as-flex-end">flex-end</div>
          <div class="item as-stretch">stretch</div>
          <div class="item as-baseline">baseline</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — push one item to the bottom of a card</p>
        <div class="card-row">
          <div class="card-item">
            <p class="card-title">Course 1</p>
            <p class="card-desc">Short description here.</p>
            <button class="card-btn">Start</button>
          </div>
          <div class="card-item">
            <p class="card-title">Course 2</p>
            <p class="card-desc">A much longer description that takes up more vertical space in the card layout.</p>
            <button class="card-btn">Start</button>
          </div>
          <div class="card-item">
            <p class="card-title">Course 3</p>
            <p class="card-desc">Medium length description for this card.</p>
            <button class="card-btn">Start</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong {
  color: #a5b4fc;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.flex-box {
  display: flex;
  gap: 0.6rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  height: 160px;
  align-items: center;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.68rem;
  padding: 0.5rem 0.6rem;
  border-radius: 8px;
  text-align: center;
  flex: 1;
  transition: all 0.3s;
}

.item:hover {
  filter: brightness(1.3);
}

.as-auto       { align-self: auto; }
.as-flex-start { align-self: flex-start; background: linear-gradient(135deg, #f97316, #fb923c); }
.as-center     { align-self: center;     background: linear-gradient(135deg, #22c55e, #4ade80); }
.as-flex-end   { align-self: flex-end;   background: linear-gradient(135deg, #a855f7, #c084fc); }
.as-stretch    { align-self: stretch;    background: linear-gradient(135deg, #ec4899, #f472b6); }
.as-baseline   { align-self: baseline;   background: linear-gradient(135deg, #14b8a6, #2dd4bf); }

.card-row {
  display: flex;
  gap: 0.75rem;
  align-items: stretch;
}

.card-item {
  flex: 1;
  background: rgba(38, 77, 228, 0.12);
  border: 1px solid rgba(38, 77, 228, 0.3);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-title {
  font-size: 0.88rem;
  font-weight: 700;
  color: #a5b4fc;
}

.card-desc {
  font-size: 0.78rem;
  color: #6b7280;
  line-height: 1.5;
  flex: 1;
}

.card-btn {
  align-self: flex-start;
  background: linear-gradient(90deg, #264de4, #2965f1);
  color: #fff;
  border: none;
  padding: 0.45rem 1rem;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: auto;
  transition: all 0.3s;
}

.card-btn:hover {
  filter: brightness(1.2);
  transform: translateY(-2px);
}`,
  },

  // ─── 43. flex ───────────────────────────────────────────────────
  {
    property: "flex",
    description: "Shorthand for flex-grow, flex-shrink, and flex-basis. Controls how a flex item grows, shrinks, and what its initial size is within the flex container.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>flex — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>flex</span> Property</h1>
    <p class="page-desc">
      Shorthand for <strong>flex-grow flex-shrink flex-basis</strong>. Controls how items size themselves relative to each other.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">flex: 1 — all items grow equally</p>
        <div class="flex-box">
          <div class="item f-1">flex: 1</div>
          <div class="item f-1">flex: 1</div>
          <div class="item f-1">flex: 1</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex: 2 vs flex: 1 — proportional sizing</p>
        <div class="flex-box">
          <div class="item f-1">flex: 1</div>
          <div class="item f-2">flex: 2</div>
          <div class="item f-1">flex: 1</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex: 0 0 auto — fixed size, no grow or shrink</p>
        <div class="flex-box">
          <div class="item f-fixed">120px fixed</div>
          <div class="item f-1">flex: 1 (fills rest)</div>
          <div class="item f-fixed">120px fixed</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex: none — equivalent to 0 0 auto</p>
        <div class="flex-box">
          <div class="item f-none">flex: none</div>
          <div class="item f-1">flex: 1</div>
          <div class="item f-none">flex: none</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — sidebar + main layout</p>
        <div class="layout">
          <div class="sidebar">Sidebar<br/><small>flex: 0 0 140px</small></div>
          <div class="main">Main Content<br/><small>flex: 1</small></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong {
  color: #a5b4fc;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.flex-box {
  display: flex;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  padding: 0.75rem 0.5rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.item:hover {
  filter: brightness(1.3);
}

.f-1     { flex: 1; }
.f-2     { flex: 2; background: linear-gradient(135deg, #f97316, #fb923c); }
.f-fixed { flex: 0 0 120px; background: linear-gradient(135deg, #a855f7, #c084fc); }
.f-none  { flex: none; background: linear-gradient(135deg, #22c55e, #4ade80); }

.layout {
  display: flex;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.6rem;
  min-height: 80px;
}

.sidebar {
  flex: 0 0 140px;
  background: linear-gradient(135deg, #a855f7, #c084fc);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
  line-height: 1.6;
}

.main {
  flex: 1;
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
  line-height: 1.6;
}

small {
  font-size: 0.68rem;
  opacity: 0.8;
  font-family: "Courier New", monospace;
}`,
  },

  // ─── 44. flex-grow ──────────────────────────────────────────────
  {
    property: "flex-grow",
    description: "Specifies how much a flex item will grow relative to other flex items when there is extra space. A value of 0 means no growth; higher values mean more growth.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>flex-grow — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>flex-grow</span> Property</h1>
    <p class="page-desc">
      Controls how much an item grows to fill available space. Higher number = more space claimed.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">flex-grow: 0 — no growth (default)</p>
        <div class="flex-box">
          <div class="item fg-0">grow: 0</div>
          <div class="item fg-0">grow: 0</div>
          <div class="item fg-0">grow: 0</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex-grow: 1 — all items grow equally</p>
        <div class="flex-box">
          <div class="item fg-1">grow: 1</div>
          <div class="item fg-1">grow: 1</div>
          <div class="item fg-1">grow: 1</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex-grow: 1, 2, 1 — middle gets double space</p>
        <div class="flex-box">
          <div class="item fg-1">grow: 1</div>
          <div class="item fg-2">grow: 2</div>
          <div class="item fg-1">grow: 1</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex-grow: 1, 3, 1 — middle gets triple space</p>
        <div class="flex-box">
          <div class="item fg-1">grow: 1</div>
          <div class="item fg-3">grow: 3</div>
          <div class="item fg-1">grow: 1</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — nav with growing search bar</p>
        <div class="nav-bar">
          <div class="nav-logo">LOGO</div>
          <div class="nav-search">🔍 Search...</div>
          <div class="nav-btn">Login</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.flex-box {
  display: flex;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  padding: 0.75rem 0.5rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.item:hover {
  filter: brightness(1.3);
}

.fg-0 { flex-grow: 0; padding: 0.75rem 1.25rem; }
.fg-1 { flex-grow: 1; }
.fg-2 { flex-grow: 2; background: linear-gradient(135deg, #f97316, #fb923c); }
.fg-3 { flex-grow: 3; background: linear-gradient(135deg, #a855f7, #c084fc); }

.nav-bar {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 0.6rem;
}

.nav-logo {
  flex-grow: 0;
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 900;
  font-size: 0.82rem;
  padding: 0.5rem 0.85rem;
  border-radius: 6px;
  white-space: nowrap;
}

.nav-search {
  flex-grow: 1;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #6b7280;
  font-size: 0.82rem;
  padding: 0.5rem 0.85rem;
  border-radius: 6px;
}

.nav-btn {
  flex-grow: 0;
  background: linear-gradient(135deg, #22c55e, #4ade80);
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  padding: 0.5rem 0.85rem;
  border-radius: 6px;
  white-space: nowrap;
  cursor: pointer;
}`,
  },

  // ─── 45. flex-shrink ────────────────────────────────────────────
  {
    property: "flex-shrink",
    description: "Specifies how much a flex item will shrink relative to other flex items when there is not enough space. A value of 0 prevents shrinking.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>flex-shrink — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>flex-shrink</span> Property</h1>
    <p class="page-desc">
      Controls how much an item shrinks when the container is too small. Higher number = shrinks more. 0 = never shrinks.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">flex-shrink: 1 (default) — all shrink equally</p>
        <div class="flex-box narrow">
          <div class="item fs-1">shrink: 1</div>
          <div class="item fs-1">shrink: 1</div>
          <div class="item fs-1">shrink: 1</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex-shrink: 0 — this item refuses to shrink</p>
        <div class="flex-box narrow">
          <div class="item fs-1">shrink: 1</div>
          <div class="item fs-0">shrink: 0 (fixed)</div>
          <div class="item fs-1">shrink: 1</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex-shrink: 1, 3, 1 — middle shrinks 3x more</p>
        <div class="flex-box narrow">
          <div class="item fs-1">shrink: 1</div>
          <div class="item fs-3">shrink: 3</div>
          <div class="item fs-1">shrink: 1</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — fixed icon + shrinkable label</p>
        <div class="flex-box narrow">
                  <div class="tag-icon">🏷️</div>
          <div class="tag-label">This is a very long label that will shrink</div>
          <div class="tag-count">42</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.flex-box {
  display: flex;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.narrow {
  width: 100%;
  max-width: 400px;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  padding: 0.75rem 0.5rem;
  border-radius: 8px;
  text-align: center;
  flex-basis: 160px;
  transition: all 0.3s;
  min-width: 0;
}

.item:hover {
  filter: brightness(1.3);
}

.fs-0 {
  flex-shrink: 0;
  background: linear-gradient(135deg, #22c55e, #4ade80);
  white-space: nowrap;
}

.fs-1 { flex-shrink: 1; }

.fs-3 {
  flex-shrink: 3;
  background: linear-gradient(135deg, #f97316, #fb923c);
}

.tag-icon {
  flex-shrink: 0;
  background: rgba(38, 77, 228, 0.3);
  border: 1px solid rgba(38, 77, 228, 0.5);
  color: #fff;
  font-size: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tag-label {
  flex-shrink: 1;
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 600;
  font-size: 0.78rem;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}

.tag-count {
  flex-shrink: 0;
  background: linear-gradient(135deg, #a855f7, #c084fc);
  color: #fff;
  font-weight: 800;
  font-size: 0.82rem;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  white-space: nowrap;
}`,
  },

    // ─── 46. flex-basis ─────────────────────────────────────────────
  {
    property: "flex-basis",
    description: "Sets the initial main size of a flex item before free space is distributed. Acts like width in a row container and height in a column container.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>flex-basis — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>flex-basis</span> Property</h1>
    <p class="page-desc">
      Sets the starting size of a flex item before growing or shrinking. Think of it as the <strong>default width</strong> of the item.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">flex-basis: auto (default) — size based on content</p>
        <div class="flex-box">
          <div class="item fb-auto">auto</div>
          <div class="item fb-auto">auto — longer text</div>
          <div class="item fb-auto">auto</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex-basis: 100px — fixed starting size</p>
        <div class="flex-box">
          <div class="item fb-100">100px</div>
          <div class="item fb-100">100px</div>
          <div class="item fb-100">100px</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex-basis: 200px, 100px, 150px — different starting sizes</p>
        <div class="flex-box">
          <div class="item fb-200">200px</div>
          <div class="item fb-100">100px</div>
          <div class="item fb-150">150px</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex-basis: 33% — percentage of container</p>
        <div class="flex-box">
          <div class="item fb-33p">33%</div>
          <div class="item fb-33p">33%</div>
          <div class="item fb-33p">33%</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">flex-basis: 0 — start from zero, grow fills all space</p>
        <div class="flex-box">
          <div class="item fb-0-g1">basis:0 grow:1</div>
          <div class="item fb-0-g2">basis:0 grow:2</div>
          <div class="item fb-0-g1">basis:0 grow:1</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong {
  color: #a5b4fc;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.flex-box {
  display: flex;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.6rem;
  flex-wrap: wrap;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  padding: 0.75rem 0.5rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item:hover {
  filter: brightness(1.3);
}

.fb-auto  { flex-basis: auto; }
.fb-100   { flex-basis: 100px; }
.fb-150   { flex-basis: 150px; background: linear-gradient(135deg, #a855f7, #c084fc); }
.fb-200   { flex-basis: 200px; background: linear-gradient(135deg, #f97316, #fb923c); }
.fb-33p   { flex-basis: 33%; }
.fb-0-g1  { flex-basis: 0; flex-grow: 1; }
.fb-0-g2  { flex-basis: 0; flex-grow: 2; background: linear-gradient(135deg, #22c55e, #4ade80); }`,
  },

  // ─── 47. order ──────────────────────────────────────────────────
  {
    property: "order",
    description: "Sets the order in which a flex or grid item appears in its container. Items with lower order values appear first. Default is 0.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>order — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>order</span> Property</h1>
    <p class="page-desc">
      Changes the visual order of flex items without changing the HTML source order. Lower values appear first.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">Default order — HTML source order (1, 2, 3, 4, 5)</p>
        <div class="flex-box">
          <div class="item c1">1 (order:0)</div>
          <div class="item c2">2 (order:0)</div>
          <div class="item c3">3 (order:0)</div>
          <div class="item c4">4 (order:0)</div>
          <div class="item c5">5 (order:0)</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Custom order — visually reordered using order property</p>
        <div class="flex-box">
          <div class="item c1 o-3">HTML:1 order:3</div>
          <div class="item c2 o-1">HTML:2 order:1</div>
          <div class="item c3 o-5">HTML:3 order:5</div>
          <div class="item c4 o-2">HTML:4 order:2</div>
          <div class="item c5 o-4">HTML:5 order:4</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">order: -1 — moves item to the very beginning</p>
        <div class="flex-box">
          <div class="item c1">First</div>
          <div class="item c2">Second</div>
          <div class="item c3 o-neg">order: -1 (jumps first)</div>
          <div class="item c4">Fourth</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — mobile layout reorder (sidebar after content)</p>
        <div class="layout-box">
          <div class="main-content">Main Content (HTML first)</div>
          <div class="sidebar-content">Sidebar (HTML second, order: -1 on mobile)</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.flex-box {
  display: flex;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  color: #fff;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.75rem 0.5rem;
  border-radius: 8px;
  text-align: center;
  flex: 1;
  transition: all 0.3s;
}

.item:hover {
  filter: brightness(1.3);
  transform: translateY(-2px);
}

.c1 { background: linear-gradient(135deg, #264de4, #2965f1); }
.c2 { background: linear-gradient(135deg, #f97316, #fb923c); }
.c3 { background: linear-gradient(135deg, #22c55e, #4ade80); }
.c4 { background: linear-gradient(135deg, #a855f7, #c084fc); }
.c5 { background: linear-gradient(135deg, #ec4899, #f472b6); }

.o-1   { order: 1; }
.o-2   { order: 2; }
.o-3   { order: 3; }
.o-4   { order: 4; }
.o-5   { order: 5; }
.o-neg { order: -1; }

.layout-box {
  display: flex;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.main-content {
  flex: 1;
  order: 2;
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.sidebar-content {
  flex: 0 0 160px;
  order: 1;
  background: linear-gradient(135deg, #a855f7, #c084fc);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}`,
  },

  // ─── 48. gap ────────────────────────────────────────────────────
  {
    property: "gap",
    description: "Sets the spacing between flex or grid items. Shorthand for row-gap and column-gap. Does not add space on the outer edges of the container.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>gap — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>gap</span> Property</h1>
    <p class="page-desc">
      Adds space between flex or grid items. Unlike margin, it only adds space <strong>between</strong> items — never on the outside edges.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">gap: 0 — no space between items</p>
        <div class="flex-box g-0">
          <div class="item">A</div>
          <div class="item">B</div>
          <div class="item">C</div>
          <div class="item">D</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">gap: 8px</p>
        <div class="flex-box g-8">
          <div class="item">A</div>
          <div class="item">B</div>
          <div class="item">C</div>
          <div class="item">D</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">gap: 24px</p>
        <div class="flex-box g-24">
          <div class="item">A</div>
          <div class="item">B</div>
          <div class="item">C</div>
          <div class="item">D</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">gap: 8px 32px — row-gap 8px, column-gap 32px (grid)</p>
        <div class="grid-box g-8-32">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
          <div class="item">4</div>
          <div class="item">5</div>
          <div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — card grid with gap: 1.5rem</p>
        <div class="card-grid">
          <div class="card">Card 1</div>
          <div class="card">Card 2</div>
          <div class="card">Card 3</div>
          <div class="card">Card 4</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong {
  color: #a5b4fc;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.flex-box {
  display: flex;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.grid-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 800;
  font-size: 0.9rem;
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
  flex: 1;
  transition: all 0.3s;
}

.item:hover {
  filter: brightness(1.3);
  transform: scale(1.05);
}

.g-0    { gap: 0; }
.g-8    { gap: 8px; }
.g-24   { gap: 24px; }
.g-8-32 { gap: 8px 32px; }

.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.card {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 1.25rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s;
}

.card:hover {
  filter: brightness(1.2);
  transform: translateY(-3px);
}`,
  },

  // ─── 49. row-gap ────────────────────────────────────────────────
  {
    property: "row-gap",
    description: "Sets the gap between rows in a flex or grid container. Only affects the vertical spacing between rows, not columns.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>row-gap — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>row-gap</span> Property</h1>
    <p class="page-desc">
      Controls the vertical space between rows only. Column spacing is unaffected.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">row-gap: 0 — rows touch each other</p>
        <div class="grid-box rg-0">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">row-gap: 12px</p>
        <div class="grid-box rg-12">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">row-gap: 32px — large vertical gap between rows</p>
        <div class="grid-box rg-32">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">row-gap in flex-wrap — space between wrapped rows</p>
        <div class="flex-wrap-box rg-16">
          <div class="item-sm">Item 1</div>
          <div class="item-sm">Item 2</div>
          <div class="item-sm">Item 3</div>
          <div class="item-sm">Item 4</div>
          <div class="item-sm">Item 5</div>
          <div class="item-sm">Item 6</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 800;
  font-size: 0.9rem;
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.item:hover {
  filter: brightness(1.3);
  transform: scale(1.05);
}

.rg-0  { row-gap: 0; }
.rg-12 { row-gap: 12px; }
.rg-32 { row-gap: 32px; }

.flex-wrap-box {
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.rg-16 { row-gap: 16px; }

.item-sm {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  white-space: nowrap;
  transition: all 0.3s;
}

.item-sm:hover {
  filter: brightness(1.3);
}`,
  },

  // ─── 50. column-gap ─────────────────────────────────────────────
  {
    property: "column-gap",
    description: "Sets the gap between columns in a flex or grid container. Only affects horizontal spacing between columns, not rows.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>column-gap — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>column-gap</span> Property</h1>
    <p class="page-desc">
      Controls the horizontal space between columns only. Row spacing is unaffected.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">column-gap: 0 — columns touch each other</p>
        <div class="grid-box cg-0">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">column-gap: 12px</p>
        <div class="grid-box cg-12">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">column-gap: 40px — large horizontal gap</p>
        <div class="grid-box cg-40">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">column-gap in flex row — space between flex items</p>
        <div class="flex-box cg-20">
          <div class="item">Flex A</div>
          <div class="item">Flex B</div>
          <div class="item">Flex C</div>
          <div class="item">Flex D</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — multi-column text layout</p>
        <div class="multi-col">
          CSS column-gap controls the space between text columns in a multi-column layout.
          This is very useful for magazine-style layouts and newspaper-style content.
          The column-gap property ensures readable spacing between each column of text.
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
    padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.78rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 800;
  font-size: 0.9rem;
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.item:hover {
  filter: brightness(1.3);
  transform: scale(1.05);
}

.cg-0  { column-gap: 0; }
.cg-12 { column-gap: 12px; }
.cg-40 { column-gap: 40px; }

.flex-box {
  display: flex;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.cg-20 { column-gap: 20px; }

.flex-box .item {
  flex: 1;
}

.multi-col {
  column-count: 3;
  column-gap: 2rem;
  column-rule: 1px solid rgba(38, 77, 228, 0.4);
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.82rem;
  color: #a5b4fc;
  line-height: 1.7;
}`,
  },

    // ─── 51. grid-template-columns ──────────────────────────────────
  {
    property: "grid-template-columns",
    description: "Defines the number and size of columns in a CSS Grid layout. Accepts fixed sizes, fractions (fr), percentages, auto, repeat(), and minmax().",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>grid-template-columns — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>grid-template-columns</span></h1>
    <p class="page-desc">
      Defines how many columns a grid has and how wide each one is. The most powerful grid property.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">grid-template-columns: 1fr 1fr 1fr — three equal columns</p>
        <div class="grid gtc-3equal">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-template-columns: repeat(4, 1fr) — four equal columns</p>
        <div class="grid gtc-4equal">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
          <div class="item">7</div><div class="item">8</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-template-columns: 200px 1fr 1fr — fixed + flexible</p>
        <div class="grid gtc-fixed-flex">
          <div class="item">200px</div>
          <div class="item">1fr</div>
          <div class="item">1fr</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-template-columns: 1fr 2fr 1fr — proportional</p>
        <div class="grid gtc-proportional">
          <div class="item">1fr</div>
          <div class="item">2fr</div>
          <div class="item">1fr</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)) — responsive</p>
        <div class="grid gtc-responsive">
          <div class="item">A</div><div class="item">B</div><div class="item">C</div>
          <div class="item">D</div><div class="item">E</div><div class="item">F</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid {
  display: grid;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  padding: 0.75rem 0.5rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.item:hover {
  filter: brightness(1.3);
  transform: scale(1.03);
}

.gtc-3equal      { grid-template-columns: 1fr 1fr 1fr; }
.gtc-4equal      { grid-template-columns: repeat(4, 1fr); }
.gtc-fixed-flex  { grid-template-columns: 200px 1fr 1fr; }
.gtc-proportional{ grid-template-columns: 1fr 2fr 1fr; }
.gtc-responsive  { grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); }`,
  },

  // ─── 52. grid-template-rows ─────────────────────────────────────
  {
    property: "grid-template-rows",
    description: "Defines the number and size of rows in a CSS Grid layout. Works the same as grid-template-columns but for the vertical axis.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>grid-template-rows — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>grid-template-rows</span></h1>
    <p class="page-desc">
      Defines the height of each row in a grid. Without it, rows size automatically to fit content.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">grid-template-rows: auto — rows size to content (default)</p>
        <div class="grid gtr-auto">
          <div class="item">Row 1 — auto height</div>
          <div class="item tall">Row 2 — taller content makes this row taller</div>
          <div class="item">Row 3 — auto height</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-template-rows: 60px 120px 60px — fixed heights</p>
        <div class="grid gtr-fixed">
          <div class="item">60px</div>
          <div class="item">120px</div>
          <div class="item">60px</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-template-rows: 1fr 2fr 1fr — proportional</p>
        <div class="grid gtr-proportional">
          <div class="item">1fr</div>
          <div class="item">2fr</div>
          <div class="item">1fr</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — page layout with header, main, footer</p>
        <div class="page-layout">
          <div class="header-area">Header (80px)</div>
          <div class="main-area">Main (1fr — fills remaining)</div>
          <div class="footer-area">Footer (60px)</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.item:hover {
  filter: brightness(1.3);
}

.item.tall {
  padding: 1.5rem 1rem;
}

.gtr-auto         { grid-template-rows: auto; }
.gtr-fixed        { grid-template-rows: 60px 120px 60px; }
.gtr-proportional {
  grid-template-rows: 1fr 2fr 1fr;
  height: 240px;
}

.page-layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 60px;
  gap: 0.5rem;
  height: 280px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.header-area {
  background: linear-gradient(135deg, #264de4, #2965f1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.82rem;
  color: #fff;
}

.main-area {
  background: linear-gradient(135deg, #22c55e, #4ade80);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.82rem;
  color: #fff;
}

.footer-area {
  background: linear-gradient(135deg, #a855f7, #c084fc);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.82rem;
  color: #fff;
}`,
  },

  // ─── 53. grid-template-areas ────────────────────────────────────
  {
    property: "grid-template-areas",
    description: "Defines named grid areas using a visual ASCII-art-like syntax. Each string represents a row, and each word in the string represents a cell. Use a dot (.) for empty cells.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>grid-template-areas — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>grid-template-areas</span></h1>
    <p class="page-desc">
      Name your grid areas visually. Each string is a row, each word is a cell. Use <strong>grid-area</strong> on children to place them.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">Classic page layout — header, sidebar, main, footer</p>
        <div class="layout-1">
          <div class="area header">header</div>
          <div class="area sidebar">sidebar</div>
          <div class="area main">main</div>
          <div class="area footer">footer</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Holy grail layout — header, nav, content, aside, footer</p>
        <div class="layout-2">
          <div class="area hdr">header</div>
          <div class="area nav">nav</div>
          <div class="area content">content</div>
          <div class="area aside">aside</div>
          <div class="area ftr">footer</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">With empty cells using dot (.)</p>
        <div class="layout-3">
          <div class="area logo">logo</div>
          <div class="area search">search</div>
          <div class="area body-content">body</div>
          <div class="area bottom">bottom</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong {
  color: #a5b4fc;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.area {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.82rem;
  color: #fff;
  border-radius: 8px;
  padding: 0.75rem;
  transition: all 0.3s;
}

.area:hover {
  filter: brightness(1.2);
}

/* Layout 1 */
.layout-1 {
  display: grid;
  grid-template-columns: 160px 1fr;
  grid-template-rows: 50px 120px 50px;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.header  { grid-area: header;  background: linear-gradient(135deg, #264de4, #2965f1); }
.sidebar { grid-area: sidebar; background: linear-gradient(135deg, #a855f7, #c084fc); }
.main    { grid-area: main;    background: linear-gradient(135deg, #22c55e, #4ade80); }
.footer  { grid-area: footer;  background: linear-gradient(135deg, #f97316, #fb923c); }

/* Layout 2 */
.layout-2 {
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  grid-template-rows: 50px 120px 50px;
  grid-template-areas:
    "hdr     hdr     hdr"
    "nav     content aside"
    "ftr     ftr     ftr";
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.hdr     { grid-area: hdr;     background: linear-gradient(135deg, #264de4, #2965f1); }
.nav     { grid-area: nav;     background: linear-gradient(135deg, #a855f7, #c084fc); }
.content { grid-area: content; background: linear-gradient(135deg, #22c55e, #4ade80); }
.aside   { grid-area: aside;   background: linear-gradient(135deg, #ec4899, #f472b6); }
.ftr     { grid-area: ftr;     background: linear-gradient(135deg, #f97316, #fb923c); }

/* Layout 3 — with empty cells */
.layout-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50px 120px 50px;
  grid-template-areas:
    "logo    .       search"
    "body-content body-content body-content"
    ".       bottom  .";
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.logo         { grid-area: logo;         background: linear-gradient(135deg, #264de4, #2965f1); }
.search       { grid-area: search;       background: linear-gradient(135deg, #22c55e, #4ade80); }
.body-content { grid-area: body-content; background: linear-gradient(135deg, #a855f7, #c084fc); }
.bottom       { grid-area: bottom;       background: linear-gradient(135deg, #f97316, #fb923c); }`,
  },

  // ─── 54. grid-template ──────────────────────────────────────────
  {
    property: "grid-template",
    description: "Shorthand for grid-template-rows, grid-template-columns, and grid-template-areas in a single declaration.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>grid-template — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>grid-template</span></h1>
    <p class="page-desc">
      Shorthand combining <strong>grid-template-rows</strong>, <strong>grid-template-columns</strong>, and <strong>grid-template-areas</strong> in one declaration.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">grid-template: rows / columns — simple shorthand</p>
        <div class="grid gt-simple">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-template with named areas — full shorthand</p>
        <div class="layout gt-named">
          <div class="area hd">Header</div>
          <div class="area sd">Sidebar</div>
          <div class="area mn">Main</div>
          <div class="area ft">Footer</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-template: 80px 1fr 60px / 200px 1fr — page layout</p>
        <div class="layout gt-page">
          <div class="area pg-header">Header</div>
          <div class="area pg-sidebar">Sidebar</div>
          <div class="area pg-main">Main Content</div>
          <div class="area pg-footer">Footer</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong {
  color: #a5b4fc;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid {
  display: grid;
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.layout {
  display: grid;
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.item:hover { filter: brightness(1.3); transform: scale(1.03); }

.area {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.82rem;
  color: #fff;
  border-radius: 8px;
  padding: 0.75rem;
  transition: all 0.3s;
}

.area:hover { filter: brightness(1.2); }

/* Simple shorthand: rows / columns */
.gt-simple {
  grid-template: auto auto / repeat(3, 1fr);
}

/* Named areas shorthand */
.gt-named {
  grid-template:
    "hd hd"  60px
    "sd mn"  120px
    / 140px 1fr;
}

.hd { grid-area: hd; background: linear-gradient(135deg, #264de4, #2965f1); }
.sd { grid-area: sd; background: linear-gradient(135deg, #a855f7, #c084fc); }
.mn { grid-area: mn; background: linear-gradient(135deg, #22c55e, #4ade80); }
.ft { grid-area: ft; background: linear-gradient(135deg, #f97316, #fb923c); }

/* Page layout shorthand */
.gt-page {
  grid-template: 60px 1fr 50px / 160px 1fr;
  height: 280px;
}

.pg-header  {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, #264de4, #2965f1);
}
.pg-sidebar { background: linear-gradient(135deg, #a855f7, #c084fc); }
.pg-main    { background: linear-gradient(135deg, #22c55e, #4ade80); }
.pg-footer  {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, #f97316, #fb923c);
}`,
  },

  // ─── 55. grid-column-gap ────────────────────────────────────────
  {
    property: "grid-column-gap",
    description: "Sets the gap between grid columns. This is the older name for column-gap. Modern CSS uses column-gap instead, but grid-column-gap still works for backward compatibility.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>grid-column-gap — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>grid-column-gap</span></h1>
    <p class="page-desc">
      Legacy name for <strong>column-gap</strong> in grid layouts. Sets horizontal spacing between grid columns. Use <strong>column-gap</strong> in modern CSS.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">grid-column-gap: 0 — columns touch</p>
        <div class="grid gcg-0">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-column-gap: 16px</p>
        <div class="grid gcg-16">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-column-gap: 40px — wide column gap</p>
        <div class="grid gcg-40">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Modern equivalent — column-gap: 20px (preferred)</p>
        <div class="grid modern-cg">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="info-box">
        <p class="info-title">⚠️ Deprecation Note</p>
        <p class="info-text">
          <code>grid-column-gap</code> is the old name. Use <code>column-gap</code> in modern CSS.
          Both work the same way — the browser maps them to the same property.
        </p>
              </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #264de4;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong {
  color: #a5b4fc;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.item:hover {
  filter: brightness(1.3);
  transform: scale(1.03);
}

.gcg-0  { grid-column-gap: 0; }
.gcg-16 { grid-column-gap: 16px; }
.gcg-40 { grid-column-gap: 40px; }

.modern-cg { column-gap: 20px; }

.info-box {
  background: rgba(249, 115, 22, 0.1);
  border: 1px solid rgba(249, 115, 22, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
}

.info-title {
  font-size: 0.88rem;
  font-weight: 700;
  color: #fb923c;
  margin-bottom: 0.5rem;
}

.info-text {
  font-size: 0.82rem;
  color: #9ca3af;
  line-height: 1.6;
}

.info-text code {
  background: rgba(249, 115, 22, 0.15);
  color: #fb923c;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-family: "Courier New", monospace;
  font-size: 0.82rem;
}`,
  },

    // ─── 56. grid-row-gap ───────────────────────────────────────────
  {
    property: "grid-row-gap",
    description: "Sets the gap between grid rows. This is the legacy name for row-gap. Modern CSS uses row-gap instead, but grid-row-gap still works for backward compatibility.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>grid-row-gap — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>grid-row-gap</span></h1>
    <p class="page-desc">
      Legacy name for <strong>row-gap</strong> in grid layouts. Sets vertical spacing between grid rows. Use <strong>row-gap</strong> in modern CSS.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">grid-row-gap: 0 — rows touch each other</p>
        <div class="grid grg-0">
          <div class="item">Row 1 Col 1</div><div class="item">Row 1 Col 2</div>
          <div class="item">Row 2 Col 1</div><div class="item">Row 2 Col 2</div>
          <div class="item">Row 3 Col 1</div><div class="item">Row 3 Col 2</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-row-gap: 16px</p>
        <div class="grid grg-16">
          <div class="item">Row 1 Col 1</div><div class="item">Row 1 Col 2</div>
          <div class="item">Row 2 Col 1</div><div class="item">Row 2 Col 2</div>
          <div class="item">Row 3 Col 1</div><div class="item">Row 3 Col 2</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-row-gap: 40px — large row gap</p>
        <div class="grid grg-40">
          <div class="item">Row 1 Col 1</div><div class="item">Row 1 Col 2</div>
          <div class="item">Row 2 Col 1</div><div class="item">Row 2 Col 2</div>
          <div class="item">Row 3 Col 1</div><div class="item">Row 3 Col 2</div>
        </div>
      </div>

      <div class="info-box">
        <p class="info-title">⚠️ Deprecation Note</p>
        <p class="info-text">
          <code>grid-row-gap</code> is the old name. Use <code>row-gap</code> in modern CSS.
          Both work identically — the browser maps them to the same property.
        </p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong { color: #a5b4fc; }

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.item:hover { filter: brightness(1.3); transform: scale(1.03); }

.grg-0  { grid-row-gap: 0; }
.grg-16 { grid-row-gap: 16px; }
.grg-40 { grid-row-gap: 40px; }

.info-box {
  background: rgba(249,115,22,0.1);
  border: 1px solid rgba(249,115,22,0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
}

.info-title {
  font-size: 0.88rem;
  font-weight: 700;
  color: #fb923c;
  margin-bottom: 0.5rem;
}

.info-text {
  font-size: 0.82rem;
  color: #9ca3af;
  line-height: 1.6;
}

.info-text code {
  background: rgba(249,115,22,0.15);
  color: #fb923c;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-family: "Courier New", monospace;
}`,
  },

  // ─── 57. grid-gap ───────────────────────────────────────────────
  {
    property: "grid-gap",
    description: "Legacy shorthand for grid-row-gap and grid-column-gap. Sets both row and column gaps in a grid. Modern CSS uses the gap property instead.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>grid-gap — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>grid-gap</span></h1>
    <p class="page-desc">
      Legacy shorthand for <strong>row-gap + column-gap</strong>. Sets spacing between all grid cells. Modern CSS uses <strong>gap</strong> instead.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">grid-gap: 0 — no spacing</p>
        <div class="grid gg-0">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
          <div class="item">7</div><div class="item">8</div><div class="item">9</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-gap: 12px — equal row and column gap</p>
        <div class="grid gg-12">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
          <div class="item">7</div><div class="item">8</div><div class="item">9</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-gap: 8px 32px — row-gap 8px, column-gap 32px</p>
        <div class="grid gg-8-32">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
          <div class="item">7</div><div class="item">8</div><div class="item">9</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Modern equivalent — gap: 16px (preferred)</p>
        <div class="grid modern-gap">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
          <div class="item">7</div><div class="item">8</div><div class="item">9</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong { color: #a5b4fc; }

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 800;
  font-size: 0.9rem;
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.item:hover { filter: brightness(1.3); transform: scale(1.05); }

.gg-0      { grid-gap: 0; }
.gg-12     { grid-gap: 12px; }
.gg-8-32   { grid-gap: 8px 32px; }
.modern-gap { gap: 16px; }`,
  },

  // ─── 58. justify-items ──────────────────────────────────────────
  {
    property: "justify-items",
    description: "Aligns grid items along the inline (horizontal) axis within their grid cell. Applies to all items in the grid container. Can be overridden per item with justify-self.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>justify-items — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>justify-items</span></h1>
    <p class="page-desc">
      Aligns all grid items horizontally within their cells. Each grid below shows a different value — items are smaller than their cells so you can see the alignment.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">justify-items: start — items align to left of cell</p>
        <div class="grid ji-start">
          <div class="item">A</div><div class="item">B</div><div class="item">C</div>
          <div class="item">D</div><div class="item">E</div><div class="item">F</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">justify-items: end — items align to right of cell</p>
        <div class="grid ji-end">
          <div class="item">A</div><div class="item">B</div><div class="item">C</div>
          <div class="item">D</div><div class="item">E</div><div class="item">F</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">justify-items: center — items centered in cell</p>
        <div class="grid ji-center">
          <div class="item">A</div><div class="item">B</div><div class="item">C</div>
          <div class="item">D</div><div class="item">E</div><div class="item">F</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">justify-items: stretch (default) — items fill cell width</p>
        <div class="grid ji-stretch">
          <div class="item">A</div><div class="item">B</div><div class="item">C</div>
          <div class="item">D</div><div class="item">E</div><div class="item">F</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 800;
  font-size: 0.9rem;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
  width: fit-content;
}

.item:hover { filter: brightness(1.3); }

.ji-start   { justify-items: start; }
.ji-end     { justify-items: end; }
.ji-center  { justify-items: center; }
.ji-stretch { justify-items: stretch; }
.ji-stretch .item { width: auto; }`,
  },

  // ─── 59. place-items ────────────────────────────────────────────
  {
    property: "place-items",
    description: "Shorthand for align-items and justify-items in a grid container. Sets both vertical and horizontal alignment of grid items within their cells in one declaration.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>place-items — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>place-items</span></h1>
    <p class="page-desc">
      Shorthand for <strong>align-items + justify-items</strong>. One value sets both axes. Two values set align then justify.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">place-items: start</p>
        <div class="grid pi-start">
          <div class="item">A</div><div class="item">B</div>
          <div class="item">C</div><div class="item">D</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">place-items: end</p>
        <div class="grid pi-end">
          <div class="item">A</div><div class="item">B</div>
          <div class="item">C</div><div class="item">D</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">place-items: center</p>
        <div class="grid pi-center">
          <div class="item">A</div><div class="item">B</div>
          <div class="item">C</div><div class="item">D</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">place-items: stretch</p>
        <div class="grid pi-stretch">
          <div class="item">A</div><div class="item">B</div>
          <div class="item">C</div><div class="item">D</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">place-items: center start</p>
        <div class="grid pi-center-start">
          <div class="item">A</div><div class="item">B</div>
          <div class="item">C</div><div class="item">D</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — icon grid centered</p>
        <div class="icon-grid">
          <div class="icon-cell">🎨</div>
          <div class="icon-cell">⚡</div>
          <div class="icon-cell">🚀</div>
          <div class="icon-cell">💡</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong { color: #a5b4fc; }

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.4rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.5rem;
  height: 120px;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 800;
  font-size: 0.9rem;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  text-align: center;
  width: fit-content;
  height: fit-content;
  transition: all 0.3s;
}

.item:hover { filter: brightness(1.3); }

.pi-start        { place-items: start; }
.pi-end          { place-items: end; }
.pi-center       { place-items: center; }
.pi-stretch      { place-items: stretch; }
.pi-stretch .item { width: auto; height: auto; }
.pi-center-start { place-items: center start; }

.icon-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.4rem;
  place-items: center;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.5rem;
  height: 120px;
}

.icon-cell {
  font-size: 1.8rem;
  width: 48px;
  height: 48px;
  background: rgba(38,77,228,0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.icon-cell:hover {
  background: rgba(38,77,228,0.5);
  transform: scale(1.1);
}`,
  },

  // ─── 60. place-content ──────────────────────────────────────────
  {
    property: "place-content",
    description: "Shorthand for align-content and justify-content in a grid or flex container. Sets how rows and columns are distributed within the container when there is extra space.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>place-content — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>place-content</span></h1>
    <p class="page-desc">
      Shorthand for <strong>align-content + justify-content</strong>. Distributes space around rows and columns when the grid is smaller than its container.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">place-content: start</p>
        <div class="grid pc-start">
          <div class="item">1</div><div class="item">2</div>
          <div class="item">3</div><div class="item">4</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">place-content: end</p>
        <div class="grid pc-end">
          <div class="item">1</div><div class="item">2</div>
          <div class="item">3</div><div class="item">4</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">place-content: center</p>
        <div class="grid pc-center">
          <div class="item">1</div><div class="item">2</div>
          <div class="item">3</div><div class="item">4</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">place-content: space-between</p>
        <div class="grid pc-space-between">
          <div class="item">1</div><div class="item">2</div>
          <div class="item">3</div><div class="item">4</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">place-content: space-around</p>
        <div class="grid pc-space-around">
          <div class="item">1</div><div class="item">2</div>
          <div class="item">3</div><div class="item">4</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">place-content: center space-between</p>
        <div class="grid pc-mixed">
          <div class="item">1</div><div class="item">2</div>
          <div class="item">3</div><div class="item">4</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong { color: #a5b4fc; }

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 60px);
  background: rgba(0,0,0,0.25);
  border: 1px solid rgba(38,77,228,0.3);
  border-radius: 8px;
  padding: 0.5rem;
  height: 160px;
  gap: 0.4rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 800;
  font-size: 0.9rem;
  width: 60px;
  height: 50px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.item:hover { filter: brightness(1.3); transform: scale(1.05); }

.pc-start         { place-content: start; }
.pc-end           { place-content: end; }
.pc-center        { place-content: center; }
.pc-space-between { place-content: space-between; }
.pc-space-around  { place-content: space-around; }
.pc-mixed         { place-content: center space-between; }`,
  },

    // ─── 61. grid-auto-columns ──────────────────────────────────────
  {
    property: "grid-auto-columns",
    description: "Sets the size of implicitly created grid columns — columns that are auto-generated when items are placed outside the defined grid template.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>grid-auto-columns — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>grid-auto-columns</span></h1>
    <p class="page-desc">
      Controls the width of columns that are created automatically when items overflow the defined grid template.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">grid-auto-columns: auto — implicit columns size to content</p>
        <div class="grid gac-auto">
          <div class="item col1">Defined Col 1</div>
          <div class="item col2">Defined Col 2</div>
          <div class="item col3">Auto Col 3</div>
          <div class="item col4">Auto Col 4</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-auto-columns: 100px — implicit columns are 100px wide</p>
        <div class="grid gac-100">
          <div class="item col1">Col 1</div>
          <div class="item col2">Col 2</div>
          <div class="item col3">Auto 100px</div>
          <div class="item col4">Auto 100px</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-auto-columns: 1fr — implicit columns fill available space</p>
        <div class="grid gac-1fr">
          <div class="item col1">Col 1</div>
          <div class="item col2">Col 2</div>
          <div class="item col3">Auto 1fr</div>
          <div class="item col4">Auto 1fr</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-auto-columns: minmax(80px, 1fr)</p>
        <div class="grid gac-minmax">
          <div class="item col1">Col 1</div>
          <div class="item col2">Col 2</div>
          <div class="item col3">Auto minmax</div>
          <div class="item col4">Auto minmax</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid {
  display: grid;
  grid-template-columns: 120px 120px;
  grid-auto-flow: column;
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  padding: 0.75rem 0.5rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.item:hover { filter: brightness(1.3); }

.col1 { background: linear-gradient(135deg, #264de4, #2965f1); }
.col2 { background: linear-gradient(135deg, #2965f1, #264de4); }
.col3 { background: linear-gradient(135deg, #f97316, #fb923c); }
.col4 { background: linear-gradient(135deg, #a855f7, #c084fc); }

.gac-auto   { grid-auto-columns: auto; }
.gac-100    { grid-auto-columns: 100px; }
.gac-1fr    { grid-auto-columns: 1fr; }
.gac-minmax { grid-auto-columns: minmax(80px, 1fr); }`,
  },

  // ─── 62. grid-auto-rows ─────────────────────────────────────────
  {
    property: "grid-auto-rows",
    description: "Sets the size of implicitly created grid rows — rows that are auto-generated when more items exist than the defined grid template can accommodate.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>grid-auto-rows — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>grid-auto-rows</span></h1>
    <p class="page-desc">
      Controls the height of rows created automatically when items overflow the defined grid rows.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">grid-auto-rows: auto — rows size to content</p>
        <div class="grid gar-auto">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item tall">4 tall</div><div class="item">5</div><div class="item">6</div>
          <div class="item">7</div><div class="item">8</div><div class="item">9</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-auto-rows: 60px — all implicit rows are 60px</p>
        <div class="grid gar-60">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
          <div class="item">7</div><div class="item">8</div><div class="item">9</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-auto-rows: minmax(50px, auto) — min 50px, grows with content</p>
        <div class="grid gar-minmax">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item multiline">4<br/>extra<br/>lines</div>
          <div class="item">5</div><div class="item">6</div>
          <div class="item">7</div><div class="item">8</div><div class="item">9</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  padding: 0.5rem;
  border-radius: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.item:hover { filter: brightness(1.3); }
.item.tall { height: 80px; }
.item.multiline { line-height: 1.6; }

.gar-auto   { grid-auto-rows: auto; }
.gar-60     { grid-auto-rows: 60px; }
.gar-minmax { grid-auto-rows: minmax(50px, auto); }`,
  },

  // ─── 63. grid-auto-flow ─────────────────────────────────────────
  {
    property: "grid-auto-flow",
    description: "Controls how auto-placed items are inserted into the grid. Can flow items by row or column, and the dense keyword fills in holes in the grid.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>grid-auto-flow — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>grid-auto-flow</span></h1>
    <p class="page-desc">
      Controls the direction items are auto-placed. Row fills across then down. Column fills down then across. Dense fills gaps.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">grid-auto-flow: row (default) — fills left to right, then wraps down</p>
        <div class="grid gaf-row">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-auto-flow: column — fills top to bottom, then wraps right</p>
        <div class="grid gaf-col">
          <div class="item">1</div><div class="item">2</div><div class="item">3</div>
          <div class="item">4</div><div class="item">5</div><div class="item">6</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-auto-flow: row dense — fills gaps left by spanning items</p>
        <div class="grid gaf-dense">
          <div class="item span2">Span 2</div>
          <div class="item">2</div>
          <div class="item">3</div>
          <div class="item">4</div>
          <div class="item span2">Span 2</div>
          <div class="item">6</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 56px;
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.item:hover { filter: brightness(1.3); }

.span2 {
  grid-column: span 2;
  background: linear-gradient(135deg, #f97316, #fb923c);
}

.gaf-row   { grid-auto-flow: row; }
.gaf-col   {
  grid-auto-flow: column;
  grid-template-columns: unset;
  grid-template-rows: repeat(3, 56px);
  grid-auto-columns: 1fr;
}
.gaf-dense { grid-auto-flow: row dense; }`,
  },

  // ─── 64. grid-column ────────────────────────────────────────────
  {
    property: "grid-column",
    description: "Shorthand for grid-column-start and grid-column-end. Specifies which column lines a grid item starts and ends on, allowing items to span multiple columns.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>grid-column — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>grid-column</span></h1>
    <p class="page-desc">
      Places a grid item across specific columns. Use line numbers or <strong>span</strong> to stretch across multiple columns.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">grid-column: 1 / 3 — from line 1 to line 3 (spans 2 cols)</p>
        <div class="grid">
          <div class="item gc-1-3">1/3</div>
          <div class="item">B</div>
          <div class="item">C</div>
          <div class="item">D</div>
          <div class="item">E</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-column: 1 / -1 — spans full width</p>
        <div class="grid">
          <div class="item">A</div>
          <div class="item gc-full">Full Width</div>
          <div class="item">C</div>
          <div class="item">D</div>
          <div class="item">E</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-column: span 2 — spans 2 columns from current position</p>
        <div class="grid">
          <div class="item">A</div>
          <div class="item gc-span2">span 2</div>
          <div class="item">C</div>
          <div class="item">D</div>
          <div class="item">E</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — dashboard card layout</p>
        <div class="dashboard">
          <div class="dash-item wide">📊 Analytics (span 2)</div>
          <div class="dash-item">👤 Users</div>
          <div class="dash-item">💰 Revenue</div>
          <div class="dash-item">📦 Orders</div>
          <div class="dash-item full">🗓 Calendar (full width)</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong { color: #a5b4fc; }

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.item:hover { filter: brightness(1.3); }

.gc-1-3   { grid-column: 1 / 3; background: linear-gradient(135deg, #f97316, #fb923c); }
.gc-full  { grid-column: 1 / -1; background: linear-gradient(135deg, #22c55e, #4ade80); }
.gc-span2 { grid-column: span 2; background: linear-gradient(135deg, #a855f7, #c084fc); }

.dashboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.dash-item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  padding: 1rem 0.75rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.dash-item:hover { filter: brightness(1.2); transform: translateY(-2px); }
.wide { grid-column: span 2; background: linear-gradient(135deg, #f97316, #fb923c); }
.full { grid-column: 1 / -1; background: linear-gradient(135deg, #22c55e, #4ade80); }`,
  },

  // ─── 65. grid-row ───────────────────────────────────────────────
  {
    property: "grid-row",
    description: "Shorthand for grid-row-start and grid-row-end. Specifies which row lines a grid item starts and ends on, allowing items to span multiple rows.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>grid-row — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>grid-row</span></h1>
    <p class="page-desc">
      Places a grid item across specific rows. Use line numbers or <strong>span</strong> to stretch across multiple rows.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">grid-row: 1 / 3 — spans 2 rows</p>
        <div class="grid">
          <div class="item gr-1-3">row 1/3</div>
          <div class="item">B</div>
          <div class="item">C</div>
          <div class="item">D</div>
          <div class="item">E</div>
          <div class="item">F</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-row: span 3 — spans 3 rows from current position</p>
        <div class="grid">
          <div class="item">A</div>
          <div class="item gr-span3">span 3</div>
          <div class="item">C</div>
          <div class="item">D</div>
          <div class="item">E</div>
          <div class="item">F</div>
          <div class="item">G</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Real use — magazine layout with tall feature image</p>
        <div class="magazine">
          <div class="mag-item feature">🖼 Feature</div>
          <div class="mag-item">Article 1</div>
          <div class="mag-item">Article 2</div>
          <div class="mag-item">Article 3</div>
          <div class="mag-item">Article 4</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong { color: #a5b4fc; }

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 56px;
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.item:hover { filter: brightness(1.3); }

.gr-1-3   { grid-row: 1 / 3; background: linear-gradient(135deg, #f97316, #fb923c); }
.gr-span3 { grid-row: span 3; background: linear-gradient(135deg, #a855f7, #c084fc); }

.magazine {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 70px;
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.mag-item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.mag-item:hover { filter: brightness(1.2); transform: scale(1.02); }

.feature {
  grid-row: span 2;
  background: linear-gradient(135deg, #f97316, #fb923c);
  font-size: 1rem;
}`,
  },

    // ─── 66. grid-area ──────────────────────────────────────────────
  {
    property: "grid-area",
    description: "Shorthand for grid-row-start, grid-column-start, grid-row-end, and grid-column-end. Also used to assign a name to a grid item for use with grid-template-areas.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>grid-area — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>grid-area</span></h1>
    <p class="page-desc">
      Two uses: assign a <strong>named area</strong> to an item (used with grid-template-areas), or as shorthand for row-start / col-start / row-end / col-end.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">Usage 1 — named areas with grid-template-areas</p>
        <div class="layout-named">
          <div class="area-header">header</div>
          <div class="area-nav">nav</div>
          <div class="area-main">main</div>
          <div class="area-aside">aside</div>
          <div class="area-footer">footer</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">Usage 2 — grid-area: row-start / col-start / row-end / col-end</p>
        <div class="layout-lines">
          <div class="item ga-a">A (1/1/2/3)</div>
          <div class="item ga-b">B (1/3/3/4)</div>
          <div class="item ga-c">C (2/1/3/2)</div>
          <div class="item ga-d">D (2/2/3/3)</div>
          <div class="item ga-e">E (3/1/4/4)</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong { color: #a5b4fc; }

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

/* Named areas layout */
.layout-named {
  display: grid;
  grid-template-columns: 120px 1fr 120px;
  grid-template-rows: 50px 120px 50px;
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.area-header { grid-area: header; background: linear-gradient(135deg, #264de4, #2965f1); }
.area-nav    { grid-area: nav;    background: linear-gradient(135deg, #a855f7, #c084fc); }
.area-main   { grid-area: main;   background: linear-gradient(135deg, #22c55e, #4ade80); }
.area-aside  { grid-area: aside;  background: linear-gradient(135deg, #ec4899, #f472b6); }
.area-footer { grid-area: footer; background: linear-gradient(135deg, #f97316, #fb923c); }

.area-header, .area-nav, .area-main,
.area-aside, .area-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.82rem;
  color: #fff;
  border-radius: 8px;
  transition: all 0.3s;
}

.area-header:hover, .area-nav:hover, .area-main:hover,
.area-aside:hover, .area-footer:hover { filter: brightness(1.2); }

/* Line-based layout */
.layout-lines {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 56px);
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.75rem;
  color: #fff;
  border-radius: 8px;
  transition: all 0.3s;
}

.item:hover { filter: brightness(1.2); }

.ga-a { grid-area: 1 / 1 / 2 / 3; background: linear-gradient(135deg, #264de4, #2965f1); }
.ga-b { grid-area: 1 / 3 / 3 / 4; background: linear-gradient(135deg, #f97316, #fb923c); }
.ga-c { grid-area: 2 / 1 / 3 / 2; background: linear-gradient(135deg, #22c55e, #4ade80); }
.ga-d { grid-area: 2 / 2 / 3 / 3; background: linear-gradient(135deg, #a855f7, #c084fc); }
.ga-e { grid-area: 3 / 1 / 4 / 4; background: linear-gradient(135deg, #ec4899, #f472b6); }`,
  },

  // ─── 67. grid-column-start ──────────────────────────────────────
  {
    property: "grid-column-start",
    description: "Specifies on which column line a grid item starts. Accepts a line number, a named line, or the span keyword.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>grid-column-start — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>grid-column-start</span></h1>
    <p class="page-desc">
      Sets which column line an item starts on. Column lines are numbered from 1 (left edge) to n+1 (right edge).
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">grid-column-start: 1 — starts at first column line</p>
        <div class="grid">
          <div class="item gcs-1">start: 1</div>
          <div class="item">B</div>
          <div class="item">C</div>
          <div class="item">D</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-column-start: 2 — starts at second column line</p>
        <div class="grid">
          <div class="item">A</div>
          <div class="item gcs-2">start: 2</div>
          <div class="item">C</div>
          <div class="item">D</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-column-start: 3 — starts at third column line</p>
        <div class="grid">
          <div class="item">A</div>
          <div class="item">B</div>
          <div class="item gcs-3">start: 3</div>
          <div class="item">D</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-column-start: span 2 — spans 2 columns from auto position</p>
        <div class="grid">
          <div class="item">A</div>
          <div class="item gcs-span2">span 2</div>
          <div class="item">C</div>
          <div class="item">D</div>
          <div class="item">E</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  padding: 0.75rem 0.5rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.item:hover { filter: brightness(1.3); }

.gcs-1     { grid-column-start: 1; background: linear-gradient(135deg, #f97316, #fb923c); }
.gcs-2     { grid-column-start: 2; background: linear-gradient(135deg, #22c55e, #4ade80); }
.gcs-3     { grid-column-start: 3; background: linear-gradient(135deg, #a855f7, #c084fc); }
.gcs-span2 { grid-column-start: span 2; background: linear-gradient(135deg, #ec4899, #f472b6); }`,
  },

  // ─── 68. grid-column-end ────────────────────────────────────────
  {
    property: "grid-column-end",
    description: "Specifies on which column line a grid item ends. Works with grid-column-start to define the column span of an item.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>grid-column-end — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>grid-column-end</span></h1>
    <p class="page-desc">
      Sets which column line an item ends on. Use with <strong>grid-column-start</strong> to span across columns.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">grid-column-end: 3 — ends at line 3 (occupies col 1-2)</p>
        <div class="grid">
          <div class="item gce-3">end: 3</div>
          <div class="item">C</div>
          <div class="item">D</div>
          <div class="item">E</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-column-end: 4 — ends at line 4 (occupies col 1-3)</p>
        <div class="grid">
          <div class="item gce-4">end: 4</div>
          <div class="item">D</div>
          <div class="item">E</div>
          <div class="item">F</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-column-end: -1 — ends at last column line (full width)</p>
        <div class="grid">
          <div class="item gce-last">end: -1 (full)</div>
          <div class="item">B</div>
          <div class="item">C</div>
          <div class="item">D</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-column-end: span 2 — spans 2 cols from start</p>
        <div class="grid">
          <div class="item">A</div>
          <div class="item gce-span2">span 2</div>
          <div class="item">D</div>
          <div class="item">E</div>
          <div class="item">F</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong { color: #a5b4fc; }

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  padding: 0.75rem 0.5rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.item:hover { filter: brightness(1.3); }

.gce-3     { grid-column-end: 3; background: linear-gradient(135deg, #f97316, #fb923c); }
.gce-4     { grid-column-end: 4; background: linear-gradient(135deg, #22c55e, #4ade80); }
.gce-last  { grid-column-end: -1; background: linear-gradient(135deg, #a855f7, #c084fc); }
.gce-span2 { grid-column-end: span 2; background: linear-gradient(135deg, #ec4899, #f472b6); }`,
  },

  // ─── 69. grid-row-start ─────────────────────────────────────────
  {
    property: "grid-row-start",
    description: "Specifies on which row line a grid item starts. Accepts a line number, a named line, or the span keyword.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>grid-row-start — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>grid-row-start</span></h1>
    <p class="page-desc">
      Sets which row line an item starts on. Row lines are numbered from 1 (top) to n+1 (bottom).
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">grid-row-start: 1 — starts at first row line (default)</p>
        <div class="grid">
          <div class="item grs-1">start: 1</div>
          <div class="item">B</div>
          <div class="item">C</div>
          <div class="item">D</div>
          <div class="item">E</div>
          <div class="item">F</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-row-start: 2 — starts at second row line</p>
        <div class="grid">
          <div class="item">A</div>
          <div class="item grs-2">start: 2</div>
          <div class="item">C</div>
          <div class="item">D</div>
          <div class="item">E</div>
          <div class="item">F</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-row-start: span 2 — spans 2 rows from auto position</p>
        <div class="grid">
          <div class="item grs-span2">span 2</div>
          <div class="item">B</div>
          <div class="item">C</div>
          <div class="item">D</div>
          <div class="item">E</div>
          <div class="item">F</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 56px;
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.item:hover { filter: brightness(1.3); }

.grs-1     { grid-row-start: 1; background: linear-gradient(135deg, #f97316, #fb923c); }
.grs-2     { grid-row-start: 2; background: linear-gradient(135deg, #22c55e, #4ade80); }
.grs-span2 { grid-row-start: span 2; background: linear-gradient(135deg, #a855f7, #c084fc); }`,
  },

  // ─── 70. grid-row-end ───────────────────────────────────────────
  {
    property: "grid-row-end",
    description: "Specifies on which row line a grid item ends. Works with grid-row-start to define how many rows an item spans.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>grid-row-end — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>grid-row-end</span></h1>
    <p class="page-desc">
      Sets which row line an item ends on. Use with <strong>grid-row-start</strong> to span across rows.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">grid-row-end: 3 — ends at row line 3 (spans rows 1-2)</p>
        <div class="grid">
          <div class="item gre-3">end: 3</div>
          <div class="item">B</div>
          <div class="item">C</div>
          <div class="item">D</div>
          <div class="item">E</div>
          <div class="item">F</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-row-end: 4 — ends at row line 4 (spans rows 1-3)</p>
        <div class="grid">
          <div class="item gre-4">end: 4</div>
          <div class="item">B</div>
          <div class="item">C</div>
          <div class="item">D</div>
          <div class="item">E</div>
          <div class="item">F</div>
          <div class="item">G</div>
          <div class="item">H</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">grid-row-end: span 2 — spans 2 rows from start</p>
        <div class="grid">
          <div class="item">A</div>
          <div class="item gre-span2">span 2</div>
          <div class="item">C</div>
          <div class="item">D</div>
          <div class="item">E</div>
          <div class="item">F</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong { color: #a5b4fc; }

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 56px;
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.item:hover { filter: brightness(1.3); }

.gre-3     { grid-row-end: 3; background: linear-gradient(135deg, #f97316, #fb923c); }
.gre-4     { grid-row-end: 4; background: linear-gradient(135deg, #22c55e, #4ade80); }
.gre-span2 { grid-row-end: span 2; background: linear-gradient(135deg, #a855f7, #c084fc); }`,
  },

    // ─── 71. justify-self ───────────────────────────────────────────
  {
    property: "justify-self",
    description: "Aligns a single grid item along the inline (horizontal) axis within its cell. Overrides justify-items for that specific item.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>justify-self — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>justify-self</span></h1>
    <p class="page-desc">
      Overrides <strong>justify-items</strong> for a single grid item. Controls horizontal alignment within the cell.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">All items with different justify-self values</p>
        <div class="grid">
          <div class="item js-start">start</div>
          <div class="item js-center">center</div>
          <div class="item js-end">end</div>
          <div class="item js-stretch">stretch</div>
          <div class="item js-start">start</div>
          <div class="item js-center">center</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">justify-self: start — item hugs left of cell</p>
        <div class="grid single">
          <div class="item">A</div>
          <div class="item js-start-solo">justify-self: start</div>
          <div class="item">C</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">justify-self: end — item hugs right of cell</p>
        <div class="grid single">
          <div class="item">A</div>
          <div class="item js-end-solo">justify-self: end</div>
          <div class="item">C</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">justify-self: center — item centered in cell</p>
        <div class="grid single">
          <div class="item">A</div>
          <div class="item js-center-solo">justify-self: center</div>
          <div class="item">C</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong { color: #a5b4fc; }

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.6rem;
}

.grid.single {
  grid-template-columns: repeat(3, 1fr);
  min-height: 70px;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  text-align: center;
  width: fit-content;
  transition: all 0.3s;
}

.item:hover { filter: brightness(1.3); }

.js-start   { justify-self: start; }
.js-center  { justify-self: center; }
.js-end     { justify-self: end; }
.js-stretch { justify-self: stretch; width: auto; }

.js-start-solo  { justify-self: start;  background: linear-gradient(135deg, #f97316, #fb923c); }
.js-end-solo    { justify-self: end;    background: linear-gradient(135deg, #22c55e, #4ade80); }
.js-center-solo { justify-self: center; background: linear-gradient(135deg, #a855f7, #c084fc); }`,
  },

  // ─── 72. place-self ─────────────────────────────────────────────
  {
    property: "place-self",
    description: "Shorthand for align-self and justify-self on a grid item. Sets both vertical and horizontal alignment of a single item within its cell.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>place-self — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>place-self</span></h1>
    <p class="page-desc">
      Shorthand for <strong>align-self + justify-self</strong>. Positions a single grid item both vertically and horizontally within its cell.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">place-self: start</p>
        <div class="cell ps-start"><div class="item">start</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">place-self: end</p>
        <div class="cell ps-end"><div class="item">end</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">place-self: center</p>
        <div class="cell ps-center"><div class="item">center</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">place-self: stretch</p>
        <div class="cell ps-stretch"><div class="item stretch">stretch</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">place-self: start end</p>
        <div class="cell ps-start-end"><div class="item">start end</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">place-self: end center</p>
        <div class="cell ps-end-center"><div class="item">end center</div></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong { color: #a5b4fc; }

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.cell {
  display: grid;
  background: rgba(0,0,0,0.25);
  border: 1px solid rgba(38,77,228,0.3);
  border-radius: 8px;
  height: 100px;
  padding: 0.4rem;
}

.item {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  text-align: center;
  width: fit-content;
  height: fit-content;
  transition: all 0.3s;
}

.item:hover { filter: brightness(1.3); }
.item.stretch { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }

.ps-start       .item { place-self: start; }
.ps-end         .item { place-self: end; }
.ps-center      .item { place-self: center; }
.ps-stretch     .item { place-self: stretch; }
.ps-start-end   .item { place-self: start end; }
.ps-end-center  .item { place-self: end center; }`,
  },

  // ─── 73. animation-name ─────────────────────────────────────────
  {
    property: "animation-name",
    description: "Specifies the name of the @keyframes animation to apply to an element. The name must match a defined @keyframes rule.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>animation-name — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>animation-name</span></h1>
    <p class="page-desc">
      Links an element to a <strong>@keyframes</strong> rule by name. Each box below uses a different named animation.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">animation-name: fadeIn</p>
        <div class="box an-fadein">Fade In</div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-name: slideLeft</p>
        <div class="box an-slideleft">Slide Left</div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-name: bounceUp</p>
        <div class="box an-bounceup">Bounce Up</div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-name: pulse</p>
        <div class="box an-pulse">Pulse</div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-name: spin</p>
        <div class="box an-spin">Spin</div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-name: none (no animation)</p>
        <div class="box an-none">No Anim</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.page-desc strong { color: #a5b4fc; }

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 1.5rem 1rem;
  border-radius: 10px;
  text-align: center;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

/* Named keyframes */
@keyframes fadeIn {
  0%, 100% { opacity: 0.3; }
  50%       { opacity: 1; }
}

@keyframes slideLeft {
  0%, 100% { transform: translateX(0); }
  50%       { transform: translateX(-12px); }
}

@keyframes bounceUp {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-16px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.1); }
}

@keyframes spin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.an-fadein    { animation-name: fadeIn; }
.an-slideleft { animation-name: slideLeft; background: linear-gradient(135deg, #f97316, #fb923c); }
.an-bounceup  { animation-name: bounceUp; background: linear-gradient(135deg, #22c55e, #4ade80); }
.an-pulse     { animation-name: pulse;    background: linear-gradient(135deg, #a855f7, #c084fc); }
.an-spin      { animation-name: spin; animation-timing-function: linear; background: linear-gradient(135deg, #ec4899, #f472b6); }
.an-none      { animation-name: none; background: rgba(255,255,255,0.08); }`,
  },

  // ─── 74. animation-duration ─────────────────────────────────────
  {
    property: "animation-duration",
    description: "Sets how long one cycle of an animation takes to complete. Accepts values in seconds (s) or milliseconds (ms). Default is 0s which means no animation plays.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>animation-duration — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>animation-duration</span></h1>
    <p class="page-desc">
      Controls how long one animation cycle takes. Shorter = faster. Longer = slower. All boxes use the same bounce animation.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">animation-duration: 0.3s — very fast</p>
        <div class="box ad-03s">0.3s</div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-duration: 0.8s — fast</p>
        <div class="box ad-08s">0.8s</div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-duration: 1.5s — medium</p>
        <div class="box ad-15s">1.5s</div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-duration: 3s — slow</p>
        <div class="box ad-3s">3s</div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-duration: 6s — very slow</p>
        <div class="box ad-6s">6s</div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-duration: 500ms — milliseconds syntax</p>
        <div class="box ad-500ms">500ms</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 700px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 0.85rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  min-width: 260px;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-14px); }
}

.box {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 800;
  font-size: 0.85rem;
  padding: 0.65rem 1.25rem;
  border-radius: 8px;
  text-align: center;
  animation-name: bounce;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  white-space: nowrap;
}

.ad-03s   { animation-duration: 0.3s;  background: linear-gradient(135deg, #ef4444, #f87171); }
.ad-08s   { animation-duration: 0.8s;  background: linear-gradient(135deg, #f97316, #fb923c); }
.ad-15s   { animation-duration: 1.5s;  background: linear-gradient(135deg, #eab308, #fde047); color: #1a1a2e; }
.ad-3s    { animation-duration: 3s;    background: linear-gradient(135deg, #22c55e, #4ade80); }
.ad-6s    { animation-duration: 6s;    background: linear-gradient(135deg, #264de4, #2965f1); }
.ad-500ms { animation-duration: 500ms; background: linear-gradient(135deg, #a855f7, #c084fc); }`,
  },

  // ─── 75. animation-timing-function ─────────────────────────────
  {
    property: "animation-timing-function",
    description: "Defines the speed curve of an animation — how it accelerates and decelerates over time. Common values: ease, linear, ease-in, ease-out, ease-in-out, and cubic-bezier().",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>animation-timing-function — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>animation-timing-function</span></h1>
    <p class="page-desc">
      Controls the speed curve of the animation. All boxes move the same distance — watch how differently they accelerate.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">ease (default) — slow start, fast middle, slow end</p>
        <div class="track"><div class="ball atf-ease">ease</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">linear — constant speed throughout</p>
        <div class="track"><div class="ball atf-linear">linear</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">ease-in — slow start, fast end</p>
        <div class="track"><div class="ball atf-ease-in">ease-in</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">ease-out — fast start, slow end</p>
        <div class="track"><div class="ball atf-ease-out">ease-out</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">ease-in-out — slow start and end, fast middle</p>
        <div class="track"><div class="ball atf-ease-in-out">ease-in-out</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">cubic-bezier(0.34, 1.56, 0.64, 1) — custom bounce</p>
        <div class="track"><div class="ball atf-bounce">bounce</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">steps(5, end) — stepped / choppy motion</p>
        <div class="track"><div class="ball atf-steps">steps</div></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.6rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 0.85rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.track {
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.4rem 0.5rem;
  height: 44px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

@keyframes slide {
  0%, 100% { transform: translateX(0); }
  50%       { transform: translateX(calc(100vw - 200px)); }
}

.ball {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.72rem;
  padding: 0.45rem 0.85rem;
  border-radius: 6px;
  white-space: nowrap;
  animation-name: slide;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
}

.atf-ease        { animation-timing-function: ease; }
.atf-linear      { animation-timing-function: linear;       background: linear-gradient(135deg, #f97316, #fb923c); }
.atf-ease-in     { animation-timing-function: ease-in;      background: linear-gradient(135deg, #22c55e, #4ade80); }
.atf-ease-out    { animation-timing-function: ease-out;     background: linear-gradient(135deg, #a855f7, #c084fc); }
.atf-ease-in-out { animation-timing-function: ease-in-out;  background: linear-gradient(135deg, #ec4899, #f472b6); }
.atf-bounce      { animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1); background: linear-gradient(135deg, #14b8a6, #2dd4bf); }
.atf-steps       { animation-timing-function: steps(5, end); background: linear-gradient(135deg, #eab308, #fde047); color: #1a1a2e; }`,
  },

    // ─── 76. animation-delay ────────────────────────────────────────
  {
    property: "animation-delay",
    description: "Sets how long to wait before starting an animation. Positive values delay the start. Negative values start the animation mid-cycle as if it had already been running.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>animation-delay — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>animation-delay</span></h1>
    <p class="page-desc">
      Waits before starting the animation. Great for staggered effects. Negative values jump into the animation mid-cycle.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">Staggered delay — each item starts 0.2s later</p>
        <div class="stagger-row">
          <div class="dot d1">1</div>
          <div class="dot d2">2</div>
          <div class="dot d3">3</div>
          <div class="dot d4">4</div>
          <div class="dot d5">5</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-delay: 0s — starts immediately</p>
        <div class="bar-wrap"><div class="bar ad-0s">0s delay</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-delay: 1s — waits 1 second</p>
        <div class="bar-wrap"><div class="bar ad-1s">1s delay</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-delay: 2s — waits 2 seconds</p>
        <div class="bar-wrap"><div class="bar ad-2s">2s delay</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-delay: -1s — starts 1s into the cycle</p>
        <div class="bar-wrap"><div class="bar ad-neg1s">-1s delay</div></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 700px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

@keyframes bounceUp {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-20px); }
}

@keyframes fadeSlide {
  0%   { opacity: 0; transform: translateX(-20px); }
  100% { opacity: 1; transform: translateX(0); }
}

/* Stagger row */
.stagger-row {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  padding: 1rem 0;
}

.dot {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 800;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bounceUp 1.2s ease-in-out infinite;
}

.d1 { animation-delay: 0s; }
.d2 { animation-delay: 0.2s; background: linear-gradient(135deg, #f97316, #fb923c); }
.d3 { animation-delay: 0.4s; background: linear-gradient(135deg, #22c55e, #4ade80); }
.d4 { animation-delay: 0.6s; background: linear-gradient(135deg, #a855f7, #c084fc); }
.d5 { animation-delay: 0.8s; background: linear-gradient(135deg, #ec4899, #f472b6); }

/* Bars */
.bar-wrap {
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.5rem;
  min-height: 48px;
  display: flex;
  align-items: center;
}

.bar {
  background: linear-gradient(90deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  padding: 0.6rem 1.25rem;
  border-radius: 6px;
  animation-name: fadeSlide;
  animation-duration: 0.8s;
  animation-fill-mode: both;
  animation-timing-function: ease-out;
}

.ad-0s    { animation-delay: 0s; }
.ad-1s    { animation-delay: 1s;  background: linear-gradient(90deg, #f97316, #fb923c); }
.ad-2s    { animation-delay: 2s;  background: linear-gradient(90deg, #22c55e, #4ade80); }
.ad-neg1s { animation-delay: -1s; background: linear-gradient(90deg, #a855f7, #c084fc); }`,
  },

  // ─── 77. animation-iteration-count ─────────────────────────────
  {
    property: "animation-iteration-count",
    description: "Sets how many times an animation cycle plays. Use a number for a fixed count or 'infinite' to loop forever.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>animation-iteration-count — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>animation-iteration-count</span></h1>
    <p class="page-desc">
      Controls how many times the animation plays. Watch each box — they stop after their set number of cycles.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">animation-iteration-count: 1 — plays once then stops</p>
        <div class="box aic-1">Plays Once</div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-iteration-count: 2 — plays twice</p>
        <div class="box aic-2">Plays Twice</div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-iteration-count: 3 — plays 3 times</p>
        <div class="box aic-3">3 Times</div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-iteration-count: infinite — loops forever</p>
        <div class="box aic-inf">∞ Infinite</div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-iteration-count: 1.5 — plays 1.5 cycles (stops halfway)</p>
        <div class="box aic-15">1.5 Cycles</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 700px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.6rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 0.85rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  flex: 1;
}

@keyframes scaleUp {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.2); filter: brightness(1.4); }
  100% { transform: scale(1); }
}

.box {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  padding: 0.65rem 1.25rem;
  border-radius: 8px;
  white-space: nowrap;
  animation-name: scaleUp;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}

.aic-1   { animation-iteration-count: 1;        background: linear-gradient(135deg, #f97316, #fb923c); }
.aic-2   { animation-iteration-count: 2;        background: linear-gradient(135deg, #22c55e, #4ade80); }
.aic-3   { animation-iteration-count: 3;        background: linear-gradient(135deg, #a855f7, #c084fc); }
.aic-inf { animation-iteration-count: infinite; background: linear-gradient(135deg, #264de4, #2965f1); }
.aic-15  { animation-iteration-count: 1.5;      background: linear-gradient(135deg, #ec4899, #f472b6); }`,
  },

  // ─── 78. animation-direction ────────────────────────────────────
  {
    property: "animation-direction",
    description: "Sets whether an animation plays forward, backward, or alternates between forward and backward on each cycle.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>animation-direction — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>animation-direction</span></h1>
    <p class="page-desc">
      Controls which direction the animation plays. Watch the balls — they all move the same distance but in different directions.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">animation-direction: normal — plays forward each cycle</p>
        <div class="track"><div class="ball adir-normal">normal →</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-direction: reverse — plays backward each cycle</p>
        <div class="track"><div class="ball adir-reverse">← reverse</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-direction: alternate — forward then backward</p>
        <div class="track"><div class="ball adir-alternate">↔ alternate</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-direction: alternate-reverse — backward then forward</p>
        <div class="track"><div class="ball adir-alt-rev">↔ alt-reverse</div></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 700px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.track {
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.4rem 0.5rem;
  height: 48px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

@keyframes moveRight {
  from { transform: translateX(0); }
  to   { transform: translateX(200px); }
}

.ball {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.5rem 0.85rem;
  border-radius: 6px;
  white-space: nowrap;
  animation-name: moveRight;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.adir-normal    { animation-direction: normal;           }
.adir-reverse   { animation-direction: reverse;          background: linear-gradient(135deg, #f97316, #fb923c); }
.adir-alternate { animation-direction: alternate;        background: linear-gradient(135deg, #22c55e, #4ade80); }
.adir-alt-rev   { animation-direction: alternate-reverse; background: linear-gradient(135deg, #a855f7, #c084fc); }`,
  },

  // ─── 79. animation-fill-mode ────────────────────────────────────
  {
    property: "animation-fill-mode",
    description: "Defines what styles are applied to an element before the animation starts and after it ends. Values: none, forwards, backwards, both.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>animation-fill-mode — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>animation-fill-mode</span></h1>
    <p class="page-desc">
      Controls what happens before and after the animation. Each box has a 1s delay so you can see the pre-animation state, then plays once and stops.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">animation-fill-mode: none — no styles applied before/after</p>
        <div class="box afm-none">none</div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-fill-mode: forwards — keeps end state after animation</p>
        <div class="box afm-forwards">forwards</div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-fill-mode: backwards — applies start state during delay</p>
        <div class="box afm-backwards">backwards</div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-fill-mode: both — applies both forwards and backwards</p>
        <div class="box afm-both">both</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 700px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

@keyframes growRight {
  from {
    transform: translateX(-60px);
    opacity: 0;
    background: rgba(255,255,255,0.1);
  }
  to {
    transform: translateX(60px);
    opacity: 1;
  }
}

.box {
  color: #fff;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  text-align: center;
  animation-name: growRight;
  animation-duration: 1.2s;
  animation-delay: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
}

.afm-none      { animation-fill-mode: none;      background: linear-gradient(135deg, #264de4, #2965f1); }
.afm-forwards  { animation-fill-mode: forwards;  background: linear-gradient(135deg, #22c55e, #4ade80); }
.afm-backwards { animation-fill-mode: backwards; background: linear-gradient(135deg, #f97316, #fb923c); }
.afm-both      { animation-fill-mode: both;      background: linear-gradient(135deg, #a855f7, #c084fc); }`,
  },

  // ─── 80. animation-play-state ───────────────────────────────────
  {
    property: "animation-play-state",
    description: "Sets whether an animation is running or paused. Use 'running' to play and 'paused' to freeze the animation at its current position.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>animation-play-state — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>animation-play-state</span></h1>
    <p class="page-desc">
      Pauses or resumes an animation. Hover the boxes to pause them — the animation freezes in place.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">animation-play-state: running — animation plays normally</p>
        <div class="box aps-running">Running ▶</div>
      </div>

      <div class="demo-card">
        <p class="section-label">animation-play-state: paused — animation is frozen</p>
        <div class="box aps-paused">Paused ⏸</div>
      </div>

      <div class="demo-card">
        <p class="section-label">Hover to pause — animation-play-state: paused on :hover</p>
        <div class="box aps-hover-pause">Hover to Pause ⏸</div>
      </div>

      <div class="demo-card">
        <p class="section-label">Interactive — click button to toggle play/pause</p>
        <div class="interactive-demo">
          <div class="spin-box" id="spinBox">CSS</div>
          <div class="btn-row">
            <button class="ctrl-btn" onclick="
              const b = document.getElementById('spinBox');
              const s = getComputedStyle(b).animationPlayState;
              b.style.animationPlayState = s === 'running' ? 'paused' : 'running';
              this.textContent = s === 'running' ? '▶ Play' : '⏸ Pause';
            ">⏸ Pause</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 700px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

@keyframes slidePulse {
  0%, 100% { transform: translateX(0) scale(1); }
  50%       { transform: translateX(80px) scale(1.1); }
}

@keyframes spinAnim {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.box {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  text-align: center;
  animation-name: slidePulse;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  cursor: pointer;
}

.aps-running     { animation-play-state: running; }
.aps-paused      { animation-play-state: paused;  background: rgba(255,255,255,0.08); opacity: 0.6; }
.aps-hover-pause { animation-play-state: running; background: linear-gradient(135deg, #22c55e, #4ade80); }
.aps-hover-pause:hover { animation-play-state: paused; }

.interactive-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.spin-box {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #a855f7, #c084fc);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1.2rem;
  color: #fff;
  animation: spinAnim 2s linear infinite;
  animation-play-state: running;
}

.btn-row {
  display: flex;
  gap: 0.75rem;
}

.ctrl-btn {
  background: linear-gradient(90deg, #264de4, #2965f1);
  color: #fff;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}

.ctrl-btn:hover {
  filter: brightness(1.2);
  transform: translateY(-2px);
}`,
  },

    // ─── 81. transition ─────────────────────────────────────────────
  {
    property: "transition",
    description: "Shorthand for transition-property, transition-duration, transition-timing-function, and transition-delay. Creates smooth state changes between CSS values on hover or focus.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>transition — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>transition</span> Property</h1>
    <p class="page-desc">
      Smoothly animates CSS property changes. Hover each card to see the transition effect.
    </p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="section-label">transition: background 0.3s ease</p>
        <div class="box t-bg">Hover Me</div>
      </div>

      <div class="demo-card">
        <p class="section-label">transition: transform 0.3s ease</p>
        <div class="box t-transform">Hover Me</div>
      </div>

      <div class="demo-card">
        <p class="section-label">transition: all 0.4s ease</p>
        <div class="box t-all">Hover Me</div>
      </div>

      <div class="demo-card">
        <p class="section-label">transition: box-shadow 0.3s ease</p>
        <div class="box t-shadow">Hover Me</div>
      </div>

      <div class="demo-card">
        <p class="section-label">transition: width 0.5s ease</p>
        <div class="box-wrap">
          <div class="box t-width">Hover</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">transition: multiple properties</p>
        <div class="box t-multi">Hover Me</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.box {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 1.25rem;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
}

/* Background transition */
.t-bg {
  transition: background 0.3s ease;
}
.t-bg:hover {
  background: linear-gradient(135deg, #f97316, #fb923c);
}

/* Transform transition */
.t-transform {
  transition: transform 0.3s ease;
  background: linear-gradient(135deg, #22c55e, #4ade80);
}
.t-transform:hover {
  transform: translateY(-8px) scale(1.05);
}

/* All transition */
.t-all {
  transition: all 0.4s ease;
  background: linear-gradient(135deg, #a855f7, #c084fc);
}
.t-all:hover {
  background: linear-gradient(135deg, #ec4899, #f472b6);
  transform: rotate(3deg) scale(1.05);
  border-radius: 50%;
}

/* Box-shadow transition */
.t-shadow {
  transition: box-shadow 0.3s ease;
  background: linear-gradient(135deg, #14b8a6, #2dd4bf);
}
.t-shadow:hover {
  box-shadow: 0 0 0 6px rgba(20,184,166,0.3), 0 16px 40px rgba(20,184,166,0.4);
}

/* Width transition */
.box-wrap {
  overflow: hidden;
  border-radius: 10px;
}
.t-width {
  width: 60%;
  transition: width 0.5s ease;
  background: linear-gradient(135deg, #eab308, #fde047);
  color: #1a1a2e;
}
.t-width:hover {
  width: 100%;
}

/* Multiple properties */
.t-multi {
  transition: background 0.3s ease, transform 0.3s ease, border-radius 0.3s ease;
  background: linear-gradient(135deg, #264de4, #2965f1);
}
.t-multi:hover {
  background: linear-gradient(135deg, #f97316, #fb923c);
  transform: translateY(-6px);
  border-radius: 50%;
}`,
  },

  // ─── 82. transition-property ────────────────────────────────────
  {
    property: "transition-property",
    description: "Specifies which CSS property (or properties) the transition effect applies to. Use 'all' to transition every property, or name specific ones.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>transition-property — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>transition-property</span></h1>
    <p class="page-desc">
      Specifies which property gets the smooth transition. Hover each box — only the named property transitions smoothly.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">transition-property: all — every property transitions</p>
        <div class="box tp-all">Hover — all properties transition</div>
      </div>

      <div class="demo-card">
        <p class="section-label">transition-property: background — only background transitions</p>
        <div class="box tp-bg">Hover — only background transitions</div>
      </div>

      <div class="demo-card">
        <p class="section-label">transition-property: transform — only transform transitions</p>
        <div class="box tp-transform">Hover — only transform transitions</div>
      </div>

      <div class="demo-card">
        <p class="section-label">transition-property: opacity — only opacity transitions</p>
        <div class="box tp-opacity">Hover — only opacity transitions</div>
      </div>

      <div class="demo-card">
        <p class="section-label">transition-property: background, transform — two properties</p>
        <div class="box tp-two">Hover — background + transform</div>
      </div>

      <div class="demo-card">
        <p class="section-label">transition-property: none — no transition (instant change)</p>
        <div class="box tp-none">Hover — instant, no transition</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 0.85rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.box {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 1rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  transition-duration: 0.4s;
  transition-timing-function: ease;
}

.tp-all {
  transition-property: all;
}
.tp-all:hover {
  background: linear-gradient(135deg, #f97316, #fb923c);
  transform: translateY(-6px);
  border-radius: 20px;
}

.tp-bg {
  transition-property: background;
  background: linear-gradient(135deg, #22c55e, #4ade80);
}
.tp-bg:hover {
  background: linear-gradient(135deg, #f97316, #fb923c);
  transform: translateY(-6px);
}

.tp-transform {
  transition-property: transform;
  background: linear-gradient(135deg, #a855f7, #c084fc);
}
.tp-transform:hover {
  background: linear-gradient(135deg, #f97316, #fb923c);
  transform: translateY(-8px) scale(1.04);
}

.tp-opacity {
  transition-property: opacity;
  background: linear-gradient(135deg, #ec4899, #f472b6);
}
.tp-opacity:hover {
  opacity: 0.4;
  transform: scale(1.05);
}

.tp-two {
  transition-property: background, transform;
  background: linear-gradient(135deg, #14b8a6, #2dd4bf);
}
.tp-two:hover {
  background: linear-gradient(135deg, #264de4, #2965f1);
  transform: translateY(-6px);
}

.tp-none {
  transition-property: none;
  background: rgba(255,255,255,0.08);
}
.tp-none:hover {
  background: linear-gradient(135deg, #f97316, #fb923c);
  transform: translateY(-6px);
}`,
  },

  // ─── 83. transition-duration ────────────────────────────────────
  {
    property: "transition-duration",
    description: "Sets how long a transition takes to complete. Accepts values in seconds (s) or milliseconds (ms). Default is 0s which means instant change.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>transition-duration — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>transition-duration</span></h1>
    <p class="page-desc">
      Controls how long the transition takes. Hover each box — they all change the same way but at different speeds.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">transition-duration: 0s — instant (no transition)</p>
        <div class="box td-0s">Hover — 0s (instant)</div>
      </div>

      <div class="demo-card">
        <p class="section-label">transition-duration: 0.1s — very fast</p>
        <div class="box td-01s">Hover — 0.1s</div>
      </div>

      <div class="demo-card">
        <p class="section-label">transition-duration: 0.3s — fast (standard UI)</p>
        <div class="box td-03s">Hover — 0.3s</div>
      </div>

      <div class="demo-card">
        <p class="section-label">transition-duration: 0.8s — medium</p>
        <div class="box td-08s">Hover — 0.8s</div>
      </div>

      <div class="demo-card">
        <p class="section-label">transition-duration: 2s — slow</p>
        <div class="box td-2s">Hover — 2s</div>
      </div>

      <div class="demo-card">
        <p class="section-label">transition-duration: 300ms — milliseconds syntax</p>
        <div class="box td-300ms">Hover — 300ms</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 700px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 0.85rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  min-width: 240px;
}

.box {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  padding: 0.7rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  transition-property: background, transform;
  transition-timing-function: ease;
  white-space: nowrap;
}

.box:hover {
  background: linear-gradient(135deg, #f97316, #fb923c);
  transform: translateY(-6px);
}

.td-0s    { transition-duration: 0s; }
.td-01s   { transition-duration: 0.1s; background: linear-gradient(135deg, #ef4444, #f87171); }
.td-03s   { transition-duration: 0.3s; background: linear-gradient(135deg, #f97316, #fb923c); }
.td-08s   { transition-duration: 0.8s; background: linear-gradient(135deg, #22c55e, #4ade80); }
.td-2s    { transition-duration: 2s;   background: linear-gradient(135deg, #a855f7, #c084fc); }
.td-300ms { transition-duration: 300ms; background: linear-gradient(135deg, #14b8a6, #2dd4bf); }`,
  },

  // ─── 84. transition-timing-function ────────────────────────────
  {
    property: "transition-timing-function",
    description: "Defines the speed curve of a transition — how it accelerates and decelerates. Same values as animation-timing-function: ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier().",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>transition-timing-function — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>transition-timing-function</span></h1>
    <p class="page-desc">
      Controls the speed curve of the transition. Hover each row — all move the same distance but feel different.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">ease — slow start, fast middle, slow end (default)</p>
        <div class="track"><div class="ball ttf-ease">ease</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">linear — constant speed</p>
        <div class="track"><div class="ball ttf-linear">linear</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">ease-in — slow start, fast end</p>
        <div class="track"><div class="ball ttf-ease-in">ease-in</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">ease-out — fast start, slow end</p>
        <div class="track"><div class="ball ttf-ease-out">ease-out</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">ease-in-out — slow start and end</p>
        <div class="track"><div class="ball ttf-ease-in-out">ease-in-out</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">cubic-bezier(0.34, 1.56, 0.64, 1) — bouncy overshoot</p>
        <div class="track"><div class="ball ttf-bounce">bounce</div></div>
      </div>

      <div class="demo-card">
        <p class="section-label">steps(6, end) — stepped / choppy</p>
        <div class="track"><div class="ball ttf-steps">steps</div></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.6rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 0.85rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.track {
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.4rem 0.5rem;
  height: 44px;
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
}

.ball {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.45rem 0.85rem;
  border-radius: 6px;
  white-space: nowrap;
  transition-property: transform;
  transition-duration: 0.8s;
  transform: translateX(0);
}

.track:hover .ball {
  transform: translateX(300px);
}

.ttf-ease        { transition-timing-function: ease; }
.ttf-linear      { transition-timing-function: linear;       background: linear-gradient(135deg, #f97316, #fb923c); }
.ttf-ease-in     { transition-timing-function: ease-in;      background: linear-gradient(135deg, #22c55e, #4ade80); }
.ttf-ease-out    { transition-timing-function: ease-out;     background: linear-gradient(135deg, #a855f7, #c084fc); }
.ttf-ease-in-out { transition-timing-function: ease-in-out;  background: linear-gradient(135deg, #ec4899, #f472b6); }
.ttf-bounce      { transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1); background: linear-gradient(135deg, #14b8a6, #2dd4bf); }
.ttf-steps       { transition-timing-function: steps(6, end); background: linear-gradient(135deg, #eab308, #fde047); color: #1a1a2e; }`,
  },

  // ─── 85. transition-delay ───────────────────────────────────────
  {
    property: "transition-delay",
    description: "Sets how long to wait before the transition starts after the triggering event. Positive values delay the start. Negative values start the transition mid-way.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>transition-delay — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>transition-delay</span></h1>
    <p class="page-desc">
      Waits before starting the transition. Hover the container below — each item starts its transition at a different time creating a stagger effect.
    </p>

    <div class="demo-col">
      <div class="demo-card">
        <p class="section-label">Staggered menu — each item has increasing transition-delay</p>
        <div class="stagger-menu">
          <div class="menu-item tdelay-0">🏠 Home — delay: 0s</div>
          <div class="menu-item tdelay-1">📚 Courses — delay: 0.1s</div>
          <div class="menu-item tdelay-2">🎨 CSS — delay: 0.2s</div>
          <div class="menu-item tdelay-3">⚡ JS — delay: 0.3s</div>
          <div class="menu-item tdelay-4">🐍 Python — delay: 0.4s</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="section-label">transition-delay: 0s — starts immediately on hover</p>
        <div class="box tde-0s">Hover — 0s delay</div>
      </div>

      <div class="demo-card">
        <p class="section-label">transition-delay: 0.5s — waits half a second</p>
        <div class="box tde-05s">Hover — 0.5s delay</div>
      </div>

      <div class="demo-card">
        <p class="section-label">transition-delay: 1s — waits 1 full second</p>
        <div class="box tde-1s">Hover — 1s delay</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 700px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span { color: #264de4; }

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.section-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

/* Stagger menu */
.stagger-menu {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  cursor: pointer;
}

.menu-item {
  background: rgba(38,77,228,0.15);
  border: 1px solid rgba(38,77,228,0.3);
  color: #a5b4fc;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.65rem 1rem;
  border-radius: 8px;
  transition-property: background, transform, padding-left;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}

.stagger-menu:hover .menu-item {
  background: linear-gradient(90deg, #264de4, #2965f1);
  color: #fff;
  padding-left: 1.75rem;
}

.tdelay-0 { transition-delay: 0s; }
.tdelay-1 { transition-delay: 0.1s; }
.tdelay-2 { transition-delay: 0.2s; }
.tdelay-3 { transition-delay: 0.3s; }
.tdelay-4 { transition-delay: 0.4s; }

/* Individual boxes */
.box {
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 1rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  transition-property: background, transform;
  transition-duration: 0.4s;
  transition-timing-function: ease;
}

.box:hover {
  background: linear-gradient(135deg, #f97316, #fb923c);
  transform: translateY(-6px);
}

.tde-0s  { transition-delay: 0s; }
.tde-05s { transition-delay: 0.5s; background: linear-gradient(135deg, #22c55e, #4ade80); }
.tde-1s  { transition-delay: 1s;   background: linear-gradient(135deg, #a855f7, #c084fc); }`,
  },

    // ─── 86. font ───────────────────────────────────────────────────
  {
    property: "font",
    description: "Shorthand property to set font-style, font-variant, font-weight, font-size, line-height, and font-family in one declaration.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>font — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>font</span> Property</h1>
    <p class="page-desc">Shorthand to set multiple font properties at once.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">font: bold 24px Arial</p>
        <p class="box f1">Hello World</p>
      </div>
      <div class="demo-card">
        <p class="label">font: italic 18px Georgia</p>
        <p class="box f2">Hello World</p>
      </div>
      <div class="demo-card">
        <p class="label">font: 900 32px/1.5 monospace</p>
        <p class="box f3">Hello World</p>
      </div>
      <div class="demo-card">
        <p class="label">font: small-caps bold 20px serif</p>
        <p class="box f4">Hello World</p>
      </div>
      <div class="demo-card">
        <p class="label">font: italic bold 16px/2 cursive</p>
        <p class="box f5">Hello World</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
}

.f1 { font: bold 24px Arial, sans-serif; }
.f2 { font: italic 18px Georgia, serif; }
.f3 { font: 900 32px/1.5 monospace; }
.f4 { font: small-caps bold 20px serif; }
.f5 { font: italic bold 16px/2 cursive; }`,
  },

    // ─── 87. font-family ────────────────────────────────────────────
  {
    property: "font-family",
    description: "Specifies the typeface for text. You can list multiple fonts as a fallback stack, ending with a generic family like serif, sans-serif, or monospace.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>font-family — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>font-family</span> Property</h1>
    <p class="page-desc">Choose the typeface for your text using font stacks.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">font-family: Arial, sans-serif</p>
        <p class="box f1">The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div class="demo-card">
        <p class="label">font-family: Georgia, serif</p>
        <p class="box f2">The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div class="demo-card">
        <p class="label">font-family: monospace</p>
        <p class="box f3">The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div class="demo-card">
        <p class="label">font-family: cursive</p>
        <p class="box f4">The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div class="demo-card">
        <p class="label">font-family: fantasy</p>
        <p class="box f5">The quick brown fox jumps over the lazy dog.</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  line-height: 1.6;
}

.f1 { font-family: Arial, sans-serif; }
.f2 { font-family: Georgia, serif; }
.f3 { font-family: monospace; }
.f4 { font-family: cursive; }
.f5 { font-family: fantasy; }`,
  },

    // ─── 88. font-size ──────────────────────────────────────────────
  {
    property: "font-size",
    description: "Sets the size of the font. Accepts px, em, rem, %, vw, or keywords like small, medium, large, x-large.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>font-size — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>font-size</span> Property</h1>
    <p class="page-desc">Control how big or small your text appears.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">font-size: 12px</p>
        <p class="box f1">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">font-size: 18px</p>
        <p class="box f2">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">font-size: 1.5rem</p>
        <p class="box f3">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">font-size: 2em</p>
        <p class="box f4">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">font-size: x-large</p>
        <p class="box f5">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">font-size: 4vw</p>
        <p class="box f6">Sample Text</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-family: Arial, sans-serif;
}

.f1 { font-size: 12px; }
.f2 { font-size: 18px; }
.f3 { font-size: 1.5rem; }
.f4 { font-size: 2em; }
.f5 { font-size: x-large; }
.f6 { font-size: 4vw; }`,
  },

    // ─── 89. font-weight ────────────────────────────────────────────
  {
    property: "font-weight",
    description: "Sets the thickness of the font. Values range from 100 (thin) to 900 (black), or use keywords like normal (400) and bold (700).",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>font-weight — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>font-weight</span> Property</h1>
    <p class="page-desc">Control the boldness or thickness of your text.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">font-weight: 100</p>
        <p class="box f1">Thin Text</p>
      </div>
      <div class="demo-card">
        <p class="label">font-weight: 300</p>
        <p class="box f2">Light Text</p>
      </div>
      <div class="demo-card">
        <p class="label">font-weight: normal (400)</p>
        <p class="box f3">Normal Text</p>
      </div>
      <div class="demo-card">
        <p class="label">font-weight: 600</p>
        <p class="box f4">Semi-Bold Text</p>
      </div>
      <div class="demo-card">
        <p class="label">font-weight: bold (700)</p>
        <p class="box f5">Bold Text</p>
      </div>
      <div class="demo-card">
        <p class="label">font-weight: 900</p>
        <p class="box f6">Black Text</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.2rem;
  font-family: Arial, sans-serif;
}

.f1 { font-weight: 100; }
.f2 { font-weight: 300; }
.f3 { font-weight: normal; }
.f4 { font-weight: 600; }
.f5 { font-weight: bold; }
.f6 { font-weight: 900; }`,
  },

    // ─── 90. font-style ─────────────────────────────────────────────
  {
    property: "font-style",
    description: "Sets whether the text is displayed in a normal, italic, or oblique style.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>font-style — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>font-style</span> Property</h1>
    <p class="page-desc">Switch between normal, italic, and oblique text styles.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">font-style: normal</p>
        <p class="box f1">The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div class="demo-card">
        <p class="label">font-style: italic</p>
        <p class="box f2">The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div class="demo-card">
        <p class="label">font-style: oblique</p>
        <p class="box f3">The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div class="demo-card">
        <p class="label">font-style: oblique 30deg</p>
        <p class="box f4">The quick brown fox jumps over the lazy dog.</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Georgia, serif;
  line-height: 1.6;
}

.f1 { font-style: normal; }
.f2 { font-style: italic; }
.f3 { font-style: oblique; }
.f4 { font-style: oblique 30deg; }`,
  },

    // ─── 91. font-variant ───────────────────────────────────────────
  {
    property: "font-variant",
    description: "Controls whether text is displayed in small-caps or normal form. Small-caps renders lowercase letters as smaller uppercase letters.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>font-variant — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>font-variant</span> Property</h1>
    <p class="page-desc">Switch between normal and small-caps text rendering.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">font-variant: normal</p>
        <p class="box f1">Hello World — css in my style</p>
      </div>
      <div class="demo-card">
        <p class="label">font-variant: small-caps</p>
        <p class="box f2">Hello World — css in my style</p>
      </div>
      <div class="demo-card">
        <p class="label">font-variant: all-small-caps</p>
        <p class="box f3">Hello World — css in my style</p>
      </div>
      <div class="demo-card">
        <p class="label">font-variant: petite-caps</p>
        <p class="box f4">Hello World — css in my style</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.1rem;
  font-family: Georgia, serif;
}

.f1 { font-variant: normal; }
.f2 { font-variant: small-caps; }
.f3 { font-variant: all-small-caps; }
.f4 { font-variant: petite-caps; }`,
  },

    // ─── 92. font-stretch ───────────────────────────────────────────
  {
    property: "font-stretch",
    description: "Selects a normal, condensed, or expanded face from a font family. Only works if the font includes those variations.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>font-stretch — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>font-stretch</span> Property</h1>
    <p class="page-desc">Widen or condense text using font-stretch (requires a variable or multi-face font).</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">font-stretch: ultra-condensed</p>
        <p class="box f1">The quick brown fox</p>
      </div>
      <div class="demo-card">
        <p class="label">font-stretch: condensed</p>
        <p class="box f2">The quick brown fox</p>
      </div>
      <div class="demo-card">
        <p class="label">font-stretch: normal</p>
        <p class="box f3">The quick brown fox</p>
      </div>
      <div class="demo-card">
        <p class="label">font-stretch: expanded</p>
        <p class="box f4">The quick brown fox</p>
      </div>
      <div class="demo-card">
        <p class="label">font-stretch: ultra-expanded</p>
        <p class="box f5">The quick brown fox</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.1rem;
  font-family: Arial, sans-serif;
}

.f1 { font-stretch: ultra-condensed; }
.f2 { font-stretch: condensed; }
.f3 { font-stretch: normal; }
.f4 { font-stretch: expanded; }
.f5 { font-stretch: ultra-expanded; }`,
  },

    // ─── 93. line-height ────────────────────────────────────────────
  {
    property: "line-height",
    description: "Sets the height of each line of text. Accepts unitless numbers (recommended), px, em, rem, or %. Controls vertical spacing between lines.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>line-height — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>line-height</span> Property</h1>
    <p class="page-desc">Control the vertical spacing between lines of text.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">line-height: 1</p>
        <p class="box f1">The quick brown fox jumps over the lazy dog. More text to show line spacing clearly.</p>
      </div>
      <div class="demo-card">
        <p class="label">line-height: 1.5</p>
        <p class="box f2">The quick brown fox jumps over the lazy dog. More text to show line spacing clearly.</p>
      </div>
      <div class="demo-card">
        <p class="label">line-height: 2</p>
        <p class="box f3">The quick brown fox jumps over the lazy dog. More text to show line spacing clearly.</p>
      </div>
      <div class="demo-card">
        <p class="label">line-height: 32px</p>
        <p class="box f4">The quick brown fox jumps over the lazy dog. More text to show line spacing clearly.</p>
      </div>
      <div class="demo-card">
        <p class="label">line-height: normal</p>
        <p class="box f5">The quick brown fox jumps over the lazy dog. More text to show line spacing clearly.</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
}

.f1 { line-height: 1; }
.f2 { line-height: 1.5; }
.f3 { line-height: 2; }
.f4 { line-height: 32px; }
.f5 { line-height: normal; }`,
  },

    // ─── 94. letter-spacing ─────────────────────────────────────────
  {
    property: "letter-spacing",
    description: "Sets the spacing between individual characters. Positive values spread letters apart; negative values bring them closer together.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>letter-spacing — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>letter-spacing</span> Property</h1>
    <p class="page-desc">Adjust the space between each character in your text.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">letter-spacing: -2px</p>
        <p class="box f1">HELLO WORLD</p>
      </div>
      <div class="demo-card">
        <p class="label">letter-spacing: normal</p>
        <p class="box f2">HELLO WORLD</p>
      </div>
      <div class="demo-card">
        <p class="label">letter-spacing: 2px</p>
        <p class="box f3">HELLO WORLD</p>
      </div>
      <div class="demo-card">
        <p class="label">letter-spacing: 5px</p>
        <p class="box f4">HELLO WORLD</p>
      </div>
      <div class="demo-card">
        <p class="label">letter-spacing: 10px</p>
        <p class="box f5">HELLO WORLD</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.1rem;
  font-family: Arial, sans-serif;
}

.f1 { letter-spacing: -2px; }
.f2 { letter-spacing: normal; }
.f3 { letter-spacing: 2px; }
.f4 { letter-spacing: 5px; }
.f5 { letter-spacing: 10px; }`,
  },

    // ─── 95. word-spacing ───────────────────────────────────────────
  {
    property: "word-spacing",
    description: "Sets the spacing between words. Positive values increase the gap; negative values reduce it. Accepts px, em, rem, or normal.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>word-spacing — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>word-spacing</span> Property</h1>
    <p class="page-desc">Control the space between words in a line of text.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">word-spacing: -4px</p>
        <p class="box f1">The quick brown fox jumps</p>
      </div>
      <div class="demo-card">
        <p class="label">word-spacing: normal</p>
        <p class="box f2">The quick brown fox jumps</p>
      </div>
      <div class="demo-card">
        <p class="label">word-spacing: 8px</p>
        <p class="box f3">The quick brown fox jumps</p>
      </div>
      <div class="demo-card">
        <p class="label">word-spacing: 16px</p>
        <p class="box f4">The quick brown fox jumps</p>
      </div>
      <div class="demo-card">
        <p class="label">word-spacing: 1.5em</p>
        <p class="box f5">The quick brown fox jumps</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.1rem;
  font-family: Arial, sans-serif;
}

.f1 { word-spacing: -4px; }
.f2 { word-spacing: normal; }
.f3 { word-spacing: 8px; }
.f4 { word-spacing: 16px; }
.f5 { word-spacing: 1.5em; }`,
  },

    // ─── 96. text-align ─────────────────────────────────────────────
  {
    property: "text-align",
    description: "Sets the horizontal alignment of text inside a block element. Values: left, right, center, justify, start, end.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>text-align — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>text-align</span> Property</h1>
    <p class="page-desc">Control the horizontal alignment of text within its container.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">text-align: left</p>
        <p class="box f1">The quick brown fox jumps over the lazy dog near the riverbank.</p>
      </div>
      <div class="demo-card">
        <p class="label">text-align: center</p>
        <p class="box f2">The quick brown fox jumps over the lazy dog near the riverbank.</p>
      </div>
      <div class="demo-card">
        <p class="label">text-align: right</p>
        <p class="box f3">The quick brown fox jumps over the lazy dog near the riverbank.</p>
      </div>
      <div class="demo-card">
        <p class="label">text-align: justify</p>
        <p class="box f4">The quick brown fox jumps over the lazy dog near the riverbank. Every word is spaced evenly.</p>
      </div>
      <div class="demo-card">
        <p class="label">text-align: start</p>
        <p class="box f5">The quick brown fox jumps over the lazy dog near the riverbank.</p>
      </div>
      <div class="demo-card">
        <p class="label">text-align: end</p>
        <p class="box f6">The quick brown fox jumps over the lazy dog near the riverbank.</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.f1 { text-align: left; }
.f2 { text-align: center; }
.f3 { text-align: right; }
.f4 { text-align: justify; }
.f5 { text-align: start; }
.f6 { text-align: end; }`,
  },

    // ─── 97. text-decoration ────────────────────────────────────────
  {
    property: "text-decoration",
    description: "Shorthand for adding decorative lines to text. Combines text-decoration-line, text-decoration-color, text-decoration-style, and text-decoration-thickness.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>text-decoration — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>text-decoration</span> Property</h1>
    <p class="page-desc">Add underlines, overlines, and strikethroughs to text.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">text-decoration: none</p>
        <p class="box f1">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration: underline</p>
        <p class="box f2">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration: overline</p>
        <p class="box f3">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration: line-through</p>
        <p class="box f4">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">underline wavy #a78bfa</p>
        <p class="box f5">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">underline dashed red 2px</p>
        <p class="box f6">Sample Text</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.2rem;
  font-family: Arial, sans-serif;
}

.f1 { text-decoration: none; }
.f2 { text-decoration: underline; }
.f3 { text-decoration: overline; }
.f4 { text-decoration: line-through; }
.f5 { text-decoration: underline wavy #a78bfa; }
.f6 { text-decoration: underline dashed red 2px; }`,
  },

    // ─── 98. text-transform ─────────────────────────────────────────
  {
    property: "text-transform",
    description: "Controls the capitalization of text. Values: none, uppercase, lowercase, capitalize, full-width.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>text-transform — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>text-transform</span> Property</h1>
    <p class="page-desc">Change the capitalization of text without editing the HTML.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">text-transform: none</p>
        <p class="box f1">hello world from css</p>
      </div>
      <div class="demo-card">
        <p class="label">text-transform: uppercase</p>
        <p class="box f2">hello world from css</p>
      </div>
      <div class="demo-card">
        <p class="label">text-transform: lowercase</p>
        <p class="box f3">HELLO WORLD FROM CSS</p>
      </div>
      <div class="demo-card">
        <p class="label">text-transform: capitalize</p>
        <p class="box f4">hello world from css</p>
      </div>
      <div class="demo-card">
        <p class="label">text-transform: full-width</p>
        <p class="box f5">hello world from css</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.1rem;
  font-family: Arial, sans-serif;
}

.f1 { text-transform: none; }
.f2 { text-transform: uppercase; }
.f3 { text-transform: lowercase; }
.f4 { text-transform: capitalize; }
.f5 { text-transform: full-width; }`,
  },

    // ─── 99. text-indent ────────────────────────────────────────────
  {
    property: "text-indent",
    description: "Indents the first line of a text block. Accepts px, em, rem, or %. Negative values create a hanging indent.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>text-indent — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>text-indent</span> Property</h1>
    <p class="page-desc">Indent the first line of a paragraph, just like a book.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">text-indent: 0</p>
        <p class="box f1">The quick brown fox jumps over the lazy dog. This is a longer paragraph to show the indent effect clearly on the first line only.</p>
      </div>
      <div class="demo-card">
        <p class="label">text-indent: 30px</p>
        <p class="box f2">The quick brown fox jumps over the lazy dog. This is a longer paragraph to show the indent effect clearly on the first line only.</p>
      </div>
      <div class="demo-card">
        <p class="label">text-indent: 2em</p>
        <p class="box f3">The quick brown fox jumps over the lazy dog. This is a longer paragraph to show the indent effect clearly on the first line only.</p>
      </div>
      <div class="demo-card">
        <p class="label">text-indent: 10% (hanging)</p>
        <p class="box f4">The quick brown fox jumps over the lazy dog. This is a longer paragraph to show the indent effect clearly on the first line only.</p>
      </div>
      <div class="demo-card">
        <p class="label">text-indent: -20px (hanging)</p>
        <p class="box f5">The quick brown fox jumps over the lazy dog. This is a longer paragraph to show the hanging indent effect on the first line.</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.f1 { text-indent: 0; }
.f2 { text-indent: 30px; }
.f3 { text-indent: 2em; }
.f4 { text-indent: 10%; }
.f5 { text-indent: -20px; padding-left: 20px; }`,
  },

    // ─── 100. text-shadow ───────────────────────────────────────────
  {
    property: "text-shadow",
    description: "Adds one or more shadow effects to text. Syntax: offset-x offset-y blur-radius color. Multiple shadows can be comma-separated.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>text-shadow — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>text-shadow</span> Property</h1>
    <p class="page-desc">Add depth and glow effects to text using shadows.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">text-shadow: none</p>
        <p class="box f1">Shadow Text</p>
      </div>
      <div class="demo-card">
        <p class="label">2px 2px 4px #000</p>
        <p class="box f2">Shadow Text</p>
      </div>
      <div class="demo-card">
        <p class="label">0 0 10px #a78bfa (glow)</p>
        <p class="box f3">Shadow Text</p>
      </div>
      <div class="demo-card">
        <p class="label">3px 3px 0 #ff6b6b (hard)</p>
        <p class="box f4">Shadow Text</p>
      </div>
      <div class="demo-card">
        <p class="label">multiple shadows</p>
        <p class="box f5">Shadow Text</p>
      </div>
      <div class="demo-card">
        <p class="label">neon glow effect</p>
        <p class="box f6">Shadow Text</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.4rem;
  font-family: Arial, sans-serif;
  font-weight: bold;
}

.f1 { text-shadow: none; }
.f2 { text-shadow: 2px 2px 4px #000; }
.f3 { text-shadow: 0 0 10px #a78bfa; }
.f4 { text-shadow: 3px 3px 0 #ff6b6b; }
.f5 { text-shadow: 1px 1px 2px #000, 0 0 8px #a78bfa, 0 0 20px #7c6fcd; }
.f6 {
  color: #fff;
  text-shadow:
    0 0 5px #fff,
    0 0 10px #a78bfa,
    0 0 20px #a78bfa,
    0 0 40px #7c6fcd;
}`,
  },

    // ─── 101. text-overflow ─────────────────────────────────────────
  {
    property: "text-overflow",
    description: "Specifies how overflowed text that is not displayed should be signaled to the user. Requires overflow: hidden and white-space: nowrap to work.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>text-overflow — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>text-overflow</span> Property</h1>
    <p class="page-desc">Control what happens when text overflows its container.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">text-overflow: clip</p>
        <p class="box f1">This is a very long text that will overflow its container and get clipped.</p>
      </div>
      <div class="demo-card">
        <p class="label">text-overflow: ellipsis</p>
        <p class="box f2">This is a very long text that will overflow its container and show ellipsis.</p>
      </div>
      <div class="demo-card">
        <p class="label">text-overflow: "---" (custom)</p>
        <p class="box f3">This is a very long text that will overflow its container with a custom string.</p>
      </div>
      <div class="demo-card">
        <p class="label">ellipsis on hover reveals full</p>
        <p class="box f4 hoverable" title="This is a very long text that will overflow its container and show ellipsis.">This is a very long text that will overflow its container and show ellipsis.</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}

.f1 { text-overflow: clip; }
.f2 { text-overflow: ellipsis; }
.f3 { text-overflow: "---"; }
.f4 { text-overflow: ellipsis; cursor: pointer; }
.hoverable:hover {
  white-space: normal;
  overflow: visible;
}`,
  },

    // ─── 102. white-space ───────────────────────────────────────────
  {
    property: "white-space",
    description: "Controls how white space and line breaks inside an element are handled. Values: normal, nowrap, pre, pre-wrap, pre-line, break-spaces.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>white-space — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>white-space</span> Property</h1>
    <p class="page-desc">Control how spaces and line breaks are handled in text.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">white-space: normal</p>
        <p class="box f1">Hello    World
This is    a new line in HTML.</p>
      </div>
      <div class="demo-card">
        <p class="label">white-space: nowrap</p>
        <p class="box f2">This text will not wrap no matter how long it gets inside the container.</p>
      </div>
      <div class="demo-card">
        <p class="label">white-space: pre</p>
        <p class="box f3">Hello    World
This    preserves spaces.</p>
      </div>
      <div class="demo-card">
        <p class="label">white-space: pre-wrap</p>
        <p class="box f4">Hello    World
This wraps    and preserves spaces.</p>
      </div>
      <div class="demo-card">
        <p class="label">white-space: pre-line</p>
        <p class="box f5">Hello    World
This collapses    spaces but keeps newlines.</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
  overflow: hidden;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.95rem;
  font-family: monospace;
  overflow: hidden;
}

.f1 { white-space: normal; }
.f2 { white-space: nowrap; }
.f3 { white-space: pre; }
.f4 { white-space: pre-wrap; }
.f5 { white-space: pre-line; }`,
  },

    // ─── 103. word-break ────────────────────────────────────────────
  {
    property: "word-break",
    description: "Specifies how words should break when they reach the end of a line. Useful for long unbreakable strings like URLs or code.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>word-break — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>word-break</span> Property</h1>
    <p class="page-desc">Control where long words or strings break across lines.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">word-break: normal</p>
        <p class="box f1">Thisisaverylongwordthatwillnotbreakautomaticallyunlessyoutellit.</p>
      </div>
      <div class="demo-card">
        <p class="label">word-break: break-all</p>
        <p class="box f2">Thisisaverylongwordthatwillbreakautomaticallyatanycharacterposition.</p>
      </div>
      <div class="demo-card">
        <p class="label">word-break: keep-all</p>
        <p class="box f3">This text keeps all words together and only breaks at spaces or hyphens.</p>
      </div>
      <div class="demo-card">
        <p class="label">word-break: break-word</p>
        <p class="box f4">https://www.example.com/this/is/a/very/long/url/that/needs/to/break/nicely</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.95rem;
  font-family: monospace;
  width: 100%;
}

.f1 { word-break: normal; }
.f2 { word-break: break-all; }
.f3 { word-break: keep-all; }
.f4 { word-break: break-word; }`,
  },

    // ─── 104. word-wrap ─────────────────────────────────────────────
  {
    property: "word-wrap",
    description: "An alias for overflow-wrap. Allows long words to be broken and wrapped onto the next line when they overflow their container.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>word-wrap — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>word-wrap</span> Property</h1>
    <p class="page-desc">Allow long unbreakable words to wrap onto the next line.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">word-wrap: normal</p>
        <p class="box f1">Thisisanextremelylongwordthatwilloverflowthecontainerwithoutbreaking.</p>
      </div>
      <div class="demo-card">
        <p class="label">word-wrap: break-word</p>
        <p class="box f2">Thisisanextremelylongwordthatwillnowbreakandwrapintothecontainerproperly.</p>
      </div>
      <div class="demo-card">
        <p class="label">break-word with normal text</p>
        <p class="box f3">This is normal text mixed with aVeryLongUnbreakableWordThatShouldWrap inside the box.</p>
      </div>
      <div class="demo-card">
        <p class="label">break-word with URL</p>
        <p class="box f4">Visit https://www.averylongdomainname.com/with/a/very/deep/path/that/overflows for more info.</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.95rem;
  font-family: monospace;
  width: 100%;
  overflow: hidden;
}

.f1 { word-wrap: normal; }
.f2 { word-wrap: break-word; }
.f3 { word-wrap: break-word; }
.f4 { word-wrap: break-word; }`,
  },

    // ─── 105. overflow-wrap ─────────────────────────────────────────
  {
    property: "overflow-wrap",
    description: "The modern standard name for word-wrap. Controls whether the browser can break a long word to prevent overflow. Values: normal, break-word, anywhere.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>overflow-wrap — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>overflow-wrap</span> Property</h1>
    <p class="page-desc">The modern way to handle long word overflow in containers.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">overflow-wrap: normal</p>
        <p class="box f1">Thisisanextremelylongwordthatwilloverflowthecontainerwithoutbreaking.</p>
      </div>
      <div class="demo-card">
        <p class="label">overflow-wrap: break-word</p>
        <p class="box f2">Thisisanextremelylongwordthatwillnowbreakandwrapintothecontainerproperly.</p>
      </div>
      <div class="demo-card">
        <p class="label">overflow-wrap: anywhere</p>
        <p class="box f3">Thisisanextremelylongwordthatwillbreakanywhereincludingmidwordifneeded.</p>
      </div>
      <div class="demo-card">
        <p class="label">anywhere vs break-word</p>
        <div class="compare">
          <p class="box f4">break-word: LongWordHere</p>
          <p class="box f5">anywhere: LongWordHere</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.95rem;
  font-family: monospace;
  width: 100%;
  overflow: hidden;
  margin-bottom: 8px;
}

.compare { display: flex; flex-direction: column; gap: 8px; }

.f1 { overflow-wrap: normal; }
.f2 { overflow-wrap: break-word; }
.f3 { overflow-wrap: anywhere; }
.f4 { overflow-wrap: break-word; }
.f5 { overflow-wrap: anywhere; }`,
  },

    // ─── 106. list-style ────────────────────────────────────────────
  {
    property: "list-style",
    description: "Shorthand for list-style-type, list-style-position, and list-style-image. Sets the marker style for list items in one declaration.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>list-style — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>list-style</span> Property</h1>
    <p class="page-desc">Shorthand to set all list marker properties at once.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">list-style: disc</p>
        <ul class="box f1">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
      <div class="demo-card">
        <p class="label">list-style: square inside</p>
        <ul class="box f2">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
      <div class="demo-card">
        <p class="label">list-style: decimal outside</p>
        <ol class="box f3">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ol>
      </div>
      <div class="demo-card">
        <p class="label">list-style: none</p>
        <ul class="box f4">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
      <div class="demo-card">
        <p class="label">list-style: circle inside</p>
        <ul class="box f5">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px 14px 36px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  line-height: 2;
}

.f1 { list-style: disc; }
.f2 { list-style: square inside; padding-left: 18px; }
.f3 { list-style: decimal outside; }
.f4 { list-style: none; padding-left: 18px; }
.f5 { list-style: circle inside; padding-left: 18px; }`,
  },

    // ─── 107. list-style-type ───────────────────────────────────────
  {
    property: "list-style-type",
    description: "Sets the marker type for list items. Values include disc, circle, square, decimal, lower-alpha, upper-roman, none, and more.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>list-style-type — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>list-style-type</span> Property</h1>
    <p class="page-desc">Choose the bullet or numbering style for your list items.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">list-style-type: disc</p>
        <ul class="box f1"><li>Item One</li><li>Item Two</li><li>Item Three</li></ul>
      </div>
      <div class="demo-card">
        <p class="label">list-style-type: circle</p>
        <ul class="box f2"><li>Item One</li><li>Item Two</li><li>Item Three</li></ul>
      </div>
      <div class="demo-card">
        <p class="label">list-style-type: square</p>
        <ul class="box f3"><li>Item One</li><li>Item Two</li><li>Item Three</li></ul>
      </div>
      <div class="demo-card">
        <p class="label">list-style-type: decimal</p>
        <ol class="box f4"><li>Item One</li><li>Item Two</li><li>Item Three</li></ol>
      </div>
      <div class="demo-card">
        <p class="label">list-style-type: lower-alpha</p>
        <ol class="box f5"><li>Item One</li><li>Item Two</li><li>Item Three</li></ol>
      </div>
      <div class="demo-card">
        <p class="label">list-style-type: upper-roman</p>
        <ol class="box f6"><li>Item One</li><li>Item Two</li><li>Item Three</li></ol>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px 14px 36px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  line-height: 2;
}

.f1 { list-style-type: disc; }
.f2 { list-style-type: circle; }
.f3 { list-style-type: square; }
.f4 { list-style-type: decimal; }
.f5 { list-style-type: lower-alpha; }
.f6 { list-style-type: upper-roman; }`,
  },

    // ─── 108. list-style-position ───────────────────────────────────
  {
    property: "list-style-position",
    description: "Sets whether the list marker appears inside or outside the list item's content box. outside (default) keeps the marker in the margin; inside places it within the content flow.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>list-style-position — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>list-style-position</span> Property</h1>
    <p class="page-desc">Control whether the list marker sits inside or outside the content box.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">list-style-position: outside (default)</p>
        <ul class="box f1">
          <li>This is a list item with enough text to wrap onto a second line so you can see the outside position clearly.</li>
          <li>Second item</li>
        </ul>
      </div>
      <div class="demo-card">
        <p class="label">list-style-position: inside</p>
        <ul class="box f2">
          <li>This is a list item with enough text to wrap onto a second line so you can see the inside position clearly.</li>
          <li>Second item</li>
        </ul>
      </div>
      <div class="demo-card">
        <p class="label">outside — numbered list</p>
        <ol class="box f3">
          <li>First item wraps to show outside marker alignment clearly.</li>
          <li>Second item</li>
        </ol>
      </div>
      <div class="demo-card">
        <p class="label">inside — numbered list</p>
        <ol class="box f4">
          <li>First item wraps to show inside marker alignment clearly.</li>
          <li>Second item</li>
        </ol>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.95rem;
  font-family: Arial, sans-serif;
  line-height: 1.8;
}

.f1 { list-style-position: outside; padding-left: 36px; }
.f2 { list-style-position: inside; padding-left: 18px; }
.f3 { list-style-position: outside; padding-left: 36px; }
.f4 { list-style-position: inside; padding-left: 18px; }`,
  },

    // ─── 109. list-style-image ──────────────────────────────────────
  {
    property: "list-style-image",
    description: "Replaces the default list marker with a custom image. Accepts a url() value or none. For better control over size and position, using a background-image approach is often preferred.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>list-style-image — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>list-style-image</span> Property</h1>
    <p class="page-desc">Replace the default bullet with a custom image or emoji marker.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">list-style-image: none (default)</p>
        <ul class="box f1">
          <li>HTML Basics</li>
          <li>CSS Styling</li>
          <li>JavaScript Logic</li>
        </ul>
      </div>
      <div class="demo-card">
        <p class="label">Custom emoji via ::before</p>
        <ul class="box f2">
          <li>HTML Basics</li>
          <li>CSS Styling</li>
          <li>JavaScript Logic</li>
        </ul>
      </div>
      <div class="demo-card">
        <p class="label">Arrow marker via ::before</p>
        <ul class="box f3">
          <li>HTML Basics</li>
          <li>CSS Styling</li>
          <li>JavaScript Logic</li>
        </ul>
      </div>
      <div class="demo-card">
        <p class="label">Star marker via ::before</p>
        <ul class="box f4">
          <li>HTML Basics</li>
          <li>CSS Styling</li>
          <li>JavaScript Logic</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  line-height: 2.2;
  list-style: none;
}

.f1 { list-style-image: none; list-style-type: disc; padding-left: 36px; }

.f2 li::before { content: "🚀 "; }
.f3 li::before { content: "→ "; color: #a78bfa; font-weight: bold; }
.f4 li::before { content: "★ "; color: #fbbf24; }`,
  },

    // ─── 110. cursor ────────────────────────────────────────────────
  {
    property: "cursor",
    description: "Sets the mouse cursor style when hovering over an element. Hover each box below to see the cursor change.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>cursor — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>cursor</span> Property</h1>
    <p class="page-desc">Hover over each box to see the cursor style change.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">cursor: default</p>
        <div class="box f1">Hover me</div>
      </div>
      <div class="demo-card">
        <p class="label">cursor: pointer</p>
        <div class="box f2">Hover me</div>
      </div>
      <div class="demo-card">
        <p class="label">cursor: text</p>
        <div class="box f3">Hover me</div>
      </div>
      <div class="demo-card">
        <p class="label">cursor: move</p>
        <div class="box f4">Hover me</div>
      </div>
      <div class="demo-card">
        <p class="label">cursor: not-allowed</p>
        <div class="box f5">Hover me</div>
      </div>
      <div class="demo-card">
        <p class="label">cursor: crosshair</p>
        <div class="box f6">Hover me</div>
      </div>
      <div class="demo-card">
        <p class="label">cursor: grab</p>
        <div class="box f7">Hover me</div>
      </div>
      <div class="demo-card">
        <p class="label">cursor: zoom-in</p>
        <div class="box f8">Hover me</div>
      </div>
      <div class="demo-card">
        <p class="label">cursor: wait</p>
        <div class="box f9">Hover me</div>
      </div>
      <div class="demo-card">
        <p class="label">cursor: help</p>
        <div class="box f10">Hover me</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  text-align: center;
  border: 2px solid transparent;
  transition: border-color 0.2s;
}

.box:hover { border-color: #a78bfa; }

.f1  { cursor: default; }
.f2  { cursor: pointer; }
.f3  { cursor: text; }
.f4  { cursor: move; }
.f5  { cursor: not-allowed; }
.f6  { cursor: crosshair; }
.f7  { cursor: grab; }
.f8  { cursor: zoom-in; }
.f9  { cursor: wait; }
.f10 { cursor: help; }`,
  },

    // ─── 111. pointer-events ────────────────────────────────────────
  {
    property: "pointer-events",
    description: "Controls whether an element can be the target of mouse events like clicks, hover, and drag. Setting it to none makes the element invisible to the mouse.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>pointer-events — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>pointer-events</span> Property</h1>
    <p class="page-desc">Control whether an element responds to mouse interactions.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">pointer-events: auto (default)</p>
        <button class="box f1">Click Me — Works</button>
      </div>
      <div class="demo-card">
        <p class="label">pointer-events: none</p>
        <button class="box f2">Click Me — Disabled</button>
      </div>
      <div class="demo-card">
        <p class="label">none — hover blocked</p>
        <div class="hover-wrap">
          <div class="box f3">Hover blocked by overlay</div>
          <div class="overlay">Overlay (pointer-events: none)</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">auto — link clickable</p>
        <a href="#" class="box f4">I am a clickable link</a>
      </div>
      <div class="demo-card">
        <p class="label">none — link blocked</p>
        <a href="#" class="box f5">Link blocked — not clickable</a>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  border: none;
  width: 100%;
  text-align: center;
  display: block;
  text-decoration: none;
  transition: background 0.2s;
}

.f1 {
  pointer-events: auto;
  cursor: pointer;
  background: #3b3b5e;
}
.f1:hover { background: #4c4c7a; }

.f2 {
  pointer-events: none;
  opacity: 0.4;
  cursor: not-allowed;
}

.hover-wrap { position: relative; }
.f3:hover { background: #4c4c7a; }

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(167, 139, 250, 0.15);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #a78bfa;
  pointer-events: none;
}

.f4 { pointer-events: auto; cursor: pointer; color: #a78bfa; }
.f4:hover { background: #3b3b5e; }

.f5 { pointer-events: none; opacity: 0.4; }`,
  },

    // ─── 112. user-select ───────────────────────────────────────────
  {
    property: "user-select",
    description: "Controls whether the user can select text in an element. Values: auto, none, text, all, contain.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>user-select — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>user-select</span> Property</h1>
    <p class="page-desc">Try selecting the text in each box below.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">user-select: auto (default)</p>
        <p class="box f1">Try to select this text — it works normally.</p>
      </div>
      <div class="demo-card">
        <p class="label">user-select: none</p>
        <p class="box f2">Try to select this text — you cannot select it.</p>
      </div>
      <div class="demo-card">
        <p class="label">user-select: text</p>
        <p class="box f3">Try to select this text — only text is selectable.</p>
      </div>
      <div class="demo-card">
        <p class="label">user-select: all</p>
        <p class="box f4">Click once to select ALL of this text instantly.</p>
      </div>
      <div class="demo-card">
        <p class="label">none — useful for UI buttons</p>
        <button class="box f5">Button Label (no accidental selection)</button>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  border: none;
  width: 100%;
  text-align: left;
}

.f1 { user-select: auto; }
.f2 { user-select: none; opacity: 0.6; }
.f3 { user-select: text; }
.f4 { user-select: all; background: #2e2e4e; border: 1px dashed #a78bfa; }
.f5 { user-select: none; cursor: pointer; text-align: center; }`,
  },

    // ─── 113. resize ────────────────────────────────────────────────
  {
    property: "resize",
    description: "Allows the user to resize an element by dragging its corner. Requires overflow to be set to something other than visible. Values: none, both, horizontal, vertical.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>resize — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>resize</span> Property</h1>
    <p class="page-desc">Drag the corner of each box to resize it.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">resize: none</p>
        <div class="box f1">Cannot be resized.</div>
      </div>
      <div class="demo-card">
        <p class="label">resize: both</p>
        <div class="box f2">Drag corner to resize in both directions.</div>
      </div>
      <div class="demo-card">
        <p class="label">resize: horizontal</p>
        <div class="box f3">Drag to resize horizontally only.</div>
      </div>
      <div class="demo-card">
        <p class="label">resize: vertical</p>
        <div class="box f4">Drag to resize vertically only.</div>
      </div>
      <div class="demo-card">
        <p class="label">resize: both — textarea</p>
        <textarea class="box f5" rows="3">This textarea can be resized in both directions.</textarea>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  overflow: auto;
  min-height: 80px;
  width: 100%;
  border: 1px solid #3e3e5e;
}

.f1 { resize: none; }
.f2 { resize: both; }
.f3 { resize: horizontal; }
.f4 { resize: vertical; }
.f5 { resize: both; background: #2a2a3e; color: #e2e8f0; }`,
  },

    // ─── 114. appearance ────────────────────────────────────────────
  {
    property: "appearance",
    description: "Controls the native OS/browser styling of form elements. Setting it to none removes the default platform-specific look so you can fully style the element yourself.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>appearance — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>appearance</span> Property</h1>
    <p class="page-desc">Remove or keep the native browser styling of form controls.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">appearance: auto (default button)</p>
        <button class="f1">Default Button</button>
      </div>
      <div class="demo-card">
        <p class="label">appearance: none — custom button</p>
        <button class="f2">Custom Button</button>
      </div>
      <div class="demo-card">
        <p class="label">appearance: auto (default select)</p>
        <select class="f3">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
      <div class="demo-card">
        <p class="label">appearance: none — custom select</p>
        <div class="select-wrap">
          <select class="f4">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <span class="arrow">▾</span>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">appearance: none — custom checkbox</p>
        <label class="custom-check">
          <input type="checkbox" class="f5" checked />
          <span class="checkmark"></span>
          Custom Checkbox
        </label>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.f1 {
  appearance: auto;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
}

.f2 {
  appearance: none;
  background: linear-gradient(135deg, #a78bfa, #7c6fcd);
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.2s;
}
.f2:hover { opacity: 0.85; }

.f3 {
  appearance: auto;
  padding: 8px;
  font-size: 1rem;
  width: 100%;
}

.select-wrap {
  position: relative;
  width: 100%;
}

.f4 {
  appearance: none;
  -webkit-appearance: none;
  background: #2a2a3e;
  color: #e2e8f0;
  border: 1px solid #a78bfa;
  padding: 10px 36px 10px 14px;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  cursor: pointer;
}

.arrow {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #a78bfa;
  pointer-events: none;
}

.custom-check {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 1rem;
}

.f5 {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #a78bfa;
  border-radius: 4px;
  background: #2a2a3e;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
}

.f5:checked {
  background: #a78bfa;
}

.f5:checked::after {
  content: "✓";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 13px;
  font-weight: bold;
}`,
  },






    // ─── 120. visibility ────────────────────────────────────────────
  {
    property: "visibility",
    description: "Shows or hides an element while still keeping its space in the layout. Unlike display: none, a hidden element still occupies space. Values: visible, hidden, collapse.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>visibility — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>visibility</span> Property</h1>
    <p class="page-desc">Hide elements while preserving their space in the layout.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">visibility: visible (default)</p>
        <div class="row">
          <div class="box green">Box 1</div>
          <div class="box f1">Box 2 — visible</div>
          <div class="box green">Box 3</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">visibility: hidden (space preserved)</p>
        <div class="row">
          <div class="box green">Box 1</div>
          <div class="box f2">Box 2 — hidden</div>
          <div class="box green">Box 3</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">display: none (space removed)</p>
        <div class="row">
          <div class="box green">Box 1</div>
          <div class="box f3">Box 2 — gone</div>
          <div class="box green">Box 3</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">visibility: collapse (table rows)</p>
        <table class="tbl">
          <tr class="box-row"><td>Row 1 — visible</td></tr>
          <tr class="box-row f4"><td>Row 2 — collapse</td></tr>
          <tr class="box-row"><td>Row 3 — visible</td></tr>
        </table>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.row {
  display: flex;
  gap: 8px;
}

.box {
  flex: 1;
  padding: 14px 8px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.9rem;
  font-family: Arial, sans-serif;
  text-align: center;
  background: #2a2a3e;
  border: 1px solid #3e3e5e;
}

.green { background: #1a3a2a; border-color: #34d399; color: #34d399; }

.f1 { visibility: visible; background: #3b2a5e; border-color: #a78bfa; }
.f2 { visibility: hidden; }
.f3 { display: none; }

.tbl {
  width: 100%;
  border-collapse: collapse;
}

.box-row td {
  padding: 12px 16px;
  background: #2a2a3e;
  border: 1px solid #3e3e5e;
  color: #e2e8f0;
  font-size: 0.95rem;
  border-radius: 4px;
}

.f4 { visibility: collapse; }`,
  },

    // ─── 121. opacity ───────────────────────────────────────────────
  {
    property: "opacity",
    description: "Sets the transparency level of an element and all its children. Accepts a value from 0 (fully transparent) to 1 (fully opaque). Unlike rgba(), opacity affects the entire element including text and children.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>opacity — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>opacity</span> Property</h1>
    <p class="page-desc">Control the transparency of an element and all its contents.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">opacity: 1 (fully visible)</p>
        <div class="box f1">
          <span>Hello World</span>
          <img src="https://via.placeholder.com/60x60/a78bfa/fff?text=IMG" alt="demo" />
        </div>
      </div>
      <div class="demo-card">
        <p class="label">opacity: 0.75</p>
        <div class="box f2">
          <span>Hello World</span>
          <img src="https://via.placeholder.com/60x60/a78bfa/fff?text=IMG" alt="demo" />
        </div>
      </div>
      <div class="demo-card">
        <p class="label">opacity: 0.5</p>
        <div class="box f3">
          <span>Hello World</span>
          <img src="https://via.placeholder.com/60x60/a78bfa/fff?text=IMG" alt="demo" />
        </div>
      </div>
      <div class="demo-card">
        <p class="label">opacity: 0.25</p>
        <div class="box f4">
          <span>Hello World</span>
          <img src="https://via.placeholder.com/60x60/a78bfa/fff?text=IMG" alt="demo" />
        </div>
      </div>
      <div class="demo-card">
        <p class="label">opacity: 0 (invisible)</p>
        <div class="box f5">
          <span>Hello World</span>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">opacity on hover (0.4 → 1)</p>
        <div class="box f6">Hover Me</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #3b2a5e;
  padding: 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 70px;
}

.box img { border-radius: 6px; width: 48px; height: 48px; }

.f1 { opacity: 1; }
.f2 { opacity: 0.75; }
.f3 { opacity: 0.5; }
.f4 { opacity: 0.25; }
.f5 { opacity: 0; }
.f6 { opacity: 0.4; transition: opacity 0.3s; cursor: pointer; }
.f6:hover { opacity: 1; }`,
  },

    // ─── 122. filter ────────────────────────────────────────────────
  {
    property: "filter",
    description: "Applies graphical effects to an element such as blur, brightness, contrast, grayscale, hue-rotate, invert, saturate, sepia, and drop-shadow.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>filter — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>filter</span> Property</h1>
    <p class="page-desc">Apply visual effects like blur, brightness, and grayscale to elements.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">filter: none</p>
        <div class="box f1">CSS Filters</div>
      </div>
      <div class="demo-card">
        <p class="label">filter: blur(4px)</p>
        <div class="box f2">CSS Filters</div>
      </div>
      <div class="demo-card">
        <p class="label">filter: brightness(1.8)</p>
        <div class="box f3">CSS Filters</div>
      </div>
      <div class="demo-card">
        <p class="label">filter: contrast(2)</p>
        <div class="box f4">CSS Filters</div>
      </div>
      <div class="demo-card">
        <p class="label">filter: grayscale(100%)</p>
        <div class="box f5">CSS Filters</div>
      </div>
      <div class="demo-card">
        <p class="label">filter: sepia(100%)</p>
        <div class="box f6">CSS Filters</div>
      </div>
      <div class="demo-card">
        <p class="label">filter: hue-rotate(180deg)</p>
        <div class="box f7">CSS Filters</div>
      </div>
      <div class="demo-card">
        <p class="label">filter: invert(100%)</p>
        <div class="box f8">CSS Filters</div>
      </div>
      <div class="demo-card">
        <p class="label">filter: saturate(3)</p>
        <div class="box f9">CSS Filters</div>
      </div>
      <div class="demo-card">
        <p class="label">filter: drop-shadow(4px 4px 8px #a78bfa)</p>
        <div class="box f10">CSS Filters</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: linear-gradient(135deg, #a78bfa, #f472b6);
  padding: 22px 18px;
  border-radius: 8px;
  color: #fff;
  font-size: 1.1rem;
  font-family: Arial, sans-serif;
  font-weight: bold;
  text-align: center;
}

.f1  { filter: none; }
.f2  { filter: blur(4px); }
.f3  { filter: brightness(1.8); }
.f4  { filter: contrast(2); }
.f5  { filter: grayscale(100%); }
.f6  { filter: sepia(100%); }
.f7  { filter: hue-rotate(180deg); }
.f8  { filter: invert(100%); }
.f9  { filter: saturate(3); }
.f10 { filter: drop-shadow(4px 4px 8px #a78bfa); }`,
  },

    // ─── 123. backdrop-filter ───────────────────────────────────────
  {
    property: "backdrop-filter",
    description: "Applies graphical effects to the area behind an element, not the element itself. Commonly used for frosted glass UI effects. The element must have a semi-transparent background to see the effect.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>backdrop-filter — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>backdrop-filter</span> Property</h1>
    <p class="page-desc">Apply effects to the content behind an element — great for glass UI.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">backdrop-filter: blur(10px)</p>
        <div class="scene s1">
          <div class="glass g1">Frosted Glass</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">backdrop-filter: brightness(0.5)</p>
        <div class="scene s1">
          <div class="glass g2">Dimmed Behind</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">backdrop-filter: saturate(3)</p>
        <div class="scene s1">
          <div class="glass g3">Saturated Behind</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">backdrop-filter: grayscale(100%)</p>
        <div class="scene s1">
          <div class="glass g4">Grayscale Behind</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">blur + brightness combo</p>
        <div class="scene s1">
          <div class="glass g5">Blur + Bright</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">backdrop-filter: invert(1)</p>
        <div class="scene s1">
          <div class="glass g6">Inverted Behind</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.scene {
  position: relative;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(135deg, #a78bfa 0%, #f472b6 50%, #fbbf24 100%);
}

.glass {
  position: absolute;
  inset: 15px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
}

.g1 { backdrop-filter: blur(10px); }
.g2 { backdrop-filter: brightness(0.5); }
.g3 { backdrop-filter: saturate(3); }
.g4 { backdrop-filter: grayscale(100%); }
.g5 { backdrop-filter: blur(6px) brightness(1.3); }
.g6 { backdrop-filter: invert(1); }`,
  },

    // ─── 124. mix-blend-mode ────────────────────────────────────────
  {
    property: "mix-blend-mode",
    description: "Sets how an element's content should blend with the content of its parent and background. Similar to layer blending modes in Photoshop.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>mix-blend-mode — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>mix-blend-mode</span> Property</h1>
    <p class="page-desc">Blend an element's content with what's behind it.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">mix-blend-mode: normal</p>
        <div class="scene"><div class="blend f1">BLEND</div></div>
      </div>
      <div class="demo-card">
        <p class="label">mix-blend-mode: multiply</p>
        <div class="scene"><div class="blend f2">BLEND</div></div>
      </div>
      <div class="demo-card">
        <p class="label">mix-blend-mode: screen</p>
        <div class="scene"><div class="blend f3">BLEND</div></div>
      </div>
      <div class="demo-card">
        <p class="label">mix-blend-mode: overlay</p>
        <div class="scene"><div class="blend f4">BLEND</div></div>
      </div>
      <div class="demo-card">
        <p class="label">mix-blend-mode: difference</p>
        <div class="scene"><div class="blend f5">BLEND</div></div>
      </div>
      <div class="demo-card">
        <p class="label">mix-blend-mode: exclusion</p>
        <div class="scene"><div class="blend f6">BLEND</div></div>
      </div>
      <div class="demo-card">
        <p class="label">mix-blend-mode: color-dodge</p>
        <div class="scene"><div class="blend f7">BLEND</div></div>
      </div>
      <div class="demo-card">
        <p class="label">mix-blend-mode: hue</p>
        <div class="scene"><div class="blend f8">BLEND</div></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.scene {
  height: 90px;
  border-radius: 8px;
  background: linear-gradient(135deg, #f472b6, #fbbf24, #34d399);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.blend {
  font-size: 1.8rem;
  font-weight: 900;
  font-family: Arial, sans-serif;
  color: #a78bfa;
  letter-spacing: 4px;
}

.f1 { mix-blend-mode: normal; }
.f2 { mix-blend-mode: multiply; }
.f3 { mix-blend-mode: screen; }
.f4 { mix-blend-mode: overlay; }
.f5 { mix-blend-mode: difference; }
.f6 { mix-blend-mode: exclusion; }
.f7 { mix-blend-mode: color-dodge; }
.f8 { mix-blend-mode: hue; }`,
  },

    // ─── 125. isolation ─────────────────────────────────────────────
  {
    property: "isolation",
    description: "Creates a new stacking context for an element, isolating it from mix-blend-mode effects applied by parent elements. Values: auto (default) or isolate.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>isolation — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>isolation</span> Property</h1>
    <p class="page-desc">Isolate an element from blend modes applied by its parent.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">Without isolation — blend bleeds through</p>
        <div class="scene bg-grad">
          <div class="container no-isolate">
            <div class="blended-text">BLENDED</div>
          </div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">isolation: isolate — blend contained</p>
        <div class="scene bg-grad">
          <div class="container isolate">
            <div class="blended-text">ISOLATED</div>
          </div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">isolation: auto (default)</p>
        <div class="scene bg-grad">
          <div class="container auto-iso">
            <div class="blended-text">AUTO</div>
          </div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">Use case — protect UI card from blend</p>
        <div class="scene bg-grad">
          <div class="card-protect">
            <p>This card is protected</p>
            <p style="font-size:0.8rem; color:#94a3b8;">isolation: isolate</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.scene {
  height: 110px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.bg-grad {
  background: linear-gradient(135deg, #f472b6, #fbbf24, #34d399);
}

.container {
  background: rgba(167, 139, 250, 0.5);
  padding: 12px 20px;
  border-radius: 8px;
}

.blended-text {
  font-size: 1.4rem;
  font-weight: 900;
  font-family: Arial, sans-serif;
  color: #1e1e2e;
  mix-blend-mode: difference;
  letter-spacing: 3px;
}

.no-isolate { isolation: auto; }
.isolate     { isolation: isolate; }
.auto-iso    { isolation: auto; }

.card-protect {
  isolation: isolate;
  background: #1e1e2e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  text-align: center;
  line-height: 1.8;
}`,
  },

    // ─── 126. clip-path ─────────────────────────────────────────────
  {
    property: "clip-path",
    description: "Clips an element to a specific shape, hiding everything outside that shape. Accepts basic shapes like circle(), ellipse(), polygon(), inset(), or an SVG path.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>clip-path — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>clip-path</span> Property</h1>
    <p class="page-desc">Clip elements into custom shapes using basic shape functions.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">clip-path: none</p>
        <div class="box f1">No Clip</div>
      </div>
      <div class="demo-card">
        <p class="label">clip-path: circle(50%)</p>
        <div class="box f2">Circle</div>
      </div>
      <div class="demo-card">
        <p class="label">clip-path: ellipse(60% 40%)</p>
        <div class="box f3">Ellipse</div>
      </div>
      <div class="demo-card">
        <p class="label">clip-path: inset(10px 20px)</p>
        <div class="box f4">Inset</div>
      </div>
      <div class="demo-card">
        <p class="label">clip-path: polygon (triangle)</p>
        <div class="box f5">Triangle</div>
      </div>
      <div class="demo-card">
        <p class="label">clip-path: polygon (diamond)</p>
        <div class="box f6">Diamond</div>
      </div>
      <div class="demo-card">
        <p class="label">clip-path: polygon (arrow)</p>
        <div class="box f7">Arrow</div>
      </div>
      <div class="demo-card">
        <p class="label">clip-path: inset(0 0 0 0 round 50%)</p>
        <div class="box f8">Rounded</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 16px;
  font-family: monospace;
  text-align: center;
  width: 100%;
}

.box {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #a78bfa, #f472b6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
}

.f1 { clip-path: none; border-radius: 8px; }
.f2 { clip-path: circle(50%); }
.f3 { clip-path: ellipse(60% 40% at 50% 50%); }
.f4 { clip-path: inset(10px 20px); }
.f5 { clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }
.f6 { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
.f7 { clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%); }
.f8 { clip-path: inset(0 0 0 0 round 50%); }`,
  },

    // ─── 127. mask ──────────────────────────────────────────────────
  {
    property: "mask",
    description: "Shorthand for all mask properties. Hides parts of an element using an image or gradient as a mask — white areas show the element, black areas hide it.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>mask — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>mask</span> Property</h1>
    <p class="page-desc">Use gradients or images as masks to reveal or hide parts of an element.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">mask: none</p>
        <div class="box f1">Full Visible</div>
      </div>
      <div class="demo-card">
        <p class="label">mask: linear-gradient (fade right)</p>
        <div class="box f2">Fade Right</div>
      </div>
      <div class="demo-card">
        <p class="label">mask: linear-gradient (fade bottom)</p>
        <div class="box f3">Fade Bottom</div>
      </div>
      <div class="demo-card">
        <p class="label">mask: radial-gradient (circle reveal)</p>
        <div class="box f4">Circle Reveal</div>
      </div>
      <div class="demo-card">
        <p class="label">mask: radial-gradient (vignette)</p>
        <div class="box f5">Vignette</div>
      </div>
      <div class="demo-card">
        <p class="label">mask: linear-gradient (center fade)</p>
        <div class="box f6">Center Fade</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  height: 100px;
  background: linear-gradient(135deg, #a78bfa, #f472b6, #fbbf24);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1rem;
}

.f1 { mask: none; }
.f2 { mask: linear-gradient(to right, black 40%, transparent 100%); }
.f3 { mask: linear-gradient(to bottom, black 40%, transparent 100%); }
.f4 { mask: radial-gradient(circle at center, black 40%, transparent 70%); }
.f5 { mask: radial-gradient(ellipse at center, black 30%, transparent 80%); }
.f6 { mask: linear-gradient(to right, transparent, black 30%, black 70%, transparent); }`,
  },

    // ─── 128. mask-image ────────────────────────────────────────────
  {
    property: "mask-image",
    description: "Sets the image used as a mask layer. Accepts url() for SVG/PNG masks or gradient functions. The luminance or alpha channel of the mask image determines visibility.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>mask-image — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>mask-image</span> Property</h1>
    <p class="page-desc">Define the image or gradient used as the mask source.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">mask-image: none</p>
        <div class="box f1">No Mask</div>
      </div>
      <div class="demo-card">
        <p class="label">linear-gradient (left → right)</p>
        <div class="box f2">Fade Right</div>
      </div>
      <div class="demo-card">
        <p class="label">linear-gradient (top → bottom)</p>
        <div class="box f3">Fade Down</div>
      </div>
      <div class="demo-card">
        <p class="label">radial-gradient (center out)</p>
        <div class="box f4">Radial Mask</div>
      </div>
      <div class="demo-card">
        <p class="label">repeating-linear-gradient (stripes)</p>
        <div class="box f5">Stripe Mask</div>
      </div>
      <div class="demo-card">
        <p class="label">conic-gradient (pie mask)</p>
        <div class="box f6">Conic Mask</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  height: 100px;
  background: linear-gradient(135deg, #a78bfa, #f472b6, #fbbf24);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1rem;
}

.f1 { mask-image: none; }
.f2 { mask-image: linear-gradient(to right, black, transparent); }
.f3 { mask-image: linear-gradient(to bottom, black, transparent); }
.f4 { mask-image: radial-gradient(circle, black 40%, transparent 75%); }
.f5 { mask-image: repeating-linear-gradient(45deg, black 0px, black 10px, transparent 10px, transparent 20px); }
.f6 { mask-image: conic-gradient(black 0deg 180deg, transparent 180deg 360deg); }`,
  },

    // ─── 129. mask-size ─────────────────────────────────────────────
  {
    property: "mask-size",
    description: "Sets the size of the mask image. Works like background-size. Values: auto, cover, contain, or explicit dimensions like px or %.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>mask-size — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>mask-size</span> Property</h1>
    <p class="page-desc">Control the size of the mask image applied to an element.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">mask-size: auto</p>
        <div class="box f1">Auto Size</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-size: cover</p>
        <div class="box f2">Cover</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-size: contain</p>
        <div class="box f3">Contain</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-size: 50% 50%</p>
        <div class="box f4">50% Size</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-size: 80px 80px</p>
        <div class="box f5">80px Size</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-size: 100% 50%</p>
        <div class="box f6">Half Height</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  height: 110px;
  background: linear-gradient(135deg, #a78bfa, #f472b6, #fbbf24);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  mask-image: radial-gradient(circle, black 60%, transparent 100%);
  mask-repeat: no-repeat;
  mask-position: center;
}

.f1 { mask-size: auto; }
.f2 { mask-size: cover; }
.f3 { mask-size: contain; }
.f4 { mask-size: 50% 50%; }
.f5 { mask-size: 80px 80px; }
.f6 { mask-size: 100% 50%; }`,
  },

    // ─── 130. mask-repeat ───────────────────────────────────────────
  {
    property: "mask-repeat",
    description: "Sets whether and how a mask image is repeated. Works like background-repeat. Values: repeat, no-repeat, repeat-x, repeat-y, space, round.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>mask-repeat — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>mask-repeat</span> Property</h1>
    <p class="page-desc">Control how the mask image tiles across the element.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">mask-repeat: no-repeat</p>
        <div class="box f1">No Repeat</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-repeat: repeat</p>
        <div class="box f2">Repeat</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-repeat: repeat-x</p>
        <div class="box f3">Repeat X</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-repeat: repeat-y</p>
        <div class="box f4">Repeat Y</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-repeat: space</p>
        <div class="box f5">Space</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-repeat: round</p>
        <div class="box f6">Round</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  height: 110px;
  background: linear-gradient(135deg, #a78bfa, #f472b6, #fbbf24);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  mask-image: radial-gradient(circle, black 30%, transparent 60%);
  mask-size: 40px 40px;
}

.f1 { mask-repeat: no-repeat; mask-position: center; }
.f2 { mask-repeat: repeat; }
.f3 { mask-repeat: repeat-x; mask-position: center; }
.f4 { mask-repeat: repeat-y; mask-position: center; }
.f5 { mask-repeat: space; }
.f6 { mask-repeat: round; }`,
  },

    // ─── 131. mask-position ─────────────────────────────────────────
  {
    property: "mask-position",
    description: "Sets the starting position of the mask image. Works like background-position. Accepts keywords (top, center, bottom, left, right) or length/percentage values.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>mask-position — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>mask-position</span> Property</h1>
    <p class="page-desc">Control where the mask image is anchored on the element.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">mask-position: center</p>
        <div class="box f1">Center</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-position: top left</p>
        <div class="box f2">Top Left</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-position: top right</p>
        <div class="box f3">Top Right</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-position: bottom left</p>
        <div class="box f4">Bottom Left</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-position: bottom right</p>
        <div class="box f5">Bottom Right</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-position: 30% 70%</p>
        <div class="box f6">30% 70%</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  height: 110px;
  background: linear-gradient(135deg, #a78bfa, #f472b6, #fbbf24);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  mask-image: radial-gradient(circle, black 35%, transparent 65%);
  mask-size: 60% 60%;
  mask-repeat: no-repeat;
}

.f1 { mask-position: center; }
.f2 { mask-position: top left; }
.f3 { mask-position: top right; }
.f4 { mask-position: bottom left; }
.f5 { mask-position: bottom right; }
.f6 { mask-position: 30% 70%; }`,
  },

    // ─── 132. mask-origin ───────────────────────────────────────────
  {
    property: "mask-origin",
    description: "Sets the origin box for the mask image position. Works like background-origin. Values: border-box, padding-box, content-box, fill-box, stroke-box, view-box.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>mask-origin — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>mask-origin</span> Property</h1>
    <p class="page-desc">Define which box the mask image position is relative to.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">mask-origin: border-box</p>
        <div class="box f1">Border Box</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-origin: padding-box</p>
        <div class="box f2">Padding Box</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-origin: content-box</p>
        <div class="box f3">Content Box</div>
      </div>
      <div class="demo-card">
        <p class="label">border-box vs content-box comparison</p>
        <div class="compare-row">
          <div class="box sm f4">Border</div>
          <div class="box sm f5">Content</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  height: 110px;
  background: linear-gradient(135deg, #a78bfa, #f472b6, #fbbf24);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  border: 8px solid rgba(167, 139, 250, 0.4);
  padding: 12px;
  mask-image: radial-gradient(circle, black 40%, transparent 70%);
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: 70% 70%;
}

.f1 { mask-origin: border-box; }
.f2 { mask-origin: padding-box; }
.f3 { mask-origin: content-box; }

.compare-row {
  display: flex;
  gap: 10px;
}

.sm {
  flex: 1;
  height: 90px;
  font-size: 0.8rem;
}

.f4 { mask-origin: border-box; }
.f5 { mask-origin: content-box; }`,
  },

    // ─── 133. mask-clip ─────────────────────────────────────────────
  {
    property: "mask-clip",
    description: "Sets the area that is affected by the mask. Works like background-clip. Values: border-box, padding-box, content-box, fill-box, stroke-box, view-box, no-clip.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>mask-clip — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>mask-clip</span> Property</h1>
    <p class="page-desc">Define which area of the element the mask is applied to.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">mask-clip: border-box</p>
        <div class="box f1">Border Box</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-clip: padding-box</p>
        <div class="box f2">Padding Box</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-clip: content-box</p>
        <div class="box f3">Content Box</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-clip: no-clip</p>
        <div class="box f4">No Clip</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  height: 110px;
  background: linear-gradient(135deg, #a78bfa, #f472b6, #fbbf24);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  border: 10px solid rgba(167, 139, 250, 0.35);
  padding: 14px;
  mask-image: linear-gradient(to right, black 50%, transparent 100%);
}

.f1 { mask-clip: border-box; }
.f2 { mask-clip: padding-box; }
.f3 { mask-clip: content-box; }
.f4 { mask-clip: no-clip; }`,
  },

    // ─── 134. mask-mode ─────────────────────────────────────────────
  {
    property: "mask-mode",
    description: "Defines whether the mask image is treated as a luminance mask or an alpha mask. Values: alpha (uses transparency), luminance (uses brightness), match-source (auto-detects).",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>mask-mode — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>mask-mode</span> Property</h1>
    <p class="page-desc">Choose whether the mask uses alpha transparency or luminance brightness.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">mask-mode: alpha</p>
        <div class="box f1">Alpha Mode</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-mode: luminance</p>
        <div class="box f2">Luminance Mode</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-mode: match-source</p>
        <div class="box f3">Match Source</div>
      </div>
      <div class="demo-card">
        <p class="label">alpha vs luminance side by side</p>
        <div class="compare-row">
          <div class="box sm f4">Alpha</div>
          <div class="box sm f5">Luma</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  height: 110px;
  background: linear-gradient(135deg, #a78bfa, #f472b6, #fbbf24);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  mask-image: radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 75%);
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;
}

.f1 { mask-mode: alpha; }
.f2 { mask-mode: luminance; }
.f3 { mask-mode: match-source; }

.compare-row {
  display: flex;
  gap: 10px;
}

.sm {
  flex: 1;
  height: 90px;
  font-size: 0.85rem;
}

.f4 { mask-mode: alpha; }
.f5 { mask-mode: luminance; }`,
  },

    // ─── 135. mask-composite ────────────────────────────────────────
  {
    property: "mask-composite",
    description: "Defines how multiple mask layers are composited together. Values: add, subtract, intersect, exclude. Only visible when multiple mask-image layers are used.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>mask-composite — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>mask-composite</span> Property</h1>
    <p class="page-desc">Combine multiple mask layers using compositing operations.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">mask-composite: add (union)</p>
        <div class="box f1">Add</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-composite: subtract</p>
        <div class="box f2">Subtract</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-composite: intersect</p>
        <div class="box f3">Intersect</div>
      </div>
      <div class="demo-card">
        <p class="label">mask-composite: exclude</p>
        <div class="box f4">Exclude</div>
      </div>
      <div class="demo-card">
        <p class="label">add — two circle masks merged</p>
        <div class="box f5">Two Circles</div>
      </div>
      <div class="demo-card">
        <p class="label">intersect — only overlap visible</p>
        <div class="box f6">Overlap Only</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  height: 110px;
  background: linear-gradient(135deg, #a78bfa, #f472b6, #fbbf24);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1rem;
}

/* Two mask layers composited together */
.f1 {
  mask-image:
    radial-gradient(circle at 35% 50%, black 30%, transparent 55%),
    radial-gradient(circle at 65% 50%, black 30%, transparent 55%);
  mask-composite: add;
}

.f2 {
  mask-image:
    radial-gradient(circle at 35% 50%, black 30%, transparent 55%),
    radial-gradient(circle at 65% 50%, black 30%, transparent 55%);
  mask-composite: subtract;
}

.f3 {
  mask-image:
    radial-gradient(circle at 35% 50%, black 30%, transparent 55%),
    radial-gradient(circle at 65% 50%, black 30%, transparent 55%);
  mask-composite: intersect;
}

.f4 {
  mask-image:
    radial-gradient(circle at 35% 50%, black 30%, transparent 55%),
    radial-gradient(circle at 65% 50%, black 30%, transparent 55%);
  mask-composite: exclude;
}

.f5 {
  mask-image:
    radial-gradient(circle at 30% 50%, black 28%, transparent 50%),
    radial-gradient(circle at 70% 50%, black 28%, transparent 50%);
  mask-composite: add;
}

.f6 {
  mask-image:
    radial-gradient(circle at 40% 50%, black 32%, transparent 52%),
    radial-gradient(circle at 60% 50%, black 32%, transparent 52%);
  mask-composite: intersect;
}`,
  },

    // ─── 136. content ───────────────────────────────────────────────
  {
    property: "content",
    description: "Used with ::before and ::after pseudo-elements to insert generated content. Accepts strings, url(), counter(), attr(), or none/normal.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>content — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>content</span> Property</h1>
    <p class="page-desc">Insert generated content before or after elements using ::before and ::after.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">::before — text string</p>
        <p class="box f1">CSS Property</p>
      </div>
      <div class="demo-card">
        <p class="label">::after — text string</p>
        <p class="box f2">CSS Property</p>
      </div>
      <div class="demo-card">
        <p class="label">::before — emoji icon</p>
        <p class="box f3">JavaScript</p>
      </div>
      <div class="demo-card">
        <p class="label">::after — required marker</p>
        <label class="box f4">Email Address</label>
      </div>
      <div class="demo-card">
        <p class="label">content: attr(data-tooltip)</p>
        <p class="box f5" data-tooltip="This is a tooltip!">Hover over me</p>
      </div>
      <div class="demo-card">
        <p class="label">::before — decorative line</p>
        <h3 class="box f6">Section Title</h3>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  display: block;
}

/* Text string before */
.f1::before {
  content: "→ ";
  color: #a78bfa;
  font-weight: bold;
}

/* Text string after */
.f2::after {
  content: " ✓";
  color: #34d399;
  font-weight: bold;
}

/* Emoji before */
.f3::before {
  content: "⚡ ";
}

/* Required marker after */
.f4::after {
  content: " *";
  color: #f472b6;
  font-weight: bold;
}

/* attr() tooltip */
.f5 {
  position: relative;
  cursor: pointer;
}
.f5::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: #3b2a5e;
  color: #e2e8f0;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
  border: 1px solid #a78bfa;
}
.f5:hover::after { opacity: 1; }

/* Decorative line before heading */
.f6 {
  font-size: 1.1rem;
  font-weight: bold;
  padding-left: 14px;
  position: relative;
}
.f6::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #a78bfa;
  border-radius: 2px;
}`,
  },

    // ─── 137. counter-reset ─────────────────────────────────────────
  {
    property: "counter-reset",
    description: "Creates or resets a CSS counter to a given value (default 0). Used together with counter-increment and the counter() function in content to build automatic numbering.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>counter-reset — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>counter-reset</span> Property</h1>
    <p class="page-desc">Initialize a named counter to build custom automatic numbering.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">counter-reset: section — auto numbered list</p>
        <ol class="custom-list f1">
          <li>HTML Fundamentals</li>
          <li>CSS Styling</li>
          <li>JavaScript Basics</li>
          <li>React Framework</li>
        </ol>
      </div>
      <div class="demo-card">
        <p class="label">counter-reset: step 0 — step tracker</p>
        <div class="steps f2">
          <div class="step">Install Node.js</div>
          <div class="step">Create Project</div>
          <div class="step">Install Dependencies</div>
          <div class="step">Run Dev Server</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">counter-reset: item 4 — start from 5</p>
        <ol class="custom-list f3">
          <li>Advanced CSS</li>
          <li>TypeScript</li>
          <li>Node.js</li>
        </ol>
      </div>
      <div class="demo-card">
        <p class="label">Nested counters (chapter.section)</p>
        <div class="chapters">
          <div class="chapter">
            Introduction
            <div class="sections">
              <div class="section">Overview</div>
              <div class="section">Goals</div>
            </div>
          </div>
          <div class="chapter">
            Core Concepts
            <div class="sections">
              <div class="section">Syntax</div>
              <div class="section">Selectors</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

/* Auto numbered list */
.f1 {
  counter-reset: section;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.f1 li {
  counter-increment: section;
  background: #2a2a3e;
  padding: 10px 14px;
  border-radius: 8px;
  color: #e2e8f0;
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
  gap: 12px;
}
.f1 li::before {
  content: counter(section);
  background: #a78bfa;
  color: #fff;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: bold;
  flex-shrink: 0;
}

/* Step tracker */
.f2 {
  counter-reset: step 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.step {
  counter-increment: step;
  background: #2a2a3e;
  padding: 10px 14px;
  border-radius: 8px;
  color: #e2e8f0;
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
  gap: 12px;
}
.step::before {
  content: "Step " counter(step);
  background: #f472b6;
  color: #fff;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 0.78rem;
  font-weight: bold;
  white-space: nowrap;
}

/* Start from 5 */
.f3 {
  counter-reset: item 4;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.f3 li {
  counter-increment: item;
  background: #2a2a3e;
  padding: 10px 14px;
  border-radius: 8px;
  color: #e2e8f0;
  font-family: Arial, sans-serif;
}
.f3 li::before {
  content: counter(item) ". ";
  color: #fbbf24;
  font-weight: bold;
}

/* Nested counters */
.chapters {
  counter-reset: chapter;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.chapter {
  counter-increment: chapter;
  background: #2a2a3e;
  padding: 10px 14px;
  border-radius: 8px;
  color: #a78bfa;
  font-family: Arial, sans-serif;
  font-weight: bold;
}
.chapter::before {
  content: counter(chapter) ". ";
}
.sections {
  counter-reset: section;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.section {
  counter-increment: section;
  background: #1e1e2e;
  padding: 6px 12px;
  border-radius: 6px;
  color: #94a3b8;
  font-size: 0.9rem;
  font-weight: normal;
}
.section::before {
  content: counter(chapter) "." counter(section) " ";
  color: #7c6fcd;
}`,
  },

    // ─── 138. counter-increment ─────────────────────────────────────
  {
    property: "counter-increment",
    description: "Increases or decreases the value of a CSS counter by a given amount (default 1). Used with counter-reset and the counter() function to build custom numbering systems.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>counter-increment — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>counter-increment</span> Property</h1>
    <p class="page-desc">Increment a counter by 1 or any custom value on each matching element.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">counter-increment: num (by 1)</p>
        <div class="list-a">
          <div class="item-a">HTML</div>
          <div class="item-a">CSS</div>
          <div class="item-a">JavaScript</div>
          <div class="item-a">React</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">counter-increment: num (by 2)</p>
        <div class="list-b">
          <div class="item-b">Even Step</div>
          <div class="item-b">Even Step</div>
          <div class="item-b">Even Step</div>
          <div class="item-b">Even Step</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">counter-increment: num (by 10)</p>
        <div class="list-c">
          <div class="item-c">Section</div>
          <div class="item-c">Section</div>
          <div class="item-c">Section</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">counter-increment: num (-1) — countdown</p>
        <div class="list-d">
          <div class="item-d">Launch Step</div>
          <div class="item-d">Launch Step</div>
          <div class="item-d">Launch Step</div>
          <div class="item-d">Launch Step</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

/* Increment by 1 */
.list-a { counter-reset: num; display: flex; flex-direction: column; gap: 8px; }
.item-a {
  counter-increment: num 1;
  background: #2a2a3e;
  padding: 10px 14px;
  border-radius: 8px;
  color: #e2e8f0;
  font-family: Arial, sans-serif;
}
.item-a::before {
  content: counter(num) ". ";
  color: #a78bfa;
  font-weight: bold;
}

/* Increment by 2 */
.list-b { counter-reset: num; display: flex; flex-direction: column; gap: 8px; }
.item-b {
  counter-increment: num 2;
  background: #2a2a3e;
  padding: 10px 14px;
  border-radius: 8px;
  color: #e2e8f0;
  font-family: Arial, sans-serif;
}
.item-b::before {
  content: counter(num) ". ";
  color: #34d399;
  font-weight: bold;
}

/* Increment by 10 */
.list-c { counter-reset: num; display: flex; flex-direction: column; gap: 8px; }
.item-c {
  counter-increment: num 10;
  background: #2a2a3e;
  padding: 10px 14px;
  border-radius: 8px;
  color: #e2e8f0;
  font-family: Arial, sans-serif;
}
.item-c::before {
  content: counter(num) ". ";
  color: #fbbf24;
  font-weight: bold;
}

/* Countdown — decrement by 1 */
.list-d { counter-reset: num 5; display: flex; flex-direction: column; gap: 8px; }
.item-d {
  counter-increment: num -1;
  background: #2a2a3e;
  padding: 10px 14px;
  border-radius: 8px;
  color: #e2e8f0;
  font-family: Arial, sans-serif;
}
.item-d::before {
  content: counter(num) "... ";
  color: #f472b6;
  font-weight: bold;
}`,
  },

    // ─── 139. quotes ────────────────────────────────────────────────
  {
    property: "quotes",
    description: "Defines the quotation marks used by the open-quote and close-quote values of the content property. You can set different marks for nested quote levels.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>quotes — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>quotes</span> Property</h1>
    <p class="page-desc">Customize the quotation marks used around quoted text.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">quotes: auto (browser default)</p>
        <blockquote class="box f1">
          <q>Learning CSS is fun and rewarding.</q>
        </blockquote>
      </div>
      <div class="demo-card">
        <p class="label">quotes: curly double " "</p>
        <blockquote class="box f2">
          <q>Learning CSS is fun and rewarding.</q>
        </blockquote>
      </div>
      <div class="demo-card">
        <p class="label">quotes: French guillemets « »</p>
        <blockquote class="box f3">
          <q>Learning CSS is fun and rewarding.</q>
        </blockquote>
      </div>
      <div class="demo-card">
        <p class="label">quotes: Japanese 「 」</p>
        <blockquote class="box f4">
          <q>Learning CSS is fun and rewarding.</q>
        </blockquote>
      </div>
      <div class="demo-card">
        <p class="label">Nested quotes (2 levels)</p>
        <blockquote class="box f5">
          <q>She said <q>hello there</q> and smiled.</q>
        </blockquote>
      </div>
      <div class="demo-card">
        <p class="label">quotes: none</p>
        <blockquote class="box f6">
          <q>No quote marks rendered here.</q>
        </blockquote>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Georgia, serif;
  font-style: italic;
  line-height: 1.6;
  border-left: 3px solid #a78bfa;
}

q { color: #c4b5fd; }

.f1 { quotes: auto; }
.f2 { quotes: "\u201C" "\u201D" "\u2018" "\u2019"; }
.f3 { quotes: "\u00AB" "\u00BB" "\u2039" "\u203A"; }
.f4 { quotes: "\u300C" "\u300D" "\u300E" "\u300F"; }
.f5 { quotes: "\u201C" "\u201D" "\u2018" "\u2019"; }
.f6 { quotes: none; }`,
  },

    // ─── 140. will-change ───────────────────────────────────────────
  {
    property: "will-change",
    description: "Hints to the browser which properties will change, allowing it to optimize rendering in advance. Use sparingly — only on elements that actually animate. Values: auto, transform, opacity, scroll-position, contents.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>will-change — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>will-change</span> Property</h1>
    <p class="page-desc">Hint to the browser which properties will animate for smoother performance.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">will-change: auto (default)</p>
        <div class="box f1">Hover Me</div>
        <p class="note">No optimization hint</p>
      </div>
      <div class="demo-card">
        <p class="label">will-change: transform</p>
        <div class="box f2">Hover Me</div>
        <p class="note">Browser pre-optimizes transform</p>
      </div>
      <div class="demo-card">
        <p class="label">will-change: opacity</p>
        <div class="box f3">Hover Me</div>
        <p class="note">Browser pre-optimizes opacity</p>
      </div>
      <div class="demo-card">
        <p class="label">will-change: transform, opacity</p>
        <div class="box f4">Hover Me</div>
        <p class="note">Both properties optimized</p>
      </div>
      <div class="demo-card">
        <p class="label">will-change: scroll-position</p>
        <div class="scroll-box f5">
          <p>Scroll content here</p>
          <p>More content below</p>
          <p>Even more content</p>
          <p>And more here</p>
          <p>Last item</p>
        </div>
        <p class="note">Optimizes scroll performance</p>
      </div>
      <div class="demo-card">
        <p class="label">will-change: contents</p>
        <div class="box f6" id="dynamic">Dynamic Content</div>
        <p class="note">Optimizes for content changes</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.note {
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 8px;
  font-family: Arial, sans-serif;
}

.box {
  background: linear-gradient(135deg, #3b2a5e, #2a2a3e);
  padding: 20px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  text-align: center;
  border: 1px solid #3e3e5e;
  transition: transform 0.3s ease, opacity 0.3s ease;
  cursor: pointer;
}

.f1 { will-change: auto; }
.f1:hover { transform: scale(1.05); }

.f2 { will-change: transform; }
.f2:hover { transform: scale(1.08) rotate(2deg); }

.f3 { will-change: opacity; }
.f3:hover { opacity: 0.5; }

.f4 { will-change: transform, opacity; }
.f4:hover { transform: translateY(-6px); opacity: 0.7; }

.scroll-box {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 12px 16px;
  height: 80px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #e2e8f0;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
}
.scroll-box p { padding: 4px 0; border-bottom: 1px solid #3e3e5e; }

.f5 { will-change: scroll-position; }

.f6 { will-change: contents; }
.f6:hover { background: linear-gradient(135deg, #4c3a7e, #3a3a5e); }`,
  },

    // ─── 141. scroll-behavior ───────────────────────────────────────
  {
    property: "scroll-behavior",
    description: "Controls whether scrolling jumps instantly or animates smoothly when triggered by navigation links, JavaScript, or the user. Values: auto (instant) or smooth.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>scroll-behavior — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>scroll-behavior</span> Property</h1>
    <p class="page-desc">Click the buttons to see instant vs smooth scrolling.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">scroll-behavior: auto (instant jump)</p>
        <div class="scroll-container auto-scroll">
          <div class="scroll-section sec-red">Section 1</div>
          <div class="scroll-section sec-purple">Section 2</div>
          <div class="scroll-section sec-pink">Section 3</div>
        </div>
        <div class="btn-row">
          <button onclick="document.querySelector('.auto-scroll').scrollTop = 0">Top</button>
          <button onclick="document.querySelector('.auto-scroll').scrollTop = 120">Mid</button>
          <button onclick="document.querySelector('.auto-scroll').scrollTop = 240">Bot</button>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">scroll-behavior: smooth</p>
        <div class="scroll-container smooth-scroll">
          <div class="scroll-section sec-red">Section 1</div>
          <div class="scroll-section sec-purple">Section 2</div>
          <div class="scroll-section sec-pink">Section 3</div>
        </div>
        <div class="btn-row">
          <button onclick="document.querySelector('.smooth-scroll').scrollTop = 0">Top</button>
          <button onclick="document.querySelector('.smooth-scroll').scrollTop = 120">Mid</button>
          <button onclick="document.querySelector('.smooth-scroll').scrollTop = 240">Bot</button>
        </div>
      </div>
    </div>

    <div class="anchor-demo">
      <p class="label">scroll-behavior: smooth — anchor links</p>
      <nav class="anchor-nav">
        <a href="#s1">Go to S1</a>
        <a href="#s2">Go to S2</a>
        <a href="#s3">Go to S3</a>
      </nav>
      <div class="anchor-container">
        <div id="s1" class="anchor-section sec-red">Section 1</div>
        <div id="s2" class="anchor-section sec-purple">Section 2</div>
        <div id="s3" class="anchor-section sec-pink">Section 3</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.scroll-container {
  height: 120px;
  overflow-y: scroll;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
}

.auto-scroll  { scroll-behavior: auto; }
.smooth-scroll { scroll-behavior: smooth; }

.scroll-section {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1.1rem;
  color: #fff;
}

.sec-red    { background: #3b1a2e; }
.sec-purple { background: #2a1a4e; }
.sec-pink   { background: #3b2a1e; }

.btn-row {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.btn-row button {
  flex: 1;
  padding: 8px;
  background: #2a2a3e;
  color: #a78bfa;
  border: 1px solid #a78bfa;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background 0.2s;
}
.btn-row button:hover { background: #3b2a5e; }

.anchor-demo {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.anchor-nav {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}

.anchor-nav a {
  padding: 8px 16px;
  background: #2a2a3e;
  color: #a78bfa;
  border: 1px solid #a78bfa;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background 0.2s;
}
.anchor-nav a:hover { background: #3b2a5e; }

.anchor-container {
  height: 160px;
  overflow-y: scroll;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  scroll-behavior: smooth;
}

.anchor-section {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1.1rem;
  color: #fff;
}`,
  },

    // ─── 142. scroll-snap-type ──────────────────────────────────────
  {
    property: "scroll-snap-type",
    description: "Enables scroll snapping on a scroll container. Defines the axis (x, y, both) and strictness (mandatory, proximity). Applied to the scroll container, not the items.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>scroll-snap-type — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>scroll-snap-type</span> Property</h1>
    <p class="page-desc">Scroll each container and watch items snap into place.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">scroll-snap-type: x mandatory</p>
        <div class="snap-x mandatory">
          <div class="snap-item c1">Slide 1</div>
          <div class="snap-item c2">Slide 2</div>
          <div class="snap-item c3">Slide 3</div>
          <div class="snap-item c4">Slide 4</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">scroll-snap-type: x proximity</p>
        <div class="snap-x proximity">
          <div class="snap-item c1">Slide 1</div>
          <div class="snap-item c2">Slide 2</div>
          <div class="snap-item c3">Slide 3</div>
          <div class="snap-item c4">Slide 4</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">scroll-snap-type: y mandatory</p>
        <div class="snap-y">
          <div class="snap-item-y c1">Panel 1</div>
          <div class="snap-item-y c2">Panel 2</div>
          <div class="snap-item-y c3">Panel 3</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">scroll-snap-type: none (no snap)</p>
        <div class="snap-x no-snap">
          <div class="snap-item c1">Slide 1</div>
          <div class="snap-item c2">Slide 2</div>
          <div class="snap-item c3">Slide 3</div>
          <div class="snap-item c4">Slide 4</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

/* Horizontal snap containers */
.snap-x {
  display: flex;
  overflow-x: scroll;
  gap: 0;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  height: 100px;
}

.mandatory  { scroll-snap-type: x mandatory; }
.proximity  { scroll-snap-type: x proximity; }
.no-snap    { scroll-snap-type: none; }

.snap-item {
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1.1rem;
  color: #fff;
  scroll-snap-align: start;
  flex-shrink: 0;
}

/* Vertical snap container */
.snap-y {
  height: 100px;
  overflow-y: scroll;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  scroll-snap-type: y mandatory;
}

.snap-item-y {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1.1rem;
  color: #fff;
  scroll-snap-align: start;
}

.c1 { background: #2a1a4e; }
.c2 { background: #3b1a2e; }
.c3 { background: #1a3a2e; }
.c4 { background: #3b2a1e; }`,
  },

    // ─── 143. scroll-snap-align ─────────────────────────────────────
  {
    property: "scroll-snap-align",
    description: "Sets the snap alignment of a scroll snap item within its scroll container. Applied to the child items. Values: none, start, end, center.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>scroll-snap-align — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>scroll-snap-align</span> Property</h1>
    <p class="page-desc">Control where each item snaps within the scroll container.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">scroll-snap-align: start</p>
        <div class="snap-container">
          <div class="item align-start c1">Start 1</div>
          <div class="item align-start c2">Start 2</div>
          <div class="item align-start c3">Start 3</div>
          <div class="item align-start c4">Start 4</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">scroll-snap-align: center</p>
        <div class="snap-container">
          <div class="item align-center c1">Center 1</div>
          <div class="item align-center c2">Center 2</div>
          <div class="item align-center c3">Center 3</div>
          <div class="item align-center c4">Center 4</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">scroll-snap-align: end</p>
        <div class="snap-container">
          <div class="item align-end c1">End 1</div>
          <div class="item align-end c2">End 2</div>
          <div class="item align-end c3">End 3</div>
          <div class="item align-end c4">End 4</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">scroll-snap-align: none</p>
        <div class="snap-container">
          <div class="item align-none c1">None 1</div>
          <div class="item align-none c2">None 2</div>
          <div class="item align-none c3">None 3</div>
          <div class="item align-none c4">None 4</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.snap-container {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  height: 90px;
  gap: 0;
}

.item {
  min-width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  color: #fff;
  flex-shrink: 0;
}

.align-start  { scroll-snap-align: start; }
.align-center { scroll-snap-align: center; }
.align-end    { scroll-snap-align: end; }
.align-none   { scroll-snap-align: none; }

.c1 { background: #2a1a4e; }
.c2 { background: #3b1a2e; }
.c3 { background: #1a3a2e; }
.c4 { background: #3b2a1e; }`,
  },

    // ─── 144. scroll-margin ─────────────────────────────────────────
  {
    property: "scroll-margin",
    description: "Adds outset margin around a scroll snap item, affecting where it snaps. Useful when a sticky header would otherwise cover the snapped element. Applied to the child items.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>scroll-margin — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>scroll-margin</span> Property</h1>
    <p class="page-desc">Add outset space around snap items to offset sticky headers or padding.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">scroll-margin: 0 (default)</p>
        <div class="snap-container">
          <div class="item m0 c1">No Margin</div>
          <div class="item m0 c2">No Margin</div>
          <div class="item m0 c3">No Margin</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">scroll-margin: 20px</p>
        <div class="snap-container">
          <div class="item m20 c1">20px Margin</div>
          <div class="item m20 c2">20px Margin</div>
          <div class="item m20 c3">20px Margin</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">scroll-margin-top: 40px (sticky header offset)</p>
        <div class="sticky-demo">
          <div class="sticky-header">Sticky Header (40px)</div>
          <div class="snap-y-container">
            <div class="item-y mt40 c1">Section 1</div>
            <div class="item-y mt40 c2">Section 2</div>
            <div class="item-y mt40 c3">Section 3</div>
          </div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">scroll-margin-left: 16px</p>
        <div class="snap-container">
          <div class="item ml16 c1">Left 16px</div>
          <div class="item ml16 c2">Left 16px</div>
          <div class="item ml16 c3">Left 16px</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.snap-container {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  height: 90px;
}

.item {
  min-width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  color: #fff;
  flex-shrink: 0;
  scroll-snap-align: start;
}

.m0  { scroll-margin: 0; }
.m20 { scroll-margin: 20px; }
.ml16 { scroll-margin-left: 16px; }

/* Sticky header demo */
.sticky-demo {
  position: relative;
  height: 130px;
  overflow-y: scroll;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  scroll-snap-type: y mandatory;
}

.sticky-header {
  position: sticky;
  top: 0;
  background: #3b2a5e;
  color: #e2e8f0;
  padding: 8px 14px;
  font-size: 0.85rem;
  font-family: Arial, sans-serif;
  z-index: 10;
  border-bottom: 1px solid #a78bfa;
}

.snap-y-container { display: flex; flex-direction: column; }

.item-y {
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  color: #fff;
  scroll-snap-align: start;
  flex-shrink: 0;
}

.mt40 { scroll-margin-top: 40px; }

.c1 { background: #2a1a4e; }
.c2 { background: #3b1a2e; }
.c3 { background: #1a3a2e; }`,
  },

    // ─── 145. scroll-padding ────────────────────────────────────────
  {
    property: "scroll-padding",
    description: "Adds inset padding to the scroll container's snap port, offsetting where items snap to. Applied to the scroll container. Useful for compensating for sticky headers.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>scroll-padding — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>scroll-padding</span> Property</h1>
    <p class="page-desc">Offset the snap port of the container — great for sticky header compensation.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">scroll-padding: 0 (default)</p>
        <div class="snap-x sp0">
          <div class="item c1">Slide 1</div>
          <div class="item c2">Slide 2</div>
          <div class="item c3">Slide 3</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">scroll-padding: 20px</p>
        <div class="snap-x sp20">
          <div class="item c1">Slide 1</div>
          <div class="item c2">Slide 2</div>
          <div class="item c3">Slide 3</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">scroll-padding-top: 48px (sticky header)</p>
        <div class="sticky-wrap">
          <div class="sticky-bar">Header (48px)</div>
          <div class="snap-y spt48">
            <div class="item-y c1">Section 1</div>
            <div class="item-y c2">Section 2</div>
            <div class="item-y c3">Section 3</div>
          </div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">scroll-padding-left: 24px</p>
        <div class="snap-x spl24">
          <div class="item c1">Slide 1</div>
          <div class="item c2">Slide 2</div>
          <div class="item c3">Slide 3</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.snap-x {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  height: 90px;
}

.sp0   { scroll-padding: 0; }
.sp20  { scroll-padding: 20px; }
.spl24 { scroll-padding-left: 24px; }

.item {
  min-width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  color: #fff;
  flex-shrink: 0;
  scroll-snap-align: start;
}

/* Sticky header demo */
.sticky-wrap {
  position: relative;
  height: 140px;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  overflow: hidden;
}

.sticky-bar {
  position: sticky;
  top: 0;
  background: #3b2a5e;
  color: #e2e8f0;
  padding: 10px 14px;
  font-size: 0.85rem;
  font-family: Arial, sans-serif;
  z-index: 10;
  border-bottom: 1px solid #a78bfa;
}

.snap-y {
  height: 140px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.spt48 { scroll-padding-top: 48px; }

.item-y {
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  color: #fff;
  scroll-snap-align: start;
  flex-shrink: 0;
}
.c1 { background: #2a1a4e; }
.c2 { background: #3b1a2e; }
.c3 { background: #1a3a2e; }`,
  },

    // ─── 146. overscroll-behavior ───────────────────────────────────
  {
    property: "overscroll-behavior",
    description: "Controls what happens when a scroll container reaches its boundary. Values: auto (default — scroll chains to parent), contain (stops chain), none (stops chain and prevents bounce effects).",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>overscroll-behavior — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>overscroll-behavior</span> Property</h1>
    <p class="page-desc">Control what happens when scrolling reaches the edge of a container.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">overscroll-behavior: auto (chains to parent)</p>
        <div class="outer-scroll">
          <p class="outer-label">Outer scroll area</p>
          <div class="inner-scroll auto-os">
            <div class="scroll-content">Inner item 1</div>
            <div class="scroll-content">Inner item 2</div>
            <div class="scroll-content">Inner item 3</div>
            <div class="scroll-content">Inner item 4</div>
            <div class="scroll-content">Inner item 5</div>
          </div>
          <p class="outer-label">Scroll past inner to chain here</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">overscroll-behavior: contain (no chain)</p>
        <div class="outer-scroll">
          <p class="outer-label">Outer scroll area</p>
          <div class="inner-scroll contain-os">
            <div class="scroll-content">Inner item 1</div>
            <div class="scroll-content">Inner item 2</div>
            <div class="scroll-content">Inner item 3</div>
            <div class="scroll-content">Inner item 4</div>
            <div class="scroll-content">Inner item 5</div>
          </div>
          <p class="outer-label">Outer stays put when inner ends</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">overscroll-behavior: none</p>
        <div class="inner-scroll none-os standalone">
          <div class="scroll-content">Item 1</div>
          <div class="scroll-content">Item 2</div>
          <div class="scroll-content">Item 3</div>
          <div class="scroll-content">Item 4</div>
          <div class="scroll-content">Item 5</div>
        </div>
        <p class="note">No bounce, no chain — fully contained</p>
      </div>
      <div class="demo-card">
        <p class="label">overscroll-behavior-x: contain</p>
        <div class="horiz-scroll horiz-contain">
          <div class="horiz-item c1">Card 1</div>
          <div class="horiz-item c2">Card 2</div>
          <div class="horiz-item c3">Card 3</div>
          <div class="horiz-item c4">Card 4</div>
        </div>
        <p class="note">Horizontal chain blocked, vertical free</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.note {
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 8px;
  font-family: Arial, sans-serif;
}

.outer-scroll {
  height: 160px;
  overflow-y: scroll;
  background: #12121f;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  padding: 8px;
}

.outer-label {
  font-size: 0.75rem;
  color: #64748b;
  padding: 6px 8px;
  font-family: Arial, sans-serif;
}

.inner-scroll {
  height: 100px;
  overflow-y: scroll;
  background: #2a2a3e;
  border-radius: 6px;
  border: 1px solid #a78bfa;
  margin: 4px 0;
}

.standalone {
  height: 120px;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
}

.auto-os    { overscroll-behavior: auto; }
.contain-os { overscroll-behavior: contain; }
.none-os    { overscroll-behavior: none; }

.scroll-content {
  padding: 10px 14px;
  border-bottom: 1px solid #3e3e5e;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #e2e8f0;
}

.horiz-scroll {
  display: flex;
  overflow-x: scroll;
  gap: 0;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  height: 80px;
}

.horiz-contain { overscroll-behavior-x: contain; }

.horiz-item {
  min-width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: Arial, sans-serif;
  color: #fff;
  flex-shrink: 0;
}

.c1 { background: #2a1a4e; }
.c2 { background: #3b1a2e; }
.c3 { background: #1a3a2e; }
.c4 { background: #3b2a1e; }`,
  },

    // ─── 147. touch-action ──────────────────────────────────────────
  {
    property: "touch-action",
    description: "Controls how touch gestures are handled by the browser on an element. Values: auto, none, pan-x, pan-y, pinch-zoom, manipulation. Useful for custom gesture handling.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>touch-action — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>touch-action</span> Property</h1>
    <p class="page-desc">Control which touch gestures the browser handles natively on an element.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">touch-action: auto (default)</p>
        <div class="box f1">All gestures allowed<br/><span>pan, zoom, scroll</span></div>
      </div>
      <div class="demo-card">
        <p class="label">touch-action: none</p>
        <div class="box f2">No browser gestures<br/><span>JS handles all touch</span></div>
      </div>
      <div class="demo-card">
        <p class="label">touch-action: pan-x</p>
        <div class="box f3">Horizontal pan only<br/><span>vertical blocked</span></div>
      </div>
      <div class="demo-card">
        <p class="label">touch-action: pan-y</p>
        <div class="box f4">Vertical pan only<br/><span>horizontal blocked</span></div>
      </div>
      <div class="demo-card">
        <p class="label">touch-action: manipulation</p>
        <div class="box f5">Pan + pinch-zoom<br/><span>double-tap zoom disabled</span></div>
      </div>
      <div class="demo-card">
        <p class="label">touch-action: pinch-zoom</p>
        <div class="box f6">Pinch zoom only<br/><span>no panning</span></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 20px 16px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  text-align: center;
  line-height: 1.8;
  border: 1px solid #3e3e5e;
  user-select: none;
}

.box span {
  display: block;
  font-size: 0.78rem;
  color: #7c6fcd;
}

.f1 { touch-action: auto; }
.f2 { touch-action: none; }
.f3 { touch-action: pan-x; }
.f4 { touch-action: pan-y; }
.f5 { touch-action: manipulation; }
.f6 { touch-action: pinch-zoom; }`,
  },

    // ─── 148. caret-color ───────────────────────────────────────────
  {
    property: "caret-color",
    description: "Sets the color of the text input cursor (caret) in form fields and contenteditable elements. Accepts any CSS color value or auto.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>caret-color — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>caret-color</span> Property</h1>
    <p class="page-desc">Click inside each field to see the custom cursor color.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">caret-color: auto (default)</p>
        <input class="box f1" type="text" placeholder="Click to see default caret" />
      </div>
      <div class="demo-card">
        <p class="label">caret-color: #a78bfa</p>
        <input class="box f2" type="text" placeholder="Purple caret" />
      </div>
      <div class="demo-card">
        <p class="label">caret-color: #f472b6</p>
        <input class="box f3" type="text" placeholder="Pink caret" />
      </div>
      <div class="demo-card">
        <p class="label">caret-color: #34d399</p>
        <input class="box f4" type="text" placeholder="Green caret" />
      </div>
      <div class="demo-card">
        <p class="label">caret-color: #fbbf24</p>
        <input class="box f5" type="text" placeholder="Yellow caret" />
      </div>
      <div class="demo-card">
        <p class="label">caret-color: transparent (hidden)</p>
        <input class="box f6" type="text" placeholder="Invisible caret" />
      </div>
      <div class="demo-card">
        <p class="label">caret-color on contenteditable</p>
        <div class="box f7" contenteditable="true">Click and type here...</div>
      </div>
      <div class="demo-card">
        <p class="label">caret-color: red on textarea</p>
        <textarea class="box f8" rows="3" placeholder="Red caret textarea..."></textarea>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 12px 16px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  border: 1px solid #3e3e5e;
  width: 100%;
  outline: none;
  transition: border-color 0.2s;
}

.box:focus { border-color: #a78bfa; }

.box::placeholder { color: #4a4a6a; }

.f1 { caret-color: auto; }
.f2 { caret-color: #a78bfa; }
.f3 { caret-color: #f472b6; }
.f4 { caret-color: #34d399; }
.f5 { caret-color: #fbbf24; }
.f6 { caret-color: transparent; }
.f7 { caret-color: #a78bfa; min-height: 48px; }
.f8 { caret-color: red; resize: none; }`,
  },

    // ─── 149. tab-size ──────────────────────────────────────────────
  {
    property: "tab-size",
    description: "Sets the width of a tab character in preformatted text. Accepts an integer (number of spaces) or a length value. Only visible in elements with white-space: pre or pre-wrap.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>tab-size — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>tab-size</span> Property</h1>
    <p class="page-desc">Control the visual width of tab characters in preformatted text.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">tab-size: 2</p>
        <pre class="box f1">function hello() {
&#9;const name = "CSS";
&#9;if (name) {
&#9;&#9;console.log(name);
&#9;}
}</pre>
      </div>
      <div class="demo-card">
        <p class="label">tab-size: 4 (default)</p>
        <pre class="box f2">function hello() {
&#9;const name = "CSS";
&#9;if (name) {
&#9;&#9;console.log(name);
&#9;}
}</pre>
      </div>
      <div class="demo-card">
        <p class="label">tab-size: 8</p>
        <pre class="box f3">function hello() {
&#9;const name = "CSS";
&#9;if (name) {
&#9;&#9;console.log(name);
&#9;}
}</pre>
      </div>
      <div class="demo-card">
        <p class="label">tab-size: 1</p>
        <pre class="box f4">function hello() {
&#9;const name = "CSS";
&#9;if (name) {
&#9;&#9;console.log(name);
&#9;}
}</pre>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #12121f;
  padding: 14px 16px;
  border-radius: 8px;
  color: #a78bfa;
  font-size: 0.85rem;
  font-family: monospace;
  white-space: pre;
  overflow-x: auto;
  border: 1px solid #2e2e3e;
  line-height: 1.7;
}

.f1 { tab-size: 2; }
.f2 { tab-size: 4; }
.f3 { tab-size: 8; }
.f4 { tab-size: 1; }`,
  },

    // ─── 150. writing-mode ──────────────────────────────────────────
  {
    property: "writing-mode",
    description: "Sets whether lines of text are laid out horizontally or vertically, and the direction in which blocks progress. Values: horizontal-tb, vertical-rl, vertical-lr, sideways-rl, sideways-lr.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>writing-mode — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>writing-mode</span> Property</h1>
    <p class="page-desc">Change the direction text flows — horizontal, vertical, or sideways.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">writing-mode: horizontal-tb (default)</p>
        <div class="box f1">CSS Writing Mode — Horizontal Top to Bottom</div>
      </div>
      <div class="demo-card">
        <p class="label">writing-mode: vertical-rl</p>
        <div class="box-tall f2">CSS Writing Mode — Vertical Right to Left</div>
      </div>
      <div class="demo-card">
        <p class="label">writing-mode: vertical-lr</p>
        <div class="box-tall f3">CSS Writing Mode — Vertical Left to Right</div>
      </div>
      <div class="demo-card">
        <p class="label">writing-mode: sideways-rl</p>
        <div class="box-tall f4">CSS Writing Mode — Sideways RL</div>
      </div>
      <div class="demo-card">
        <p class="label">writing-mode: sideways-lr</p>
        <div class="box-tall f5">CSS Writing Mode — Sideways LR</div>
      </div>
      <div class="demo-card">
        <p class="label">vertical-rl — sidebar label use case</p>
        <div class="sidebar-demo">
          <div class="sidebar-label">SIDEBAR</div>
          <div class="sidebar-content">
            <p>Main content area goes here.</p>
            <p>The label on the left uses vertical writing mode.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  width: 100%;
}

.box-tall {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.95rem;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  height: 160px;
  overflow: hidden;
}

.f1 { writing-mode: horizontal-tb; }
.f2 { writing-mode: vertical-rl; }
.f3 { writing-mode: vertical-lr; }
.f4 { writing-mode: sideways-rl; }
.f5 { writing-mode: sideways-lr; }

/* Sidebar use case */
.sidebar-demo {
  display: flex;
  gap: 0;
  background: #2a2a3e;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  min-height: 100px;
}

.sidebar-label {
  writing-mode: vertical-rl;
  background: #a78bfa;
  color: #fff;
  padding: 12px 8px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-content {
  padding: 14px 16px;
  color: #e2e8f0;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  line-height: 1.7;
  display: flex;
  flex-direction: column;
  gap: 6px;
}`,
  },

    // ─── 151. direction ─────────────────────────────────────────────
  {
    property: "direction",
    description: "Sets the text direction of an element. Values: ltr (left-to-right, default) or rtl (right-to-left). Used for languages like Arabic and Hebrew. Should be paired with the HTML dir attribute for accessibility.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>direction — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>direction</span> Property</h1>
    <p class="page-desc">Control the text flow direction — left-to-right or right-to-left.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">direction: ltr (default)</p>
        <p class="box f1">Hello, this text flows left to right as normal.</p>
      </div>
      <div class="demo-card">
        <p class="label">direction: rtl</p>
        <p class="box f2">Hello, this text flows right to left.</p>
      </div>
      <div class="demo-card">
        <p class="label">direction: rtl — Arabic text</p>
        <p class="box f3">مرحبا بكم في CSS بأسلوبي</p>
      </div>
      <div class="demo-card">
        <p class="label">direction: rtl — list alignment</p>
        <ul class="box f4">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>
      <div class="demo-card">
        <p class="label">direction: rtl — input field</p>
        <input class="box f5" type="text" value="Right to left input" />
      </div>
      <div class="demo-card">
        <p class="label">ltr vs rtl side by side</p>
        <div class="compare">
          <p class="box-sm ltr">LTR text →</p>
          <p class="box-sm rtl">← RTL text</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  width: 100%;
  border: 1px solid #3e3e5e;
}

.f1 { direction: ltr; }
.f2 { direction: rtl; }
.f3 { direction: rtl; font-size: 1.1rem; }
.f4 { direction: rtl; padding-right: 32px; }
.f5 {
  direction: rtl;
  background: #2a2a3e;
  color: #e2e8f0;
  outline: none;
}
.f5:focus { border-color: #a78bfa; }

.compare { display: flex; flex-direction: column; gap: 8px; }

.box-sm {
  background: #2a2a3e;
  padding: 10px 14px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.95rem;
  font-family: Arial, sans-serif;
  border: 1px solid #3e3e5e;
}

.ltr { direction: ltr; }
.rtl { direction: rtl; }`,
  },

    // ─── 152. unicode-bidi ──────────────────────────────────────────
  {
    property: "unicode-bidi",
    description: "Works with the direction property to control how bidirectional text is handled. Values: normal, embed, bidi-override, isolate, isolate-override, plaintext.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>unicode-bidi — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>unicode-bidi</span> Property</h1>
    <p class="page-desc">Control how bidirectional text is embedded or overridden.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">unicode-bidi: normal (default)</p>
        <p class="box f1">Hello مرحبا World — mixed text normal</p>
      </div>
      <div class="demo-card">
        <p class="label">unicode-bidi: embed + direction: rtl</p>
        <p class="box f2">Hello مرحبا World — embedded RTL</p>
      </div>
      <div class="demo-card">
        <p class="label">unicode-bidi: bidi-override + direction: rtl</p>
        <p class="box f3">Hello World — forced RTL override</p>
      </div>
      <div class="demo-card">
        <p class="label">unicode-bidi: isolate</p>
        <p class="box f4">Hello <span class="iso">مرحبا</span> World — isolated segment</p>
      </div>
      <div class="demo-card">
        <p class="label">unicode-bidi: plaintext</p>
        <p class="box f5">Hello مرحبا World — plaintext bidi</p>
      </div>
      <div class="demo-card">
        <p class="label">bidi-override + direction: ltr</p>
        <p class="box f6">مرحبا بكم — forced LTR override</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.f1 { unicode-bidi: normal; }
.f2 { unicode-bidi: embed;         direction: rtl; }
.f3 { unicode-bidi: bidi-override; direction: rtl; }
.f4 { unicode-bidi: normal; }
.iso { unicode-bidi: isolate; color: #a78bfa; }
.f5 { unicode-bidi: plaintext; }
.f6 { unicode-bidi: bidi-override; direction: ltr; }`,
  },

    // ─── 153. text-orientation ──────────────────────────────────────
  {
    property: "text-orientation",
    description: "Sets the orientation of characters in a vertical writing mode. Values: mixed (default), upright, sideways. Only has effect when writing-mode is vertical-rl or vertical-lr.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>text-orientation — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>text-orientation</span> Property</h1>
    <p class="page-desc">Control character orientation in vertical writing mode.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">text-orientation: mixed (default)</p>
        <div class="vert-box f1">CSS Style 2024</div>
      </div>
      <div class="demo-card">
        <p class="label">text-orientation: upright</p>
        <div class="vert-box f2">CSS Style 2024</div>
      </div>
      <div class="demo-card">
        <p class="label">text-orientation: sideways</p>
        <div class="vert-box f3">CSS Style 2024</div>
      </div>
      <div class="demo-card">
        <p class="label">upright — Japanese + Latin mixed</p>
        <div class="vert-box f4">CSS スタイル 2024</div>
      </div>
      <div class="demo-card">
        <p class="label">mixed — Japanese + Latin mixed</p>
        <div class="vert-box f5">CSS スタイル 2024</div>
      </div>
      <div class="demo-card">
        <p class="label">sideways — rotated 90deg</p>
        <div class="vert-box f6">Sideways Text</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 16px;
  font-family: monospace;
  text-align: center;
  width: 100%;
}

.vert-box {
  background: #2a2a3e;
  padding: 16px 12px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  writing-mode: vertical-rl;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3e3e5e;
}

.f1 { text-orientation: mixed; }
.f2 { text-orientation: upright; }
.f3 { text-orientation: sideways; }
.f4 { text-orientation: upright; }
.f5 { text-orientation: mixed; }
.f6 { text-orientation: sideways; color: #a78bfa; }`,
  },

    // ─── 154. text-combine-upright ──────────────────────────────────
  {
    property: "text-combine-upright",
    description: "Combines multiple characters into a single upright glyph in vertical writing mode. Used for fitting numbers or abbreviations into a vertical text line. Values: none, all, digits.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>text-combine-upright — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>text-combine-upright</span> Property</h1>
    <p class="page-desc">Combine characters into a single upright glyph in vertical text.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">text-combine-upright: none (default)</p>
        <div class="vert-text">
          <span>2024年</span>
          <span class="tcu-none">12</span>
          <span>月</span>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">text-combine-upright: all</p>
        <div class="vert-text">
          <span>2024年</span>
          <span class="tcu-all">12</span>
          <span>月</span>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">text-combine-upright: digits 2</p>
        <div class="vert-text">
          <span>令和</span>
          <span class="tcu-digits">06</span>
          <span>年度</span>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">Use case — vertical date display</p>
        <div class="vert-text date-demo">
          <span>令和</span>
          <span class="tcu-all">06</span>
          <span>年</span>
          <span class="tcu-all">12</span>
          <span>月</span>
          <span class="tcu-all">25</span>
          <span>日</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 16px;
  font-family: monospace;
  text-align: center;
  width: 100%;
}

.vert-text {
  writing-mode: vertical-rl;
  background: #2a2a3e;
  padding: 16px 12px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.1rem;
  font-family: Arial, sans-serif;
  min-height: 160px;
  display: flex;
  align-items: center;
  border: 1px solid #3e3e5e;
}

.tcu-none   { text-combine-upright: none; color: #f472b6; }
.tcu-all    { text-combine-upright: all;  color: #a78bfa; }
.tcu-digits { text-combine-upright: digits 2; color: #34d399; }

.date-demo { font-size: 1rem; }`,
  },

    // ─── 155. text-decoration-line ──────────────────────────────────
  {
    property: "text-decoration-line",
    description: "Sets the type of line decoration on text. Values: none, underline, overline, line-through. Multiple values can be combined.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>text-decoration-line — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>text-decoration-line</span> Property</h1>
    <p class="page-desc">Add underlines, overlines, and strikethroughs independently.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">text-decoration-line: none</p>
        <p class="box f1">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration-line: underline</p>
        <p class="box f2">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration-line: overline</p>
        <p class="box f3">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration-line: line-through</p>
        <p class="box f4">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">underline + overline</p>
        <p class="box f5">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">underline + line-through</p>
        <p class="box f6">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">underline + overline + line-through</p>
        <p class="box f7">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">underline — link style</p>
        <p class="box f8"><a href="#" class="link">Click this link</a></p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.1rem;
  font-family: Arial, sans-serif;
}

.f1 { text-decoration-line: none; }
.f2 { text-decoration-line: underline; }
.f3 { text-decoration-line: overline; }
.f4 { text-decoration-line: line-through; }
.f5 { text-decoration-line: underline overline; }
.f6 { text-decoration-line: underline line-through; }
.f7 { text-decoration-line: underline overline line-through; }
.f8 { text-decoration-line: none; }

.link {
  color: #a78bfa;
  text-decoration-line: underline;
  text-decoration-color: #a78bfa;
}
.link:hover {
  text-decoration-line: none;
}`,
  },

    // ─── 156. text-decoration-color ─────────────────────────────────
  {
    property: "text-decoration-color",
    description: "Sets the color of the text decoration line (underline, overline, line-through) independently from the text color. Accepts any CSS color value.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>text-decoration-color — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>text-decoration-color</span> Property</h1>
    <p class="page-desc">Color the underline, overline, or strikethrough independently from the text.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">text-decoration-color: currentColor</p>
        <p class="box f1">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration-color: #a78bfa</p>
        <p class="box f2">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration-color: #f472b6</p>
        <p class="box f3">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration-color: #34d399</p>
        <p class="box f4">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration-color: #fbbf24</p>
        <p class="box f5">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration-color: rgba(167,139,250,0.4)</p>
        <p class="box f6">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">line-through with custom color</p>
        <p class="box f7">Crossed Out Text</p>
      </div>
      <div class="demo-card">
        <p class="label">overline with custom color</p>
        <p class="box f8">Overlined Text</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.1rem;
  font-family: Arial, sans-serif;
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
}

.f1 { text-decoration-color: currentColor; }
.f2 { text-decoration-color: #a78bfa; }
.f3 { text-decoration-color: #f472b6; }
.f4 { text-decoration-color: #34d399; }
.f5 { text-decoration-color: #fbbf24; }
.f6 { text-decoration-color: rgba(167, 139, 250, 0.4); }
.f7 {
  text-decoration-line: line-through;
  text-decoration-color: #f472b6;
  text-decoration-thickness: 2px;
}
.f8 {
  text-decoration-line: overline;
  text-decoration-color: #34d399;
  text-decoration-thickness: 2px;
}`,
  },

    // ─── 157. text-decoration-style ─────────────────────────────────
  {
    property: "text-decoration-style",
    description: "Sets the style of the text decoration line. Values: solid, double, dotted, dashed, wavy.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>text-decoration-style — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>text-decoration-style</span> Property</h1>
    <p class="page-desc">Choose the line style for text decorations — solid, dashed, wavy, and more.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">text-decoration-style: solid</p>
        <p class="box f1">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration-style: double</p>
        <p class="box f2">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration-style: dotted</p>
        <p class="box f3">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration-style: dashed</p>
        <p class="box f4">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration-style: wavy</p>
        <p class="box f5">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">wavy — spell-check style</p>
        <p class="box f6">Speling Eror Here</p>
      </div>
      <div class="demo-card">
        <p class="label">wavy overline</p>
        <p class="box f7">Wavy Overline</p>
      </div>
      <div class="demo-card">
        <p class="label">dashed line-through</p>
        <p class="box f8">Dashed Strike</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.1rem;
  font-family: Arial, sans-serif;
  text-decoration-line: underline;
  text-decoration-color: #a78bfa;
  text-decoration-thickness: 2px;
}

.f1 { text-decoration-style: solid; }
.f2 { text-decoration-style: double; text-decoration-thickness: 3px; }
.f3 { text-decoration-style: dotted; }
.f4 { text-decoration-style: dashed; }
.f5 { text-decoration-style: wavy; }
.f6 {
  text-decoration-style: wavy;
  text-decoration-color: #ef4444;
  text-decoration-thickness: 2px;
}
.f7 {
  text-decoration-line: overline;
  text-decoration-style: wavy;
  text-decoration-color: #f472b6;
}
.f8 {
  text-decoration-line: line-through;
  text-decoration-style: dashed;
  text-decoration-color: #fbbf24;
}`,
  },

    // ─── 158. text-decoration-thickness ────────────────────────────
  {
    property: "text-decoration-thickness",
    description: "Sets the stroke thickness of the text decoration line. Accepts px, em, rem, %, or the keywords auto and from-font.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>text-decoration-thickness — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>text-decoration-thickness</span> Property</h1>
    <p class="page-desc">Control how thick the underline, overline, or strikethrough line is.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">text-decoration-thickness: auto</p>
        <p class="box f1">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration-thickness: from-font</p>
        <p class="box f2">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration-thickness: 1px</p>
        <p class="box f3">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration-thickness: 3px</p>
        <p class="box f4">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration-thickness: 6px</p>
        <p class="box f5">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-decoration-thickness: 0.2em</p>
        <p class="box f6">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">thick wavy underline</p>
        <p class="box f7">Wavy Thick</p>
      </div>
      <div class="demo-card">
        <p class="label">thick line-through</p>
        <p class="box f8">Struck Through</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.1rem;
  font-family: Arial, sans-serif;
  text-decoration-line: underline;
  text-decoration-color: #a78bfa;
  text-decoration-style: solid;
}

.f1 { text-decoration-thickness: auto; }
.f2 { text-decoration-thickness: from-font; }
.f3 { text-decoration-thickness: 1px; }
.f4 { text-decoration-thickness: 3px; }
.f5 { text-decoration-thickness: 6px; }
.f6 { text-decoration-thickness: 0.2em; }
.f7 {
  text-decoration-style: wavy;
  text-decoration-color: #f472b6;
  text-decoration-thickness: 4px;
}
.f8 {
  text-decoration-line: line-through;
  text-decoration-color: #ef4444;
  text-decoration-thickness: 5px;
}`,
  },

    // ─── 159. text-underline-offset ─────────────────────────────────
  {
    property: "text-underline-offset",
    description: "Sets the distance between the text baseline and the underline. Positive values move the underline down; negative values move it up. Accepts px, em, rem, or auto.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>text-underline-offset — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>text-underline-offset</span> Property</h1>
    <p class="page-desc">Move the underline closer to or further from the text baseline.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">text-underline-offset: auto</p>
        <p class="box f1">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-underline-offset: 0px</p>
        <p class="box f2">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-underline-offset: 4px</p>
        <p class="box f3">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-underline-offset: 8px</p>
        <p class="box f4">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-underline-offset: 12px</p>
        <p class="box f5">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">text-underline-offset: -2px</p>
        <p class="box f6">Sample Text</p>
      </div>
      <div class="demo-card">
        <p class="label">offset + wavy — stylish link</p>
        <p class="box f7"><a href="#" class="styled-link">Stylish Link</a></p>
      </div>
      <div class="demo-card">
        <p class="label">offset + thick — bold underline</p>
        <p class="box f8">Bold Underline</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.1rem;
  font-family: Arial, sans-serif;
  text-decoration-line: underline;
  text-decoration-color: #a78bfa;
  text-decoration-thickness: 2px;
}

.f1 { text-underline-offset: auto; }
.f2 { text-underline-offset: 0px; }
.f3 { text-underline-offset: 4px; }
.f4 { text-underline-offset: 8px; }
.f5 { text-underline-offset: 12px; }
.f6 { text-underline-offset: -2px; }
.f7 { text-decoration: none; }

.styled-link {
  color: #a78bfa;
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: #f472b6;
  text-decoration-thickness: 2px;
  text-underline-offset: 6px;
}

.f8 {
  text-underline-offset: 6px;
  text-decoration-thickness: 4px;
  text-decoration-color: #fbbf24;
}`,
  },

    // ─── 160. text-underline-position ───────────────────────────────
  {
    property: "text-underline-position",
    description: "Sets the position of the underline relative to the text. Values: auto, under, left, right. The under value places the underline below all descenders, preventing it from crossing through letters like g, p, y.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>text-underline-position — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>text-underline-position</span> Property</h1>
    <p class="page-desc">Control where the underline sits relative to descending letters.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">text-underline-position: auto</p>
        <p class="box f1">Typography gypsy python</p>
      </div>
      <div class="demo-card">
        <p class="label">text-underline-position: under</p>
        <p class="box f2">Typography gypsy python</p>
      </div>
      <div class="demo-card">
        <p class="label">auto — descenders cross the line</p>
        <p class="box f3">gjpqy — descenders visible</p>
      </div>
      <div class="demo-card">
        <p class="label">under — line clears all descenders</p>
        <p class="box f4">gjpqy — descenders clear</p>
      </div>
      <div class="demo-card">
        <p class="label">under — vertical writing mode left</p>
        <div class="vert-box f5">CSS Style</div>
      </div>
      <div class="demo-card">
        <p class="label">under — vertical writing mode right</p>
        <div class="vert-box f6">CSS Style</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.2rem;
  font-family: Georgia, serif;
  text-decoration-line: underline;
  text-decoration-color: #a78bfa;
  text-decoration-thickness: 2px;
  width: 100%;
}

.f1 { text-underline-position: auto; }
.f2 { text-underline-position: under; }
.f3 {
  text-underline-position: auto;
  text-decoration-color: #f472b6;
}
.f4 {
  text-underline-position: under;
  text-decoration-color: #34d399;
}

/* Vertical writing mode demos */
.vert-box {
  background: #2a2a3e;
  padding: 14px 12px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.1rem;
  font-family: Arial, sans-serif;
  writing-mode: vertical-rl;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration-line: underline;
  text-decoration-color: #a78bfa;
  text-decoration-thickness: 2px;
}

.f5 { text-underline-position: left; }
.f6 { text-underline-position: right; }`,
  },

    // ─── 161. columns ───────────────────────────────────────────────
  {
    property: "columns",
    description: "Shorthand for column-width and column-count. Sets the number and/or width of columns in a multi-column layout. The browser balances content across columns automatically.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>columns — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>columns</span> Property</h1>
    <p class="page-desc">Shorthand to create multi-column text layouts like a newspaper.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">columns: 2</p>
        <div class="box f1">
          CSS multi-column layout lets you flow text across multiple columns automatically.
          The browser balances the content evenly. This is great for articles and reading layouts.
          You can control the number of columns or their minimum width.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">columns: 3</p>
        <div class="box f2">
          CSS multi-column layout lets you flow text across multiple columns automatically.
          The browser balances the content evenly. This is great for articles and reading layouts.
          You can control the number of columns or their minimum width.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">columns: 150px (auto count)</p>
        <div class="box f3">
          CSS multi-column layout lets you flow text across multiple columns automatically.
          The browser balances the content evenly. This is great for articles and reading layouts.
          You can control the number of columns or their minimum width.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">columns: 2 200px</p>
        <div class="box f4">
          CSS multi-column layout lets you flow text across multiple columns automatically.
          The browser balances the content evenly. This is great for articles and reading layouts.
          You can control the number of columns or their minimum width.
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 900px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.9rem;
  font-family: Georgia, serif;
  line-height: 1.7;
}

.f1 { columns: 2; }
.f2 { columns: 3; }
.f3 { columns: 150px; }
.f4 { columns: 2 200px; }`,
  },

    // ─── 162. column-count ──────────────────────────────────────────
  {
    property: "column-count",
    description: "Sets the exact number of columns to split content into. The browser automatically sizes each column equally. Values: auto or a positive integer.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>column-count — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>column-count</span> Property</h1>
    <p class="page-desc">Specify exactly how many columns to split your content into.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">column-count: 1 (default)</p>
        <div class="box f1">
          The quick brown fox jumps over the lazy dog. CSS column layout is powerful for
          creating magazine-style text flows without any JavaScript or complex markup.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-count: 2</p>
        <div class="box f2">
          The quick brown fox jumps over the lazy dog. CSS column layout is powerful for
          creating magazine-style text flows without any JavaScript or complex markup.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-count: 3</p>
        <div class="box f3">
          The quick brown fox jumps over the lazy dog. CSS column layout is powerful for
          creating magazine-style text flows without any JavaScript or complex markup.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-count: 4</p>
        <div class="box f4">
          The quick brown fox jumps over the lazy dog. CSS column layout is powerful for
          creating magazine-style text flows without any JavaScript or complex markup.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-count: auto</p>
        <div class="box f5">
          The quick brown fox jumps over the lazy dog. CSS column layout is powerful for
          creating magazine-style text flows without any JavaScript or complex markup.
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 900px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.9rem;
  font-family: Georgia, serif;
  line-height: 1.7;
}

.f1 { column-count: 1; }
.f2 { column-count: 2; }
.f3 { column-count: 3; }
.f4 { column-count: 4; }
.f5 { column-count: auto; }`,
  },

    // ─── 163. column-width ──────────────────────────────────────────
  {
    property: "column-width",
    description: "Sets the ideal minimum width of each column. The browser creates as many columns as fit within the container at that width. Values: auto or a length like px, em, rem.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>column-width — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>column-width</span> Property</h1>
    <p class="page-desc">Set the ideal column width — the browser decides how many columns fit.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">column-width: auto</p>
        <div class="box f1">
          The quick brown fox jumps over the lazy dog. CSS column-width lets the browser
          decide how many columns fit based on the minimum width you specify.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-width: 100px</p>
        <div class="box f2">
          The quick brown fox jumps over the lazy dog. CSS column-width lets the browser
          decide how many columns fit based on the minimum width you specify.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-width: 150px</p>
        <div class="box f3">
          The quick brown fox jumps over the lazy dog. CSS column-width lets the browser
          decide how many columns fit based on the minimum width you specify.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-width: 200px</p>
        <div class="box f4">
          The quick brown fox jumps over the lazy dog. CSS column-width lets the browser
          decide how many columns fit based on the minimum width you specify.
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 900px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.9rem;
  font-family: Georgia, serif;
  line-height: 1.7;
}

.f1 { column-width: auto; }
.f2 { column-width: 100px; }
.f3 { column-width: 150px; }
.f4 { column-width: 200px; }`,
  },


    // ─── 165. column-rule ───────────────────────────────────────────
  {
    property: "column-rule",
    description: "Shorthand for column-rule-width, column-rule-style, and column-rule-color. Draws a line between columns in a multi-column layout, similar to a border.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>column-rule — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>column-rule</span> Property</h1>
    <p class="page-desc">Draw a dividing line between columns using column-rule shorthand.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">column-rule: none</p>
        <div class="box f1">
          The quick brown fox jumps over the lazy dog. No rule between these columns.
          Content flows naturally across the column gap.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule: 1px solid #a78bfa</p>
        <div class="box f2">
          The quick brown fox jumps over the lazy dog. A thin solid purple rule divides
          these columns cleanly and elegantly.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule: 3px dashed #f472b6</p>
        <div class="box f3">
          The quick brown fox jumps over the lazy dog. A dashed pink rule adds a playful
          visual separator between these two columns.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule: 2px dotted #34d399</p>
        <div class="box f4">
          The quick brown fox jumps over the lazy dog. A dotted green rule creates a
          subtle and clean separation between columns.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule: 4px double #fbbf24</p>
        <div class="box f5">
          The quick brown fox jumps over the lazy dog. A double yellow rule gives a
          classic newspaper-style column divider look.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">3 columns + solid rule</p>
        <div class="box f6">
          The quick brown fox jumps over the lazy dog. Three columns with a solid rule
          creates a clean magazine-style layout for longer content blocks.
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 900px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.9rem;
  font-family: Georgia, serif;
  line-height: 1.7;
  column-count: 2;
  column-gap: 20px;
}

.f1 { column-rule: none; }
.f2 { column-rule: 1px solid #a78bfa; }
.f3 { column-rule: 3px dashed #f472b6; }
.f4 { column-rule: 2px dotted #34d399; }
.f5 { column-rule: 4px double #fbbf24; }
.f6 {
  column-count: 3;
  column-rule: 1px solid #a78bfa;
  column-gap: 16px;
  font-size: 0.82rem;
}`,
  },

    // ─── 166. column-rule-width ─────────────────────────────────────
  {
    property: "column-rule-width",
    description: "Sets the thickness of the rule drawn between columns. Accepts px, em, rem, or keywords: thin, medium, thick.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>column-rule-width — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>column-rule-width</span> Property</h1>
    <p class="page-desc">Control the thickness of the dividing line between columns.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">column-rule-width: thin</p>
        <div class="box f1">
          The quick brown fox jumps over the lazy dog. A thin rule between these two
          columns creates a subtle visual separator.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule-width: medium</p>
        <div class="box f2">
          The quick brown fox jumps over the lazy dog. A medium rule between these two
          columns creates a balanced visual separator.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule-width: thick</p>
        <div class="box f3">
          The quick brown fox jumps over the lazy dog. A thick rule between these two
          columns creates a bold visual separator.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule-width: 1px</p>
        <div class="box f4">
          The quick brown fox jumps over the lazy dog. A 1px rule is the thinnest
          explicit pixel value you can set for the column rule.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule-width: 4px</p>
        <div class="box f5">
          The quick brown fox jumps over the lazy dog. A 4px rule gives a clearly
          visible and prominent column divider.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule-width: 8px</p>
        <div class="box f6">
          The quick brown fox jumps over the lazy dog. An 8px rule creates a very
          bold and dominant column separator.
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 900px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.9rem;
  font-family: Georgia, serif;
  line-height: 1.7;
  column-count: 2;
  column-gap: 24px;
  column-rule-style: solid;
  column-rule-color: #a78bfa;
}

.f1 { column-rule-width: thin; }
.f2 { column-rule-width: medium; }
.f3 { column-rule-width: thick; }
.f4 { column-rule-width: 1px; }
.f5 { column-rule-width: 4px; }
.f6 { column-rule-width: 8px; }`,
  },

    // ─── 167. column-rule-style ─────────────────────────────────────
  {
    property: "column-rule-style",
    description: "Sets the line style of the rule between columns. Values: none, solid, dashed, dotted, double, groove, ridge, inset, outset — same as border-style.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>column-rule-style — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>column-rule-style</span> Property</h1>
    <p class="page-desc">Choose the line style for the divider between columns.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">column-rule-style: none</p>
        <div class="box f1">
          The quick brown fox jumps over the lazy dog. No rule is drawn between
          these two columns.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule-style: solid</p>
        <div class="box f2">
          The quick brown fox jumps over the lazy dog. A solid rule is drawn between
          these two columns.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule-style: dashed</p>
        <div class="box f3">
          The quick brown fox jumps over the lazy dog. A dashed rule is drawn between
          these two columns.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule-style: dotted</p>
        <div class="box f4">
          The quick brown fox jumps over the lazy dog. A dotted rule is drawn between
          these two columns.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule-style: double</p>
        <div class="box f5">
          The quick brown fox jumps over the lazy dog. A double rule is drawn between
          these two columns.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule-style: groove</p>
        <div class="box f6">
          The quick brown fox jumps over the lazy dog. A groove rule is drawn between
          these two columns.
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 900px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.9rem;
  font-family: Georgia, serif;
  line-height: 1.7;
  column-count: 2;
  column-gap: 24px;
  column-rule-width: 3px;
  column-rule-color: #a78bfa;
}

.f1 { column-rule-style: none; }
.f2 { column-rule-style: solid; }
.f3 { column-rule-style: dashed; }
.f4 { column-rule-style: dotted; }
.f5 { column-rule-style: double; column-rule-width: 5px; }
.f6 { column-rule-style: groove; column-rule-color: #c4b5fd; }`,
  },

    // ─── 168. column-rule-color ─────────────────────────────────────
  {
    property: "column-rule-color",
    description: "Sets the color of the rule drawn between columns. Accepts any CSS color value. Defaults to the element's color property value.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>column-rule-color — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>column-rule-color</span> Property</h1>
    <p class="page-desc">Set the color of the dividing line between columns.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">column-rule-color: currentColor</p>
        <div class="box f1">
          The quick brown fox jumps over the lazy dog. The rule color matches
          the text color by default.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule-color: #a78bfa</p>
        <div class="box f2">
          The quick brown fox jumps over the lazy dog. A purple rule divides
          these two columns.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule-color: #f472b6</p>
        <div class="box f3">
          The quick brown fox jumps over the lazy dog. A pink rule divides
          these two columns.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule-color: #34d399</p>
        <div class="box f4">
          The quick brown fox jumps over the lazy dog. A green rule divides
          these two columns.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule-color: #fbbf24</p>
        <div class="box f5">
          The quick brown fox jumps over the lazy dog. A yellow rule divides
          these two columns.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-rule-color: rgba(167,139,250,0.3)</p>
        <div class="box f6">
          The quick brown fox jumps over the lazy dog. A semi-transparent rule
          creates a subtle column divider.
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 900px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.9rem;
  font-family: Georgia, serif;
  line-height: 1.7;
  column-count: 2;
  column-gap: 24px;
  column-rule-width: 2px;
  column-rule-style: solid;
}

.f1 { column-rule-color: currentColor; }
.f2 { column-rule-color: #a78bfa; }
.f3 { column-rule-color: #f472b6; }
.f4 { column-rule-color: #34d399; }
.f5 { column-rule-color: #fbbf24; }
.f6 { column-rule-color: rgba(167, 139, 250, 0.3); }`,
  },

    // ─── 169. column-span ───────────────────────────────────────────
  {
    property: "column-span",
    description: "Allows an element to span across all columns in a multi-column layout. Values: none (stays in one column) or all (spans all columns). Applied to the child element, not the container.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>column-span — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>column-span</span> Property</h1>
    <p class="page-desc">Make an element span across all columns — great for headings in articles.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">column-span: none (default)</p>
        <div class="col-container">
          <h3 class="span-none">Section Heading</h3>
          <p>The quick brown fox jumps over the lazy dog. This heading stays within
          its column and does not span across. Content continues to flow normally.</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-span: all</p>
        <div class="col-container">
          <h3 class="span-all">Section Heading Spans All</h3>
          <p>The quick brown fox jumps over the lazy dog. This heading spans across
          all columns. Content below it resumes the multi-column flow normally.</p>
        </div>
      </div>
      <div class="demo-card full-width">
        <p class="label">column-span: all — full article layout</p>
        <div class="article">
          <h2 class="article-title">Breaking News: CSS is Awesome</h2>
          <p>The quick brown fox jumps over the lazy dog. CSS multi-column layout
          is a powerful tool for creating print-like layouts on the web. It allows
          content to flow naturally across multiple columns.</p>
          <h3 class="sub-heading">Sub Section</h3>
          <p>More content here that continues to flow across the columns after
          the sub-heading which also spans all columns in this layout.</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 900px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.full-width {
  grid-column: 1 / -1;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.col-container {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.9rem;
  font-family: Georgia, serif;
  line-height: 1.7;
  column-count: 2;
  column-gap: 20px;
  column-rule: 1px solid #3e3e5e;
}

.col-container h3 {
  font-size: 1rem;
  color: #a78bfa;
  margin-bottom: 6px;
}

.span-none { column-span: none; }
.span-all  {
  column-span: all;
  border-bottom: 1px solid #a78bfa;
  padding-bottom: 6px;
  margin-bottom: 8px;
}

/* Article layout */
.article {
  background: #2a2a3e;
  padding: 16px 20px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.9rem;
  font-family: Georgia, serif;
  line-height: 1.7;
  column-count: 3;
  column-gap: 20px;
  column-rule: 1px solid #3e3e5e;
}

.article-title {
  column-span: all;
  font-size: 1.2rem;
  color: #a78bfa;
  border-bottom: 2px solid #a78bfa;
  padding-bottom: 8px;
  margin-bottom: 12px;
}

.sub-heading {
  column-span: all;
  font-size: 1rem;
  color: #f472b6;
  border-bottom: 1px dashed #f472b6;
  padding-bottom: 4px;
  margin: 10px 0 8px;
}`,
  },

    // ─── 170. column-fill ───────────────────────────────────────────
  {
    property: "column-fill",
    description: "Controls how content is distributed across columns. Values: balance (default — columns are equal height) or auto (columns fill top to bottom, leaving the last column shorter).",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>column-fill — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>column-fill</span> Property</h1>
    <p class="page-desc">Control whether columns are balanced in height or filled top to bottom.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">column-fill: balance (default)</p>
        <div class="box f1">
          The quick brown fox jumps over the lazy dog. CSS column-fill balance
          distributes content evenly so all columns are approximately the same height.
          This is the default behavior.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">column-fill: auto (needs fixed height)</p>
        <div class="box f2">
          The quick brown fox jumps over the lazy dog. CSS column-fill auto fills
          columns from top to bottom. The last column may be shorter than the others.
          This requires a fixed height on the container.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">balance — short content</p>
        <div class="box f3">
          Short content balanced across two columns.
        </div>
      </div>
      <div class="demo-card">
        <p class="label">auto — short content with fixed height</p>
        <div class="box f4">
          Short content fills first column top to bottom before moving to next.
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 900px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.9rem;
  font-family: Georgia, serif;
  line-height: 1.7;
  column-count: 2;
  column-gap: 20px;
  column-rule: 1px solid #3e3e5e;
}

.f1 { column-fill: balance; }
.f2 { column-fill: auto; height: 120px; overflow: hidden; }
.f3 { column-fill: balance; }
.f4 { column-fill: auto; height: 100px; overflow: hidden; }`,
  },

    // ─── 171. break-before ──────────────────────────────────────────
  {
    property: "break-before",
    description: "Controls whether a page, column, or region break should occur before an element. Values: auto, avoid, always, all, avoid-page, page, left, right, recto, verso, avoid-column, column, avoid-region, region.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>break-before — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>break-before</span> Property</h1>
    <p class="page-desc">Force or prevent a column/page break before an element.</p>

    <div class="demo-grid">
      <div class="demo-card full">
        <p class="label">break-before: auto (default) — no forced break</p>
        <div class="col-box">
          <div class="block">Block One — content flows naturally into columns without any forced breaks applied before this element.</div>
          <div class="block auto-break">Block Two — auto means the browser decides where to break. No break is forced before this block.</div>
          <div class="block">Block Three — continues flowing naturally after block two in the column layout.</div>
        </div>
      </div>
      <div class="demo-card full">
        <p class="label">break-before: column — forces a column break before element</p>
        <div class="col-box">
          <div class="block">Block One — this content fills the first column before the forced break below.</div>
          <div class="block col-break">Block Two — break-before: column forces this block to start at the top of the next column.</div>
          <div class="block">Block Three — continues in the column after block two.</div>
        </div>
      </div>
      <div class="demo-card full">
        <p class="label">break-before: avoid-column — prevents break before element</p>
        <div class="col-box">
          <div class="block">Block One — some content here to push things toward a column boundary.</div>
          <div class="block avoid-col-break">Block Two — avoid-column tries to keep this block from being split at a column boundary.</div>
          <div class="block">Block Three — follows naturally.</div>
        </div>
      </div>
    </div>

    <div class="print-note">
      <p>💡 <strong>Print tip:</strong> Use <code>break-before: page</code> in print stylesheets to force elements onto a new page when printing.</p>
      <pre class="code-block">@media print {
  .chapter { break-before: page; }
}</pre>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 900px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 24px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.full { grid-column: 1 / -1; }

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.col-box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  column-count: 3;
  column-gap: 20px;
  column-rule: 1px solid #3e3e5e;
}

.block {
  background: #1e1e2e;
  border: 1px solid #3e3e5e;
  border-radius: 6px;
  padding: 10px 14px;
  margin-bottom: 8px;
  font-family: Arial, sans-serif;
  font-size: 0.88rem;
  color: #e2e8f0;
  line-height: 1.6;
}

.auto-break    { break-before: auto; border-color: #a78bfa; }
.col-break     { break-before: column; border-color: #f472b6; }
.avoid-col-break { break-before: avoid-column; border-color: #34d399; }

.print-note {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-left: 3px solid #a78bfa;
  border-radius: 12px;
  padding: 20px;
}

.print-note p {
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #94a3b8;
  margin-bottom: 12px;
}

.print-note code {
  background: #2a2a3e;
  padding: 2px 6px;
  border-radius: 4px;
  color: #a78bfa;
  font-family: monospace;
}

.code-block {
  background: #12121f;
  padding: 12px 16px;
  border-radius: 8px;
  color: #a78bfa;
  font-family: monospace;
  font-size: 0.85rem;
  line-height: 1.7;
  border: 1px solid #2e2e3e;
}`,
  },

    // ─── 172. break-after ───────────────────────────────────────────
  {
    property: "break-after",
    description: "Controls whether a page, column, or region break should occur after an element. Same values as break-before: auto, avoid, always, column, page, avoid-column, etc.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>break-after — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>break-after</span> Property</h1>
    <p class="page-desc">Force or prevent a column/page break after an element.</p>

    <div class="demo-grid">
      <div class="demo-card full">
        <p class="label">break-after: auto — no forced break after element</p>
        <div class="col-box">
          <div class="block auto-after">Block One — auto means no break is forced after this block. Content flows naturally.</div>
          <div class="block">Block Two — follows naturally after block one in the column flow.</div>
          <div class="block">Block Three — continues the natural column flow.</div>
        </div>
      </div>
      <div class="demo-card full">
        <p class="label">break-after: column — forces column break after element</p>
        <div class="col-box">
          <div class="block col-after">Block One — break-after: column forces the next block to start in a new column after this one.</div>
          <div class="block">Block Two — starts at the top of the next column due to the break-after on block one.</div>
          <div class="block">Block Three — continues after block two.</div>
        </div>
      </div>
      <div class="demo-card full">
        <p class="label">break-after: avoid-column — prevents break after element</p>
        <div class="col-box">
          <div class="block avoid-after">Block One — avoid-column tries to keep the next block in the same column as this one.</div>
          <div class="block">Block Two — the browser tries to keep this with block one.</div>
          <div class="block">Block Three — continues naturally.</div>
        </div>
      </div>
    </div>

    <div class="print-note">
      <p>💡 <strong>Print tip:</strong> Use <code>break-after: page</code> to force a new page after a section when printing.</p>
      <pre class="code-block">@media print {
  .section { break-after: page; }
}</pre>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 900px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 24px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.full { grid-column: 1 / -1; }

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.col-box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  column-count: 3;
  column-gap: 20px;
  column-rule: 1px solid #3e3e5e;
}

.block {
  background: #1e1e2e;
  border: 1px solid #3e3e5e;
  border-radius: 6px;
  padding: 10px 14px;
  margin-bottom: 8px;
  font-family: Arial, sans-serif;
  font-size: 0.88rem;
  color: #e2e8f0;
  line-height: 1.6;
}

.auto-after   { break-after: auto;          border-color: #a78bfa; }
.col-after    { break-after: column;        border-color: #f472b6; }
.avoid-after  { break-after: avoid-column;  border-color: #34d399; }

.print-note {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-left: 3px solid #a78bfa;
  border-radius: 12px;
  padding: 20px;
}

.print-note p {
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #94a3b8;
  margin-bottom: 12px;
}

.print-note code {
  background: #2a2a3e;
  padding: 2px 6px;
  border-radius: 4px;
  color: #a78bfa;
  font-family: monospace;
}

.code-block {
  background: #12121f;
  padding: 12px 16px;
  border-radius: 8px;
  color: #a78bfa;
  font-family: monospace;
  font-size: 0.85rem;
  line-height: 1.7;
  border: 1px solid #2e2e3e;
}`,
  },


    // ─── 173. break-inside ──────────────────────────────────────────
  {
    property: "break-inside",
    description: "Controls whether a page, column, or region break can occur inside an element. Values: auto, avoid, avoid-page, avoid-column, avoid-region. Use avoid to keep an element from being split across columns.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>break-inside — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>break-inside</span> Property</h1>
    <p class="page-desc">Prevent elements from being split across columns or pages.</p>

    <div class="demo-grid">
      <div class="demo-card full">
        <p class="label">break-inside: auto — element can split across columns</p>
        <div class="col-box">
          <div class="card auto-inside">
            <h4>Card Title</h4>
            <p>This card uses break-inside: auto which means the browser can split
            this card across two columns if needed. The content may be cut mid-card.</p>
          </div>
          <div class="card auto-inside">
            <h4>Another Card</h4>
            <p>This is another card that may also be split across columns when the
            browser determines a column break is needed here.</p>
          </div>
          <div class="card auto-inside">
            <h4>Third Card</h4>
            <p>Third card content that flows naturally in the multi-column layout.</p>
          </div>
        </div>
      </div>
      <div class="demo-card full">
        <p class="label">break-inside: avoid — keeps element intact in one column</p>
        <div class="col-box">
          <div class="card avoid-inside">
            <h4>Card Title</h4>
            <p>This card uses break-inside: avoid which keeps the entire card in
            one column. It will never be split across a column boundary.</p>
          </div>
          <div class="card avoid-inside">
            <h4>Another Card</h4>
            <p>This card is also protected from being split. The browser will move
            the entire card to the next column rather than splitting it.</p>
          </div>
          <div class="card avoid-inside">
            <h4>Third Card</h4>
            <p>Third card also stays intact in its column.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="print-note">
      <p>💡 <strong>Print tip:</strong> Use <code>break-inside: avoid</code> to keep figures, tables, and cards from splitting across printed pages.</p>
      <pre class="code-block">@media print {
  .card, figure, table { break-inside: avoid; }
}</pre>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 900px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 24px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.full { grid-column: 1 / -1; }

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.col-box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  column-count: 3;
  column-gap: 20px;
  column-rule: 1px solid #3e3e5e;
}

.card {
  background: #1e1e2e;
  border: 1px solid #3e3e5e;
  border-radius: 8px;
  padding: 12px 14px;
  margin-bottom: 10px;
  font-family: Arial, sans-serif;
  font-size: 0.88rem;
  color: #e2e8f0;
  line-height: 1.6;
}

.card h4 {
  color: #a78bfa;
  margin-bottom: 6px;
  font-size: 0.95rem;
}

.auto-inside  { break-inside: auto;  border-color: #f472b6; }
.avoid-inside { break-inside: avoid; border-color: #34d399; }

.print-note {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-left: 3px solid #a78bfa;
  border-radius: 12px;
  padding: 20px;
}

.print-note p {
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #94a3b8;
  margin-bottom: 12px;
}

.print-note code {
  background: #2a2a3e;
  padding: 2px 6px;
  border-radius: 4px;
  color: #a78bfa;
  font-family: monospace;
}

.code-block {
  background: #12121f;
  padding: 12px 16px;
  border-radius: 8px;
  color: #a78bfa;
  font-family: monospace;
  font-size: 0.85rem;
  line-height: 1.7;
  border: 1px solid #2e2e3e;
}`,
  },


    // ─── 174. page-break-before ─────────────────────────────────────
  {
    property: "page-break-before",
    description: "Legacy property (replaced by break-before) that controls page breaks before an element when printing. Values: auto, always, avoid, left, right. Still widely supported for print stylesheets.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>page-break-before — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>page-break-before</span> Property</h1>
    <p class="page-desc">Legacy print property — controls page breaks before elements when printing.</p>

    <div class="info-box">
      <p>⚠️ <strong>Note:</strong> <code>page-break-before</code> is a legacy property. The modern equivalent is <code>break-before</code>. Both are still widely supported and work the same way for print.</p>
    </div>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">page-break-before: auto</p>
        <div class="page-sim">
          <div class="page-block">Section content flows normally. No page break is forced before this element.</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">page-break-before: always (print)</p>
        <div class="page-sim">
          <div class="page-block always-before">This section always starts on a new page when printed.</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">page-break-before: avoid (print)</p>
        <div class="page-sim">
          <div class="page-block avoid-before">The browser avoids placing a page break before this element when printing.</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">page-break-before: left (print)</p>
        <div class="page-sim">
          <div class="page-block left-before">Forces this element to start on a left-hand page when printing double-sided.</div>
        </div>
      </div>
    </div>

    <div class="print-example">
      <p class="label">Print stylesheet example:</p>
      <pre class="code-block">@media print {
  /* Modern — preferred */
  .chapter { break-before: page; }

  /* Legacy — still works */
  .chapter { page-break-before: always; }
}</pre>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 900px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 24px;
  font-size: 1rem;
}

.info-box {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-left: 3px solid #fbbf24;
  border-radius: 8px;
  padding: 14px 18px;
  margin-bottom: 24px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.6;
}

.info-box code {
  background: #2a2a3e;
  padding: 2px 6px;
  border-radius: 4px;
  color: #a78bfa;
  font-family: monospace;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.page-sim {
  background: #fff;
  border-radius: 6px;
  padding: 12px;
  min-height: 80px;
}

.page-block {
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #1e1e2e;
  line-height: 1.6;
  padding: 8px;
  border-left: 3px solid #a78bfa;
}

.always-before { page-break-before: always; border-left-color: #f472b6; }
.avoid-before  { page-break-before: avoid;  border-left-color: #34d399; }
.left-before   { page-break-before: left;   border-left-color: #fbbf24; }

.print-example {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.code-block {
  background: #12121f;
  padding: 12px 16px;
  border-radius: 8px;
  color: #a78bfa;
  font-family: monospace;
  font-size: 0.85rem;
  line-height: 1.7;
  border: 1px solid #2e2e3e;
  margin-top: 8px;
}`,
  },


    // ─── 175. page-break-after ──────────────────────────────────────
  {
    property: "page-break-after",
    description: "Legacy property (replaced by break-after) that controls page breaks after an element when printing. Values: auto, always, avoid, left, right. Still widely supported for print stylesheets.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>page-break-after — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>page-break-after</span> Property</h1>
    <p class="page-desc">Legacy print property — controls page breaks after elements when printing.</p>

    <div class="info-box">
      <p>⚠️ <strong>Note:</strong> <code>page-break-after</code> is a legacy property. The modern equivalent is <code>break-after</code>. Both work the same way for print layouts.</p>
    </div>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">page-break-after: auto</p>
        <div class="page-sim">
          <div class="page-block">No page break is forced after this element. Content flows normally to the next element.</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">page-break-after: always (print)</p>
        <div class="page-sim">
          <div class="page-block always-after">A page break is always inserted after this element when printing.</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">page-break-after: avoid (print)</p>
        <div class="page-sim">
          <div class="page-block avoid-after">The browser avoids placing a page break after this element when printing.</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">page-break-after: right (print)</p>
        <div class="page-sim">
          <div class="page-block right-after">Forces the next element to start on a right-hand page when printing double-sided.</div>
        </div>
      </div>
    </div>

    <div class="comparison-box">
      <p class="label">Legacy vs Modern comparison:</p>
      <div class="compare-grid">
        <div class="compare-item legacy">
          <p class="tag">Legacy</p>
          <pre>page-break-after: always;
page-break-before: always;
page-break-inside: avoid;</pre>
        </div>
        <div class="compare-item modern">
          <p class="tag">Modern (preferred)</p>
          <pre>break-after: page;
break-before: page;
break-inside: avoid;</pre>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 900px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 24px;
  font-size: 1rem;
}

.info-box {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-left: 3px solid #fbbf24;
  border-radius: 8px;
  padding: 14px 18px;
  margin-bottom: 24px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.6;
}

.info-box code {
  background: #2a2a3e;
  padding: 2px 6px;
  border-radius: 4px;
  color: #a78bfa;
  font-family: monospace;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.page-sim {
  background: #fff;
  border-radius: 6px;
  padding: 12px;
  min-height: 80px;
}

.page-block {
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #1e1e2e;
  line-height: 1.6;
  padding: 8px;
  border-left: 3px solid #a78bfa;
}

.always-after { page-break-after: always; border-left-color: #f472b6; }
.avoid-after  { page-break-after: avoid;  border-left-color: #34d399; }
.right-after  { page-break-after: right;  border-left-color: #fbbf24; }

.comparison-box {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.compare-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 8px;
}

.compare-item {
  border-radius: 8px;
  padding: 14px 16px;
}

.compare-item pre {
  font-family: monospace;
  font-size: 0.85rem;
  line-height: 1.7;
  margin-top: 8px;
}

.compare-item .tag {
  font-size: 0.75rem;
  font-weight: bold;
  font-family: Arial, sans-serif;
  margin-bottom: 6px;
}

.legacy  { background: #2a1a1a; border: 1px solid #f472b6; }
.legacy  .tag { color: #f472b6; }
.legacy  pre  { color: #f472b6; }

.modern  { background: #1a2a1a; border: 1px solid #34d399; }
.modern  .tag { color: #34d399; }
.modern  pre  { color: #34d399; }`,
  },

    // ─── 176. page-break-inside ─────────────────────────────────────
  {
    property: "page-break-inside",
    description: "Legacy property (replaced by break-inside) that controls whether a page break can occur inside an element when printing. Values: auto or avoid. Use avoid to keep elements like tables and figures intact across pages.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>page-break-inside — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>page-break-inside</span> Property</h1>
    <p class="page-desc">Legacy print property — prevent elements from splitting across printed pages.</p>

    <div class="info-box">
      <p>⚠️ <strong>Note:</strong> <code>page-break-inside</code> is legacy. The modern equivalent is <code>break-inside</code>. Use <code>avoid</code> to keep cards, tables, and figures intact when printing.</p>
    </div>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">page-break-inside: auto</p>
        <div class="card auto-inside">
          <h4>Card Title</h4>
          <p>This card can be split across pages when printing. The browser decides where to break.</p>
          <p>Additional content that may end up on the next page.</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">page-break-inside: avoid</p>
        <div class="card avoid-inside">
          <h4>Protected Card</h4>
          <p>This card will never be split across pages. The browser moves the entire card to the next page rather than splitting it.</p>
          <p>All content stays together on one page.</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">avoid — table stays intact</p>
        <table class="tbl avoid-inside">
          <thead>
            <tr><th>Name</th><th>Score</th></tr>
          </thead>
          <tbody>
            <tr><td>HTML</td><td>95</td></tr>
            <tr><td>CSS</td><td>98</td></tr>
            <tr><td>JS</td><td>92</td></tr>
          </tbody>
        </table>
      </div>
      <div class="demo-card">
        <p class="label">avoid — figure stays intact</p>
        <figure class="fig avoid-inside">
          <div class="fig-img">[ Image ]</div>
          <figcaption>Figure caption stays with the image on the same page.</figcaption>
        </figure>
      </div>
    </div>

    <div class="print-example">
      <p class="label">Common print stylesheet pattern:</p>
      <pre class="code-block">@media print {
  /* Modern */
  .card, table, figure { break-inside: avoid; }

  /* Legacy fallback */
  .card, table, figure { page-break-inside: avoid; }
}</pre>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 900px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 24px;
  font-size: 1rem;
}

.info-box {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-left: 3px solid #fbbf24;
  border-radius: 8px;
  padding: 14px 18px;
  margin-bottom: 24px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.6;
}

.info-box code {
  background: #2a2a3e;
  padding: 2px 6px;
  border-radius: 4px;
  color: #a78bfa;
  font-family: monospace;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.card {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 14px 16px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #e2e8f0;
  line-height: 1.6;
  border: 1px solid #3e3e5e;
}

.card h4 {
  color: #a78bfa;
  margin-bottom: 8px;
}

.card p { margin-bottom: 6px; }

.auto-inside  { page-break-inside: auto;  border-color: #f472b6; }
.avoid-inside { page-break-inside: avoid; border-color: #34d399; }

.tbl {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
}

.tbl th, .tbl td {
  padding: 8px 12px;
  border: 1px solid #3e3e5e;
  color: #e2e8f0;
  text-align: left;
}

.tbl th { background: #3b2a5e; color: #a78bfa; }
.tbl td { background: #2a2a3e; }

.fig {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 14px;
  border: 1px solid #34d399;
}

.fig-img {
  background: #1e1e2e;
  height: 60px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.fig figcaption {
  font-family: Arial, sans-serif;
  font-size: 0.82rem;
  color: #94a3b8;
  text-align: center;
}

.print-example {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.code-block {
  background: #12121f;
  padding: 12px 16px;
  border-radius: 8px;
  color: #a78bfa;
  font-family: monospace;
  font-size: 0.85rem;
  line-height: 1.7;
  border: 1px solid #2e2e3e;
  margin-top: 8px;
}`,
  },


    // ─── 177. orphans ───────────────────────────────────────────────
  {
    property: "orphans",
    description: "Sets the minimum number of lines that must remain at the bottom of a page or column before a page/column break. Prevents a single line from being left alone at the bottom. Default is 2.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>orphans — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>orphans</span> Property</h1>
    <p class="page-desc">Set the minimum lines that must stay at the bottom of a column before a break.</p>

    <div class="info-box">
      <p>📖 <strong>Typography term:</strong> An <em>orphan</em> is a single line of a paragraph left alone at the bottom of a page or column. The <code>orphans</code> property prevents this by requiring a minimum number of lines before a break occurs.</p>
    </div>

    <div class="demo-grid">
      <div class="demo-card full">
        <p class="label">orphans: 1 — allows single line at column bottom</p>
        <div class="col-box orphans-1">
          <p class="para">The quick brown fox jumps over the lazy dog. This paragraph demonstrates the orphans property. With orphans set to 1, even a single line can be left at the bottom of a column before the break occurs.</p>
          <p class="para">Second paragraph continues here in the next column after the break.</p>
        </div>
      </div>
      <div class="demo-card full">
        <p class="label">orphans: 3 — requires 3 lines at column bottom</p>
        <div class="col-box orphans-3">
          <p class="para">The quick brown fox jumps over the lazy dog. This paragraph demonstrates the orphans property. With orphans set to 3, at least three lines must remain at the bottom of a column before a break is allowed.</p>
          <p class="para">Second paragraph continues here in the next column after the break.</p>
        </div>
      </div>
    </div>

    <div class="print-note">
      <p class="label">Print stylesheet usage:</p>
      <pre class="code-block">@media print {
  p {
    orphans: 3;  /* min 3 lines at bottom of page */
    widows: 3;   /* min 3 lines at top of next page */
  }
}</pre>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 900px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 24px;
  font-size: 1rem;
}

.info-box {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-left: 3px solid #a78bfa;
  border-radius: 8px;
  padding: 14px 18px;
  margin-bottom: 24px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.6;
}

.info-box code {
  background: #2a2a3e;
  padding: 2px 6px;
  border-radius: 4px;
  color: #a78bfa;
  font-family: monospace;
}

.demo-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 24px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.full { grid-column: 1 / -1; }

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.col-box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  column-count: 2;
  column-gap: 24px;
  column-rule: 1px solid #3e3e5e;
}

.para {
  font-family: Georgia, serif;
  font-size: 0.9rem;
  color: #e2e8f0;
  line-height: 1.7;
  margin-bottom: 10px;
}

.orphans-1 .para { orphans: 1; }
.orphans-3 .para { orphans: 3; }

.print-note {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.code-block {
  background: #12121f;
  padding: 12px 16px;
  border-radius: 8px;
  color: #a78bfa;
  font-family: monospace;
  font-size: 0.85rem;
  line-height: 1.7;
  border: 1px solid #2e2e3e;
  margin-top: 8px;
}`,
  },

    // ─── 178. widows ────────────────────────────────────────────────
  {
    property: "widows",
    description: "Sets the minimum number of lines that must appear at the top of a page or column after a page/column break. Prevents a single line from being stranded alone at the top. Default is 2.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>widows — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>widows</span> Property</h1>
    <p class="page-desc">Set the minimum lines that must appear at the top of a column after a break.</p>

    <div class="info-box">
      <p>📖 <strong>Typography term:</strong> A <em>widow</em> is a single line of a paragraph left alone at the top of a page or column. The <code>widows</code> property prevents this by requiring a minimum number of lines after a break occurs.</p>
    </div>

    <div class="demo-grid">
      <div class="demo-card full">
        <p class="label">widows: 1 — allows single line at column top</p>
        <div class="col-box widows-1">
          <p class="para">The quick brown fox jumps over the lazy dog. This paragraph demonstrates the widows property. With widows set to 1, even a single line can appear at the top of a new column after a break occurs in the text.</p>
          <p class="para">Second paragraph that continues the flow of content across columns in this multi-column layout demonstration.</p>
        </div>
      </div>
      <div class="demo-card full">
        <p class="label">widows: 4 — requires 4 lines at column top</p>
        <div class="col-box widows-4">
          <p class="para">The quick brown fox jumps over the lazy dog. This paragraph demonstrates the widows property. With widows set to 4, at least four lines must appear at the top of a new column after a break occurs in the text flow.</p>
          <p class="para">Second paragraph that continues the flow of content across columns in this multi-column layout demonstration.</p>
        </div>
      </div>
    </div>

    <div class="compare-box">
      <p class="label">orphans vs widows — visual explanation:</p>
      <div class="compare-grid">
        <div class="compare-item">
          <div class="page-bottom">
            <p class="mini-text">...paragraph content</p>
            <p class="mini-text orphan-line">← orphan (last line at bottom)</p>
          </div>
          <p class="compare-label">orphans: controls bottom</p>
        </div>
        <div class="compare-item">
          <div class="page-top">
            <p class="mini-text widow-line">widow (first line at top) →</p>
            <p class="mini-text">paragraph content...</p>
          </div>
          <p class="compare-label">widows: controls top</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 900px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 24px;
  font-size: 1rem;
}

.info-box {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-left: 3px solid #f472b6;
  border-radius: 8px;
  padding: 14px 18px;
  margin-bottom: 24px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.6;
}

.info-box code {
  background: #2a2a3e;
  padding: 2px 6px;
  border-radius: 4px;
  color: #a78bfa;
  font-family: monospace;
}

.demo-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 24px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.full { grid-column: 1 / -1; }

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.col-box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  column-count: 2;
  column-gap: 24px;
  column-rule: 1px solid #3e3e5e;
}

.para {
  font-family: Georgia, serif;
  font-size: 0.9rem;
  color: #e2e8f0;
  line-height: 1.7;
  margin-bottom: 10px;
}

.widows-1 .para { widows: 1; }
.widows-4 .para { widows: 4; }

.compare-box {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.compare-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 12px;
}

.compare-item { display: flex; flex-direction: column; gap: 8px; }

.page-bottom {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 12px;
  border-bottom: 3px dashed #a78bfa;
}

.page-top {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 12px;
  border-top: 3px dashed #f472b6;
}

.mini-text {
  font-family: Arial, sans-serif;
  font-size: 0.82rem;
  color: #94a3b8;
  line-height: 1.6;
}

.orphan-line { color: #a78bfa; font-weight: bold; }
.widow-line  { color: #f472b6; font-weight: bold; }

.compare-label {
  font-family: monospace;
  font-size: 0.78rem;
  color: #7c6fcd;
  text-align: center;
}`,
  },

    // ─── 179. object-fit ────────────────────────────────────────────
  {
    property: "object-fit",
    description: "Controls how a replaced element (img, video) is resized to fit its container. Values: fill, contain, cover, none, scale-down.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>object-fit — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>object-fit</span> Property</h1>
    <p class="page-desc">Control how images and videos resize to fit their container box.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">object-fit: fill (default)</p>
        <div class="img-wrap">
          <img class="img f1" src="https://picsum.photos/seed/css1/400/300" alt="demo" />
        </div>
        <p class="note">Stretches to fill — may distort</p>
      </div>
      <div class="demo-card">
        <p class="label">object-fit: contain</p>
        <div class="img-wrap">
          <img class="img f2" src="https://picsum.photos/seed/css1/400/300" alt="demo" />
        </div>
        <p class="note">Scales to fit — letterboxed</p>
      </div>
      <div class="demo-card">
        <p class="label">object-fit: cover</p>
        <div class="img-wrap">
          <img class="img f3" src="https://picsum.photos/seed/css1/400/300" alt="demo" />
        </div>
        <p class="note">Fills box — crops edges</p>
      </div>
      <div class="demo-card">
        <p class="label">object-fit: none</p>
        <div class="img-wrap">
          <img class="img f4" src="https://picsum.photos/seed/css1/400/300" alt="demo" />
        </div>
        <p class="note">Natural size — may overflow</p>
      </div>
      <div class="demo-card">
        <p class="label">object-fit: scale-down</p>
        <div class="img-wrap">
          <img class="img f5" src="https://picsum.photos/seed/css1/400/300" alt="demo" />
        </div>
        <p class="note">Smaller of none or contain</p>
      </div>
      <div class="demo-card">
        <p class="label">cover — avatar use case</p>
        <div class="avatar-row">
          <img class="avatar" src="https://picsum.photos/seed/a1/200/200" alt="avatar" />
          <img class="avatar" src="https://picsum.photos/seed/a2/200/300" alt="avatar" />
          <img class="avatar" src="https://picsum.photos/seed/a3/300/200" alt="avatar" />
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.note {
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 8px;
  font-family: Arial, sans-serif;
}

.img-wrap {
  width: 100%;
  height: 140px;
  background: #12121f;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #3e3e5e;
}

.img {
  width: 100%;
  height: 100%;
}

.f1 { object-fit: fill; }
.f2 { object-fit: contain; }
.f3 { object-fit: cover; }
.f4 { object-fit: none; }
.f5 { object-fit: scale-down; }

.avatar-row {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #a78bfa;
}`,
  },

    // ─── 181. aspect-ratio ──────────────────────────────────────────
  {
    property: "aspect-ratio",
    description: "Sets a preferred aspect ratio for an element, used in sizing calculations. Accepts a ratio like 16/9, 1/1, 4/3, or auto. Extremely useful for responsive images, videos, and cards.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>aspect-ratio — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>aspect-ratio</span> Property</h1>
    <p class="page-desc">Lock an element to a specific width-to-height ratio automatically.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">aspect-ratio: 1 / 1 (square)</p>
        <div class="box f1">1:1</div>
      </div>
      <div class="demo-card">
        <p class="label">aspect-ratio: 16 / 9 (widescreen)</p>
        <div class="box f2">16:9</div>
      </div>
      <div class="demo-card">
        <p class="label">aspect-ratio: 4 / 3 (classic)</p>
        <div class="box f3">4:3</div>
      </div>
      <div class="demo-card">
        <p class="label">aspect-ratio: 3 / 4 (portrait)</p>
        <div class="box f4">3:4</div>
      </div>
      <div class="demo-card">
        <p class="label">aspect-ratio: 2 / 1 (banner)</p>
        <div class="box f5">2:1</div>
      </div>
      <div class="demo-card">
        <p class="label">aspect-ratio: auto (default)</p>
        <div class="box f6">auto</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  width: 100%;
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a78bfa;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: Arial, sans-serif;
  border: 1px solid #3e3e5e;
}

.f1 { aspect-ratio: 1 / 1; }
.f2 { aspect-ratio: 16 / 9; }
.f3 { aspect-ratio: 4 / 3; }
.f4 { aspect-ratio: 3 / 4; }
.f5 { aspect-ratio: 2 / 1; }
.f6 { aspect-ratio: auto; height: 80px; }`,
  },

    // ─── 182. contain ───────────────────────────────────────────────
  {
    property: "contain",
    description: "Indicates that an element and its contents are independent from the rest of the document tree. Allows the browser to optimize rendering. Values: none, strict, content, size, layout, style, paint, inline-size.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>contain — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>contain</span> Property</h1>
    <p class="page-desc">Tell the browser an element is isolated — enables rendering optimizations.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">contain: none (default)</p>
        <div class="box f1">
          <p>No containment. Changes inside can affect outside layout.</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">contain: layout</p>
        <div class="box f2">
          <p>Layout containment. Internal layout changes don't affect outside elements.</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">contain: paint</p>
        <div class="box f3">
          <p>Paint containment. Content is clipped to the border box. Acts like overflow: hidden.</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">contain: style</p>
        <div class="box f4">
          <p>Style containment. CSS counters and quotes are scoped to this element.</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">contain: content (layout + paint + style)</p>
        <div class="box f5">
          <p>Content containment combines layout, paint, and style for strong isolation.</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">contain: strict (all containment)</p>
        <div class="box f6">
          <p>Strict containment — maximum isolation. Requires explicit size to avoid collapsing.</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #e2e8f0;
  line-height: 1.6;
  min-height: 80px;
}

.f1 { contain: none; }
.f2 { contain: layout; border-color: #a78bfa; }
.f3 { contain: paint;  border-color: #f472b6; overflow: hidden; }
.f4 { contain: style;  border-color: #34d399; }
.f5 { contain: content; border-color: #fbbf24; }
.f6 { contain: strict; border-color: #60a5fa; height: 80px; }`,
  },

    // ─── 183. container ─────────────────────────────────────────────
  {
    property: "container",
    description: "Shorthand for container-type and container-name. Establishes an element as a CSS container query container. Syntax: container: name / type. Enables child elements to query the container's size.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>container — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>container</span> Property</h1>
    <p class="page-desc">Establish container query contexts — resize the browser to see cards adapt.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">container: card / inline-size</p>
        <div class="card-container">
          <div class="card">
            <div class="card-img"></div>
            <div class="card-body">
              <h3>Card Title</h3>
              <p>This card adapts its layout based on its container width, not the viewport.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="demo-card wide">
        <p class="label">Same card — wider container</p>
        <div class="card-container wide-container">
          <div class="card">
            <div class="card-img"></div>
            <div class="card-body">
              <h3>Card Title</h3>
              <p>In a wider container the card switches to a horizontal layout automatically.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.wide { grid-column: 1 / -1; }

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

/* The container */
.card-container {
  container: card / inline-size;
}

.wide-container {
  max-width: 600px;
}

/* Default card layout — stacked */
.card {
  background: #2a2a3e;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #3e3e5e;
  display: flex;
  flex-direction: column;
}

.card-img {
  background: linear-gradient(135deg, #a78bfa, #f472b6);
  height: 120px;
  flex-shrink: 0;
}

.card-body {
  padding: 14px 16px;
}

.card-body h3 {
  color: #a78bfa;
  font-size: 1rem;
  margin-bottom: 6px;
  font-family: Arial, sans-serif;
}

.card-body p {
  color: #94a3b8;
  font-size: 0.88rem;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

/* Container query — switch to horizontal when container is wide */
@container card (min-width: 400px) {
  .card {
    flex-direction: row;
  }
  .card-img {
    width: 160px;
    height: auto;
  }
}`,
  },

    // ─── 184. container-type ────────────────────────────────────────
  {
    property: "container-type",
    description: "Defines the type of container query context an element establishes. Values: normal (default — no context), inline-size (queries based on inline/width axis), size (queries based on both axes).",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>container-type — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>container-type</span> Property</h1>
    <p class="page-desc">Set the axis a container query responds to — inline-size or size.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">container-type: normal (no query context)</p>
        <div class="ct-normal">
          <div class="inner-card">Normal — no container queries apply here.</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">container-type: inline-size (width queries)</p>
        <div class="ct-inline">
          <div class="inner-card responsive">Responds to container width changes.</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">container-type: size (width + height queries)</p>
        <div class="ct-size">
          <div class="inner-card responsive-size">Responds to both width and height.</div>
        </div>
      </div>
      <div class="demo-card full">
        <p class="label">inline-size — practical responsive component</p>
        <div class="flex-row">
          <div class="ct-inline narrow">
            <div class="component">
              <div class="comp-icon">🎨</div>
              <div class="comp-text"><strong>CSS</strong><span>Narrow view</span></div>
            </div>
          </div>
          <div class="ct-inline medium">
            <div class="component">
              <div class="comp-icon">🎨</div>
              <div class="comp-text"><strong>CSS Styling</strong><span>Medium view</span></div>
            </div>
          </div>
          <div class="ct-inline wide-ct">
            <div class="component">
              <div class="comp-icon">🎨</div>
              <div class="comp-text"><strong>CSS Styling Module</strong><span>Wide view — more detail shown</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.full { grid-column: 1 / -1; }

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.ct-normal  { container-type: normal; }
.ct-inline  { container-type: inline-size; }
.ct-size    { container-type: size; height: 100px; }

.inner-card {
  background: #2a2a3e;
  padding: 14px 16px;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #e2e8f0;
  border: 1px solid #3e3e5e;
  height: 100%;
  display: flex;
  align-items: center;
}

/* Flex row for side-by-side containers */
.flex-row {
  display: flex;
  gap: 12px;
  align-items: stretch;
}

.narrow   { flex: 0 0 80px; }
.medium   { flex: 0 0 180px; }
.wide-ct  { flex: 1; }

.component {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #3e3e5e;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 100%;
  overflow: hidden;
}

.comp-icon { font-size: 1.4rem; flex-shrink: 0; }

.comp-text {
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  overflow: hidden;
}

.comp-text strong {
  font-size: 0.85rem;
  color: #a78bfa;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.comp-text span {
  font-size: 0.75rem;
  color: #64748b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`,
  },


    // ─── 185. container-name ────────────────────────────────────────
  {
    property: "container-name",
    description: "Assigns a name to a container so that @container queries can target it specifically by name. Allows multiple named containers on the same page with different query rules.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>container-name — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>container-name</span> Property</h1>
    <p class="page-desc">Name your containers so @container queries can target them specifically.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">container-name: sidebar</p>
        <div class="sidebar-container">
          <div class="sidebar-widget">
            <span class="icon">📁</span>
            <span class="text">Files</span>
          </div>
          <div class="sidebar-widget">
            <span class="icon">⚙️</span>
            <span class="text">Settings</span>
          </div>
          <div class="sidebar-widget">
            <span class="icon">👤</span>
            <span class="text">Profile</span>
          </div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">container-name: product-card</p>
        <div class="product-container">
          <div class="product">
            <div class="product-img"></div>
            <div class="product-info">
              <strong>CSS Course</strong>
              <span>$29.99</span>
            </div>
          </div>
        </div>
      </div>
      <div class="demo-card full">
        <p class="label">Named containers — different rules per name</p>
        <div class="named-demo">
          <div class="header-container">
            <div class="header-content">Header Container (container-name: header)</div>
          </div>
          <div class="main-container">
            <div class="main-content">Main Container (container-name: main) — wider, different query rules</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}
.page-title span { color: #a78bfa; }

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.full { grid-column: 1 / -1; }

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

/* Named sidebar container */
.sidebar-container {
  container-name: sidebar;
  container-type: inline-size;
  background: #2a2a3e;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sidebar-widget {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 6px;
  background: #1e1e2e;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #e2e8f0;
  cursor: pointer;
  transition: background 0.2s;
}
.sidebar-widget:hover { background: #3b2a5e; }
.sidebar-widget .icon { font-size: 1rem; }

/* Named product-card container */
.product-container {
  container-name: product-card;
  container-type: inline-size;
}

.product {
  background: #2a2a3e;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #3e3e5e;
}

.product-img {
  background: linear-gradient(135deg, #a78bfa, #f472b6);
  height: 100px;
}

.product-info {
  padding: 12px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, sans-serif;
}

.product-info strong { color: #e2e8f0; font-size: 0.95rem; }
.product-info span   { color: #34d399;
  font-size: 0.9rem; font-weight: bold; }

/* Named demo containers */
.named-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.header-container {
  container-name: header;
  container-type: inline-size;
}

.main-container {
  container-name: main;
  container-type: inline-size;
}

.header-content {
  background: #3b2a5e;
  border: 1px solid #a78bfa;
  border-radius: 8px;
  padding: 14px 18px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #e2e8f0;
}

.main-content {
  background: #1a3a2e;
  border: 1px solid #34d399;
  border-radius: 8px;
  padding: 14px 18px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #e2e8f0;
}

/* Container queries targeting by name */
@container header (min-width: 300px) {
  .header-content { font-weight: bold; letter-spacing: 1px; }
}

@container main (min-width: 300px) {
  .main-content { font-style: italic; }
}`,
  },










    // ─── 195. grid ──────────────────────────────────────────────────
  {
    property: "grid",
    description: "The most complete grid shorthand — sets grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns, and grid-auto-flow in one declaration.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>grid — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>grid</span> Property</h1>
    <p class="page-desc">The ultimate grid shorthand — define the entire grid in one line.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">grid: auto-flow / 1fr 1fr 1fr</p>
        <div class="box g1">
          <div class="item">A</div><div class="item">B</div>
          <div class="item">C</div><div class="item">D</div>
          <div class="item">E</div><div class="item">F</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">grid: auto-flow dense / repeat(3,1fr)</p>
        <div class="box g2">
          <div class="item wide">Wide</div>
          <div class="item">B</div><div class="item">C</div>
          <div class="item">D</div><div class="item">E</div>
        </div>
      </div>
      <div class="demo-card full">
        <p class="label">grid: named areas full page layout</p>
        <div class="page-layout g3">
          <div class="g-header">Header</div>
          <div class="g-nav">Nav</div>
          <div class="g-main">Main</div>
          <div class="g-aside">Aside</div>
          <div class="g-footer">Footer</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title { font-size: 2rem; margin-bottom: 8px; color: #fff; }
.page-title span { color: #a78bfa; }
.page-desc { color: #94a3b8; margin-bottom: 32px; font-size: 1rem; }

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.full { grid-column: 1 / -1; }

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  display: grid;
  gap: 6px;
  background: #12121f;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid #3e3e5e;
}

.item {
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border-radius: 6px;
  color: #a78bfa;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wide { grid-column: span 2; background: linear-gradient(135deg, #a78bfa, #7c6fcd); color: #fff; }

.g1 { grid: auto-flow / 1fr 1fr 1fr; }
.g2 { grid: auto-flow dense / repeat(3, 1fr); }

.page-layout {
  display: grid;
  grid:
    "header header header" 50px
    "nav    main   aside"  120px
    "footer footer footer" 40px
    / 100px 1fr 120px;
  gap: 8px;
  background: #12121f;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid #3e3e5e;
}

.g-header { grid-area: header; background: #3b2a5e; }
.g-nav    { grid-area: nav;    background: #1a3a2e; }
.g-main   { grid-area: main;   background: #2a2a3e; }
.g-aside  { grid-area: aside;  background: #3b2a1e; }
.g-footer { grid-area: footer; background: #1a1a3b; }

.g-header, .g-nav, .g-main, .g-aside, .g-footer {
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  color: #e2e8f0;
}`,

  },










    // ─── 201. transform-origin ──────────────────────────────────────
  {
    property: "transform-origin",
    description: "Sets the point around which a CSS transform is applied. Default is 50% 50% (center). Accepts keywords (top, left, center, right, bottom), percentages, or length values.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>transform-origin — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>transform-origin</span> Property</h1>
    <p class="page-desc">Hover each box to see rotation pivot from different origins.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">transform-origin: center (default)</p>
        <div class="wrap"><div class="box f1">Center</div></div>
      </div>
      <div class="demo-card">
        <p class="label">transform-origin: top left</p>
        <div class="wrap"><div class="box f2">Top Left</div></div>
      </div>
      <div class="demo-card">
        <p class="label">transform-origin: top right</p>
        <div class="wrap"><div class="box f3">Top Right</div></div>
      </div>
      <div class="demo-card">
        <p class="label">transform-origin: bottom left</p>
        <div class="wrap"><div class="box f4">Bottom Left</div></div>
      </div>
      <div class="demo-card">
        <p class="label">transform-origin: bottom right</p>
        <div class="wrap"><div class="box f5">Bottom Right</div></div>
      </div>
      <div class="demo-card">
        <p class="label">transform-origin: 0% 50% (left center)</p>
        <div class="wrap"><div class="box f6">Left Edge</div></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title { font-size: 2rem; margin-bottom: 8px; color: #fff; }
.page-title span { color: #a78bfa; }
.page-desc { color: #94a3b8; margin-bottom: 32px; font-size: 1rem; }

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}

.box {
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border: 2px solid #a78bfa;
  border-radius: 8px;
  padding: 14px 20px;
  color: #a78bfa;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  transition: transform 0.4s ease;
  cursor: pointer;
}

.box:hover { transform: rotate(45deg); }

.f1 { transform-origin: center; }
.f2 { transform-origin: top left; }
.f3 { transform-origin: top right; }
.f4 { transform-origin: bottom left; }
.f5 { transform-origin: bottom right; }
.f6 { transform-origin: 0% 50%; }`,
  },

    // ─── 202. transform-style ───────────────────────────────────────
  {
    property: "transform-style",
    description: "Sets whether children of a transformed element are positioned in 3D space or flattened into the plane of the element. Values: flat (default) or preserve-3d.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>transform-style — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>transform-style</span> Property</h1>
    <p class="page-desc">Hover each card to see flat vs preserve-3d rendering.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">transform-style: flat</p>
        <div class="scene">
          <div class="flip-card ts-flat">
            <div class="face front">Front</div>
            <div class="face back">Back</div>
          </div>
        </div>
        <p class="note">Children flattened — no 3D depth</p>
      </div>
      <div class="demo-card">
        <p class="label">transform-style: preserve-3d</p>
        <div class="scene">
          <div class="flip-card ts-3d">
            <div class="face front">Front</div>
            <div class="face back">Back</div>
          </div>
        </div>
        <p class="note">Hover to flip — true 3D card</p>
      </div>
      <div class="demo-card">
        <p class="label">preserve-3d — rotating cube</p>
        <div class="cube-scene">
          <div class="cube">
            <div class="cube-face cf-front">Front</div>
            <div class="cube-face cf-back">Back</div>
            <div class="cube-face cf-left">Left</div>
            <div class="cube-face cf-right">Right</div>
            <div class="cube-face cf-top">Top</div>
            <div class="cube-face cf-bottom">Bottom</div>
          </div>
        </div>
        <p class="note">Animated 3D cube using preserve-3d</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title { font-size: 2rem; margin-bottom: 8px; color: #fff; }
.page-title span { color: #a78bfa; }
.page-desc { color: #94a3b8; margin-bottom: 32px; font-size: 1rem; }

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.note {
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 8px;
  font-family: Arial, sans-serif;
}

/* Flip card */
.scene {
  perspective: 600px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flip-card {
  width: 140px;
  height: 90px;
  position: relative;
  transition: transform 0.7s ease;
  cursor: pointer;
}

.scene:hover .flip-card { transform: rotateY(180deg); }

.ts-flat     { transform-style: flat; }
.ts-3d       { transform-style: preserve-3d; }

.face {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 1rem;
  backface-visibility: hidden;
}

.front {
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  color: #a78bfa;
  border: 1px solid #a78bfa;
}

.back {
  background: linear-gradient(135deg, #f472b6, #a78bfa);
  color: #fff;
  transform: rotateY(180deg);
}

/* 3D Cube */
.cube-scene {
  perspective: 400px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cube {
  width: 60px;
  height: 60px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotateCube 4s linear infinite;
}

@keyframes rotateCube {
  from { transform: rotateX(0deg) rotateY(0deg); }
  to   { transform: rotateX(360deg) rotateY(360deg); }
}

.cube-face {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 1px solid rgba(167,139,250,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 0.7rem;
  font-weight: bold;
  color: #fff;
  opacity: 0.85;
}

.cf-front  { background: rgba(167,139,250,0.3); transform: translateZ(30px); }
.cf-back   { background: rgba(244,114,182,0.3); transform: rotateY(180deg) translateZ(30px); }
.cf-left   { background: rgba(52,211,153,0.3);  transform: rotateY(-90deg) translateZ(30px); }
.cf-right  { background: rgba(251,191,36,0.3);  transform: rotateY(90deg) translateZ(30px); }
.cf-top    { background: rgba(96,165,250,0.3);  transform: rotateX(90deg) translateZ(30px); }
.cf-bottom { background: rgba(239,68,68,0.3);   transform: rotateX(-90deg) translateZ(30px); }`,
  },


    // ─── 203. perspective ───────────────────────────────────────────
  {
    property: "perspective",
    description: "Sets the distance between the viewer and the z=0 plane, creating a 3D perspective effect for child elements. Smaller values create more dramatic 3D distortion; larger values create a subtle effect. Applied to the parent container.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>perspective — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>perspective</span> Property</h1>
    <p class="page-desc">Control the depth of 3D perspective — hover each card to see the effect.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">perspective: none (no 3D)</p>
        <div class="scene p-none">
          <div class="card-3d">Hover Me</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">perspective: 100px (extreme)</p>
        <div class="scene p-100">
          <div class="card-3d">Hover Me</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">perspective: 300px (dramatic)</p>
        <div class="scene p-300">
          <div class="card-3d">Hover Me</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">perspective: 600px (moderate)</p>
        <div class="scene p-600">
          <div class="card-3d">Hover Me</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">perspective: 1200px (subtle)</p>
        <div class="scene p-1200">
          <div class="card-3d">Hover Me</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">perspective: 400px — tilt on hover</p>
        <div class="scene p-400">
          <div class="card-tilt">
            <div class="tilt-content">
              <span class="tilt-icon">🎨</span>
              <span>CSS 3D Tilt</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper { max-width: 860px; margin: 0 auto; }

.page-title { font-size: 2rem; margin-bottom: 8px; color: #fff; }
.page-title span { color: #a78bfa; }
.page-desc { color: #94a3b8; margin-bottom: 32px; font-size: 1rem; }

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.scene {
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Perspective values on the container */
.p-none { perspective: none; }
.p-100  { perspective: 100px; }
.p-300  { perspective: 300px; }
.p-600  { perspective: 600px; }
.p-1200 { perspective: 1200px; }
.p-400  { perspective: 400px; }

.card-3d {
  width: 140px;
  height: 80px;
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border: 1px solid #a78bfa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a78bfa;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  cursor: pointer;
  transition: transform 0.4s ease;
}

.card-3d:hover { transform: rotateY(40deg); }

/* Tilt card */
.card-tilt {
  width: 140px;
  height: 80px;
  background: linear-gradient(135deg, #a78bfa, #f472b6);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform-style: preserve-3d;
}

.card-tilt:hover {
  transform: rotateX(20deg) rotateY(-20deg) scale(1.05);
}

.tilt-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: #fff;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: bold;
}

.tilt-icon { font-size: 1.4rem; }`,
  },

    // ─── color ──────────────────────────────────────────────────────
  {
    property: "color",
    description: "Sets the foreground color of an element's text. Accepts named colors, hex, rgb(), hsl(), and oklch() values.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>color — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>color</span> Property</h1>
    <p class="page-desc">Set the text color using any valid CSS color format.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">color: #a78bfa</p>
        <p class="box f1">Hello World</p>
      </div>
      <div class="demo-card">
        <p class="label">color: rgb(244, 114, 182)</p>
        <p class="box f2">Hello World</p>
      </div>
      <div class="demo-card">
        <p class="label">color: hsl(142, 71%, 45%)</p>
        <p class="box f3">Hello World</p>
      </div>
      <div class="demo-card">
        <p class="label">color: tomato</p>
        <p class="box f4">Hello World</p>
      </div>
      <div class="demo-card">
        <p class="label">color: #fbbf24</p>
        <p class="box f5">Hello World</p>
      </div>
      <div class="demo-card">
        <p class="label">color: transparent</p>
        <p class="box f6">Invisible Text</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-family: Arial, sans-serif;
  font-weight: bold;
}

.f1 { color: #a78bfa; }
.f2 { color: rgb(244, 114, 182); }
.f3 { color: hsl(142, 71%, 45%); }
.f4 { color: tomato; }
.f5 { color: #fbbf24; }
.f6 { color: transparent; }`,
  },

    // ─── background ─────────────────────────────────────────────────
  {
    property: "background",
    description: "Shorthand for all background properties: color, image, size, position, repeat, attachment, origin, and clip — all in one declaration.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>background — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>background</span> Property</h1>
    <p class="page-desc">Set all background properties in one shorthand declaration.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">background: #a78bfa</p>
        <div class="box f1">Solid Color</div>
      </div>
      <div class="demo-card">
        <p class="label">background: linear-gradient(135deg, ...)</p>
        <div class="box f2">Linear Gradient</div>
      </div>
      <div class="demo-card">
        <p class="label">background: radial-gradient(circle, ...)</p>
        <div class="box f3">Radial Gradient</div>
      </div>
      <div class="demo-card">
        <p class="label">background: conic-gradient(...)</p>
        <div class="box f4">Conic Gradient</div>
      </div>
      <div class="demo-card">
        <p class="label">background: repeating-linear-gradient</p>
        <div class="box f5">Repeating</div>
      </div>
      <div class="demo-card">
        <p class="label">background: multiple layers</p>
        <div class="box f6">Multi-layer</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  height: 100px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1rem;
}

.f1 { background: #a78bfa; }
.f2 { background: linear-gradient(135deg, #a78bfa, #f472b6); }
.f3 { background: radial-gradient(circle, #a78bfa 0%, #1e1e2e 80%); }
.f4 { background: conic-gradient(#a78bfa, #f472b6, #fbbf24, #34d399, #a78bfa); }
.f5 { background: repeating-linear-gradient(45deg, #a78bfa 0px, #a78bfa 10px, #1e1e2e 10px, #1e1e2e 20px); }
.f6 {
  background:
    radial-gradient(circle at 30% 50%, rgba(167, 139, 250, 0.6) 0%, transparent 50%),
    linear-gradient(135deg, #1e1e2e, #2a2a3e);
}`,
  },

    // ─── background-color ───────────────────────────────────────────
  {
    property: "background-color",
    description: "Sets the background color of an element. Accepts any CSS color value. Fills the content, padding, and border areas unless overridden by background-clip.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>background-color — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>background-color</span> Property</h1>
    <p class="page-desc">Fill an element's background with a solid color.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">background-color: #a78bfa</p>
        <div class="box f1">Purple</div>
      </div>
      <div class="demo-card">
        <p class="label">background-color: #f472b6</p>
        <div class="box f2">Pink</div>
      </div>
      <div class="demo-card">
        <p class="label">background-color: #34d399</p>
        <div class="box f3">Green</div>
      </div>
      <div class="demo-card">
        <p class="label">background-color: rgba(167, 139, 250, 0.3)</p>
        <div class="box f4">Semi-transparent</div>
      </div>
      <div class="demo-card">
        <p class="label">background-color: transparent</p>
        <div class="box f5">Transparent</div>
      </div>
      <div class="demo-card">
        <p class="label">background-color: hsl(220, 70%, 20%)</p>
        <div class="box f6">HSL Color</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  height: 80px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-family: Arial, sans-serif;
  border: 1px solid #3e3e5e;
}

.f1 { background-color: #a78bfa; }
.f2 { background-color: #f472b6; }
.f3 { background-color: #34d399; color: #0f0f1a; }
.f4 { background-color: rgba(167, 139, 250, 0.3); }
.f5 { background-color: transparent; color: #94a3b8; }
.f6 { background-color: hsl(220, 70%, 20%); }`,
  },

    // ─── background-image ───────────────────────────────────────────
  {
    property: "background-image",
    description: "Sets one or more background images on an element. Accepts url() for image files, or gradient functions like linear-gradient(), radial-gradient(), and conic-gradient(). Multiple images are comma-separated.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>background-image — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>background-image</span> Property</h1>
    <p class="page-desc">Apply images or gradients as element backgrounds.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">background-image: none</p>
        <div class="box f1">No Image</div>
      </div>
      <div class="demo-card">
        <p class="label">linear-gradient(135deg, #a78bfa, #f472b6)</p>
        <div class="box f2">Linear Gradient</div>
      </div>
      <div class="demo-card">
        <p class="label">radial-gradient(circle, ...)</p>
        <div class="box f3">Radial Gradient</div>
      </div>
      <div class="demo-card">
        <p class="label">conic-gradient(...)</p>
        <div class="box f4">Conic Gradient</div>
      </div>
      <div class="demo-card">
        <p class="label">repeating-linear-gradient(45deg, ...)</p>
        <div class="box f5">Repeating Stripes</div>
      </div>
      <div class="demo-card">
        <p class="label">Multiple layers combined</p>
        <div class="box f6">Multi-layer</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  height: 100px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1rem;
}

.f1 {
  background-image: none;
  background-color: #2a2a3e;
}

.f2 {
  background-image: linear-gradient(135deg, #a78bfa, #f472b6);
}

.f3 {
  background-image: radial-gradient(circle, #a78bfa 0%, #1e1e2e 80%);
}

.f4 {
  background-image: conic-gradient(
    #a78bfa 0deg,
    #f472b6 120deg,
    #fbbf24 240deg,
    #a78bfa 360deg
  );
}

.f5 {
  background-image: repeating-linear-gradient(
    45deg,
    #a78bfa 0px,
    #a78bfa 10px,
    #1e1e2e 10px,
    #1e1e2e 20px
  );
}

.f6 {
  background-image:
    radial-gradient(circle at 30% 50%, rgba(167, 139, 250, 0.6) 0%, transparent 50%),
    linear-gradient(135deg, #1e1e2e, #2a2a3e);
}`,
  },

    // ─── background-size ────────────────────────────────────────────
  {
    property: "background-size",
    description: "Sets the size of background images. Values: auto (natural size), cover (fills container, may crop), contain (fits inside, may letterbox), or explicit dimensions like px or %.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>background-size — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>background-size</span> Property</h1>
    <p class="page-desc">Control how background images are sized within their container.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">background-size: auto</p>
        <div class="box f1"><span>auto</span></div>
      </div>
      <div class="demo-card">
        <p class="label">background-size: cover</p>
        <div class="box f2"><span>cover</span></div>
      </div>
      <div class="demo-card">
        <p class="label">background-size: contain</p>
        <div class="box f3"><span>contain</span></div>
      </div>
      <div class="demo-card">
        <p class="label">background-size: 50% 50%</p>
        <div class="box f4"><span>50% 50%</span></div>
      </div>
      <div class="demo-card">
        <p class="label">background-size: 80px 60px</p>
        <div class="box f5"><span>80px 60px</span></div>
      </div>
      <div class="demo-card">
        <p class="label">background-size: 200% (zoom in)</p>
        <div class="box f6"><span>200%</span></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  height: 120px;
  border-radius: 8px;
  background-image: linear-gradient(135deg, #a78bfa 25%, #f472b6 50%, #fbbf24 75%);
  background-repeat: no-repeat;
  background-position: center;
  background-color: #12121f;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 8px;
  border: 1px solid #3e3e5e;
}

.box span {
  background: rgba(0, 0, 0, 0.65);
  color: #a78bfa;
  font-family: monospace;
  font-size: 0.78rem;
  padding: 3px 8px;
  border-radius: 4px;
}

.f1 { background-size: auto; }
.f2 { background-size: cover; }
.f3 { background-size: contain; }
.f4 { background-size: 50% 50%; }
.f5 { background-size: 80px 60px; }
.f6 { background-size: 200%; }`,
  },


    // ─── background-position ────────────────────────────────────────
  {
    property: "background-position",
    description: "Sets the starting position of a background image. Accepts keywords (top, center, bottom, left, right), percentages, or length values. Default is 0% 0% (top left).",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>background-position — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>background-position</span> Property</h1>
    <p class="page-desc">Control where the background image is anchored within the element.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">background-position: top left</p>
        <div class="box f1"><span>top left</span></div>
      </div>
      <div class="demo-card">
        <p class="label">background-position: center</p>
        <div class="box f2"><span>center</span></div>
      </div>
      <div class="demo-card">
        <p class="label">background-position: bottom right</p>
        <div class="box f3"><span>bottom right</span></div>
      </div>
      <div class="demo-card">
        <p class="label">background-position: 20% 80%</p>
        <div class="box f4"><span>20% 80%</span></div>
      </div>
      <div class="demo-card">
        <p class="label">background-position: top center</p>
        <div class="box f5"><span>top center</span></div>
      </div>
      <div class="demo-card">
        <p class="label">background-position: 10px 20px</p>
        <div class="box f6"><span>10px 20px</span></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  height: 120px;
  border-radius: 8px;
  background-image: radial-gradient(circle, #a78bfa 20px, transparent 20px);
  background-repeat: no-repeat;
  background-size: 40px 40px;
  background-color: #12121f;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 8px;
  border: 1px solid #3e3e5e;
}

.box span {
  background: rgba(0, 0, 0, 0.65);
  color: #a78bfa;
  font-family: monospace;
  font-size: 0.78rem;
  padding: 3px 8px;
  border-radius: 4px;
}

.f1 { background-position: top left; }
.f2 { background-position: center; }
.f3 { background-position: bottom right; }
.f4 { background-position: 20% 80%; }
.f5 { background-position: top center; }
.f6 { background-position: 10px 20px; }`,
  },

    // ─── background-repeat ──────────────────────────────────────────
  {
    property: "background-repeat",
    description: "Sets whether and how a background image is repeated. Values: repeat (default), no-repeat, repeat-x, repeat-y, space, round.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>background-repeat — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>background-repeat</span> Property</h1>
    <p class="page-desc">Control how background images tile across the element.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">background-repeat: repeat</p>
        <div class="box f1"></div>
      </div>
      <div class="demo-card">
        <p class="label">background-repeat: no-repeat</p>
        <div class="box f2"></div>
      </div>
      <div class="demo-card">
        <p class="label">background-repeat: repeat-x</p>
        <div class="box f3"></div>
      </div>
      <div class="demo-card">
        <p class="label">background-repeat: repeat-y</p>
        <div class="box f4"></div>
      </div>
      <div class="demo-card">
        <p class="label">background-repeat: space</p>
        <div class="box f5"></div>
      </div>
      <div class="demo-card">
        <p class="label">background-repeat: round</p>
        <div class="box f6"></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  }

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  height: 120px;
  border-radius: 8px;
  background-image: radial-gradient(circle, #a78bfa 5px, transparent 5px);
  background-size: 24px 24px;
  background-color: #12121f;
  border: 1px solid #3e3e5e;
}

.f1 { background-repeat: repeat; }
.f2 { background-repeat: no-repeat; background-position: center; }
.f3 { background-repeat: repeat-x; background-position: center; }
.f4 { background-repeat: repeat-y; background-position: center; }
.f5 { background-repeat: space; }
.f6 { background-repeat: round; }`,
  },

    // ─── background-attachment ──────────────────────────────────────
  {
    property: "background-attachment",
    description: "Sets whether a background image scrolls with the page or stays fixed. Values: scroll (default — moves with element), fixed (stays fixed to viewport), local (scrolls with element's own content).",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>background-attachment — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>background-attachment</span> Property</h1>
    <p class="page-desc">Control whether the background scrolls with the page or stays fixed.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">background-attachment: scroll (default)</p>
        <div class="scroll-box">
          <div class="inner f1">
            <p>Scroll this box.</p>
            <p>The background moves with the content.</p>
            <p>More content here.</p>
            <p>And more below.</p>
          </div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">background-attachment: local</p>
        <div class="scroll-box">
          <div class="inner f2">
            <p>Scroll this box.</p>
            <p>The background scrolls with the element's own content.</p>
            <p>More content here.</p>
            <p>And more below.</p>
          </div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">background-attachment: fixed</p>
        <div class="fixed-box f3">
          <p>The background is fixed to the viewport.</p>
          <p>Scroll the page to see the parallax effect.</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">fixed — parallax hero effect</p>
        <div class="parallax-box f4">
          <div class="parallax-text">Parallax Effect</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.scroll-box {
  height: 100px;
  overflow-y: scroll;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
}

.inner {
  padding: 14px 16px;
  background-image: radial-gradient(circle, #a78bfa 3px, transparent 3px);
  background-size: 20px 20px;
  background-color: #12121f;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: Arial, sans-serif;
  font-size: 0.88rem;
  color: #e2e8f0;
}

.f1 { background-attachment: scroll; }
.f2 { background-attachment: local; }

.fixed-box {
  height: 100px;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px;
  font-family: Arial, sans-serif;
  font-size: 0.88rem;
  color: #e2e8f0;
  text-align: center;
  background-image: repeating-linear-gradient(
    45deg,
    rgba(167, 139, 250, 0.15) 0px,
    rgba(167, 139, 250, 0.15) 10px,
    transparent 10px,
    transparent 20px
  );
  background-color: #12121f;
}

.f3 { background-attachment: fixed; }

.parallax-box {
  height: 120px;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(135deg, #a78bfa 0%, #f472b6 50%, #fbbf24 100%);
  background-size: 200% 200%;
}

.f4 { background-attachment: fixed; }

.parallax-text {
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}`,
  },

    // ─── background-clip ────────────────────────────────────────────
  {
    property: "background-clip",
    description: "Sets how far the background extends within an element. Values: border-box (default), padding-box, content-box, text (clips background to text shape).",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>background-clip — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>background-clip</span> Property</h1>
    <p class="page-desc">Control how far the background extends — including the stunning text clip effect.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">background-clip: border-box (default)</p>
        <div class="box f1">Border Box</div>
      </div>
      <div class="demo-card">
        <p class="label">background-clip: padding-box</p>
        <div class="box f2">Padding Box</div>
      </div>
      <div class="demo-card">
        <p class="label">background-clip: content-box</p>
        <div class="box f3">Content Box</div>
      </div>
      <div class="demo-card">
        <p class="label">background-clip: text (gradient text)</p>
        <div class="box f4">Gradient Text</div>
      </div>
      <div class="demo-card">
        <p class="label">text clip — large heading</p>
        <h2 class="clip-heading">CSS STYLE</h2>
      </div>
      <div class="demo-card">
        <p class="label">text clip — animated gradient</p>
        <h2 class="clip-animated">ANIMATED</h2>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  height: 90px;
  border-radius: 4px;
  border: 8px solid rgba(167, 139, 250, 0.4);
  padding: 12px;
  background-image: linear-gradient(135deg, #a78bfa, #f472b6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
}

.f1 { background-clip: border-box; }
.f2 { background-clip: padding-box; }
.f3 { background-clip: content-box; }

.f4 {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 1.4rem;
  border: none;
  height: auto;
  padding: 14px 18px;
}

.clip-heading {
  background: linear-gradient(135deg, #a78bfa, #f472b6, #fbbf24);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 2rem;
  font-family: Arial, sans-serif;
  font-weight: 900;
  text-align: center;
  padding: 10px 0;
}

.clip-animated {
  background: linear-gradient(
    270deg,
    #a78bfa,
    #f472b6,
    #fbbf24,
    #34d399,
    #a78bfa
  );
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 2rem;
  font-family: Arial, sans-serif;
  font-weight: 900;
  text-align: center;
  padding: 10px 0;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
  },

    // ─── background-origin ──────────────────────────────────────────
  {
    property: "background-origin",
    description: "Sets the origin position of a background image. Values: padding-box (default), border-box, content-box. Determines which box the background-position is relative to.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>background-origin — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>background-origin</span> Property</h1>
    <p class="page-desc">Define which box the background image position is relative to.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">background-origin: padding-box (default)</p>
        <div class="box f1"><span>padding-box</span></div>
      </div>
      <div class="demo-card">
        <p class="label">background-origin: border-box</p>
        <div class="box f2"><span>border-box</span></div>
      </div>
      <div class="demo-card">
        <p class="label">background-origin: content-box</p>
        <div class="box f3"><span>content-box</span></div>
      </div>
      <div class="demo-card">
        <p class="label">padding-box vs border-box comparison</p>
        <div class="compare">
          <div class="box sm f4"><span>padding</span></div>
          <div class="box sm f5"><span>border</span></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  height: 110px;
  border: 10px solid rgba(167, 139, 250, 0.35);
  padding: 14px;
  background-image: radial-gradient(circle, #a78bfa 6px, transparent 6px);
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: top left;
  background-color: #12121f;
  border-radius: 4px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}

.box span {
  background: rgba(0, 0, 0, 0.65);
  color: #a78bfa;
  font-family: monospace;
  font-size: 0.78rem;
  padding: 3px 8px;
  border-radius: 4px;
}

.f1 { background-origin: padding-box; }
.f2 { background-origin: border-box; }
.f3 { background-origin: content-box; }

.compare {
  display: flex;
  gap: 10px;
}

.sm {
  flex: 1;
  height: 90px;
}

.f4 { background-origin: padding-box; }
.f5 { background-origin: border-box; }`,
  },

    // ─── background-blend-mode ──────────────────────────────────────
  {
    property: "background-blend-mode",
    description: "Sets how an element's background image blends with its background color. Values: normal, multiply, screen, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, exclusion, hue, saturation, color, luminosity.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>background-blend-mode — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>background-blend-mode</span> Property</h1>
    <p class="page-desc">Blend background images with background colors using Photoshop-style blend modes.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">background-blend-mode: normal</p>
        <div class="box f1"></div>
      </div>
      <div class="demo-card">
        <p class="label">background-blend-mode: multiply</p>
        <div class="box f2"></div>
      </div>
      <div class="demo-card">
        <p class="label">background-blend-mode: screen</p>
        <div class="box f3"></div>
      </div>
      <div class="demo-card">
        <p class="label">background-blend-mode: overlay</p>
        <div class="box f4"></div>
      </div>
      <div class="demo-card">
        <p class="label">background-blend-mode: difference</p>
        <div class="box f5"></div>
      </div>
      <div class="demo-card">
        <p class="label">background-blend-mode: color-dodge</p>
        <div class="box f6"></div>
      </div>
      <div class="demo-card">
        <p class="label">background-blend-mode: luminosity</p>
        <div class="box f7"></div>
      </div>
      <div class="demo-card">
        <p class="label">background-blend-mode: hue</p>
        <div class="box f8"></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  height: 100px;
  border-radius: 8px;
  background-image: linear-gradient(135deg, #a78bfa, #f472b6, #fbbf24);
  background-color: #2a2a3e;
  border: 1px solid #3e3e5e;
}

.f1 { background-blend-mode: normal; }
.f2 { background-blend-mode: multiply; }
.f3 { background-blend-mode: screen; }
.f4 { background-blend-mode: overlay; }
.f5 { background-blend-mode: difference; }
.f6 { background-blend-mode: color-dodge; }
.f7 { background-blend-mode: luminosity; }
.f8 { background-blend-mode: hue; }`,
  },

    // ─── position ───────────────────────────────────────────────────
  {
    property: "position",
    description: "Specifies the positioning method for an element. Values: static (default), relative, absolute, fixed, sticky.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>position — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>position</span> Property</h1>
    <p class="page-desc">Control how elements are positioned in the document flow.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">position: static (default)</p>
        <div class="scene">
          <div class="block">Block 1</div>
          <div class="block static-box">Static — normal flow</div>
          <div class="block">Block 3</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">position: relative (offset from normal)</p>
        <div class="scene">
          <div class="block">Block 1</div>
          <div class="block relative-box">Relative — shifted 20px</div>
          <div class="block">Block 3</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">position: absolute (removed from flow)</p>
        <div class="scene relative-parent">
          <div class="block">Block 1</div>
          <div class="absolute-box">Absolute</div>
          <div class="block">Block 2 (moves up)</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">position: fixed (viewport-relative)</p>
        <div class="scene">
          <div class="block">Scroll the page.</div>
          <div class="block">Fixed element stays in viewport.</div>
          <div class="fixed-demo">Fixed</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">position: sticky (sticks on scroll)</p>
        <div class="sticky-scene">
          <div class="sticky-header">Sticky Header</div>
          <div class="sticky-content">
            <p>Item 1</p><p>Item 2</p><p>Item 3</p>
            <p>Item 4</p><p>Item 5</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.scene {
  background: #12121f;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #3e3e5e;
  min-height: 120px;
}

.block {
  background: #2a2a3e;
  border: 1px solid #3e3e5e;
  border-radius: 6px;
  padding: 8px 12px;
  margin-bottom: 6px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #e2e8f0;
}

.static-box {
  position: static;
  border-color: #a78bfa;
  color: #a78bfa;
}

.relative-box {
  position: relative;
  top: 10px;
  left: 20px;
  border-color: #f472b6;
  color: #f472b6;
}

.relative-parent {
  position: relative;
}

.absolute-box {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #3b2a5e;
  border: 1px solid #a78bfa;
  border-radius: 6px;
  padding: 6px 12px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #a78bfa;
}

.fixed-demo {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #a78bfa;
  color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: bold;
  z-index: 100;
  pointer-events: none;
}

.sticky-scene {
  height: 140px;
  overflow-y: scroll;
  background: #12121f;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
}

.sticky-header {
  position: sticky;
  top: 0;
  background: #3b2a5e;
  color: #a78bfa;
  padding: 8px 14px;
  font-family: Arial, sans-serif;
  font-size: 0.88rem;
  font-weight: bold;
  border-bottom: 1px solid #a78bfa;
  z-index: 10;
}

.sticky-content p {
  padding: 10px 14px;
  border-bottom: 1px solid #2e2e3e;
  font-family: Arial, sans-serif;
  font-size: 0.88rem;
  color: #e2e8f0;
}`,
  },

    // ─── top ────────────────────────────────────────────────────────
  {
    property: "top",
    description: "Sets the top edge position of a positioned element (position: relative, absolute, fixed, or sticky). Positive values move the element down; negative values move it up.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>top — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>top</span> Property</h1>
    <p class="page-desc">Offset a positioned element from its top edge.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">top: 0</p>
        <div class="scene">
          <div class="box t0">top: 0</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">top: 20px (relative)</p>
        <div class="scene">
          <div class="box t20">top: 20px</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">top: 40px (relative)</p>
        <div class="scene">
          <div class="box t40">top: 40px</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">top: -10px (negative)</p>
        <div class="scene">
          <div class="box tn10">top: -10px</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">top: 50% (absolute, centered)</p>
        <div class="scene abs-parent">
          <div class="box abs-top">top: 50%</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">top: 0 (absolute, pinned)</p>
        <div class="scene abs-parent">
          <div class="box abs-pin">Pinned Top</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.scene {
  background: #12121f;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  height: 100px;
  position: relative;
  overflow: hidden;
}

.box {
  position: relative;
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border: 1px solid #a78bfa;
  border-radius: 6px;
  padding: 8px 14px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #a78bfa;
  width: fit-content;
  margin: 0 auto;
}

.t0   { top: 0; }
.t20  { top: 20px; }
.t40  { top: 40px; }
.tn10 { top: -10px; }

.abs-parent { }

.abs-top {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.abs-pin {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0;
  text-align: center;
  width: 100%;
}`,
  },

    // ─── right ──────────────────────────────────────────────────────
  {
    property: "right",
    description: "Sets the right edge position of a positioned element. Positive values move the element left (away from the right edge); negative values move it further right.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>right — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>right</span> Property</h1>
    <p class="page-desc">Offset a positioned element from its right edge.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">right: 0 (pinned to right)</p>
        <div class="scene">
          <div class="box r0">right: 0</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">right: 20px</p>
        <div class="scene">
          <div class="box r20">right: 20px</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">right: 50% (centered)</p>
        <div class="scene">
          <div class="box r50">right: 50%</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">right: 0 — close button pattern</p>
        <div class="scene card-scene">
          <div class="card-demo">
            <span class="close-btn">✕</span>
            <p>Card content here</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.scene {
  background: #12121f;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  height: 80px;
  position: relative;
  overflow: hidden;
}

.box {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border: 1px solid #a78bfa;
  border-radius: 6px;
  padding: 8px 14px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #a78bfa;
  white-space: nowrap;
}

.r0  { right: 0; }
.r20 { right: 20px; }
.r50 { right: 50%; }

.card-scene { height: 90px; }

.card-demo {
  position: relative;
  background: #2a2a3e;
  border-radius: 6px;
  padding: 14px 16px;
  margin: 8px;
  font-family: Arial, sans-serif;
  font-size: 0.88rem;
  color: #e2e8f0;
}

.close-btn {
  position: absolute;
  top: 6px;
  right: 8px;
  color: #f472b6;
  font-size: 0.9rem;
  cursor: pointer;
  font-weight: bold;
}`,
  },

    // ─── bottom ─────────────────────────────────────────────────────
  {
    property: "bottom",
    description: "Sets the bottom edge position of a positioned element. Positive values move the element up (away from the bottom edge); negative values move it further down.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>bottom — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>bottom</span> Property</h1>
    <p class="page-desc">Offset a positioned element from its bottom edge.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">bottom: 0 (pinned to bottom)</p>
        <div class="scene">
          <div class="box b0">bottom: 0</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">bottom: 20px</p>
        <div class="scene">
          <div class="box b20">bottom: 20px</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">bottom: 50%</p>
        <div class="scene">
          <div class="box b50">bottom: 50%</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">bottom: 0 — toast notification</p>
        <div class="scene toast-scene">
          <div class="toast">✓ Saved successfully!</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.scene {
  background: #12121f;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  height: 100px;
  position: relative;
  overflow: hidden;
}

.box {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border: 1px solid #a78bfa;
  border-radius: 6px;
  padding: 8px 14px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #a78bfa;
  white-space: nowrap;
}

.b0  { bottom: 0; }
.b20 { bottom: 20px; }
.b50 { bottom: 50%; }

.toast-scene { height: 90px; }

.toast {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  background: #1a3a2e;
  border: 1px solid #34d399;
  border-radius: 20px;
  padding: 8px 16px;
  font-family: Arial, sans-serif;
  font-size: 0.82rem;
  color: #34d399;
  white-space: nowrap;
}`,
  },

    // ─── left ───────────────────────────────────────────────────────
  {
    property: "left",
    description: "Sets the left edge position of a positioned element. Positive values move the element right (away from the left edge); negative values move it further left.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>left — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>left</span> Property</h1>
    <p class="page-desc">Offset a positioned element from its left edge.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">left: 0 (pinned to left)</p>
        <div class="scene"><div class="box l0">left: 0</div></div>
      </div>
      <div class="demo-card">
        <p class="label">left: 20px</p>
        <div class="scene"><div class="box l20">left: 20px</div></div>
      </div>
      <div class="demo-card">
        <p class="label">left: 50%</p>
        <div class="scene"><div class="box l50">left: 50%</div></div>
      </div>
      <div class="demo-card">
        <p class="label">left: 50% + translateX(-50%) = centered</p>
        <div class="scene"><div class="box l-center">Centered</div></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.scene {
  background: #12121f;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  height: 80px;
  position: relative;
  overflow: hidden;
}

.box {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border: 1px solid #a78bfa;
  border-radius: 6px;
  padding: 8px 14px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #a78bfa;
  white-space: nowrap;
}

.l0      { left: 0; }
.l20     { left: 20px; }
.l50     { left: 50%; }
.l-center { left: 50%; transform: translate(-50%, -50%); }`,
  },

    // ─── z-index ────────────────────────────────────────────────────
  {
    property: "z-index",
    description: "Sets the stack order of a positioned element. Higher values appear on top. Only works on elements with a position other than static. Accepts integers (positive, negative, or zero) and auto.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>z-index — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>z-index</span> Property</h1>
    <p class="page-desc">Control which elements appear on top when they overlap.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">z-index stacking order</p>
        <div class="stack-scene">
          <div class="layer z1">z-index: 1</div>
          <div class="layer z2">z-index: 2</div>
          <div class="layer z3">z-index: 3</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">z-index: negative (behind)</p>
        <div class="stack-scene">
          <div class="layer zn1">z-index: -1</div>
          <div class="layer z0">z-index: 0</div>
          <div class="layer z1b">z-index: 1</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">z-index: modal on top</p>
        <div class="modal-scene">
          <div class="page-content">Page content</div>
          <div class="overlay">Overlay z:10</div>
          <div class="modal">Modal z:20</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">z-index: tooltip pattern</p>
        <div class="tooltip-scene">
          <div class="card-item">
            Hover card
            <div class="tooltip">Tooltip z:100</div>
          </div>
          <div class="card-item">Another card</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.stack-scene {
  position: relative;
  height: 100px;
  background: #12121f;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
}

.layer {
  position: absolute;
  width: 80px;
  height: 50px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: bold;
}

.z1  { background: rgba(167,139,250,0.7); color:#fff; top:10px; left:10px; z-index:1; }
.z2  { background: rgba(244,114,182,0.8); color:#fff; top:25px; left:40px; z-index:2; }
.z3  { background: rgba(251,191,36,0.9);  color:#1e1e2e; top:40px; left:70px; z-index:3; }

.zn1 { background: rgba(100,116,139,0.6); color:#fff; top:10px; left:10px; z-index:-1; }
.z0  { background: rgba(167,139,250,0.7); color:#fff; top:25px; left:40px; z-index:0; }
.z1b { background: rgba(244,114,182,0.8); color:#fff; top:40px; left:70px; z-index:1; }

.modal-scene {
  position: relative;
  height: 100px;
  background: #12121f;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  overflow: hidden;
}

.page-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #64748b;
  z-index: 1;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 0.78rem;
  color: #94a3b8;
  z-index: 10;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #3b2a5e;
  border: 1px solid #a78bfa;
  border-radius: 8px;
  padding: 10px 18px;
  font-family: Arial, sans-serif;
  font-size: 0.82rem;
  color: #a78bfa;
  font-weight: bold;
  z-index: 20;
  white-space: nowrap;
}

.tooltip-scene {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-item {
  position: relative;
  background: #2a2a3e;
  border: 1px solid #3e3e5e;
  border-radius: 6px;
  padding: 10px 14px;
  font-family: Arial, sans-serif;
  font-size: 0.88rem;
  color: #e2e8f0;
  cursor: pointer;
}

.tooltip {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: #a78bfa;
  color: #fff;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.75rem;
  white-space: nowrap;
  z-index: 100;
}`,
  },

    // ─── float ──────────────────────────────────────────────────────
  {
    property: "float",
    description: "Removes an element from the normal flow and places it to the left or right, allowing text and inline elements to wrap around it. Values: none, left, right, inline-start, inline-end.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>float — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>float</span> Property</h1>
    <p class="page-desc">Float elements left or right and let text wrap around them.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">float: none (default)</p>
        <div class="text-box">
          <div class="img-block none-float">IMG</div>
          <p>Text flows normally below the image block without wrapping around it.</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">float: left</p>
        <div class="text-box clearfix">
          <div class="img-block left-float">IMG</div>
          <p>Text wraps around the left-floated image. This is the classic magazine-style layout technique used in CSS.</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">float: right</p>
        <div class="text-box clearfix">
          <div class="img-block right-float">IMG</div>
          <p>Text wraps around the right-floated image. The image sits on the right side of the container.</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">float: left — multi-column layout</p>
        <div class="col-layout clearfix">
          <div class="col-left">Left Column</div>
          <div class="col-right">Right Column</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.text-box {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 12px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #e2e8f0;
  line-height: 1.6;
  overflow: hidden;
}

.img-block {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #a78bfa, #f472b6);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 0.8rem;
  margin: 4px;
}

.none-float  { float: none; }
.left-float  { float: left; margin-right: 10px; }
.right-float { float: right; margin-left: 10px; }

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

.col-layout {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 10px;
  overflow: hidden;
}

.col-left {
  float: left;
  width: 45%;
  background: #3b2a5e;
  border-radius: 6px;
  padding: 10px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #a78bfa;
  text-align: center;
}

.col-right {
  float: right;
  width: 45%;
  background: #1a3a2e;
  border-radius: 6px;
  padding: 10px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #34d399;
  text-align: center;
}`,
  },

    // ─── clear ──────────────────────────────────────────────────────
  {
    property: "clear",
    description: "Specifies which sides of an element floating elements are not allowed to float. Values: none, left, right, both, inline-start, inline-end.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>clear — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>clear</span> Property</h1>
    <p class="page-desc">Push an element below floated siblings using clear.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">Without clear — element wraps alongside float</p>
        <div class="scene">
          <div class="floated">Float Left</div>
          <div class="no-clear">This element has no clear — it sits next to the float.</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">clear: left — drops below left float</p>
        <div class="scene">
          <div class="floated">Float Left</div>
          <div class="clear-left">clear: left — I drop below the left float.</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">clear: right — drops below right float</p>
        <div class="scene">
          <div class="floated-right">Float Right</div>
          <div class="clear-right">clear: right — I drop below the right float.</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">clear: both — drops below all floats</p>
        <div class="scene">
          <div class="floated">Left</div>
          <div class="floated-right">Right</div>
          <div class="clear-both">clear: both — I drop below all floats.</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.scene {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 10px;
  overflow: hidden;
  min-height: 80px;
}

.floated {
  float: left;
  background: #3b2a5e;
  border: 1px solid #a78bfa;
  border-radius: 6px;
  padding: 8px 12px;
  font-family: Arial, sans-serif;
  font-size: 0.82rem;
  color: #a78bfa;
  margin-right: 8px;
  margin-bottom: 4px;
}

.floated-right {
  float: right;
  background: #1a3a2e;
  border: 1px solid #34d399;
  border-radius: 6px;
  padding: 8px 12px;
  font-family: Arial, sans-serif;
  font-size: 0.82rem;
  color: #34d399;
  margin-left: 8px;
  margin-bottom: 4px;
}

.no-clear,
.clear-left,
.clear-right,
.clear-both {
  background: #1e1e2e;
  border: 1px solid #3e3e5e;
  border-radius: 6px;
  padding: 8px 12px;
  font-family: Arial, sans-serif;
  font-size: 0.82rem;
  color: #e2e8f0;
  line-height: 1.5;
}

.clear-left  { clear: left; }
.clear-right { clear: right; }
.clear-both  { clear: both; }`,
  },

    // ─── inset ──────────────────────────────────────────────────────
  {
    property: "inset",
    description: "Shorthand for top, right, bottom, and left. Sets all four offset properties at once. Follows the same 1–4 value syntax as margin and padding.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>inset — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>inset</span> Property</h1>
    <p class="page-desc">Set top, right, bottom, and left offsets in one shorthand.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">inset: 0 (fills parent)</p>
        <div class="scene">
          <div class="box i0">inset: 0</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">inset: 10px</p>
        <div class="scene">
          <div class="box i10">inset: 10px</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">inset: 20px 10px (v h)</p>
        <div class="scene">
          <div class="box i20-10">inset: 20px 10px</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">inset: 10px 20px 30px 40px</p>
        <div class="scene">
          <div class="box i-all">inset: 10 20 30 40</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">inset: 0 — overlay pattern</p>
        <div class="scene">
          <div class="base-card">Card</div>
          <div class="overlay-box">Overlay</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">inset: 20% — centered modal</p>
        <div class="scene">
          <div class="modal-box">Modal</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.scene {
  background: #12121f;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  height: 100px;
  position: relative;
}

.box {
  position: absolute;
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border: 1px solid #a78bfa;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 0.78rem;
  color: #a78bfa;
}

.i0     { inset: 0; }
.i10    { inset: 10px; }
.i20-10 { inset: 20px 10px; }
.i-all  { inset: 10px 20px 30px 40px; }

.base-card {
  position: absolute;
  inset: 10px;
  background: #2a2a3e;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #64748b;
}

.overlay-box {
  position: absolute;
  inset: 0;
  background: rgba(167, 139, 250, 0.2);
  border: 1px solid #a78bfa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #a78bfa;
  font-weight: bold;
}

.modal-box {
  position: absolute;
  inset: 20%;
  background: #3b2a5e;
  border: 1px solid #a78bfa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #a78bfa;
  font-weight: bold;
}`,
  },

    // ─── transform ──────────────────────────────────────────────────
  {
    property: "transform",
    description: "Applies 2D or 3D transformations to an element. Functions include translate(), rotate(), scale(), skew(), matrix(), and their 3D variants. Multiple functions can be chained.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>transform — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>transform</span> Property</h1>
    <p class="page-desc">Rotate, scale, skew, and translate elements in 2D and 3D space.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">transform: none</p>
        <div class="wrap"><div class="box f1">Normal</div></div>
      </div>
      <div class="demo-card">
        <p class="label">transform: rotate(45deg)</p>
        <div class="wrap"><div class="box f2">Rotate</div></div>
      </div>
      <div class="demo-card">
        <p class="label">transform: scale(1.4)</p>
        <div class="wrap"><div class="box f3">Scale</div></div>
      </div>
      <div class="demo-card">
        <p class="label">transform: translateX(30px)</p>
        <div class="wrap"><div class="box f4">TranslateX</div></div>
      </div>
      <div class="demo-card">
        <p class="label">transform: skewX(20deg)</p>
        <div class="wrap"><div class="box f5">SkewX</div></div>
      </div>
      <div class="demo-card">
        <p class="label">transform: translate(-20px, 10px) rotate(15deg) scale(0.9)</p>
        <div class="wrap"><div class="box f6">Combined</div></div>
      </div>
      <div class="demo-card">
        <p class="label">transform: rotateY(45deg) — 3D</p>
        <div class="wrap perspective"><div class="box f7">RotateY</div></div>
      </div>
      <div class="demo-card">
        <p class="label">transform on :hover</p>
        <div class="wrap"><div class="box f8">Hover Me</div></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.wrap {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.perspective {
  perspective: 400px;
}

.box {
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border: 1px solid #a78bfa;
  border-radius: 8px;
  padding: 14px 20px;
  color: #a78bfa;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.f1 { transform: none; }
.f2 { transform: rotate(45deg); }
.f3 { transform: scale(1.4); }
.f4 { transform: translateX(30px); }
.f5 { transform: skewX(20deg); }
.f6 { transform: translate(-20px, 10px) rotate(15deg) scale(0.9); }
.f7 { transform: rotateY(45deg); }
.f8 { cursor: pointer; }
.f8:hover { transform: rotate(10deg) scale(1.1); }`,
  },

    // ─── perspective-origin ─────────────────────────────────────────
  {
    property: "perspective-origin",
    description: "Sets the vanishing point for the perspective property on a 3D-transformed element's parent. Default is 50% 50% (center). Accepts keywords or length/percentage values.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>perspective-origin — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>perspective-origin</span> Property</h1>
    <p class="page-desc">Move the vanishing point to change the 3D viewing angle.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">perspective-origin: center (default)</p>
        <div class="scene po-center">
          <div class="cube-face">Center View</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">perspective-origin: top left</p>
        <div class="scene po-tl">
          <div class="cube-face">Top Left</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">perspective-origin: top right</p>
        <div class="scene po-tr">
          <div class="cube-face">Top Right</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">perspective-origin: bottom left</p>
        <div class="scene po-bl">
          <div class="cube-face">Bottom Left</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">perspective-origin: bottom right</p>
        <div class="scene po-br">
          <div class="cube-face">Bottom Right</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">perspective-origin: 20% 80%</p>
        <div class="scene po-custom">
          <div class="cube-face">Custom</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.scene {
  perspective: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #12121f;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
}

.cube-face {
  width: 120px;
  height: 60px;
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border: 1px solid #a78bfa;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #a78bfa;
  font-weight: bold;
  transform: rotateY(30deg) rotateX(15deg);
}

.po-center  { perspective-origin: center; }
.po-tl      { perspective-origin: top left; }
.po-tr      { perspective-origin: top right; }
.po-bl      { perspective-origin: bottom left; }
.po-br      { perspective-origin: bottom right; }
.po-custom  { perspective-origin: 20% 80%; }`,
  },

    // ─── backface-visibility ────────────────────────────────────────
  {
    property: "backface-visibility",
    description: "Defines whether the back face of a 3D-transformed element is visible when facing the user. Values: visible (default) or hidden. Essential for flip card effects.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>backface-visibility — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>backface-visibility</span> Property</h1>
    <p class="page-desc">Hover each card to see the difference between visible and hidden back faces.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">backface-visibility: visible (default)</p>
        <div class="scene">
          <div class="flip-card bfv-visible">
            <div class="face front">Front</div>
            <div class="face back-visible">Back (mirrored)</div>
          </div>
        </div>
        <p class="note">Hover — back face shows mirrored</p>
      </div>
      <div class="demo-card">
        <p class="label">backface-visibility: hidden</p>
        <div class="scene">
          <div class="flip-card bfv-hidden">
            <div class="face front">Front</div>
            <div class="face back-hidden">Back (clean)</div>
          </div>
        </div>
        <p class="note">Hover — back face shows cleanly</p>
      </div>
      <div class="demo-card">
        <p class="label">hidden — practical flip card</p>
        <div class="scene">
          <div class="flip-card bfv-hidden">
            <div class="face front-card">
              <span>🎨</span>
              <strong>CSS</strong>
            </div>
            <div class="face back-card">
              <p>Cascading Style Sheets</p>
            </div>
          </div>
        </div>
        <p class="note">Hover to flip</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.note {
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 8px;
  font-family: Arial, sans-serif;
}

.scene {
  perspective: 600px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flip-card {
  width: 160px;
  height: 90px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
  cursor: pointer;
}

.scene:hover .flip-card {
  transform: rotateY(180deg);
}

.face {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 0.95rem;
}

.front {
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border: 1px solid #a78bfa;
  color: #a78bfa;
  backface-visibility: visible;
}

.back-visible {
  background: linear-gradient(135deg, #f472b6, #a78bfa);
  color: #fff;
  transform: rotateY(180deg);
  backface-visibility: visible;
}

.back-hidden {
  background: linear-gradient(135deg, #f472b6, #a78bfa);
  color: #fff;
  transform: rotateY(180deg);
  backface-visibility: hidden;
}

.bfv-visible .front { backface-visibility: visible; }
.bfv-hidden  .front { backface-visibility: hidden; }

.front-card {
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border: 1px solid #a78bfa;
  color: #a78bfa;
  backface-visibility: hidden;
  flex-direction: column;
  gap: 6px;
  font-size: 1.4rem;
}

.front-card strong {
  font-size: 0.9rem;
}

.back-card {
  background: linear-gradient(135deg, #1a3a2e, #2a3b2e);
  border: 1px solid #34d399;
  color: #34d399;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  font-size: 0.82rem;
  padding: 10px;
  text-align: center;
  font-weight: normal;
}`,
  },

    // ─── rotate ─────────────────────────────────────────────────────
  {
    property: "rotate",
    description: "Applies a rotation transformation independently from the transform property. Accepts angle values (deg, rad, turn) or 3D axis notation. Part of individual transform properties.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>rotate — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>rotate</span> Property</h1>
    <p class="page-desc">Rotate elements using the standalone rotate property.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">rotate: 0deg</p>
        <div class="wrap"><div class="box r0">0deg</div></div>
      </div>
      <div class="demo-card">
        <p class="label">rotate: 45deg</p>
        <div class="wrap"><div class="box r45">45deg</div></div>
      </div>
      <div class="demo-card">
        <p class="label">rotate: 90deg</p>
        <div class="wrap"><div class="box r90">90deg</div></div>
      </div>
      <div class="demo-card">
        <p class="label">rotate: 180deg</p>
        <div class="wrap"><div class="box r180">180deg</div></div>
      </div>
      <div class="demo-card">
        <p class="label">rotate: -45deg</p>
        <div class="wrap"><div class="box rn45">-45deg</div></div>
      </div>
      <div class="demo-card">
        <p class="label">rotate: 0.5turn</p>
        <div class="wrap"><div class="box rturn">0.5turn</div></div>
      </div>
      <div class="demo-card">
        <p class="label">rotate on :hover</p>
        <div class="wrap"><div class="box rhover">Hover Me</div></div>
      </div>
      <div class="demo-card">
        <p class="label">rotate: animated spin</p>
        <div class="wrap"><div class="box rspin">Spin</div></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.wrap {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.box {
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border: 1px solid #a78bfa;
  border-radius: 8px;
  padding: 14px 20px;
  color: #a78bfa;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  transition: rotate 0.3s ease;
}

.r0     { rotate: 0deg; }
.r45    { rotate: 45deg; }
.r90    { rotate: 90deg; }
.r180   { rotate: 180deg; }
.rn45   { rotate: -45deg; }
.rturn  { rotate: 0.5turn; }
.rhover { cursor: pointer; }
.rhover:hover { rotate: 45deg; }

.rspin {
  animation: spinAnim 2s linear infinite;
}

@keyframes spinAnim {
  from { rotate: 0deg; }
  to   { rotate: 360deg; }
}`,
  },

    // ─── scale ──────────────────────────────────────────────────────
  {
    property: "scale",
    description: "Applies a scale transformation independently from the transform property. Accepts one value (uniform), two values (x y), or three values (x y z). Part of individual transform properties.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>scale — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>scale</span> Property</h1>
    <p class="page-desc">Resize elements using the standalone scale property.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">scale: 1 (normal)</p>
        <div class="wrap"><div class="box s1">Normal</div></div>
      </div>
      <div class="demo-card">
        <p class="label">scale: 0.5</p>
        <div class="wrap"><div class="box s05">Small</div></div>
      </div>
      <div class="demo-card">
        <p class="label">scale: 1.5</p>
        <div class="wrap"><div class="box s15">Large</div></div>
      </div>
      <div class="demo-card">
        <p class="label">scale: 2</p>
        <div class="wrap"><div class="box s2">2x</div></div>
      </div>
      <div class="demo-card">
        <p class="label">scale: 2 1 (x only)</p>
        <div class="wrap"><div class="box sx2">Wide</div></div>
      </div>
      <div class="demo-card">
        <p class="label">scale: 1 2 (y only)</p>
        <div class="wrap"><div class="box sy2">Tall</div></div>
      </div>
      <div class="demo-card">
        <p class="label">scale: -1 (mirror flip)</p>
        <div class="wrap"><div class="box sflip">Flipped</div></div>
      </div>
      <div class="demo-card">
        <p class="label">scale on :hover</p>
        <div class="wrap"><div class="box shover">Hover Me</div></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.wrap {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.box {
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border: 1px solid #a78bfa;
  border-radius: 8px;
  padding: 14px 20px;
  color: #a78bfa;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  transition: scale 0.3s ease;
}

.s1    { scale: 1; }
.s05   { scale: 0.5; }
.s15   { scale: 1.5; }
.s2    { scale: 2; }
.sx2   { scale: 2 1; }
.sy2   { scale: 1 2; }
.sflip { scale: -1 1; }
.shover { cursor: pointer; }
.shover:hover { scale: 1.2; }`,
  },

    // ─── translate ──────────────────────────────────────────────────
  {
    property: "translate",
    description: "Applies a translation transformation independently from the transform property. Accepts one value (x), two values (x y), or three values (x y z). Part of individual transform properties.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>translate — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>translate</span> Property</h1>
    <p class="page-desc">Move elements using the standalone translate property.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">translate: 0 (no movement)</p>
        <div class="wrap"><div class="box t0">Origin</div></div>
      </div>
      <div class="demo-card">
        <p class="label">translate: 30px (x only)</p>
        <div class="wrap"><div class="box tx30">Right 30px</div></div>
      </div>
      <div class="demo-card">
        <p class="label">translate: -30px (negative x)</p>
        <div class="wrap"><div class="box txn30">Left 30px</div></div>
      </div>
      <div class="demo-card">
        <p class="label">translate: 0 20px (y only)</p>
        <div class="wrap"><div class="box ty20">Down 20px</div></div>
      </div>
      <div class="demo-card">
        <p class="label">translate: 20px -20px (x and y)</p>
        <div class="wrap"><div class="box txy">Right+Up</div></div>
      </div>
      <div class="demo-card">
        <p class="label">translate: 50% 50%</p>
        <div class="wrap"><div class="box tpct">50% 50%</div></div>
      </div>
      <div class="demo-card">
        <p class="label">translate on :hover (lift effect)</p>
        <div class="wrap"><div class="box thover">Hover Me</div></div>
      </div>
      <div class="demo-card">
        <p class="label">translate: animated bounce</p>
        <div class="wrap"><div class="box tbounce">Bounce</div></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.wrap {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.box {
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border: 1px solid #a78bfa;
  border-radius: 8px;
  padding: 14px 20px;
  color: #a78bfa;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  transition: translate 0.3s ease;
}

.t0    { translate: 0; }
.tx30  { translate: 30px; }
.txn30 { translate: -30px; }
.ty20  { translate: 0 20px; }
.txy   { translate: 20px -20px; }
.tpct  { translate: 50% 50%; }
.thover { cursor: pointer; }
.thover:hover { translate: 0 -8px; }

.tbounce {
  animation: bounceAnim 1s ease-in-out infinite alternate;
}

@keyframes bounceAnim {
  from { translate: 0 0; }
  to   { translate: 0 -20px; }
}`,
  },


    // ─── box-shadow ─────────────────────────────────────────────────
  {
    property: "box-shadow",
    description: "Adds one or more shadow effects to an element's box. Syntax: offset-x offset-y blur-radius spread-radius color. Use inset for inner shadows. Multiple shadows are comma-separated.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>box-shadow — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>box-shadow</span> Property</h1>
    <p class="page-desc">Add depth and elevation to elements with box shadows.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">box-shadow: none</p>
        <div class="box f1">No Shadow</div>
      </div>
      <div class="demo-card">
        <p class="label">2px 2px 8px rgba(0,0,0,0.5)</p>
        <div class="box f2">Soft Shadow</div>
      </div>
      <div class="demo-card">
        <p class="label">0 4px 20px rgba(167,139,250,0.4)</p>
        <div class="box f3">Colored Glow</div>
      </div>
      <div class="demo-card">
        <p class="label">4px 4px 0 #a78bfa (hard shadow)</p>
        <div class="box f4">Hard Shadow</div>
      </div>
      <div class="demo-card">
        <p class="label">inset 0 2px 8px rgba(0,0,0,0.5)</p>
        <div class="box f5">Inset Shadow</div>
      </div>
      <div class="demo-card">
        <p class="label">0 0 20px #a78bfa (neon glow)</p>
        <div class="box f6">Neon Glow</div>
      </div>
      <div class="demo-card">
        <p class="label">Multiple shadows</p>
        <div class="box f7">Multi Shadow</div>
      </div>
      <div class="demo-card">
        <p class="label">Elevation on :hover</p>
        <div class="box f8">Hover Me</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 16px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  border-radius: 10px;
  padding: 20px;
  color: #e2e8f0;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  transition: box-shadow 0.3s ease;
}

.f1 { box-shadow: none; }
.f2 { box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5); }
.f3 { box-shadow: 0 4px 20px rgba(167, 139, 250, 0.4); }
.f4 { box-shadow: 4px 4px 0 #a78bfa; }
.f5 { box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.5); }
.f6 {
  box-shadow:
    0 0 10px #a78bfa,
    0 0 20px #a78bfa,
    0 0 40px rgba(167, 139, 250, 0.4);
}
.f7 {
  box-shadow:
    4px 4px 0 #a78bfa,
    8px 8px 0 rgba(167, 139, 250, 0.4),
    12px 12px 0 rgba(167, 139, 250, 0.2);
}
.f8 {
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
.f8:hover {
  box-shadow:
    0 8px 30px rgba(167, 139, 250, 0.5),
    0 4px 12px rgba(0, 0, 0, 0.3);
  translate: 0 -4px;
}`,
  },

    // ─── var() ──────────────────────────────────────────────────────
  {
    property: "var()",
    description: "Inserts the value of a CSS custom property (variable) into a CSS declaration. Syntax: var(--property-name, fallback). Custom properties are defined with -- prefix.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>var() — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>var()</span> Function</h1>
    <p class="page-desc">Use CSS custom properties (variables) to create reusable, maintainable styles.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">Basic var() usage</p>
        <div class="box f1">Uses --primary-color</div>
      </div>
      <div class="demo-card">
        <p class="label">var() with fallback value</p>
        <div class="box f2">Fallback if undefined</div>
      </div>
      <div class="demo-card">
        <p class="label">var() in multiple properties</p>
        <div class="box f3">Border + Shadow + BG</div>
      </div>
      <div class="demo-card">
        <p class="label">Scoped variables on element</p>
        <div class="box f4">Scoped --color: pink</div>
      </div>
      <div class="demo-card">
        <p class="label">Theme switching with variables</p>
        <div class="theme-demo">
          <div class="theme-card light-theme">Light Theme</div>
          <div class="theme-card dark-theme">Dark Theme</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">var() in calc()</p>
        <div class="box f6">calc(var(--size) * 2)</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ── Global custom properties ── */
:root {
  --primary-color: #a78bfa;
  --secondary-color: #f472b6;
  --bg-dark: #2a2a3e;
  --text-light: #e2e8f0;
  --radius: 8px;
  --size: 20px;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: var(--primary-color);
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: var(--bg-dark);
  padding: 14px 18px;
  border-radius: var(--radius);
  color: var(--text-light);
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: bold;
}

/* f1 — basic var() */
.f1 {
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

/* f2 — var() with fallback */
.f2 {
  color: var(--undefined-color, #34d399);
  border: 2px solid var(--undefined-color, #34d399);
}

/* f3 — var() in multiple properties */
.f3 {
  border: 2px solid var(--secondary-color);
  box-shadow: 0 0 12px var(--secondary-color);
  color: var(--secondary-color);
}

/* f4 — scoped variable */
.f4 {
  --color: #f472b6;
  color: var(--color);
  border: 2px solid var(--color);
}

/* Theme demo */
.theme-demo {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.theme-card {
  padding: 12px 16px;
  border-radius: var(--radius);
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
}

.light-theme {
  --theme-bg: #f0f0ff;
  --theme-text: #1e1e2e;
  --theme-border: #a78bfa;
  background: var(--theme-bg);
  color: var(--theme-text);
  border: 2px solid var(--theme-border);
}

.dark-theme {
  --theme-bg: #1e1e2e;
  --theme-text: #a78bfa;
  --theme-border: #a78bfa;
  background: var(--theme-bg);
  color: var(--theme-text);
  border: 2px solid var(--theme-border);
}

/* f6 — var() in calc() */
.f6 {
  padding: calc(var(--size) * 0.7) calc(var(--size) * 0.9);
  font-size: calc(var(--size) * 0.7);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}`,
  },

    // ─── custom-properties ──────────────────────────────────────────
  {
    property: "custom-properties",
    description: "CSS custom properties (variables) are defined with a -- prefix and can store any CSS value. They cascade and inherit like regular properties. Defined in :root for global scope or on any element for local scope.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Custom Properties — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>Custom Properties</span></h1>
    <p class="page-desc">Define reusable values with -- prefix and use them anywhere with var().</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">:root — global scope</p>
        <div class="box global-demo">Uses :root variables</div>
      </div>
      <div class="demo-card">
        <p class="label">Local scope on element</p>
        <div class="box local-demo">Local --color: green</div>
      </div>
      <div class="demo-card">
        <p class="label">Inheritance — child inherits parent var</p>
        <div class="parent-scope">
          <div class="child-scope">Child inherits --accent</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">Design token system</p>
        <div class="token-demo">
          <div class="token-btn primary-btn">Primary</div>
          <div class="token-btn secondary-btn">Secondary</div>
          <div class="token-btn danger-btn">Danger</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">Responsive with custom props</p>
        <div class="responsive-demo">Resize to see change</div>
      </div>
      <div class="demo-card">
        <p class="label">Overriding in media query</p>
        <div class="box media-demo">Adapts at breakpoint</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ── Global design tokens ── */
:root {
    --color-primary:   #a78bfa;
  --color-secondary: #f472b6;
  --color-success:   #34d399;
  --color-danger:    #ef4444;
  --color-bg:        #2a2a3e;
  --color-text:      #e2e8f0;
  --radius-sm:       6px;
  --radius-md:       10px;
  --spacing-sm:      8px;
  --spacing-md:      14px;
  --font-size-base:  1rem;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: var(--color-primary);
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: var(--color-bg);
  padding: var(--spacing-md) 18px;
  border-radius: var(--radius-md);
  color: var(--color-text);
  font-family: Arial, sans-serif;
  font-size: var(--font-size-base);
  font-weight: bold;
}

/* Global scope demo */
.global-demo {
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

/* Local scope demo */
.local-demo {
  --color: var(--color-success);
  color: var(--color);
  border: 2px solid var(--color);
}

/* Inheritance demo */
.parent-scope {
  --accent: var(--color-secondary);
  background: var(--color-bg);
  padding: 12px;
  border-radius: var(--radius-md);
  border: 1px solid var(--accent);
}

.child-scope {
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  background: #1e1e2e;
  color: var(--accent);
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
}

/* Design token buttons */
.token-demo {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.token-btn {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  font-family: Arial, sans-serif;
  font-size: 0.88rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
}

.primary-btn   { background: var(--color-primary);   color: #fff; }
.secondary-btn { background: var(--color-secondary); color: #fff; }
.danger-btn    { background: var(--color-danger);    color: #fff; }

/* Responsive custom props */
.responsive-demo {
  background: var(--color-bg);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  color: var(--color-primary);
  font-family: Arial, sans-serif;
  font-size: var(--font-size-base);
  font-weight: bold;
  text-align: center;
  border: 2px solid var(--color-primary);
}

/* Media query override */
.media-demo {
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

@media (max-width: 600px) {
  :root {
    --color-primary: #34d399;
    --font-size-base: 0.85rem;
  }
}`,
  },

    // ─── calc() ─────────────────────────────────────────────────────
  {
    property: "calc()",
    description: "Performs a mathematical calculation to determine a CSS property value. Supports +, -, *, / operators and can mix units (e.g., calc(100% - 40px)). Extremely useful for responsive layouts.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>calc() — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>calc()</span> Function</h1>
    <p class="page-desc">Perform math directly in CSS — mix units and create dynamic values.</p>

    <div class="demo-grid">
      <div class="demo-card full">
        <p class="label">width: calc(100% - 80px)</p>
        <div class="outer">
          <div class="bar calc-width">calc(100% - 80px)</div>
        </div>
      </div>
      <div class="demo-card full">
        <p class="label">width: calc(50% - 10px) — two equal columns with gap</p>
        <div class="two-col">
          <div class="col-item">calc(50% - 10px)</div>
          <div class="col-item">calc(50% - 10px)</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">font-size: calc(1rem + 1vw)</p>
        <p class="box fluid-text">Fluid Text Size</p>
      </div>
      <div class="demo-card">
        <p class="label">padding: calc(var(--base) * 2)</p>
        <div class="box calc-padding">Dynamic Padding</div>
      </div>
      <div class="demo-card">
        <p class="label">height: calc(100vh - 120px)</p>
        <div class="box calc-height">Viewport minus header</div>
      </div>
      <div class="demo-card">
        <p class="label">margin: calc(50% - 60px) auto</p>
        <div class="outer"><div class="centered-box">Centered</div></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --base: 8px;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.full {
  grid-column: 1 / -1;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.outer {
  background: #12121f;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #3e3e5e;
}

.bar {
  background: linear-gradient(135deg, #a78bfa, #f472b6);
  border-radius: 6px;
  padding: 12px 16px;
  color: #fff;
  font-family: Arial, sans-serif;
  font-size: 0.88rem;
  font-weight: bold;
  width: calc(100% - 80px);
}

.two-col {
  display: flex;
  gap: 20px;
  background: #12121f;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #3e3e5e;
}

.col-item {
  width: calc(50% - 10px);
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border: 1px solid #a78bfa;
  border-radius: 6px;
  padding: 12px;
  color: #a78bfa;
  font-family: Arial, sans-serif;
  font-size: 0.82rem;
  font-weight: bold;
  text-align: center;
}

.box {
  background: #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-family: Arial, sans-serif;
  font-weight: bold;
  border: 1px solid #3e3e5e;
  text-align: center;
}

.fluid-text {
  font-size: calc(0.8rem + 1vw);
  padding: 14px 18px;
}

.calc-padding {
  padding: calc(var(--base) * 2) calc(var(--base) * 3);
  font-size: 0.95rem;
}

.calc-height {
  height: calc(20vh);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
}

.centered-box {
  width: 120px;
  margin: 0 auto;
  background: linear-gradient(135deg, #a78bfa, #f472b6);
  border-radius: 6px;
  padding: 12px;
  color: #fff;
  font-family: Arial, sans-serif;
  font-size: 0.88rem;
  font-weight: bold;
  text-align: center;
}`,
  },

    // ─── min() ──────────────────────────────────────────────────────
  {
    property: "min()",
    description: "Returns the smallest value from a comma-separated list of values. Useful for responsive sizing — e.g., min(500px, 100%) ensures an element never exceeds 500px but shrinks on small screens.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>min() — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>min()</span> Function</h1>
    <p class="page-desc">Pick the smallest value — great for responsive max-width constraints.</p>

    <div class="demo-grid">
      <div class="demo-card full">
        <p class="label">width: min(500px, 100%) — never wider than 500px</p>
        <div class="outer"><div class="box b1">min(500px, 100%)</div></div>
      </div>
      <div class="demo-card full">
        <p class="label">width: min(80%, 400px) — responsive cap</p>
        <div class="outer"><div class="box b2">min(80%, 400px)</div></div>
      </div>
      <div class="demo-card">
        <p class="label">font-size: min(5vw, 2rem)</p>
        <p class="box b3">Fluid Capped Text</p>
      </div>
      <div class="demo-card">
        <p class="label">padding: min(4vw, 32px)</p>
        <div class="box b4">Responsive Padding</div>
      </div>
      <div class="demo-card">
        <p class="label">min(100px, 50%) — picks 50% when small</p>
        <div class="outer"><div class="box b5">min(100px, 50%)</div></div>
      </div>
      <div class="demo-card">
        <p class="label">min(200px, 30vw, 100%)</p>
        <div class="outer"><div class="box b6">3 values</div></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.full {
  grid-column: 1 / -1;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.outer {
  background: #12121f;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #3e3e5e;
}

.box {
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border: 1px solid #a78bfa;
  border-radius: 8px;
  padding: 14px 18px;
  color: #a78bfa;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
}

.b1 { width: min(500px, 100%); }
.b2 { width: min(80%, 400px); }
.b3 { font-size: min(5vw, 2rem); padding: 14px 18px; }
.b4 { padding: min(4vw, 32px); font-size: 0.9rem; }
.b5 { width: min(100px, 50%); }
.b6 { width: min(200px, 30vw, 100%); }`,
  },

    // ─── max() ──────────────────────────────────────────────────────
  {
    property: "max()",
    description: "Returns the largest value from a comma-separated list. Useful for ensuring a minimum size — e.g., max(200px, 50%) ensures an element is at least 200px wide.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>max() — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>max()</span> Function</h1>
    <p class="page-desc">Pick the largest value — great for enforcing minimum sizes.</p>

    <div class="demo-grid">
      <div class="demo-card full">
        <p class="label">width: max(200px, 50%) — at least 200px</p>
        <div class="outer"><div class="box b1">max(200px, 50%)</div></div>
      </div>
      <div class="demo-card full">
        <p class="label">width: max(300px, 40%) — minimum 300px</p>
        <div class="outer"><div class="box b2">max(300px, 40%)</div></div>
      </div>
      <div class="demo-card">
        <p class="label">font-size: max(1rem, 2vw)</p>
        <p class="box b3">Never smaller than 1rem</p>
      </div>
      <div class="demo-card">
        <p class="label">padding: max(12px, 2vw)</p>
        <div class="box b4">Min padding guaranteed</div>
      </div>
      <div class="demo-card">
        <p class="label">max(100px, 20%) — picks 20% when large</p>
        <div class="outer"><div class="box b5">max(100px, 20%)</div></div>
      </div>
      <div class="demo-card">
        <p class="label">max(50px, 5vw, 1rem)</p>
        <div class="outer"><div class="box b6">3 values</div></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.full {
  grid-column: 1 / -1;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.outer {
  background: #12121f;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #3e3e5e;
}

.box {
  background: linear-gradient(135deg, #1a3a2e, #2a3b2e);
  border: 1px solid #34d399;
  border-radius: 8px;
  padding: 14px 18px;
  color: #34d399;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
}

.b1 { width: max(200px, 50%); }
.b2 { width: max(300px, 40%); }
.b3 { font-size: max(1rem, 2vw); padding: 14px 18px; }
.b4 { padding: max(12px, 2vw); font-size: 0.9rem; }
.b5 { width: max(100px, 20%); }
.b6 { width: max(50px, 5vw, 1rem); }`,
  },

    // ─── clamp() ────────────────────────────────────────────────────
  {
    property: "clamp()",
    description: "Clamps a value between a minimum and maximum. Syntax: clamp(min, preferred, max). The preferred value is used when it falls between min and max. Perfect for fluid typography and responsive sizing.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>clamp() — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>clamp()</span> Function</h1>
    <p class="page-desc">Set a value that scales fluidly between a minimum and maximum.</p>

    <div class="demo-grid">
      <div class="demo-card full">
        <p class="label">font-size: clamp(1rem, 4vw, 3rem) — fluid typography</p>
        <p class="fluid-heading">Resize the browser to see this text scale!</p>
      </div>
      <div class="demo-card full">
        <p class="label">width: clamp(200px, 50%, 600px)</p>
        <div class="outer"><div class="box b1">clamp(200px, 50%, 600px)</div></div>
      </div>
      <div class="demo-card">
        <p class="label">padding: clamp(8px, 2vw, 24px)</p>
        <div class="box b2">Fluid Padding</div>
      </div>
      <div class="demo-card">
        <p class="label">gap: clamp(8px, 2vw, 32px)</p>
        <div class="clamp-grid">
          <div class="grid-item">A</div>
          <div class="grid-item">B</div>
          <div class="grid-item">C</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">clamp(1rem, 2.5vw, 1.5rem) — body text</p>
        <p class="box b4">Body text that scales smoothly between 1rem and 1.5rem.</p>
      </div>
      <div class="demo-card">
        <p class="label">border-radius: clamp(4px, 2vw, 20px)</p>
        <div class="box b5">Fluid Radius</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.full {
  grid-column: 1 / -1;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.fluid-heading {
  font-size: clamp(1rem, 4vw, 3rem);
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: #a78bfa;
  line-height: 1.3;
}

.outer {
  background: #12121f;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #3e3e5e;
}

.box {
  background: linear-gradient(135deg, #3b1a2e, #2a1a3e);
  border: 1px solid #f472b6;
  border-radius: 8px;
  padding: 14px 18px;
  color: #f472b6;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
}

.b1 { width: clamp(200px, 50%, 600px); }
.b2 { padding: clamp(8px, 2vw, 24px); }
.b4 { font-size: clamp(1rem, 2.5vw, 1.5rem); text-align: left; line-height: 1.6; }
.b5 { border-radius: clamp(4px, 2vw, 20px); }

.clamp-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(8px, 2vw, 32px);
}

.grid-item {
  background: linear-gradient(135deg, #3b1a2e, #2a1a3e);
  border: 1px solid #f472b6;
  border-radius: 6px;
  padding: 14px;
  color: #f472b6;
  font-family: Arial, sans-serif;
  font-weight: bold;
  text-align: center;
}`,
  },

    // ─── env() ──────────────────────────────────────────────────────
  {
    property: "env()",
    description: "Inserts the value of a user-agent defined environment variable. Most commonly used for safe-area-inset-* on notched mobile devices (iPhone X and later) to avoid content being hidden behind the notch or home indicator.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>env() — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>env()</span> Function</h1>
    <p class="page-desc">Access device environment variables — essential for notched mobile devices.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">env(safe-area-inset-top)</p>
        <div class="safe-demo top-demo">
          <div class="safe-indicator">Safe Area Top</div>
          <div class="content-area">Content below notch</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">env(safe-area-inset-bottom)</p>
        <div class="safe-demo bottom-demo">
          <div class="content-area">Content above home bar</div>
          <div class="safe-indicator">Safe Area Bottom</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">padding with env() fallback</p>
        <div class="box env-padding">
          padding-top: env(safe-area-inset-top, 20px)
        </div>
      </div>
      <div class="demo-card">
        <p class="label">Fixed bottom nav — safe area</p>
        <div class="phone-mock">
          <div class="mock-content">App Content</div>
          <div class="mock-nav">
            <span>🏠</span>
            <span>🔍</span>
            <span>👤</span>
          </div>
        </div>
      </div>
    </div>

    <div class="info-box">
      <p>💡 <strong>Usage:</strong> Add <code>viewport-fit=cover</code> to your viewport meta tag, then use <code>env(safe-area-inset-*)</code> with a fallback value for non-notched devices.</p>
      <pre class="code-block">/* With fallback */
padding-top: env(safe-area-inset-top, 0px);
padding-bottom: env(safe-area-inset-bottom, 0px);
padding-left: env(safe-area-inset-left, 0px);
padding-right: env(safe-area-inset-right, 0px);</pre>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
    padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.safe-demo {
  background: #12121f;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100px;
}

.safe-indicator {
  background: rgba(167, 139, 250, 0.2);
  border-bottom: 1px dashed #a78bfa;
  padding: 6px 12px;
  font-family: monospace;
  font-size: 0.75rem;
  color: #a78bfa;
  text-align: center;
}

.bottom-demo .safe-indicator {
  border-bottom: none;
  border-top: 1px dashed #a78bfa;
  margin-top: auto;
}

.content-area {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #e2e8f0;
}

.box {
  background: #2a2a3e;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  color: #e2e8f0;
  font-family: monospace;
  font-size: 0.82rem;
  text-align: center;
}

.env-padding {
  padding-top: env(safe-area-inset-top, 20px);
  padding-bottom: env(safe-area-inset-bottom, 20px);
  padding-left: env(safe-area-inset-left, 16px);
  padding-right: env(safe-area-inset-right, 16px);
}

.phone-mock {
  background: #12121f;
  border-radius: 8px;
  border: 1px solid #3e3e5e;
  height: 110px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.mock-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #64748b;
}

.mock-nav {
  background: #1e1e2e;
  border-top: 1px solid #3e3e5e;
  padding: 8px env(safe-area-inset-bottom, 8px);
  display: flex;
  justify-content: space-around;
  font-size: 1.2rem;
}

.info-box {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-left: 3px solid #a78bfa;
  border-radius: 12px;
  padding: 20px;
}

.info-box p {
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #94a3b8;
  margin-bottom: 12px;
  line-height: 1.6;
}

.info-box code {
  background: #2a2a3e;
  padding: 2px 6px;
  border-radius: 4px;
  color: #a78bfa;
  font-family: monospace;
}

.code-block {
  background: #12121f;
  padding: 12px 16px;
  border-radius: 8px;
  color: #a78bfa;
  font-family: monospace;
  font-size: 0.85rem;
  line-height: 1.7;
  border: 1px solid #2e2e3e;
}`,
  },

    // ─── media-queries ──────────────────────────────────────────────
  {
    property: "media-queries",
    description: "CSS @media rules apply styles conditionally based on device characteristics like screen width, height, orientation, resolution, and color scheme. The foundation of responsive web design.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Media Queries — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>@media</span> Queries</h1>
    <p class="page-desc">Apply styles conditionally based on screen size, orientation, and more.</p>

    <div class="responsive-card">
      <div class="device-indicator">
        <span class="mobile-label">📱 Mobile (&lt; 600px)</span>
        <span class="tablet-label">📟 Tablet (600–1024px)</span>
        <span class="desktop-label">🖥️ Desktop (> 1024px)</span>
      </div>
      <p class="responsive-text">Resize the browser to see this layout change!</p>
    </div>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">min-width breakpoint</p>
        <div class="box mq1">Grows at 600px+</div>
      </div>
      <div class="demo-card">
        <p class="label">max-width breakpoint</p>
        <div class="box mq2">Shrinks below 600px</div>
      </div>
      <div class="demo-card">
        <p class="label">prefers-color-scheme</p>
        <div class="box mq3">Adapts to OS theme</div>
      </div>
      <div class="demo-card">
        <p class="label">orientation: landscape</p>
        <div class="box mq4">Changes in landscape</div>
      </div>
    </div>

    <div class="code-card">
      <p class="label">Common breakpoint patterns:</p>
      <pre class="code-block">/* Mobile first */
.container { padding: 16px; }

@media (min-width: 600px) {
  .container { padding: 24px; }
}

@media (min-width: 1024px) {
  .container { padding: 40px; }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  body { background: #0f0f1a; color: #e0e0e0; }
}

/* Orientation */
@media (orientation: landscape) {
  .hero { height: 50vh; }
}</pre>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 24px;
  font-size: 1rem;
}

/* Responsive indicator card */
.responsive-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  text-align: center;
}

.device-indicator {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.device-indicator span {
  padding: 6px 14px;
  border-radius: 20px;
  font-family: Arial, sans-serif;
  font-size: 0.82rem;
  font-weight: bold;
  opacity: 0.3;
  transition: opacity 0.3s, background 0.3s;
}

.mobile-label  { background: #3b1a2e; color: #f472b6; border: 1px solid #f472b6; }
.tablet-label  { background: #1a2a3b; color: #60a5fa; border: 1px solid #60a5fa; }
.desktop-label { background: #1a3a2e; color: #34d399; border: 1px solid #34d399; }

/* Show active breakpoint */
.mobile-label  { opacity: 1; }
.tablet-label  { opacity: 0.3; }
.desktop-label { opacity: 0.3; }

@media (min-width: 600px) {
  .mobile-label  { opacity: 0.3; }
  .tablet-label  { opacity: 1; }
  .desktop-label { opacity: 0.3; }
}

@media (min-width: 1024px) {
  .mobile-label  { opacity: 0.3; }
  .tablet-label  { opacity: 0.3; }
  .desktop-label { opacity: 1; }
}

.responsive-text {
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #94a3b8;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 14px 18px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  border: 1px solid #3e3e5e;
  color: #e2e8f0;
  transition: all 0.3s;
}

.mq1 { color: #a78bfa; border-color: #a78bfa; }
@media (min-width: 600px) {
  .mq1 { background: #3b2a5e; font-size: 1.1rem; }
}

.mq2 { color: #f472b6; border-color: #f472b6; }
@media (max-width: 600px) {
  .mq2 { font-size: 0.75rem; opacity: 0.6; }
}

.mq3 { color: #34d399; border-color: #34d399; }
@media (prefers-color-scheme: light) {
  .mq3 { background: #e0fdf4; color: #065f46; }
}

.mq4 { color: #fbbf24; border-color: #fbbf24; }
@media (orientation: landscape) {
  .mq4 { background: #3b2a1e; }
}

.code-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.code-block {
  background: #12121f;
  padding: 14px 16px;
  border-radius: 8px;
  color: #a78bfa;
  font-family: monospace;
  font-size: 0.82rem;
  line-height: 1.7;
  border: 1px solid #2e2e3e;
  overflow-x: auto;
  margin-top: 8px;
}`,
  },

    // ─── container-queries ──────────────────────────────────────────
  {
    property: "container-queries",
    description: "CSS @container rules apply styles to elements based on the size of their containing element rather than the viewport. Enables truly component-based responsive design.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Container Queries — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>@container</span> Queries</h1>
    <p class="page-desc">Style components based on their container size — not the viewport.</p>

    <div class="demo-section">
      <p class="section-label">Same component — different container widths:</p>
      <div class="containers-row">
        <div class="card-container narrow-container">
          <div class="product-card">
            <div class="card-img"></div>
            <div class="card-body">
              <h3>CSS Course</h3>
              <p>Learn modern CSS</p>
              <button class="card-btn">Buy</button>
            </div>
          </div>
        </div>
        <div class="card-container medium-container">
          <div class="product-card">
            <div class="card-img"></div>
            <div class="card-body">
              <h3>CSS Course</h3>
              <p>Learn modern CSS</p>
              <button class="card-btn">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card-container wide-container">
          <div class="product-card">
            <div class="card-img"></div>
            <div class="card-body">
              <h3>CSS Course</h3>
              <p>Learn modern CSS in depth</p>
              <button class="card-btn">Buy Now — $29</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="code-card">
      <p class="label">Container query syntax:</p>
      <pre class="code-block">/* 1. Define the container */
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

/* 2. Query the container */
@container card (min-width: 400px) {
  .product-card {
    flex-direction: row;
  }
}

@container card (min-width: 600px) {
  .product-card {
    gap: 24px;
    padding: 24px;
  }
}</pre>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-section {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}

.section-label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 16px;
  font-family: monospace;
}

.containers-row {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* ── Container definitions ── */
.card-container {
  container-type: inline-size;
  container-name: card;
}

.narrow-container  { width: 180px; }
.medium-container  { width: 320px; }
.wide-container    { width: 100%; }

/* ── Base card styles ── */
.product-card {
  background: #2a2a3e;
  border: 1px solid #3e3e5e;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-img {
  background: linear-gradient(135deg, #a78bfa, #f472b6);
  height: 80px;
  flex-shrink: 0;
}

.card-body {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card-body h3 {
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #a78bfa;
}

.card-body p {
  font-family: Arial, sans-serif;
  font-size: 0.78rem;
  color: #94a3b8;
  display: none;
}

.card-btn {
  background: #a78bfa;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-family: Arial, sans-serif;
  font-size: 0.78rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 4px;
}

/* ── Container queries ── */
@container card (min-width: 280px) {
  .product-card {
    flex-direction: row;
  }

  .card-img {
    width: 100px;
    height: auto;
  }

  .card-body p {
    display: block;
  }
}

@container card (min-width: 400px) {
  .card-body {
    padding: 16px;
    gap: 8px;
  }

  .card-body h3 {
    font-size: 1.1rem;
  }

  .card-btn {
    padding: 8px 16px;
    font-size: 0.88rem;
  }
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.code-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.code-block {
  background: #12121f;
  padding: 14px 16px;
  border-radius: 8px;
  color: #a78bfa;
  font-family: monospace;
  font-size: 0.82rem;
  line-height: 1.7;
  border: 1px solid #2e2e3e;
  overflow-x: auto;
  margin-top: 8px;
}`,
  },

    // ─── pseudo-classes ─────────────────────────────────────────────
  {
    property: "pseudo-classes",
    description: "Pseudo-classes select elements based on their state or position. Common ones: :hover, :focus, :active, :visited, :nth-child(), :first-child, :last-child, :not(), :checked, :disabled, :empty.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pseudo-classes — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>Pseudo-classes</span></h1>
    <p class="page-desc">Select elements based on state, position, or relationship.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">:hover — mouse over</p>
        <button class="btn hover-demo">Hover Me</button>
      </div>
      <div class="demo-card">
        <p class="label">:focus — keyboard / click focus</p>
        <input class="input focus-demo" type="text" placeholder="Click or tab here" />
      </div>
      <div class="demo-card">
        <p class="label">:nth-child(odd) / :nth-child(even)</p>
        <ul class="nth-list">
          <li>Item 1 (odd)</li>
          <li>Item 2 (even)</li>
          <li>Item 3 (odd)</li>
          <li>Item 4 (even)</li>
          <li>Item 5 (odd)</li>
        </ul>
      </div>
      <div class="demo-card">
        <p class="label">:first-child / :last-child</p>
        <ul class="fl-list">
          <li>First Child</li>
          <li>Middle Item</li>
          <li>Middle Item</li>
          <li>Last Child</li>
        </ul>
      </div>
      <div class="demo-card">
        <p class="label">:not() — exclude selector</p>
        <ul class="not-list">
          <li>Normal</li>
          <li class="skip">Skipped (.skip)</li>
          <li>Normal</li>
          <li class="skip">Skipped (.skip)</li>
          <li>Normal</li>
        </ul>
      </div>
      <div class="demo-card">
        <p class="label">:checked — checkbox state</p>
        <div class="check-group">
          <label class="check-label"><input type="checkbox" checked /> Checked</label>
          <label class="check-label"><input type="checkbox" /> Unchecked</label>
          <label class="check-label"><input type="checkbox" checked /> Checked</label>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

/* :hover */
.btn {
  background: #2a2a3e;
  border: 1px solid #a78bfa;
  border-radius: 8px;
  padding: 12px 24px;
  color: #a78bfa;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
}

.hover-demo:hover {
  background: #a78bfa;
  color: #fff;
}

/* :focus */
.input {
  width: 100%;
  background: #2a2a3e;
  border: 1px solid #3e3e5e;
  border-radius: 8px;
  padding: 12px 14px;
  color: #e2e8f0;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.focus-demo:focus {
  border-color: #a78bfa;
  box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.2);
}

/* :nth-child */
.nth-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nth-list li {
  padding: 8px 12px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #e2e8f0;
  background: #2a2a3e;
}

.nth-list li:nth-child(odd)  { background: #3b2a5e; color: #a78bfa; }
.nth-list li:nth-child(even) { background: #2a2a3e; color: #94a3b8; }

/* :first-child / :last-child */
.fl-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.fl-list li {
  padding: 8px 12px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #94a3b8;
  background: #2a2a3e;
}

.fl-list li:first-child { background: #1a3a2e; color: #34d399; font-weight: bold; }
.fl-list li:last-child  { background: #3b1a2e; color: #f472b6; font-weight: bold; }

/* :not() */
.not-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.not-list li {
  padding: 8px 12px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
}

.not-list li:not(.skip) { background: #3b2a5e; color: #a78bfa; }
.not-list li.skip       { background: #2a2a3e; color: #3e3e5e; text-decoration: line-through; }

/* :checked */
.check-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.check-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #94a3b8;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  background: #2a2a3e;
  transition: background 0.2s;
}

.check-label input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: #a78bfa;
}

.check-label:has(input:checked) {
  background: #3b2a5e;
  color: #a78bfa;
}`,
  },

    // ─── pseudo-elements ────────────────────────────────────────────
  {
    property: "pseudo-elements",
    description: "Pseudo-elements style specific parts of an element. Common ones: ::before, ::after (insert content), ::first-line, ::first-letter, ::selection, ::placeholder, ::marker, ::backdrop.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pseudo-elements — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>Pseudo-elements</span></h1>
    <p class="page-desc">Style specific parts of elements without adding extra HTML.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">::before — insert content before</p>
        <p class="before-demo">CSS Property</p>
      </div>
      <div class="demo-card">
        <p class="label">::after — insert content after</p>
        <p class="after-demo">CSS Property</p>
      </div>
      <div class="demo-card">
        <p class="label">::first-letter — style first letter</p>
        <p class="first-letter-demo">CSS is a stylesheet language used to describe the presentation of a document.</p>
      </div>
      <div class="demo-card">
        <p class="label">::first-line — style first line</p>
        <p class="first-line-demo">This is the first line of text. This is the second line of text that continues below.</p>
      </div>
      <div class="demo-card">
        <p class="label">::selection — selected text style</p>
        <p class="selection-demo">Try selecting this text with your mouse to see the custom selection color.</p>
      </div>
      <div class="demo-card">
        <p class="label">::placeholder — input placeholder</p>
        <input class="placeholder-demo" type="text" placeholder="Custom placeholder style..." />
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

/* ::before */
.before-demo {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  color: #e2e8f0;
  position: relative;
}

.before-demo::before {
  content: "→ ";
  color: #a78bfa;
  font-weight: bold;
}

/* ::after */
.after-demo {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  color: #e2e8f0;
}

.after-demo::after {
  content: " ✓";
  color: #34d399;
  font-weight: bold;
}

/* ::first-letter */
.first-letter-demo {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  font-family: Georgia, serif;
  font-size: 0.9rem;
  color: #e2e8f0;
  line-height: 1.6;
}

.first-letter-demo::first-letter {
  font-size: 2.5rem;
  font-weight: bold;
  color: #a78bfa;
  float: left;
  line-height: 1;
  margin-right: 6px;
}

/* ::first-line */
.first-line-demo {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #e2e8f0;
  line-height: 1.7;
}

.first-line-demo::first-line {
  color: #a78bfa;
  font-weight: bold;
  font-size: 1rem;
}

/* ::selection */
.selection-demo {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #e2e8f0;
  line-height: 1.6;
  cursor: text;
}

.selection-demo::selection {
  background: #a78bfa;
  color: #fff;
}

/* ::placeholder */
.placeholder-demo {
  width: 100%;
  background: #2a2a3e;
  border: 1px solid #3e3e5e;
  border-radius: 8px;
  padding: 12px 14px;
  color: #e2e8f0;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  outline: none;
}

.placeholder-demo::placeholder {
  color: #a78bfa;
  font-style: italic;
  opacity: 0.8;
}

.placeholder-demo:focus {
  border-color: #a78bfa;
}`,
  },

    // ─── attribute-selectors ────────────────────────────────────────
  {
    property: "attribute-selectors",
    description: "Select elements based on the presence or value of their HTML attributes. Patterns: [attr], [attr=val], [attr^=val] (starts with), [attr$=val] (ends with), [attr*=val] (contains), [attr~=val] (word), [attr|=val] (lang).",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Attribute Selectors — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>Attribute Selectors</span></h1>
    <p class="page-desc">Target elements based on their HTML attributes and values.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">[href] — has href attribute</p>
        <div class="link-group">
          <a href="https://example.com">Has href</a>
          <a>No href</a>
          <a href="/page">Has href</a>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">[type="text"] — exact match</p>
        <div class="input-group">
          <input type="text" placeholder="type=text" />
          <input type="email" placeholder="type=email" />
          <input type="password" placeholder="type=password" />
        </div>
      </div>
      <div class="demo-card">
        <p class="label">[href^="https"] — starts with</p>
        <div class="link-group">
          <a href="https://secure.com">https://secure.com</a>
          <a href="http://old.com">http://old.com</a>
          <a href="https://safe.com">https://safe.com</a>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">[href$=".pdf"] — ends with</p>
        <div class="link-group">
          <a href="doc.pdf">doc.pdf</a>
          <a href="page.html">page.html</a>
          <a href="guide.pdf">guide.pdf</a>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">[class*="btn"] — contains</p>
        <div class="btn-group">
          <button class="btn-primary">Primary</button>
          <button class="btn-secondary">Secondary</button>
          <button class="action">Action (no btn)</button>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">[data-status] — custom data attr</p>
        <div class="status-group">
          <div data-status="active">Active</div>
          <div data-status="pending">Pending</div>
          <div data-status="error">Error</div>
          <div>No status</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

/* [href] */
.link-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.link-group a {
  padding: 8px 12px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  background: #2a2a3e;
  color: #64748b;
  text-decoration: none;
}

.link-group a[href] {
  color: #a78bfa;
  border: 1px solid #a78bfa;
}

/* [href^="https"] */
.link-group a[href^="https"] {
  color: #34d399;
  border-color: #34d399;
}

/* [href$=".pdf"] */
.link-group a[href$=".pdf"] {
  color: #f472b6;
  border-color: #f472b6;
}

.link-group a[href$=".pdf"]::after {
  content: " 📄";
}

/* [type="text"] */
.input-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.input-group input {
  padding: 8px 12px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  background: #2a2a3e;
  border: 1px solid #3e3e5e;
  color: #94a3b8;
  outline: none;
}

.input-group input[type="text"] {
  border-color: #a78bfa;
  color: #a78bfa;
}

/* [class*="btn"] */
.btn-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.btn-group button {
  padding: 8px 14px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  border: 1px solid #3e3e5e;
  background: #2a2a3e;
  color: #64748b;
  cursor: pointer;
}

.btn-group button[class*="btn"] {
  background: #3b2a5e;
  border-color: #a78bfa;
  color: #a78bfa;
}

/* [data-status] */
.status-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.status-group div {
  padding: 8px 12px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  background: #2a2a3e;
  color: #64748b;
}

[data-status="active"]  { background: #1a3a2e; color: #34d399; border: 1px solid #34d399; }
[data-status="pending"] { background: #3b2a1e; color: #fbbf24; border: 1px solid #fbbf24; }
[data-status="error"]   { background: #3b1a1a; color: #ef4444; border: 1px solid #ef4444; }`,
  },

    // ─── combinators ────────────────────────────────────────────────
  {
    property: "combinators",
    description: "Combinators define the relationship between selectors. Types: descendant (space), child (>), adjacent sibling (+), general sibling (~), and column combinator (||).",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Combinators — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>Combinators</span></h1>
    <p class="page-desc">Select elements based on their relationship to other elements.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">Descendant (space) — div p</p>
        <div class="desc-parent">
          <p>Direct child p</p>
          <div>
            <p>Nested p (also selected)</p>
          </div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">Child (&gt;) — div &gt; p</p>
        <div class="child-parent">
          <p>Direct child p (selected)</p>
          <div>
            <p>Nested p (NOT selected)</p>
          </div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">Adjacent sibling (+) — h3 + p</p>
        <div class="adj-parent">
          <h3>Heading</h3>
          <p>First p after h3 (selected)</p>
          <p>Second p (NOT selected)</p>
          <p>Third p (NOT selected)</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">General sibling (~) — h3 ~ p</p>
        <div class="gen-parent">
          <h3>Heading</h3>
          <p>All p siblings (selected)</p>
          <p>Also selected</p>
          <p>Also selected</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

/* Base styles for all demo elements */
.desc-parent, .child-parent, .adj-parent, .gen-parent {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.desc-parent p,
.child-parent p,
.adj-parent p,
.gen-parent p,
.adj-parent h3,
.gen-parent h3 {
  padding: 8px 12px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  background: #1e1e2e;
  color: #64748b;
  border: 1px solid #3e3e5e;
}

.adj-parent h3,
.gen-parent h3 {
  color: #fbbf24;
  border-color: #fbbf24;
  background: #3b2a1e;
}

.desc-parent div {
  background: #1a1a2e;
  border-radius: 6px;
  padding: 6px;
  border: 1px dashed #3e3e5e;
}

.child-parent div {
  background: #1a1a2e;
  border-radius: 6px;
  padding: 6px;
  border: 1px dashed #3e3e5e;
}

/* Descendant combinator */
.desc-parent p {
  color: #a78bfa;
  border-color: #a78bfa;
  background: #3b2a5e;
}

/* Child combinator */
.child-parent > p {
  color: #a78bfa;
  border-color: #a78bfa;
  background: #3b2a5e;
}

/* Adjacent sibling */
.adj-parent h3 + p {
  color: #34d399;
  border-color: #34d399;
  background: #1a3a2e;
}

/* General sibling */
.gen-parent h3 ~ p {
  color: #f472b6;
  border-color: #f472b6;
  background: #3b1a2e;
}`,
  },

    // ─── @keyframes ─────────────────────────────────────────────────
  {
    property: "@keyframes",
    description: "Defines the animation sequence by specifying CSS styles at various points during the animation. Use percentage values (0%, 50%, 100%) or from/to keywords. Referenced by the animation-name property.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>@keyframes — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>@keyframes</span></h1>
    <p class="page-desc">Define animation sequences with keyframe percentages.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">from / to (0% → 100%)</p>
        <div class="wrap"><div class="box anim-fade">Fade In</div></div>
      </div>
      <div class="demo-card">
        <p class="label">0% → 50% → 100% (bounce)</p>
        <div class="wrap"><div class="box anim-bounce">Bounce</div></div>
      </div>
      <div class="demo-card">
        <p class="label">Color cycle keyframes</p>
        <div class="wrap"><div class="box anim-color">Color Shift</div></div>
      </div>
      <div class="demo-card">
        <p class="label">Slide in from left</p>
        <div class="wrap overflow-h"><div class="box anim-slide">Slide In</div></div>
      </div>
      <div class="demo-card">
        <p class="label">Pulse / scale keyframes</p>
        <div class="wrap"><div class="box anim-pulse">Pulse</div></div>
      </div>
      <div class="demo-card">
        <p class="label">Spin rotation</p>
        <div class="wrap"><div class="box anim-spin">⚙️</div></div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.wrap {
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overflow-h {
  overflow: hidden;
}

.box {
  background: linear-gradient(135deg, #3b2a5e, #2a3b5e);
  border: 1px solid #a78bfa;
  border-radius: 8px;
  padding: 14px 20px;
  color: #a78bfa;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
}

/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.anim-fade {
  animation: fadeIn 1.5s ease infinite alternate;
}

/* Bounce */
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}
.anim-bounce {
  animation: bounce 1s ease-in-out infinite;
}

/* Color cycle */
@keyframes colorCycle {
  0%   { border-color: #a78bfa; color: #a78bfa; }
  33%  { border-color: #f472b6; color: #f472b6; }
  66%  { border-color: #34d399; color: #34d399; }
  100% { border-color: #a78bfa; color: #a78bfa; }
}
.anim-color {
  animation: colorCycle 3s linear infinite;
}

/* Slide in */
@keyframes slideIn {
  from { transform: translateX(-100px); opacity: 0; }
  to   { transform: translateX(0);      opacity: 1; }
}
.anim-slide {
  animation: slideIn 1s ease infinite alternate;
}

/* Pulse */
@keyframes pulse {
  0%   { scale: 1; }
  50%  { scale: 1.15; }
  100% { scale: 1; }
}
.anim-pulse {
  animation: pulse 1.2s ease-in-out infinite;
}

/* Spin */
@keyframes spin {
  from { rotate: 0deg; }
  to   { rotate: 360deg; }
}
.anim-spin {
  font-size: 2rem;
  background: none;
  border: none;
  animation: spin 2s linear infinite;
}`,
  },

    // ─── @media ─────────────────────────────────────────────────────
  {
    property: "@media",
    description: "Applies CSS rules only when specific media conditions are met. Supports media types (screen, print) and features (width, height, orientation, prefers-color-scheme, prefers-reduced-motion, etc.).",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>@media — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>@media</span> Rule</h1>
    <p class="page-desc">Apply styles conditionally based on device and environment features.</p>

    <div class="breakpoint-bar">
      <div class="bp-item bp-mobile">Mobile</div>
      <div class="bp-item bp-tablet">Tablet</div>
      <div class="bp-item bp-desktop">Desktop</div>
    </div>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">@media (min-width: 600px)</p>
        <div class="box mq-min">Grows at 600px+</div>
      </div>
      <div class="demo-card">
        <p class="label">@media (max-width: 768px)</p>
        <div class="box mq-max">Shrinks below 768px</div>
      </div>
      <div class="demo-card">
        <p class="label">@media (prefers-color-scheme: dark)</p>
        <div class="box mq-dark">Adapts to dark mode</div>
      </div>
      <div class="demo-card">
        <p class="label">@media (prefers-reduced-motion)</p>
        <div class="box mq-motion">Respects motion prefs</div>
      </div>
      <div class="demo-card">
        <p class="label">@media print</p>
        <div class="box mq-print">Print-only styles</div>
      </div>
      <div class="demo-card">
        <p class="label">@media (orientation: landscape)</p>
        <div class="box mq-orient">Landscape layout</div>
      </div>
    </div>

    <div class="code-card">
      <p class="label">Syntax reference:</p>
      <pre class="code-block">/* Width ranges */
@media (min-width: 600px) { }
@media (max-width: 768px) { }
@media (600px <= width <= 1024px) { }

/* User preferences */
@media (prefers-color-scheme: dark) { }
@media (prefers-reduced-motion: reduce) { }

/* Device features */
@media (orientation: landscape) { }
@media print { }
@media screen and (min-width: 1024px) { }</pre>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}
.page-desc {
  color: #94a3b8;
  margin-bottom: 24px;
  font-size: 1rem;
}

/* Breakpoint indicator bar */
.breakpoint-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.bp-item {
  padding: 6px 16px;
  border-radius: 20px;
  font-family: Arial, sans-serif;
  font-size: 0.82rem;
  font-weight: bold;
  opacity: 0.3;
  transition: opacity 0.3s;
}

.bp-mobile  { background: #3b1a2e; color: #f472b6; border: 1px solid #f472b6; opacity: 1; }
.bp-tablet  { background: #1a2a3b; color: #60a5fa; border: 1px solid #60a5fa; }
.bp-desktop { background: #1a3a2e; color: #34d399; border: 1px solid #34d399; }

@media (min-width: 600px) {
  .bp-mobile  { opacity: 0.3; }
  .bp-tablet  { opacity: 1; }
  .bp-desktop { opacity: 0.3; }
}

@media (min-width: 1024px) {
  .bp-mobile  { opacity: 0.3; }
  .bp-tablet  { opacity: 0.3; }
  .bp-desktop { opacity: 1; }
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 14px 18px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  border: 1px solid #3e3e5e;
  color: #94a3b8;
  transition: all 0.3s;
}

.mq-min { color: #a78bfa; border-color: #a78bfa; }
@media (min-width: 600px) {
  .mq-min { background: #3b2a5e; font-size: 1.05rem; }
}

.mq-max { color: #f472b6; border-color: #f472b6; }
@media (max-width: 768px) {
  .mq-max { font-size: 0.78rem; opacity: 0.7; }
}

.mq-dark { color: #34d399; border-color: #34d399; }
@media (prefers-color-scheme: light) {
  .mq-dark { background: #e0fdf4; color: #065f46; border-color: #065f46; }
}

.mq-motion {
  color: #fbbf24;
  border-color: #fbbf24;
  animation: pulse 1s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { scale: 1; }
  50%       { scale: 1.05; }
}
@media (prefers-reduced-motion: reduce) {
  .mq-motion { animation: none; }
}

.mq-print { color: #60a5fa; border-color: #60a5fa; }
@media print {
  .mq-print { background: #fff; color: #000; border-color: #000; }
}

.mq-orient { color: #c084fc; border-color: #c084fc; }
@media (orientation: landscape) {
  .mq-orient { background: #2a1a4e; }
}

.code-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.code-block {
  background: #12121f;
  padding: 14px 16px;
  border-radius: 8px;
  color: #a78bfa;
  font-family: monospace;
  font-size: 0.82rem;
  line-height: 1.7;
  border: 1px solid #2e2e3e;
  overflow-x: auto;
  margin-top: 8px;
}`,
  },

    // ─── @import ────────────────────────────────────────────────────
  {
    property: "@import",
    description: "Imports an external CSS stylesheet into the current stylesheet. Must appear before all other rules (except @charset). Supports media queries and layer conditions. Note: @import blocks parallel loading — prefer <link> tags for performance.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>@import — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>@import</span> Rule</h1>
    <p class="page-desc">Import external stylesheets and Google Fonts into your CSS.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">@import url("other.css")</p>
        <div class="box b1">
          <p>Imports another stylesheet file</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">@import with media query</p>
        <div class="box b2">
          <p>Only loads on screen media</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">@import Google Fonts</p>
        <div class="box b3">
          <p class="google-font">Custom Font via @import</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">@import layer()</p>
        <div class="box b4">
          <p>Imports into a cascade layer</p>
        </div>
      </div>
    </div>

    <div class="code-card">
      <p class="label">Syntax examples:</p>
      <pre class="code-block">/* Basic import */
@import url("reset.css");
@import "variables.css";

/* With media query */
@import url("print.css") print;
@import url("mobile.css") screen and (max-width: 600px);

/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

/* Into a cascade layer */
@import url("base.css") layer(base);

/* ⚠️ Performance note:
   Prefer &lt;link> tags in HTML for better
   parallel loading performance */</pre>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Import Google Fonts for demo */
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 16px 18px;
  border: 1px solid #3e3e5e;
}

.box p {
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #e2e8f0;
  line-height: 1.5;
}

.b1 { border-color: #a78bfa; }
.b1 p { color: #a78bfa; }

.b2 { border-color: #34d399; }
.b2 p { color: #34d399; }

.b3 { border-color: #f472b6; }

.google-font {
  font-family: 'Pacifico', cursive;
  font-size: 1.2rem;
  color: #f472b6;
}

.b4 { border-color: #fbbf24; }
.b4 p { color: #fbbf24; }

.code-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.code-block {
  background: #12121f;
  padding: 14px 16px;
  border-radius: 8px;
  color: #a78bfa;
  font-family: monospace;
  font-size: 0.82rem;
  line-height: 1.7;
  border: 1px solid #2e2e3e;
  overflow-x: auto;
  margin-top: 8px;
  white-space: pre;
}`,
  },


    // ─── @font-face ─────────────────────────────────────────────────
  {
    property: "@font-face",
    description: "Defines a custom font by specifying a font name and the source file(s). Allows you to use any font on the web without relying on system fonts. Supports woff2, woff, ttf, otf, and svg formats.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>@font-face — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>@font-face</span> Rule</h1>
    <p class="page-desc">Load and use custom fonts directly in your CSS.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">System font (fallback)</p>
        <p class="box system-font">The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div class="demo-card">
        <p class="label">@font-face — loaded via Google Fonts CDN</p>
        <p class="box custom-font-1">The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div class="demo-card">
        <p class="label">font-weight variants</p>
        <div class="weight-demo">
          <p class="fw-300">Light 300</p>
          <p class="fw-400">Regular 400</p>
          <p class="fw-700">Bold 700</p>
          <p class="fw-900">Black 900</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">font-display: swap (performance)</p>
        <p class="box display-swap">Renders with fallback until font loads.</p>
      </div>
    </div>

    <div class="code-card">
      <p class="label">@font-face syntax:</p>
      <pre class="code-block">@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2') format('woff2'),
       url('myfont.woff')  format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Multiple weights */
@font-face {
  font-family: 'MyFont';
  src: url('myfont-bold.woff2') format('woff2');
  font-weight: 700;
}

/* Usage */
body {
  font-family: 'MyFont', sans-serif;
}</pre>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Load custom fonts via @font-face using Google Fonts CDN */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Playfair+Display:wght@400;700&display=swap');

/* Simulated @font-face declaration */
/* In a real project you would use:
@font-face {
  font-family: 'Inter';
  src: url('inter.woff2') format('woff2');
  font-weight: 100 900;
  font-display: swap;
}
*/

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  padding: 14px 18px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
  line-height: 1.6;
  border: 1px solid #3e3e5e;
}

.system-font {
  font-family: Arial, Helvetica, sans-serif;
}

.custom-font-1 {
  font-family: 'Playfair Display', Georgia, serif;
  color: #a78bfa;
  border-color: #a78bfa;
  font-size: 1.05rem;
}

.weight-demo {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 14px 18px;
  border: 1px solid #3e3e5e;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.weight-demo p {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #e2e8f0;
}

.fw-300 { font-weight: 300; color: #94a3b8; }
.fw-400 { font-weight: 400; }
.fw-700 { font-weight: 700; color: #a78bfa; }
.fw-900 { font-weight: 900; color: #f472b6; }

.display-swap {
  font-family: 'Inter', Arial, sans-serif;
  color: #34d399;
  border-color: #34d399;
}

.code-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.code-block {
  background: #12121f;
  padding: 14px 16px;
  border-radius: 8px;
  color: #a78bfa;
  font-family: monospace;
  font-size: 0.82rem;
  line-height: 1.7;
  border: 1px solid #2e2e3e;
  overflow-x: auto;
  margin-top: 8px;
  white-space: pre;
}`,
  },

    // ─── @supports ──────────────────────────────────────────────────
  {
    property: "@supports",
    description: "Applies CSS rules only if the browser supports a specific CSS feature. Supports and, or, not operators. Essential for progressive enhancement — provide fallbacks for unsupported features.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>@supports — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>@supports</span> Rule</h1>
    <p class="page-desc">Apply styles only when the browser supports a specific CSS feature.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">@supports (display: grid)</p>
        <div class="box supports-grid">Grid is supported ✓</div>
      </div>
      <div class="demo-card">
        <p class="label">@supports (display: flex)</p>
        <div class="box supports-flex">Flex is supported ✓</div>
      </div>
      <div class="demo-card">
        <p class="label">@supports (backdrop-filter: blur())</p>
        <div class="scene">
          <div class="glass-box">Backdrop filter supported</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">@supports not (display: grid)</p>
        <div class="box no-grid">Fallback for no grid</div>
      </div>
      <div class="demo-card">
        <p class="label">@supports selector(:has())</p>
        <div class="box supports-has">:has() selector supported</div>
      </div>
      <div class="demo-card">
        <p class="label">@supports (color: oklch(...))</p>
        <div class="box supports-oklch">oklch() color supported</div>
      </div>
    </div>

    <div class="code-card">
      <p class="label">Syntax reference:</p>
      <pre class="code-block">/* Basic feature check */
@supports (display: grid) {
  .container { display: grid; }
}

/* Negation */
@supports not (display: grid) {
  .container { display: flex; }
}

/* AND condition */
@supports (display: grid) and (gap: 1rem) {
  .grid { display: grid; gap: 1rem; }
}

/* OR condition */
@supports (transform: rotate(1deg)) or
          (-webkit-transform: rotate(1deg)) {
  .box { transform: rotate(45deg); }
}

/* Selector support */
@supports selector(:has(+ div)) {
  .parent:has(+ .sibling) { color: red; }
}</pre>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 14px 18px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  border: 1px solid #3e3e5e;
  color: #64748b;
}

/* @supports (display: grid) */
@supports (display: grid) {
  .supports-grid {
    display: grid;
    place-items: center;
    background: #1a3a2e;
    color: #34d399;
    border-color: #34d399;
  }
}

/* @supports (display: flex) */
@supports (display: flex) {
  .supports-flex {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1a2a3b;
    color: #60a5fa;
    border-color: #60a5fa;
  }
}

/* @supports (backdrop-filter) */
.scene {
  height: 90px;
  border-radius: 8px;
  background: linear-gradient(135deg, #a78bfa, #f472b6, #fbbf24);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.glass-box {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 10px 16px;
  font-family: Arial, sans-serif;
  font-size: 0.82rem;
  font-weight: bold;
  color: #fff;
}

@supports (backdrop-filter: blur(10px)) {
  .glass-box {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.15);
  }
}

/* @supports not */
.no-grid {
  color: #fbbf24;
  border-color: #fbbf24;
}

@supports not (display: grid) {
  .no-grid {
    background: #3b2a1e;
    color: #fbbf24;
  }
}

/* @supports selector(:has()) */
@supports selector(:has(+ div)) {
  .supports-has {
    background: #3b2a5e;
    color: #a78bfa;
    border-color: #a78bfa;
  }
}

/* @supports oklch */
@supports (color: oklch(70% 0.2 270)) {
  .supports-oklch {
    background: #2a1a3b;
    color: oklch(75% 0.2 300);
    border-color: oklch(75% 0.2 300);
  }
}

.code-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.code-block {
  background: #12121f;
  padding: 14px 16px;
  border-radius: 8px;
  color: #a78bfa;
  font-family: monospace;
  font-size: 0.82rem;
  line-height: 1.7;
  border: 1px solid #2e2e3e;
  overflow-x: auto;
  margin-top: 8px;
  white-space: pre;
}`,
  },

    // ─── @layer ─────────────────────────────────────────────────────
  {
    property: "@layer",
    description: "Defines a cascade layer to manage CSS specificity and ordering. Styles in later layers override earlier ones regardless of specificity. Unlayered styles always win over layered ones.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>@layer — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>@layer</span> Rule</h1>
    <p class="page-desc">Manage CSS cascade order with named layers — later layers win.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">Layer order: base → theme → utilities</p>
        <div class="layered-box">Layered Styles</div>
      </div>
      <div class="demo-card">
        <p class="label">@layer base — lowest priority</p>
        <div class="base-only">Base Layer Only</div>
      </div>
      <div class="demo-card">
        <p class="label">@layer theme — overrides base</p>
        <div class="theme-override">Theme Overrides Base</div>
      </div>
      <div class="demo-card">
        <p class="label">Unlayered — highest priority</p>
        <div class="unlayered">Unlayered Always Wins</div>
      </div>
    </div>

    <div class="code-card">
      <p class="label">@layer syntax:</p>
      <pre class="code-block">/* Declare layer order first */
@layer base, components, utilities;

/* Define each layer */
@layer base {
  .btn { background: gray; color: white; }
}

@layer components {
  .btn { background: blue; }
}

@layer utilities {
  .btn { background: green; }
}

/* Unlayered styles always win */
.btn { background: red; }

/* Import into a layer */
@import url("reset.css") layer(base);</pre>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Declare layer order */
@layer base, theme, utilities;

/* Base layer — lowest priority */
@layer base {
  .layered-box {
    background: #1a1a2e;
    color: #64748b;
    border: 1px solid #3e3e5e;
    padding: 14px 18px;
    border-radius: 8px;
    font-family: Arial, sans-serif;
    font-size: 0.9rem;
    font-weight: bold;
    text-align: center;
  }

  .base-only {
    background: #1a1a2e;
    color: #64748b;
    border: 1px solid #3e3e5e;
    padding: 14px 18px;
    border-radius: 8px;
    font-family: Arial, sans-serif;
    font-size: 0.9rem;
    font-weight: bold;
    text-align: center;
  }
}

/* Theme layer — overrides base */
@layer theme {
  .layered-box {
    background: #2a2a3e;
    color: #a78bfa;
    border-color: #a78bfa;
  }

  .theme-override {
    background: #3b2a5e;
    color: #a78bfa;
    border: 1px solid #a78bfa;
    padding: 14px 18px;
    border-radius: 8px;
    font-family: Arial, sans-serif;
    font-size: 0.9rem;
    font-weight: bold;
    text-align: center;
  }
}

/* Utilities layer — overrides theme */
@layer utilities {
  .layered-box {
    background: #1a3a2e;
    color: #34d399;
    border-color: #34d399;
  }
}

/* Unlayered — always wins over all layers */
.unlayered {
  background: #3b1a2e;
  color: #f472b6;
  border: 1px solid #f472b6;
  padding: 14px 18px;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
}

body {
  background: #0f0f1a;
    color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.code-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.code-block {
  background: #12121f;
  padding: 14px 16px;
  border-radius: 8px;
  color: #a78bfa;
  font-family: monospace;
  font-size: 0.82rem;
  line-height: 1.7;
  border: 1px solid #2e2e3e;
  overflow-x: auto;
  margin-top: 8px;
  white-space: pre;
}`,
  },

    // ─── border-collapse ────────────────────────────────────────────
  {
    property: "border-collapse",
    description: "Sets whether table borders should collapse into a single shared border or remain separated. Values: separate (default — each cell has its own border) or collapse (adjacent borders merge into one).",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>border-collapse — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>border-collapse</span> Property</h1>
    <p class="page-desc">Control whether table cell borders merge or stay separate.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">border-collapse: separate (default)</p>
        <table class="tbl separate-tbl">
          <thead>
            <tr><th>Name</th><th>Score</th><th>Grade</th></tr>
          </thead>
          <tbody>
            <tr><td>HTML</td><td>95</td><td>A</td></tr>
            <tr><td>CSS</td><td>98</td><td>A+</td></tr>
            <tr><td>JS</td><td>88</td><td>B+</td></tr>
          </tbody>
        </table>
      </div>
      <div class="demo-card">
        <p class="label">border-collapse: collapse</p>
        <table class="tbl collapse-tbl">
          <thead>
            <tr><th>Name</th><th>Score</th><th>Grade</th></tr>
          </thead>
          <tbody>
            <tr><td>HTML</td><td>95</td><td>A</td></tr>
            <tr><td>CSS</td><td>98</td><td>A+</td></tr>
            <tr><td>JS</td><td>88</td><td>B+</td></tr>
          </tbody>
        </table>
      </div>
      <div class="demo-card">
        <p class="label">collapse — styled data table</p>
        <table class="tbl styled-tbl">
          <thead>
            <tr><th>Property</th><th>Value</th></tr>
          </thead>
          <tbody>
            <tr><td>color</td><td>#a78bfa</td></tr>
            <tr><td>font-size</td><td>1rem</td></tr>
            <tr><td>padding</td><td>14px</td></tr>
            <tr><td>border-radius</td><td>8px</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.tbl {
  width: 100%;
  font-family: Arial, sans-serif;
  font-size: 0.88rem;
}

.tbl th,
.tbl td {
  padding: 8px 12px;
  text-align: left;
}

/* Separate */
.separate-tbl {
  border-collapse: separate;
  border-spacing: 4px;
}

.separate-tbl th {
  background: #3b2a5e;
  color: #a78bfa;
  border: 1px solid #a78bfa;
  border-radius: 4px;
}

.separate-tbl td {
  background: #2a2a3e;
  color: #e2e8f0;
  border: 1px solid #3e3e5e;
  border-radius: 4px;
}

/* Collapse */
.collapse-tbl {
  border-collapse: collapse;
}

.collapse-tbl th {
  background: #3b2a5e;
  color: #a78bfa;
  border: 1px solid #a78bfa;
}

.collapse-tbl td {
  background: #2a2a3e;
  color: #e2e8f0;
  border: 1px solid #3e3e5e;
}

/* Styled collapse table */
.styled-tbl {
  border-collapse: collapse;
}

.styled-tbl th {
  background: #a78bfa;
  color: #fff;
  border: 1px solid #a78bfa;
  font-weight: bold;
}

.styled-tbl td {
  background: #2a2a3e;
  color: #e2e8f0;
  border: 1px solid #3e3e5e;
}

.styled-tbl tr:hover td {
  background: #3b2a5e;
  color: #a78bfa;
}`,
  },

    // ─── border-spacing ─────────────────────────────────────────────
  {
    property: "border-spacing",
    description: "Sets the distance between the borders of adjacent table cells. Only works when border-collapse is set to separate. Accepts one value (both axes) or two values (horizontal vertical).",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>border-spacing — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>border-spacing</span> Property</h1>
    <p class="page-desc">Control the gap between table cell borders when using border-collapse: separate.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">border-spacing: 0</p>
        <table class="tbl bs0">
          <tr><td>A</td><td>B</td><td>C</td></tr>
          <tr><td>D</td><td>E</td><td>F</td></tr>
        </table>
      </div>
      <div class="demo-card">
        <p class="label">border-spacing: 4px</p>
        <table class="tbl bs4">
          <tr><td>A</td><td>B</td><td>C</td></tr>
          <tr><td>D</td><td>E</td><td>F</td></tr>
        </table>
      </div>
      <div class="demo-card">
        <p class="label">border-spacing: 10px</p>
        <table class="tbl bs10">
          <tr><td>A</td><td>B</td><td>C</td></tr>
          <tr><td>D</td><td>E</td><td>F</td></tr>
        </table>
      </div>
      <div class="demo-card">
        <p class="label">border-spacing: 4px 12px (h v)</p>
        <table class="tbl bs-hv">
          <tr><td>A</td><td>B</td><td>C</td></tr>
          <tr><td>D</td><td>E</td><td>F</td></tr>
        </table>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.tbl {
  width: 100%;
  border-collapse: separate;
  font-family: Arial, sans-serif;
}

.tbl td {
  background: #2a2a3e;
  border: 1px solid #a78bfa;
  border-radius: 4px;
  padding: 10px;
  text-align: center;
  color: #a78bfa;
  font-weight: bold;
  font-size: 0.9rem;
}

.bs0  { border-spacing: 0; }
.bs4  { border-spacing: 4px; }
.bs10 { border-spacing: 10px; }
.bs-hv { border-spacing: 4px 12px; }`,
  },

    // ─── caption-side ───────────────────────────────────────────────
  {
    property: "caption-side",
    description: "Sets the placement of a table's caption element. Values: top (default — caption above table) or bottom (caption below table).",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>caption-side — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>caption-side</span> Property</h1>
    <p class="page-desc">Position the table caption above or below the table.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">caption-side: top (default)</p>
        <table class="tbl cap-top">
          <caption>CSS Properties Table</caption>
          <thead><tr><th>Property</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>color</td><td>#a78bfa</td></tr>
            <tr><td>font-size</td><td>1rem</td></tr>
            <tr><td>padding</td><td>14px</td></tr>
          </tbody>
        </table>
      </div>
      <div class="demo-card">
        <p class="label">caption-side: bottom</p>
        <table class="tbl cap-bottom">
          <caption>CSS Properties Table</caption>
          <thead><tr><th>Property</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>color</td><td>#f472b6</td></tr>
            <tr><td>font-size</td><td>1rem</td></tr>
            <tr><td>padding</td><td>14px</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.tbl {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  font-size: 0.88rem;
}

.tbl caption {
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: bold;
  padding: 8px;
  color: #a78bfa;
  background: #3b2a5e;
  border-radius: 6px;
  margin-bottom: 4px;
}

.tbl th {
  background: #2a2a3e;
  color: #a78bfa;
  border: 1px solid #a78bfa;
  padding: 8px 12px;
  text-align: left;
}

.tbl td {
  background: #1e1e2e;
  color: #e2e8f0;
  border: 1px solid #3e3e5e;
  padding: 8px 12px;
}

.cap-top    { caption-side: top; }
.cap-bottom { caption-side: bottom; }

.cap-bottom caption {
  margin-top: 4px;
  margin-bottom: 0;
  color: #f472b6;
  background: #3b1a2e;
}`,
  },


    // ─── empty-cells ────────────────────────────────────────────────
  {
    property: "empty-cells",
    description: "Sets whether borders and backgrounds are shown on empty table cells. Values: show (default) or hide. Only applies when border-collapse is separate.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>empty-cells — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>empty-cells</span> Property</h1>
    <p class="page-desc">Show or hide borders and backgrounds on empty table cells.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">empty-cells: show (default)</p>
        <table class="tbl ec-show">
          <tr><td>HTML</td><td>95</td><td>A</td></tr>
          <tr><td>CSS</td><td></td><td>A+</td></tr>
          <tr><td>JS</td><td>88</td><td></td></tr>
          <tr><td></td><td>72</td><td>B</td></tr>
        </table>
      </div>
      <div class="demo-card">
        <p class="label">empty-cells: hide</p>
        <table class="tbl ec-hide">
          <tr><td>HTML</td><td>95</td><td>A</td></tr>
          <tr><td>CSS</td><td></td><td>A+</td></tr>
          <tr><td>JS</td><td>88</td><td></td></tr>
          <tr><td></td><td>72</td><td>B</td></tr>
        </table>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.tbl {
  width: 100%;
  border-collapse: separate;
  border-spacing: 4px;
  font-family: Arial, sans-serif;
  font-size: 0.88rem;
}

.tbl td {
  background: #2a2a3e;
  border: 1px solid #3e3e5e;
  border-radius: 4px;
  padding: 10px 12px;
  color: #e2e8f0;
  text-align: center;
  min-width: 60px;
}

.ec-show { empty-cells: show; }
.ec-hide { empty-cells: hide; }`,
  },

    // ─── table-layout ───────────────────────────────────────────────
  {
    property: "table-layout",
    description: "Sets the algorithm used to lay out table cells, rows, and columns. Values: auto (default — column width based on content) or fixed (column width based on first row or explicit widths, faster rendering).",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>table-layout — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>table-layout</span> Property</h1>
    <p class="page-desc">Control how the browser calculates table column widths.</p>

    <div class="demo-grid">
      <div class="demo-card full">
        <p class="label">table-layout: auto — columns size to content</p>
        <table class="tbl tl-auto">
          <tr>
            <td>Short</td>
            <td>This is a much longer cell content that expands the column</td>
            <td>Medium content here</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>Styling</td>
            <td>Properties</td>
          </tr>
        </table>
      </div>
      <div class="demo-card full">
        <p class="label">table-layout: fixed — equal columns, overflow hidden</p>
        <table class="tbl tl-fixed">
          <tr>
            <td>Short</td>
            <td>This is a much longer cell content that gets truncated</td>
            <td>Medium content here</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>Styling</td>
            <td>Properties</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.full {
  grid-column: 1 / -1;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.tbl {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  font-size: 0.88rem;
}

.tbl td {
  background: #2a2a3e;
  border: 1px solid #3e3e5e;
  padding: 10px 12px;
  color: #e2e8f0;
  vertical-align: top;
}

.tl-auto  { table-layout: auto; }

.tl-fixed {
  table-layout: fixed;
}

.tl-fixed td {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`,
  },

    // ─── all ────────────────────────────────────────────────────────
  {
    property: "all",
    description: "Resets all CSS properties (except direction and unicode-bidi) to their initial or inherited values. Values: initial (browser defaults), inherit (parent values), unset (natural cascade), revert (user-agent stylesheet).",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>all — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>all</span> Property</h1>
    <p class="page-desc">Reset all CSS properties at once to initial, inherited, or reverted values.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">No all — styled normally</p>
        <div class="styled-box">
          <button class="styled-btn">Styled Button</button>
          <a href="#" class="styled-link">Styled Link</a>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">all: initial — browser defaults</p>
        <div class="styled-box">
          <button class="all-initial">all: initial</button>
          <a href="#" class="all-initial">all: initial</a>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">all: unset — removes all styles</p>
        <div class="styled-box">
          <button class="all-unset">all: unset</button>
          <a href="#" class="all-unset">all: unset</a>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">all: revert — user-agent styles</p>
        <div class="styled-box">
          <button class="all-revert">all: revert</button>
          <a href="#" class="all-revert">all: revert</a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.styled-box {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.styled-btn {
  background: #a78bfa;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 16px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
}

.styled-link {
  color: #f472b6;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  text-decoration: underline;
}

.all-initial {
  all: initial;
  display: block;
  margin-bottom: 4px;
}

.all-unset {
  all: unset;
  display: block;
  cursor: pointer;
  margin-bottom: 4px;
  color: #94a3b8;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
}

.all-revert {
  all: revert;
  display: block;
  margin-bottom: 4px;
  }`,
  },

    // ─── print-color-adjust ─────────────────────────────────────────
  {
    property: "print-color-adjust",
    description: "Controls whether the browser is allowed to adjust colors and backgrounds when printing. Values: economy (default — browser may remove backgrounds to save ink) or exact (preserve all colors and backgrounds exactly as specified).",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>print-color-adjust — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>print-color-adjust</span> Property</h1>
    <p class="page-desc">Control whether backgrounds and colors are preserved when printing.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">print-color-adjust: economy (default)</p>
        <div class="box pca-economy">
          <div class="badge">Economy</div>
          <p>Browser may remove background colors when printing to save ink.</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">print-color-adjust: exact</p>
        <div class="box pca-exact">
          <div class="badge exact-badge">Exact</div>
          <p>All colors and backgrounds are preserved exactly when printing.</p>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">exact — colored chart bars</p>
        <div class="chart pca-exact">
          <div class="bar" style="height: 80%; background: #a78bfa;">CSS</div>
          <div class="bar" style="height: 60%; background: #f472b6;">HTML</div>
          <div class="bar" style="height: 90%; background: #34d399;">JS</div>
          <div class="bar" style="height: 50%; background: #fbbf24;">TS</div>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">exact — colored status badges</p>
        <div class="badge-list pca-exact">
          <span class="status active">Active</span>
          <span class="status pending">Pending</span>
          <span class="status error">Error</span>
          <span class="status info">Info</span>
        </div>
      </div>
    </div>

    <div class="code-card">
      <p class="label">Usage pattern:</p>
      <pre class="code-block">/* Preserve colors when printing */
.chart,
.badge,
.status-indicator {
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact; /* Safari */
}

/* Print stylesheet */
@media print {
  .sidebar { display: none; }

  .report {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
}</pre>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

.box {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 14px 16px;
  border: 1px solid #3e3e5e;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.box p {
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #94a3b8;
  line-height: 1.5;
}

.badge {
  display: inline-block;
  background: #3e3e5e;
  color: #94a3b8;
  padding: 4px 12px;
  border-radius: 12px;
  font-family: Arial, sans-serif;
  font-size: 0.78rem;
  font-weight: bold;
  width: fit-content;
}

.exact-badge {
  background: #3b2a5e;
  color: #a78bfa;
}

.pca-economy {
  print-color-adjust: economy;
  -webkit-print-color-adjust: economy;
}

.pca-exact {
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

/* Chart demo */
.chart {
  background: #12121f;
  border-radius: 8px;
  padding: 12px 8px 8px;
  border: 1px solid #3e3e5e;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 100px;
}

.bar {
  flex: 1;
  border-radius: 4px 4px 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 4px;
  font-family: Arial, sans-serif;
  font-size: 0.7rem;
  color: #fff;
  font-weight: bold;
}

/* Status badges */
.badge-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.status {
  padding: 5px 12px;
  border-radius: 12px;
  font-family: Arial, sans-serif;
  font-size: 0.78rem;
  font-weight: bold;
}

.status.active  { background: #1a3a2e; color: #34d399; }
.status.pending { background: #3b2a1e; color: #fbbf24; }
.status.error   { background: #3b1a1a; color: #ef4444; }
.status.info    { background: #1a2a3b; color: #60a5fa; }

.code-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.code-block {
  background: #12121f;
  padding: 14px 16px;
  border-radius: 8px;
  color: #a78bfa;
  font-family: monospace;
  font-size: 0.82rem;
  line-height: 1.7;
  border: 1px solid #2e2e3e;
  overflow-x: auto;
  margin-top: 8px;
  white-space: pre;
}`,
  },

    // ─── vertical-align ─────────────────────────────────────────────
  {
    property: "vertical-align",
    description: "Sets the vertical alignment of an inline, inline-block, or table-cell element. Values: baseline (default), top, middle, bottom, text-top, text-bottom, sub, super, or a length/percentage.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>vertical-align — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>vertical-align</span> Property</h1>
    <p class="page-desc">Align inline and table-cell elements vertically within their line box.</p>

    <div class="demo-grid">
      <div class="demo-card">
        <p class="label">vertical-align: baseline (default)</p>
        <div class="line-box">
          <span class="big-text">Big</span>
          <span class="va-baseline">baseline</span>
          <span class="big-text">Text</span>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">vertical-align: top</p>
        <div class="line-box">
          <span class="big-text">Big</span>
          <span class="va-top">top</span>
          <span class="big-text">Text</span>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">vertical-align: middle</p>
        <div class="line-box">
          <span class="big-text">Big</span>
          <span class="va-middle">middle</span>
          <span class="big-text">Text</span>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">vertical-align: bottom</p>
        <div class="line-box">
          <span class="big-text">Big</span>
          <span class="va-bottom">bottom</span>
          <span class="big-text">Text</span>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">vertical-align: super / sub</p>
        <div class="line-box">
          <span class="normal-text">H</span>
          <span class="va-sub">2</span>
          <span class="normal-text">O and E=mc</span>
          <span class="va-super">2</span>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">vertical-align in table cells</p>
        <table class="va-table">
          <tr>
            <td class="va-top-cell">top</td>
            <td class="va-middle-cell">middle</td>
            <td class="va-bottom-cell">bottom</td>
          </tr>
        </table>
      </div>
      <div class="demo-card">
        <p class="label">vertical-align: middle — icon + text</p>
        <div class="icon-text">
          <img class="icon va-icon" src="https://via.placeholder.com/24x24/a78bfa/fff?text=★" alt="icon" />
          <span class="icon-label">Aligned with text</span>
        </div>
      </div>
      <div class="demo-card">
        <p class="label">vertical-align: -4px (offset)</p>
        <div class="line-box">
          <span class="big-text">Big</span>
          <span class="va-offset">offset</span>
          <span class="big-text">Text</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 40px 20px;
}

.page-wrapper {
  max-width: 860px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 32px;
  font-size: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.demo-card {
  background: #1e1e2e;
  border: 1px solid #2e2e3e;
  border-radius: 12px;
  padding: 20px;
}

.label {
  font-size: 0.78rem;
  color: #7c6fcd;
  margin-bottom: 12px;
  font-family: monospace;
}

/* Inline line box demos */
.line-box {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 14px 18px;
  border: 1px solid #3e3e5e;
  line-height: 1;
  border-bottom: 2px dashed #a78bfa;
}

.big-text {
  font-family: Arial, sans-serif;
  font-size: 2rem;
  color: #e2e8f0;
  font-weight: bold;
}

.normal-text {
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  color: #e2e8f0;
}

.va-baseline,
.va-top,
.va-middle,
.va-bottom,
.va-sub,
.va-super,
.va-offset {
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: bold;
  background: #3b2a5e;
  color: #a78bfa;
  padding: 2px 6px;
  border-radius: 4px;
}

.va-baseline { vertical-align: baseline; }
.va-top      { vertical-align: top; }
.va-middle   { vertical-align: middle; }
.va-bottom   { vertical-align: bottom; }
.va-sub      { vertical-align: sub;   font-size: 0.75rem; }
.va-super    { vertical-align: super; font-size: 0.75rem; }
.va-offset   { vertical-align: -4px; }

/* Table cell vertical-align */
.va-table {
  width: 100%;
  border-collapse: collapse;
  height: 80px;
}

.va-table td {
  border: 1px solid #3e3e5e;
  background: #2a2a3e;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: bold;
  color: #a78bfa;
  width: 33%;
  padding: 4px 8px;
}

.va-top-cell    { vertical-align: top; }
.va-middle-cell { vertical-align: middle; }
.va-bottom-cell { vertical-align: bottom; }

/* Icon + text alignment */
.icon-text {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 14px 18px;
  border: 1px solid #3e3e5e;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  color: #e2e8f0;
}

.va-icon {
  vertical-align: middle;
  border-radius: 4px;
  margin-right: 8px;
}

.icon-label {
  vertical-align: middle;
}`,
  },


  // ─── animation ──────────────────────────────────────────────────
  {
    property: "animation",
    description: "Shorthand for all animation properties. Lets you define keyframe animations with name, duration, timing, delay, iteration, direction, fill-mode, and play-state in one declaration.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>animation — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>animation</span> Property</h1>
    <p class="page-desc">
      Shorthand for all animation sub-properties. Syntax:
      <code>animation: name duration timing-function delay iteration-count direction fill-mode play-state</code>
    </p>

    <div class="demo-grid">

      <div class="demo-card">
        <p class="label">animation: spin 1s linear infinite</p>
        <div class="box-wrap">
          <div class="box spin-box">⟳</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="label">animation: pulse 1.2s ease-in-out infinite alternate</p>
        <div class="box-wrap">
          <div class="box pulse-box">❤</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="label">animation: slideIn 0.8s ease forwards</p>
        <div class="box-wrap">
          <div class="box slide-box">→ Slide</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="label">animation: bounce 0.6s cubic-bezier(.36,.07,.19,.97) infinite</p>
        <div class="box-wrap">
          <div class="box bounce-box">↕</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="label">animation: fadeIn 2s ease 0.5s 1 normal forwards</p>
        <div class="box-wrap">
          <div class="box fade-box">Fade In</div>
        </div>
      </div>

      <div class="demo-card">
        <p class="label">animation: colorShift 3s linear infinite</p>
        <div class="box-wrap">
          <div class="box color-box">Color</div>
        </div>
      </div>

    </div>
  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #a78bfa;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.page-desc code {
  background: rgba(167, 139, 250, 0.15);
  color: #a78bfa;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-family: "Courier New", monospace;
  font-size: 0.8rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.label {
  font-size: 0.72rem;
  color: #7c6fcd;
  font-family: "Courier New", monospace;
  font-weight: 600;
  line-height: 1.5;
}

.box-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
}

.box {
  width: 70px;
  height: 70px;
  border-radius: 12px;
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  color: #fff;
  font-size: 1.4rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── Spin ── */
.spin-box {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* ── Pulse ── */
.pulse-box {
  animation: pulse 1.2s ease-in-out infinite alternate;
}

@keyframes pulse {
  from { transform: scale(1);    opacity: 1; }
  to   { transform: scale(1.35); opacity: 0.7; }
}

/* ── Slide In ── */
.slide-box {
  width: auto;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  animation: slideIn 0.8s ease forwards;
}

@keyframes slideIn {
  from { transform: translateX(-60px); opacity: 0; }
  to   { transform: translateX(0);     opacity: 1; }
}

/* ── Bounce ── */
.bounce-box {
  animation: bounce 0.6s cubic-bezier(.36,.07,.19,.97) infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-20px); }
}

/* ── Fade In ── */
.fade-box {
  width: auto;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  opacity: 0;
  animation: fadeIn 2s ease 0.5s 1 normal forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Color Shift ── */
.color-box {
  width: auto;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  animation: colorShift 3s linear infinite;
}

@keyframes colorShift {
  0%   { background: linear-gradient(135deg, #7c3aed, #a78bfa); }
  33%  { background: linear-gradient(135deg, #0ea5e9, #38bdf8); }
  66%  { background: linear-gradient(135deg, #10b981, #34d399); }
  100% { background: linear-gradient(135deg, #7c3aed, #a78bfa); }
}`,
  },

  // ─── flexbox (interactive demo) ─────────────────────────────────
  {
    property: "flexbox",
    description: "CSS Flexbox is a one-dimensional layout system for arranging items in rows or columns. It gives the container the ability to alter its items' width, height, and order to best fill the available space.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Flexbox — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>Flexbox</span></h1>
    <p class="page-desc">
      A one-dimensional layout system. Set <code>display: flex</code> on a container
      to control how its children are arranged, aligned, and sized.
    </p>

    <!-- flex-direction -->
    <section class="section">
      <h2 class="section-title">flex-direction</h2>
      <div class="demo-row">
        <div class="demo-card">
          <p class="label">row (default)</p>
          <div class="flex-box fd-row">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </div>
        <div class="demo-card">
          <p class="label">column</p>
          <div class="flex-box fd-col">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </div>
        <div class="demo-card">
          <p class="label">row-reverse</p>
          <div class="flex-box fd-row-rev">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </div>
      </div>
    </section>

    <!-- justify-content -->
    <section class="section">
      <h2 class="section-title">justify-content</h2>
      <div class="demo-col">
        <div class="demo-card">
          <p class="label">flex-start</p>
          <div class="flex-box jc-start">
            <div class="item">A</div><div class="item">B</div><div class="item">C</div>
          </div>
        </div>
        <div class="demo-card">
          <p class="label">center</p>
          <div class="flex-box jc-center">
            <div class="item">A</div><div class="item">B</div><div class="item">C</div>
          </div>
        </div>
        <div class="demo-card">
          <p class="label">space-between</p>
          <div class="flex-box jc-between">
            <div class="item">A</div><div class="item">B</div><div class="item">C</div>
          </div>
        </div>
        <div class="demo-card">
          <p class="label">space-around</p>
          <div class="flex-box jc-around">
            <div class="item">A</div><div class="item">B</div><div class="item">C</div>
          </div>
        </div>
        <div class="demo-card">
          <p class="label">space-evenly</p>
          <div class="flex-box jc-evenly">
            <div class="item">A</div><div class="item">B</div><div class="item">C</div>
          </div>
        </div>
      </div>
    </section>

    <!-- align-items -->
    <section class="section">
      <h2 class="section-title">align-items</h2>
      <div class="demo-row">
        <div class="demo-card">
          <p class="label">flex-start</p>
          <div class="flex-box ai-start tall">
            <div class="item">A</div><div class="item tall-item">B</div><div class="item">C</div>
          </div>
        </div>
        <div class="demo-card">
          <p class="label">center</p>
          <div class="flex-box ai-center tall">
            <div class="item">A</div><div class="item tall-item">B</div><div class="item">C</div>
          </div>
        </div>
        <div class="demo-card">
          <p class="label">flex-end</p>
          <div class="flex-box ai-end tall">
            <div class="item">A</div><div class="item tall-item">B</div><div class="item">C</div>
          </div>
        </div>
      </div>
    </section>

    <!-- flex-wrap + gap -->
    <section class="section">
      <h2 class="section-title">flex-wrap &amp; gap</h2>
      <div class="demo-card">
        <p class="label">flex-wrap: wrap; gap: 12px</p>
        <div class="flex-box fw-wrap">
          <div class="item wide">Item 1</div>
          <div class="item wide">Item 2</div>
          <div class="item wide">Item 3</div>
          <div class="item wide">Item 4</div>
          <div class="item wide">Item 5</div>
        </div>
      </div>
    </section>

  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #38bdf8;
}

.page-desc {
  color: #94a3b8;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.page-desc code {
  background: rgba(56, 189, 248, 0.15);
  color: #38bdf8;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  font-family: "Courier New", monospace;
  font-size: 0.82rem;
}

.section {
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  padding: 1.5rem;
}

.section-title {
  font-size: 1rem;
  font-weight: 700;
  color: #38bdf8;
  font-family: "Courier New", monospace;
  margin-bottom: 1rem;
}

.demo-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.demo-card {
  flex: 1;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  font-size: 0.72rem;
  color: #64748b;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

/* ── Flex containers ── */
.flex-box {
  display: flex;
  background: rgba(56, 189, 248, 0.06);
  border: 1px dashed rgba(56, 189, 248, 0.25);
  border-radius: 8px;
  padding: 0.5rem;
  min-height: 50px;
  gap: 6px;
}

.flex-box.tall {
  min-height: 90px;
}

/* flex-direction */
.fd-row     { flex-direction: row; }
.fd-col     { flex-direction: column; }
.fd-row-rev { flex-direction: row-reverse; }

/* justify-content */
.jc-start   { justify-content: flex-start; }
.jc-center  { justify-content: center; }
.jc-between { justify-content: space-between; }
.jc-around  { justify-content: space-around; }
.jc-evenly  { justify-content: space-evenly; }

/* align-items */
.ai-start  { align-items: flex-start; }
.ai-center { align-items: center; }
.ai-end    { align-items: flex-end; }

/* flex-wrap */
.fw-wrap { flex-wrap: wrap; gap: 12px; }

/* ── Items ── */
.item {
  background: linear-gradient(135deg, #0ea5e9, #38bdf8);
  color: #fff;
  font-weight: 800;
  font-size: 0.85rem;
  padding: 0.5rem 0.9rem;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  transition: transform 0.2s;
}

.item:hover {
  transform: scale(1.08);
}

.tall-item {
  height: 60px;
}

.wide {
  min-width: 120px;
  flex: 1;
}`,
  },

  // ─── object-position ────────────────────────────────────────────
  {
    property: "object-position",
    description: "Specifies the alignment of the replaced element (img, video) inside its box when object-fit is applied. Accepts keywords (top, center, bottom, left, right) or length/percentage values.",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>object-position — CSS IN MY STYLE</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">CSS <span>object-position</span> Property</h1>
    <p class="page-desc">
      Works with <code>object-fit</code> to control which part of the image is visible
      inside its container. Think of it like <code>background-position</code> but for
      <code>&lt;img&gt;</code> and <code>&lt;video&gt;</code> elements.
    </p>

    <div class="demo-grid">

      <div class="demo-card">
        <p class="label">object-position: center (default)</p>
        <div class="img-wrap">
          <div class="fake-img pos-center">
            <span class="crosshair">⊕</span>
            <span class="pos-tag">center</span>
          </div>
        </div>
      </div>

      <div class="demo-card">
        <p class="label">object-position: top</p>
        <div class="img-wrap">
          <div class="fake-img pos-top">
            <span class="crosshair">⊕</span>
            <span class="pos-tag">top</span>
          </div>
        </div>
      </div>

      <div class="demo-card">
        <p class="label">object-position: bottom</p>
        <div class="img-wrap">
          <div class="fake-img pos-bottom">
            <span class="crosshair">⊕</span>
            <span class="pos-tag">bottom</span>
          </div>
        </div>
      </div>

      <div class="demo-card">
        <p class="label">object-position: left</p>
        <div class="img-wrap">
          <div class="fake-img pos-left">
            <span class="crosshair">⊕</span>
            <span class="pos-tag">left</span>
          </div>
        </div>
      </div>

      <div class="demo-card">
        <p class="label">object-position: right</p>
        <div class="img-wrap">
          <div class="fake-img pos-right">
            <span class="crosshair">⊕</span>
            <span class="pos-tag">right</span>
          </div>
        </div>
      </div>

      <div class="demo-card">
        <p class="label">object-position: 25% 75%</p>
        <div class="img-wrap">
          <div class="fake-img pos-custom">
            <span class="crosshair">⊕</span>
            <span class="pos-tag">25% 75%</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Real image demo -->
    <div class="real-demo">
      <h2 class="section-title">Real Image Demo — object-fit: cover</h2>
      <div class="img-row">
        <div class="img-card">
          <p class="label">object-position: top</p>
          <img
            class="real-img op-top"
            src="https://picsum.photos/seed/css1/600/400"
            alt="object-position top"
          />
        </div>
        <div class="img-card">
          <p class="label">object-position: center</p>
          <img
            class="real-img op-center"
            src="https://picsum.photos/seed/css1/600/400"
            alt="object-position center"
          />
        </div>
        <div class="img-card">
          <p class="label">object-position: bottom</p>
          <img
            class="real-img op-bottom"
            src="https://picsum.photos/seed/css1/600/400"
            alt="object-position bottom"
          />
        </div>
      </div>
    </div>

  </div>
</body>
</html>`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.page-title span {
  color: #f59e0b;
}

.page-desc {
  color: #9ca3af;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.page-desc code {
  background: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  font-family: "Courier New", monospace;
  font-size: 0.8rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.label {
  font-size: 0.72rem;
  color: #6b7280;
  font-family: "Courier New", monospace;
  font-weight: 600;
}

.img-wrap {
  width: 100%;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px dashed rgba(245, 158, 11, 0.3);
  position: relative;
}

/* Simulated image using gradient + crosshair */
.fake-img {
  width: 160%;
  height: 160%;
  background: linear-gradient(135deg,
    #f59e0b 0%, #fbbf24 25%,
    #10b981 25%, #34d399 50%,
    #3b82f6 50%, #60a5fa 75%,
    #8b5cf6 75%, #a78bfa 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  position: absolute;
}

.crosshair {
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0 6px rgba(0,0,0,0.5);
}

.pos-tag {
  font-size: 0.7rem;
  font-weight: 700;
  color: #fff;
  background: rgba(0,0,0,0.4);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: "Courier New", monospace;
}

/* object-position equivalents via top/left on absolute div */
.pos-center { top: 50%; left: 50%; transform: translate(-50%, -50%); }
.pos-top    { top: 0;   left: 50%; transform: translateX(-50%); }
.pos-bottom { bottom: 0; left: 50%; transform: translateX(-50%); }
.pos-left   { top: 50%; left: 0;   transform: translateY(-50%); }
.pos-right  { top: 50%; right: 0;  transform: translateY(-50%); }
.pos-custom { top: 75%; left: 25%; transform: translate(-25%, -75%); }

/* ── Real image demo ── */
.real-demo {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 1.5rem;
}

.section-title {
  font-size: 1rem;
  font-weight: 700;
  color: #f59e0b;
  font-family: "Courier New", monospace;
  margin-bottom: 1rem;
}

.img-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.img-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.real-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  border: 2px solid rgba(245, 158, 11, 0.3);
}

.op-top    { object-position: top; }
.op-center { object-position: center; }
.op-bottom { object-position: bottom; }`,
  },

];

/* ─── Lookup helper ─────────────────────────────────────────────── */
export function getPropertyExample(property) {
  if (!property) return null;
  return propertyExamples.find(
    (e) => e.property.toLowerCase() === property.toLowerCase()
  ) || null;
}
