import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Item({ item, index, isOpen, onToggle }) {
  return (
    <div style={{
      borderRadius: 10, marginBottom: 8, overflow: "hidden",
      border: isOpen ? "1px solid rgba(124,58,237,0.35)" : "1px solid rgba(124,58,237,0.1)",
      background: isOpen ? "rgba(124,58,237,0.06)" : "rgba(13,13,26,0.5)",
      backdropFilter: "blur(8px)",
      transition: "all 0.25s ease",
    }}>
      <button onClick={onToggle} style={{
        width: "100%", display: "flex", alignItems: "flex-start",
        justifyContent: "space-between", padding: "16px 20px",
        background: "transparent", border: "none", cursor: "pointer", textAlign: "left",
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, flex: 1 }}>
          <span style={{
            fontSize: 11, fontWeight: 800, fontFamily: "monospace",
            color: isOpen ? "#a78bfa" : "rgba(124,58,237,0.3)",
            minWidth: "1.8rem", marginTop: 2, transition: "color 0.25s",
          }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span style={{
            fontSize: 14, fontWeight: 600, lineHeight: 1.5,
            color: isOpen ? "#f1f5f9" : "#94a3b8",
            transition: "color 0.25s",
          }}>
            {item.q}
          </span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.22 }}
          style={{ flexShrink: 0, marginLeft: 12, marginTop: 2 }}>
          <i className="fas fa-plus" style={{
            fontSize: 11,
            color: isOpen ? "#a78bfa" : "rgba(124,58,237,0.3)",
          }} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <div style={{ padding: "0 20px 18px 20px" }}>
              <div style={{ height: 1, marginBottom: 14, background: "linear-gradient(90deg, rgba(124,58,237,0.3), transparent)" }} />
              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.75 }}>{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GenAiAccordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div>
      {items.map((item, i) => (
        <Item key={i} item={item} index={i} isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)} />
      ))}
    </div>
  );
}
