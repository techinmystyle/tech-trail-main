import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GenAiTopicCard from "../components/GenAiTopicCard";
import GenAiSectionHeader from "../components/GenAiSectionHeader";
import { learningPaths } from "../data/genaiTopics";
import topics from "../data/genaiTopics";
import PopularCourses from "../../../components/PopularCourses";

const featuredTopics = topics.slice(0, 6);

const pathMeta = {
  beginner: { icon: "fas fa-seedling", color: "#4ade80", bg: "rgba(74,222,128,0.1)", border: "rgba(74,222,128,0.3)", label: "Beginner", desc: "Foundation & core concepts" },
  builder:  { icon: "fas fa-hammer",   color: "#67e8f9", bg: "rgba(103,232,249,0.1)", border: "rgba(103,232,249,0.3)", label: "Builder",  desc: "APIs, RAG & real applications" },
  advanced: { icon: "fas fa-rocket",   color: "#a78bfa", bg: "rgba(167,139,250,0.1)", border: "rgba(167,139,250,0.3)", label: "Advanced", desc: "Agents, fine-tuning & beyond" },
};

const buildItems = [
  { title: "AI Chatbot",      desc: "Streaming multi-turn conversations",     icon: "fas fa-comments",   accent: "#a78bfa" },
  { title: "Email Generator", desc: "Professional emails from bullet points",  icon: "fas fa-envelope",   accent: "#67e8f9" },
  { title: "Resume Builder",  desc: "ATS-optimized tailored resumes",          icon: "fas fa-file-lines", accent: "#4ade80" },
  { title: "AI Assistant",    desc: "Tool-using autonomous agent",             icon: "fas fa-robot",      accent: "#fbbf24" },
];

