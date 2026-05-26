import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import AOS from 'aos';
import './Landing.css';

/* ── Logo colours extracted from favicon.png ──
   Electric Blue  : #29ABE2
   Vivid Purple   : #9B59E8
   Dark Navy      : #1B3A5C
   Light Sky Blue : #87CEEB
─────────────────────────────────────────── */

const courses = [
  { icon: 'fab fa-html5',           name: 'HTML',                  desc: 'Build the structure of the web',             link: '/html-course',                   color: '#e44d26' },
  { icon: 'fab fa-css3-alt',        name: 'CSS',                   desc: 'Style beautiful, modern interfaces',          link: '/css-course',                    color: '#29ABE2' },
  { icon: 'fab fa-js-square',       name: 'JavaScript',            desc: 'Bring interactivity to your pages',           link: '/js-basic-course',               color: '#f7df1e' },
  { icon: 'fab fa-python',          name: 'Python',                desc: 'Versatile language for every domain',         link: '/python-course',                 color: '#29ABE2' },
  { icon: 'fab fa-java',            name: 'Java',                  desc: 'Power of OOP & enterprise development',       link: '/java-course',                   color: '#f89820' },
  { icon: 'fas fa-code',            name: 'C Programming',         desc: 'Master the foundation of computing',          link: '/c-course',                      color: '#9B59E8' },
  { icon: 'fas fa-brain',           name: 'Machine Learning',      desc: 'Build models that learn from data',           link: '/ml-course',                     color: '#9B59E8' },
  { icon: 'fas fa-robot',           name: 'Artificial Intelligence', desc: 'Create intelligent thinking machines',      link: '/ai-course',                     color: '#29ABE2' },
  { icon: 'fas fa-network-wired',   name: 'Deep Learning',         desc: 'Neural networks & advanced AI systems',       link: '/dl-course',                     color: '#9B59E8' },
  { icon: 'fas fa-language',        name: 'NLP',                   desc: 'Teach machines to understand language',       link: '/nlp-course',                    color: '#29ABE2' },
  { icon: 'fas fa-magic',           name: 'Generative AI',         desc: 'Build AI that creates amazing content',       link: '/genai-course',                  color: '#9B59E8' },
  { icon: 'fas fa-chart-line',      name: 'Data Science',          desc: 'Turn raw data into powerful insights',        link: '/dsc-course',                    color: '#29ABE2' },
  { icon: 'fas fa-project-diagram', name: 'DSA',                   desc: 'Master algorithms & data structures',         link: '/dsa-course',                    color: '#9B59E8' },
  { icon: 'fas fa-database',        name: 'Database',              desc: 'SQL, NoSQL & smart database design',          link: '/database-course',               color: '#29ABE2' },
  { icon: 'fas fa-desktop',         name: 'Operating Systems',     desc: 'Understand how computers really work',        link: '/os-course',                     color: '#9B59E8' },
  { icon: 'fas fa-sitemap',         name: 'System Design',         desc: 'Architect scalable reliable systems',         link: '/system-design-course',          color: '#29ABE2' },
  { icon: 'fas fa-layer-group',     name: 'Full Stack Python',     desc: 'End-to-end web apps with Python',             link: '/fullstack-python-course',       color: '#9B59E8' },
  { icon: 'fas fa-layer-group',     name: 'Full Stack Java',       desc: 'End-to-end web apps with Java',               link: '/fullstack-java-platform-course', color: '#29ABE2' },
];

const stats = [
  { value: '18+',  label: 'Free Courses',  icon: 'fas fa-book-open'   },
  { value: '500+', label: 'Lessons',       icon: 'fas fa-play-circle' },
  { value: '10K+', label: 'Learners',      icon: 'fas fa-users'       },
  { value: '100%', label: 'Free Forever',  icon: 'fas fa-infinity'    },
];

