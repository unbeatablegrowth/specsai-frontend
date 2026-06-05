"use client";
import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Assess",
    description:
      "Point R2PQ at your codebase — a Git repo or local source tree. We scan every source and config file for quantum-vulnerable algorithms: RSA, ECDSA/ECDH, SHA-1, 3DES, MD5. Read-only, no agents, no data leaves your environment.",
  },
  {
    num: "02",
    title: "Inventory",
    description:
      "You receive a complete crypto inventory: every algorithm, every file location, every dependency, risk-ranked by quantum exposure. Your Y2Q Risk Score in a single number — per algorithm, per file, per codebase.",
  },
  {
    num: "03",
    title: "Roadmap",
    description:
      "You receive a prioritised migration roadmap — what to migrate first, to which NIST-approved algorithm — plus a Sovereign Receipt, a Merkle Root-anchored artefact you can hand to auditors, your board, or regulators as proof.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="how-it-works"
      className="section relative overflow-hidden"
      style={{ background: "rgba(0,0,0,0.12)" }}
    >
      <div
        className="glow-blob"
        style={{
          width: 500,
          height: 400,
          background: "rgba(53,133,188,0.018)",
          top: 0,
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
          className="text-center"
          style={{ marginBottom: "4.5rem" }}
        >
          <span className="section-index">{"//03 HOW IT WORKS"}</span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            From Scan to Roadmap{" "}
            <span className="gradient-text">in Hours</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            No agents installed. No code changes. No data stored outside your
            environment.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute h-px pointer-events-none"
            style={{
              top: "1.75rem",
              left: "14%",
              right: "14%",
              background: "linear-gradient(90deg, rgba(53,133,188,0.18), rgba(53,133,188,0.06), transparent)",
            }}
          />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Step circle */}
              <div
                className="relative z-10 flex items-center justify-center mb-6 font-display font-bold text-sm"
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(53,133,188,0.06)",
                  border: "1px solid rgba(53,133,188,0.18)",
                  color: "#5a9ec9",
                }}
              >
                {s.num}
              </div>
              <h3 className="font-display font-semibold text-white text-xl mb-3 tracking-tight">
                {s.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-14 gradient-border glass rounded-xl p-6 flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <p className="section-index mb-1" style={{ marginBottom: "0.35rem" }}>
              NIST-Approved Target Algorithms
            </p>
            <p className="text-slate-500 text-sm">
              All migration guidance targets FIPS 203, 204 &amp; 205 standards
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["ML-KEM (Kyber)", "ML-DSA (Dilithium)", "SLH-DSA (SPHINCS+)", "FALCON"].map((algo) => (
              <span
                key={algo}
                className="font-mono font-semibold"
                style={{
                  padding: "0.25rem 0.65rem",
                  borderRadius: 4,
                  fontSize: "0.7rem",
                  color: "#7db8d8",
                  border: "1px solid rgba(53,133,188,0.16)",
                  background: "rgba(53,133,188,0.05)",
                  letterSpacing: "0.03em",
                }}
              >
                {algo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