const stats = [
  { v: `${topics.length}+`, l: "Topics",         icon: "fas fa-book-open" },
  { v: "3",                  l: "Learning Paths", icon: "fas fa-route" },
  { v: "4",                  l: "Build Projects", icon: "fas fa-hammer" },
  { v: "100%",               l: "Free",           icon: "fas fa-infinity" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function GenAiHome() {
  return (
    <div style={{ background: "#04040a" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>

        {/* Particle field */}
        <div className="particle-field" />

        {/* Neural grid */}
        <div className="neural-grid" style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }} />

        {/* Radial glows */}
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 800, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "30%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="container-rr" style={{ position: "relative", zIndex: 1, textAlign: "center", paddingTop: 100 }}>

          <motion.div {...fadeUp(0.1)}>
            <div className="badge-rr" style={{ margin: "0 auto 28px", width: "fit-content" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#a78bfa", display: "inline-block", animation: "pulseGlow 2s ease-in-out infinite" }} />
              <i className="fas fa-microchip" style={{ fontSize: 10 }} />
              The AI Learning Platform for Builders
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            <h1 style={{
              fontSize: "clamp(3.5rem, 10vw, 8rem)", fontWeight: 900,
              lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 8,
              background: "linear-gradient(135deg, #f1f5f9 0%, #a78bfa 40%, #67e8f9 70%, #f1f5f9 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradientShift 5s ease infinite",
            }}>
              Gen AI
            </h1>
            <h2 style={{
              fontSize: "clamp(1.8rem, 5vw, 4rem)", fontWeight: 300,
              letterSpacing: "0.08em", marginBottom: 28, color: "#94a3b8",
            }}>
              in <span className="gradient-text" style={{ fontWeight: 700 }}>My Style</span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.35)}>
            <p style={{ fontSize: 18, color: "#64748b", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7, fontWeight: 300 }}>
              Master Generative AI from fundamentals to building real AI systems.
              Crafted for developers, students, and builders.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.45)} style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}>
            <Link to="/genai-course/topics" className="btn-rr">
              <span>Begin Learning</span>
              <i className="fas fa-arrow-right" style={{ fontSize: 11 }} />
            </Link>
            <Link to="/genai-course/build" className="btn-rr-outline">
              <span>Explore Projects</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.55)}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px"
            style={{ maxWidth: 640, margin: "0 auto", background: "rgba(124,58,237,0.15)", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(124,58,237,0.2)" }}
          >
            {stats.map(s => (
              <div key={s.l} style={{ padding: "24px 16px", textAlign: "center", background: "rgba(4,4,10,0.9)" }}>
                <i className={s.icon} style={{ fontSize: 14, color: "#7c3aed", marginBottom: 8, display: "block" }} />
                <div style={{ fontSize: 28, fontWeight: 900, background: "linear-gradient(135deg,#a78bfa,#67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 4 }}>{s.v}</div>
                <div style={{ fontSize: 10, color: "#475569", letterSpacing: "0.12em", textTransform: "uppercase" }}>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}
          style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ width: 1, height: 40, background: "linear-gradient(180deg, transparent, rgba(124,58,237,0.6))" }} />
          <span style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(124,58,237,0.5)" }}>Scroll</span>
        </motion.div>
      </section>

      {/* ── FEATURED TOPICS ── */}
      <section className="section-rr" style={{ borderTop: "1px solid rgba(124,58,237,0.1)" }}>
        <div className="container-rr">
          <GenAiSectionHeader eyebrow="Featured Topics" title="Start with the" highlight="Essentials"
            subtitle="Hand-picked topics to get you from zero to building real AI applications." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
            {featuredTopics.map((topic, i) => <GenAiTopicCard key={topic.id} topic={topic} index={i} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/genai-course/topics" className="btn-rr-outline">
              <span>View All {topics.length} Topics</span>
              <i className="fas fa-arrow-right" style={{ fontSize: 11 }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LEARNING PATHS ── */}
      <section className="section-rr" style={{ background: "rgba(13,13,26,0.5)", borderTop: "1px solid rgba(124,58,237,0.1)" }}>
        <div className="container-rr">
          <GenAiSectionHeader eyebrow="Learning Paths" title="Choose your" highlight="Journey"
            subtitle="Structured progressions designed for where you are and where you want to go." center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {Object.entries(learningPaths).map(([key, path], i) => {
              const meta = pathMeta[key];
              return (
                <motion.div key={key}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                  style={{
                    padding: 28, borderRadius: 16,
                    background: "rgba(13,13,26,0.7)",
                    border: `1px solid ${meta.border}`,
                    backdropFilter: "blur(12px)",
                    position: "relative", overflow: "hidden",
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${meta.color}, transparent)` }} />
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: meta.bg, border: `1px solid ${meta.border}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <i className={meta.icon} style={{ color: meta.color, fontSize: 18 }} />
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>{meta.label}</h3>
                  <p style={{ fontSize: 13, color: "#64748b", marginBottom: 20 }}>{meta.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {path.topics.slice(0, 4).map(tid => {
                      const t = topics.find(t => t.id === tid);
                      return t ? (
                        <Link key={tid} to={`/genai-course/${tid}`} style={{
                          display: "flex", alignItems: "center", gap: 8,
                          fontSize: 13, color: "#475569", textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                          onMouseEnter={e => e.currentTarget.style.color = meta.color}
                          onMouseLeave={e => e.currentTarget.style.color = "#475569"}
                        >
                          <div style={{ width: 4, height: 4, borderRadius: "50%", background: meta.color, flexShrink: 0 }} />
                          {t.title}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BUILD ── */}
      <section className="section-rr" style={{ borderTop: "1px solid rgba(124,58,237,0.1)" }}>
        <div className="container-rr">
          <GenAiSectionHeader eyebrow="Build Mode" title="Build real" highlight="AI Projects"
            subtitle="Production-ready code for real AI applications. Copy, customize, and ship." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
            {buildItems.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              >
                <Link to="/genai-course/build" style={{ textDecoration: "none", display: "block" }}>
                  <div style={{
                    padding: 28, borderRadius: 16,
                    background: "rgba(13,13,26,0.6)",
                    border: "1px solid rgba(124,58,237,0.12)",
                    backdropFilter: "blur(12px)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${item.accent}50`; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.4), 0 0 30px ${item.accent}20`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.12)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: `${item.accent}15`, border: `1px solid ${item.accent}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                      <i className={item.icon} style={{ color: item.accent, fontSize: 18 }} />
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: "#f1f5f9", marginBottom: 6 }}>{item.title}</h3>
                    <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{item.desc}</p>
                    <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 600, color: item.accent, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      Build it <i className="fas fa-arrow-right" style={{ fontSize: 9 }} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/genai-course/build" className="btn-rr">
              <span>Explore Build Mode</span>
              <i className="fas fa-arrow-right" style={{ fontSize: 11 }} />
            </Link>
          </div>
        </div>
      </section>
      <PopularCourses />
    </div>
  );
}
