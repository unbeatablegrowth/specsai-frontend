"use client";
import { motion } from "framer-motion";

const STAKES = [
  {
    label: "Harvest Now, Decrypt Later",
    desc: "Adversaries are already collecting your encrypted data — member records, patient files, client communications — to decrypt once quantum computers are available. That data is at risk today, not in ten years.",
    color: "#f87171",
  },
  {
    label: "Regulatory Deadlines Are Set",
    desc: "NIST IR 8547 calls for deprecating RSA, ECC, and DH by 2030 and disallowing them entirely by 2035. Regulated mid-market organisations are already receiving questions from examiners, auditors, and partners.",
    color: "#fbbf24",
  },
  {
    label: "Migration Takes Longer Than You Think",
    desc: "Full cryptographic migration across a real codebase takes 18–36 months on average. Organisations that start now will finish before the deadlines. Those that wait may not have that option.",
    color: "#3585bc",
  },
];

export default function StakesSection() {
  return (
    <section id="stakes" className="section relative overflow-hidden">
      <div
        className="glow-blob"
        style={{
          width: 700,
          height: 400,
          background: "rgba(53,133,188,0.02)",
          top: -80,
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-14"
        >
          <span className="section-index">{"//01 THE STAKES"}</span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            The Window to Act{" "}
            <span className="gradient-text">Is Narrowing</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            Post-quantum migration is not a future problem. The data you
            encrypt today is already being collected.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {STAKES.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass gradient-border rounded-xl p-7"
            >
              <div
                className="w-2 h-2 rounded-full mb-5"
                style={{ background: s.color }}
              />
              <h4 className="font-display font-semibold text-white mb-3 text-[1rem]">
                {s.label}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
