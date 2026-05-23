import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const catAccent = {
  foundations:  "#a78bfa",
  architecture: "#67e8f9",
  prompting:    "#4ade80",
  embeddings:   "#f472b6",
  rag:          "#fb923c",
  agents:       "#facc15",
  finetuning:   "#34d399",
  devstack:     "#60a5fa",
  applications: "#a78bfa",
  multimodal:   "#f472b6",
  safety:       "#f87171",
  optimization: "#67e8f9",
  advanced:     "#c084fc",
};

export default function GenAiTopicCard({ topic, index = 0 }) {
  const accent = catAccent[topic.category] || "#a78bfa";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      style={{ height: "100%" }}
    >
      <Link to={`/genai-course/${topic.id}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
        <div style={{
          height: "100%",
          padding: 24,
          borderRadius: 14,
          background: "rgba(13,13,26,0.7)",
          border: "1px solid rgba(124,58,237,0.12)",
          backdropFilter: "blur(12px)",
          display: "flex", flexDirection: "column",
          position: "relative", overflow: "hidden",
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = `${accent}40`;
            e.currentTarget.style.boxShadow = `0 16px 48px rgba(0,0,0,0.4), 0 0 30px ${accent}15`;
            e.currentTarget.style.background = "rgba(13,13,26,0.9)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "rgba(124,58,237,0.12)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.background = "rgba(13,13,26,0.7)";
          }}
        >
          {/* Top accent line */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 2,
            background: `linear-gradient(90deg, transparent, ${accent}80, transparent)`,
          }} />

          {/* Category pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "3px 10px", borderRadius: 100, marginBottom: 14,
            background: `${accent}12`, border: `1px solid ${accent}30`,
            fontSize: 9, fontWeight: 700, letterSpacing: "0.15em",
            textTransform: "uppercase", color: accent, width: "fit-content",
          }}>
            {topic.category}
          </div>

          {/* Title */}
          <h3 style={{
            fontSize: 17, fontWeight: 700, color: "#f1f5f9",
            marginBottom: 10, lineHeight: 1.3, flex: 1,
          }}>
            {topic.title}
          </h3>

          {/* Description */}
          <p style={{
            fontSize: 13, color: "#64748b", lineHeight: 1.65,
            marginBottom: 18,
            display: "-webkit-box", WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical", overflow: "hidden",
          }}>
            {topic.description}
          </p>

          {/* Footer */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            paddingTop: 14, borderTop: "1px solid rgba(124,58,237,0.08)",
          }}>
            <div style={{ display: "flex", gap: 6 }}>
              {topic.tags?.map(tag => (
                <span key={tag} style={{
                  fontSize: 9, fontWeight: 600, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "rgba(124,58,237,0.5)",
                }}>
                  {tag}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, color: "#334155" }}>
              <i className="fas fa-clock" style={{ fontSize: 9 }} />
              {topic.readTime}
            </div>
          </div>

          {/* Hover arrow */}
          <div style={{
            display: "flex", alignItems: "center", gap: 6,
            marginTop: 12, fontSize: 10, fontWeight: 700,
            color: accent, letterSpacing: "0.1em", textTransform: "uppercase",
            opacity: 0, transition: "opacity 0.3s",
          }}
            className="card-arrow"
          >
            <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${accent}60, transparent)` }} />
            <i className="fas fa-arrow-right" style={{ fontSize: 9 }} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
