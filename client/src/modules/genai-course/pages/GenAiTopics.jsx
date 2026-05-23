import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import GenAiTopicCard from "../components/GenAiTopicCard";
import topics, { categories } from "../data/genaiTopics";

export default function GenAiTopics() {
  const [cat,   setCat]   = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let r = topics;
    if (cat !== "all") r = r.filter(t => t.category === cat);
    if (query.trim()) {
      const q = query.toLowerCase();
      r = r.filter(t => t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q));
    }
    return r;
  }, [cat, query]);

  const allCats = [{ id: "all", label: "All", icon: "fas fa-th" }, ...categories];

  return (
    <div style={{ background: "#04040a", minHeight: "100vh" }}>

      {/* Header */}
      <div style={{ position: "relative", paddingTop: 120, paddingBottom: 60, overflow: "hidden" }}>
        <div className="neural-grid" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 300, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="container-rr" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="ornament" style={{ marginBottom: 20 }}><span>Knowledge Library</span></div>
            <h1 style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900,
              letterSpacing: "-0.02em", marginBottom: 12,
              background: "linear-gradient(135deg, #f1f5f9, #a78bfa 50%, #67e8f9)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Generative AI Topics
            </h1>
            <p style={{ fontSize: 16, color: "#64748b", marginBottom: 32, fontWeight: 300 }}>
              {topics.length} topics — from first principles to production systems.
            </p>

            {/* Search */}
            <div style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "12px 18px", maxWidth: 440,
              background: "rgba(13,13,26,0.8)",
              border: "1px solid rgba(124,58,237,0.25)",
              borderRadius: 10, backdropFilter: "blur(12px)",
            }}>
              <i className="fas fa-magnifying-glass" style={{ color: "rgba(124,58,237,0.5)", fontSize: 13 }} />
              <input
                type="text" value={query} onChange={e => setQuery(e.target.value)}
                placeholder="Search topics..."
                style={{
                  flex: 1, background: "transparent", border: "none", outline: "none",
                  fontSize: 14, color: "#e2e8f0", fontFamily: "Inter, sans-serif",
                }}
              />
              {query && (
                <button onClick={() => setQuery("")} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(124,58,237,0.5)", fontSize: 12 }}>
                  <i className="fas fa-xmark" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-rr" style={{ paddingBottom: 80 }}>

        {/* Category filter */}
        <div style={{
          display: "flex", gap: 0, overflowX: "auto",
          borderBottom: "1px solid rgba(124,58,237,0.12)",
          marginBottom: 40, paddingBottom: 0,
        }} className="scrollbar-hide">
          {allCats.map(c => {
            const active = cat === c.id;
            const count  = c.id === "all" ? topics.length : topics.filter(t => t.category === c.id).length;
            return (
              <button key={c.id} onClick={() => setCat(c.id)}
                style={{
                  padding: "12px 18px", fontSize: 11, fontWeight: 600,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  color: active ? "#a78bfa" : "#475569",
                  borderBottom: active ? "2px solid #7c3aed" : "2px solid transparent",
                  background: "transparent", border: "none", borderBottom: active ? "2px solid #7c3aed" : "2px solid transparent",
                  cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s",
                  marginBottom: -1,
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.color = "#a78bfa"; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.color = "#475569"; }}
              >
                {c.label}
                <span style={{ marginLeft: 6, fontSize: 10, color: active ? "rgba(124,58,237,0.6)" : "rgba(255,255,255,0.15)" }}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Count */}
        <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(124,58,237,0.4)", marginBottom: 24 }}>
          {filtered.length} {filtered.length === 1 ? "topic" : "topics"}
          {query && ` — "${query}"`}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {filtered.map((topic, i) => <GenAiTopicCard key={topic.id} topic={topic} index={i} />)}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <p style={{ color: "#475569", fontSize: 15 }}>No topics found for "{query}"</p>
            <button onClick={() => { setQuery(""); setCat("all"); }} className="btn-rr-outline" style={{ marginTop: 20 }}>
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
