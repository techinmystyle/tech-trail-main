import { motion } from "framer-motion";

export default function GenAiSectionHeader({ eyebrow, title, highlight, subtitle, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ marginBottom: 48, textAlign: center ? "center" : "left" }}
    >
      {eyebrow && (
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "4px 14px", borderRadius: 100, marginBottom: 16,
          background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.25)",
          fontSize: 10, fontWeight: 700, letterSpacing: "0.2em",
          textTransform: "uppercase", color: "#a78bfa",
        }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#7c3aed", display: "inline-block" }} />
          {eyebrow}
        </div>
      )}

      <h2 style={{
        fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800,
        letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 14,
        color: "#f1f5f9",
      }}>
        {title}{" "}
        {highlight && (
          <span style={{
            background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p style={{
          fontSize: 16, color: "#64748b", lineHeight: 1.7, fontWeight: 300,
          maxWidth: 520, margin: center ? "0 auto" : "0",
        }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
