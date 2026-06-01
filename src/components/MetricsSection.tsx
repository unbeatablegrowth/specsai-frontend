"use client";
import { motion } from "framer-motion";

const THREAT_ITEMS = [
  {
    label: "Harvest Now, Decrypt Later",
    desc: "Adversaries are storing encrypted traffic today to decrypt once quantum computers are available. Your data is already at risk.",
    color: "#f87171",
  },
  {
    label: "NIST IR 8547: Deprecation 2030, Disallowed 2035",
    desc: "NIST IR 8547 calls for deprecating quantum-vulnerable algorithms (RSA, ECC, DH) by 2030 and disallowing them by 2035. Federal procurement and regulated industries are already flowing that pressure downstream to private firms.",
    color: "#fbbf24",
  },
  {
    label: "Y2Q Window Closing",
    desc: "Cryptographically-relevant quantum computers are estimated to arrive within 7–10 years. The time to prepare is now.",
    color: "#00d4ff",
  },
];

export default function MetricsSection() {
  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="glow-blob w-[700px] h-[400px] bg-cyan-600/6 -top-20 left-1/2 -translate-x-1/2 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">
            The Quantum Threat Is Real
          </span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Why Organisations Choose{" "}
            <span className="gradient-text">R2PQ</span>
          </h2>
        </motion.div>

        {/* Threat context cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {THREAT_ITEMS.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass gradient-border rounded-2xl p-6"
            >
              <div
                className="w-2 h-2 rounded-full mb-4"
                style={{ background: t.color, boxShadow: `0 0 10px ${t.color}` }}
              />
              <h4 className="font-display font-semibold text-white mb-2">{t.label}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
