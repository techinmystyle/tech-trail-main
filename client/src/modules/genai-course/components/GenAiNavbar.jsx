import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home",    path: "/genai-course",        icon: "fas fa-house" },
  { label: "Topics",  path: "/genai-course/topics",  icon: "fas fa-brain" },
  { label: "Build",   path: "/genai-course/build",   icon: "fas fa-hammer" },
];

export default function GenAiNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => setOpen(false), [loc]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(4,4,10,0.95)"
          : "rgba(4,4,10,0.8)",
        backdropFilter: "blur(24px)",
        borderBottom: scrolled ? "1px solid rgba(124,58,237,0.2)" : "1px solid rgba(124,58,237,0.08)",
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.6)" : "none",
      }}
    >
      {/* top neon line */}
      {scrolled && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, #7c3aed 30%, #06b6d4 70%, transparent)",
        }} />
      )}

      <div className="container-rr">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>

          {/* Logo */}
          <Link to="/genai-course" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: "linear-gradient(135deg, #7c3aed, #0891b2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 20px rgba(124,58,237,0.4)",
            }}>
              <i className="fas fa-robot" style={{ color: "#fff", fontSize: 18 }} />
            </div>
            <div>
              <div style={{
                fontSize: 16, fontWeight: 800, letterSpacing: "0.05em",
                background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                lineHeight: 1.1,
              }}>GEN AI</div>
              <div style={{ fontSize: 10, color: "#475569", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                in My Style
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(l => {
              const active = loc.pathname === l.path || (l.path !== "/genai-course" && loc.pathname.startsWith(l.path));
              return (
                <Link key={l.path} to={l.path} style={{
                  textDecoration: "none",
                  padding: "8px 16px", borderRadius: 8,
                  fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                  color: active ? "#a78bfa" : "#64748b",
                  background: active ? "rgba(124,58,237,0.12)" : "transparent",
                  border: active ? "1px solid rgba(124,58,237,0.3)" : "1px solid transparent",
                  transition: "all 0.2s ease",
                }}
                  onMouseEnter={e => { if (!active) { e.currentTarget.style.color = "#a78bfa"; e.currentTarget.style.background = "rgba(124,58,237,0.06)"; } }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.color = "#64748b"; e.currentTarget.style.background = "transparent"; } }}
                >
                  <i className={l.icon} style={{ marginRight: 6, fontSize: 11 }} />
                  {l.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/courses" style={{
              textDecoration: "none", fontSize: 11, fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "#475569", padding: "6px 14px", borderRadius: 6,
              border: "1px solid rgba(255,255,255,0.08)",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#475569"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              ← Back
            </Link>
            <Link to="/genai-course/topics" className="btn-rr" style={{ fontSize: "0.72rem", padding: "0.6rem 1.4rem" }}>
              <span>Begin</span>
              <i className="fas fa-arrow-right" style={{ fontSize: 10 }} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden flex items-center justify-center" style={{
            width: 40, height: 40, borderRadius: 8, border: "1px solid rgba(124,58,237,0.3)",
            background: "rgba(124,58,237,0.08)", color: "#a78bfa", cursor: "pointer",
          }}>
            <i className={`fas ${open ? "fa-xmark" : "fa-bars"}`} style={{ fontSize: 14 }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: "rgba(4,4,10,0.97)",
              borderBottom: "1px solid rgba(124,58,237,0.2)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="container-rr" style={{ paddingTop: 16, paddingBottom: 20 }}>
              {links.map(l => (
                <Link key={l.path} to={l.path} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "12px 0", textDecoration: "none",
                  fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase",
                  color: loc.pathname === l.path ? "#a78bfa" : "#64748b",
                  borderBottom: "1px solid rgba(124,58,237,0.08)",
                }}>
                  <i className={l.icon} style={{ fontSize: 12 }} />
                  {l.label}
                </Link>
              ))}
              <div style={{ paddingTop: 16 }}>
                <Link to="/genai-course/topics" className="btn-rr" style={{ width: "100%", justifyContent: "center" }}>
                  <span>Begin Learning</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