const features = [
  { icon: 'fas fa-infinity',       title: '100% Free Forever',    desc: 'All courses, all content — no credit card, no hidden fees, no paywalls. Ever.' },
  { icon: 'fas fa-graduation-cap', title: 'Beginner Friendly',    desc: 'Every course starts from absolute zero. No prior experience needed at all.' },
  { icon: 'fas fa-code',           title: 'Hands-on Projects',    desc: 'Learn by doing — real-world projects and live code examples in every lesson.' },
  { icon: 'fas fa-mobile-alt',     title: 'Learn Anywhere',       desc: 'Fully responsive. Learn on phone, tablet or desktop — anytime, anywhere.' },
  { icon: 'fas fa-language',       title: 'Telugu & English',     desc: 'Content crafted in both Telugu and English for regional learners across India.' },
  { icon: 'fas fa-sync-alt',       title: 'Always Updated',       desc: 'Regularly refreshed with the latest industry tools, frameworks and trends.' },
];

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Logged-in users skip landing → go to dashboard
  const token = localStorage.getItem('token');
  if (token) return <Navigate to="/home" replace />;

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <div className="lp">

      {/* ══════════ NAV ══════════ */}
      <header className="lp-nav">
        <div className="lp-nav-wrap">

          <Link to="/" className="lp-logo">
            <img src="/favicon.png" alt="Tech In My Style" />
            <span>TECH IN MY STYLE</span>
          </Link>

          <nav className="lp-nav-links" aria-label="Main navigation">
            <a href="#courses">Courses</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="lp-nav-cta">
            <Link to="/login" className="btn-ghost">Login</Link>
            <Link to="/register" className="btn-primary">Get Started Free</Link>
          </div>

          <button
            className={`lp-burger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile slide-down menu */}
        <div className={`lp-mob-menu${menuOpen ? ' active' : ''}`}>
          <a href="#courses"  onClick={() => setMenuOpen(false)}>Courses</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#contact"  onClick={() => setMenuOpen(false)}>Contact</a>
          <div className="mob-btns">
            <Link to="/login"    className="btn-ghost full" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/register" className="btn-primary full" onClick={() => setMenuOpen(false)}>Get Started Free</Link>
          </div>
        </div>
      </header>

      {/* ══════════ HERO ══════════ */}
      <section className="lp-hero">
        {/* Floating orbs */}
        <div className="orb orb-blue" />
        <div className="orb orb-purple" />
        <div className="orb orb-navy" />

        {/* Animated grid lines */}
        <div className="hero-grid" aria-hidden="true" />

        {/* Floating tech pills */}
        <div className="float-pills" aria-hidden="true">
          {[
            { icon: 'fab fa-html5',  label: 'HTML',   color: '#e44d26', d: '0s',   t: '20%', l: '4%'  },
            { icon: 'fab fa-python', label: 'Python', color: '#29ABE2', d: '0.6s', t: '38%', l: '2%'  },
            { icon: 'fas fa-brain',  label: 'ML',     color: '#9B59E8', d: '1.2s', t: '58%', l: '4%'  },
            { icon: 'fab fa-js',     label: 'JS',     color: '#f7df1e', d: '1.8s', t: '74%', l: '6%'  },
            { icon: 'fab fa-java',   label: 'Java',   color: '#f89820', d: '0.3s', t: '20%', r: '4%'  },
            { icon: 'fas fa-robot',  label: 'AI',     color: '#29ABE2', d: '0.9s', t: '38%', r: '2%'  },
            { icon: 'fas fa-chart-line', label: 'Data', color: '#9B59E8', d: '1.5s', t: '58%', r: '4%' },
            { icon: 'fab fa-css3-alt',   label: 'CSS', color: '#29ABE2', d: '2.1s', t: '74%', r: '6%' },
          ].map((p, i) => (
            <span
              key={i}
              className="fp"
              style={{
                '--d': p.d,
                top: p.t,
                ...(p.l ? { left: p.l } : { right: p.r }),
              }}
            >
              <i className={p.icon} style={{ color: p.color }} /> {p.label}
            </span>
          ))}
        </div>

        {/* Hero content */}
        <div className="lp-hero-inner" data-aos="fade-up">
          <div className="hero-badge">
            <span className="badge-pulse" />
            🤖 &nbsp;Free Learning Platform &nbsp;·&nbsp; 18+ Courses
          </div>

          <h1>
            Learn <span className="grad-blue">Programming</span><br />
            &amp; <span className="grad-purple">Technology</span>
            <span className="hero-tagline"> the Smart Way</span>
          </h1>

          <p className="hero-desc">
            Master HTML, CSS, JavaScript, Python, Java, AI, Machine Learning,
            Data Science, DSA, System Design &amp; Full Stack —
            all in one place, <strong>completely free</strong>.
          </p>

          <div className="hero-btns">
            <Link to="/register" className="btn-primary btn-lg">
              Start Learning Free &nbsp;<i className="fas fa-arrow-right" />
            </Link>
            <Link to="/login" className="btn-outline btn-lg">
              <i className="fas fa-sign-in-alt" />&nbsp; Login
            </Link>
          </div>

          <div className="hero-trust">
            <span><i className="fas fa-check-circle" /> No credit card</span>
            <span><i className="fas fa-check-circle" /> No signup fees</span>
            <span><i className="fas fa-check-circle" /> Always free</span>
          </div>
        </div>

        {/* Stats */}
        <div className="lp-stats" data-aos="fade-up" data-aos-delay="180">
          {stats.map((s, i) => (
            <div className="stat" key={i}>
              <i className={s.icon} />
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ COURSES ══════════ */}
      <section className="lp-section" id="courses">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up">
            <span className="eyebrow">Our Curriculum</span>
            <h2>Explore <span className="grad-blue">18+ Free Courses</span></h2>
            <p>From beginner to expert — every course is handcrafted and 100% free</p>
          </div>

          <div className="courses-grid">
            {courses.map((c, i) => (
              <Link
                to={c.link}
                className="course-card"
                key={i}
                style={{ '--ac': c.color }}
                data-aos="fade-up"
                data-aos-delay={Math.min((i % 4) * 60, 200)}
              >
                <div className="cc-glow" />
                <div className="cc-icon">
                  <i className={c.icon} style={{ color: c.color }} />
                </div>
                <div className="cc-body">
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                </div>
                <div className="cc-arrow">
                  <i className="fas fa-chevron-right" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FEATURES ══════════ */}
      <section className="lp-section lp-alt" id="features">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Everything You Need to <span className="grad-purple">Succeed</span></h2>
            <p>Built for learners, by learners — we know what it takes to grow in tech</p>
          </div>

          <div className="feat-grid">
            {features.map((f, i) => (
              <div className="feat-card" key={i} data-aos="fade-up" data-aos-delay={i * 70}>
                <div className="feat-icon">
                  <i className={f.icon} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA BANNER ══════════ */}
      <section className="lp-cta" data-aos="zoom-in">
        <div className="cta-orb cta-orb-1" />
        <div className="cta-orb cta-orb-2" />
        <div className="wrap cta-inner">
          <div className="cta-robot">
            <img src="/favicon.png" alt="Tech In My Style Robot" />
          </div>
          <div className="cta-text">
            <h2>Ready to Start Your <span className="grad-blue">Tech Journey?</span></h2>
            <p>Join 10,000+ learners who are already building their future with Tech In My Style</p>
            <div className="cta-btns">
              <Link to="/register" className="btn-primary btn-lg">
                Create Free Account &nbsp;<i className="fas fa-rocket" />
              </Link>
              <Link to="/login" className="btn-ghost btn-lg">
                I already have an account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="lp-footer" id="contact">
        <div className="wrap">
          <div className="footer-top">

            <div className="footer-brand">
              <Link to="/" className="lp-logo">
                <img src="/favicon.png" alt="Tech In My Style" />
                <span>TECH IN MY STYLE</span>
              </Link>
              <p>Empowering the next generation of developers with free, world-class tech education.</p>
              <div className="social-row">
                <a href="https://www.youtube.com/@TECHINMYSTYLE"     target="_blank" rel="noopener noreferrer" title="YouTube"  ><i className="fab fa-youtube"   /></a>
                <a href="https://www.instagram.com/tech_in_my_style" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fab fa-instagram" /></a>
                <a href="https://t.me/Tech_in_my_style_bot"          target="_blank" rel="noopener noreferrer" title="Telegram" ><i className="fab fa-telegram"  /></a>
                <a href="https://wa.me/919390119848"                  target="_blank" rel="noopener noreferrer" title="WhatsApp" ><i className="fab fa-whatsapp"  /></a>
              </div>
            </div>

            <div className="footer-cols">
              <div className="footer-col">
                <h4>Quick Links</h4>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <a href="#courses">All Courses</a>
                <a href="#features">Why Us</a>
              </div>
              <div className="footer-col">
                <h4>Top Courses</h4>
                <Link to="/html-course">HTML</Link>
                <Link to="/python-course">Python</Link>
                <Link to="/js-basic-course">JavaScript</Link>
                <Link to="/ml-course">Machine Learning</Link>
                <Link to="/dsa-course">DSA</Link>
              </div>
              <div className="footer-col">
                <h4>Legal</h4>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
                <Link to="/disclaimer">Disclaimer</Link>
                <Link to="/about-us">About Us</Link>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Tech In My Style. All rights reserved.</p>
            <p>Made with <i className="fas fa-heart" style={{ color: '#9B59E8' }} /> in Andhra Pradesh, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
