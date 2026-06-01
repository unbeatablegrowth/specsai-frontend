"use client";
import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Connect",
    description:
      "Point R2PQ at your codebase — a Git repo or local source tree. No agents required. Read-only, zero footprint.",
  },
  {
    num: "02",
    title: "Scan",
    description:
      "Our engine scans your source and config files for quantum-vulnerable algorithms — RSA, ECDSA/ECDH, SHA-1, 3DES, MD5 — catalogued and risk-ranked.",
  },
  {
    num: "03",
    title: "Score",
    description:
      "Receive your Y2Q Score, a full vulnerability inventory, and a Merkle Root-anchored Sovereign Receipt — a tamper-proof artefact you can share with auditors, boards, and regulators.",
  },
  {
    num: "04",
    title: "Rotate",
    description:
      "Execute auto-generated rotation playbooks that migrate your cryptography to NIST-approved PQC standards (FIPS 203/204/205). R2PQ re-scans after each rotation to verify compliance.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section relative overflow-hidden"
      style={{ background: "rgba(0,0,0,0.15)" }}
    >
      {/* Whisper glow */}
      <div
        className="glow-blob"
        style={{ width: 500, height: 400, background: "rgba(14,165,233,0.025)", top: 0, left: "50%", transform: "translateX(-50%)", pointerEvents: "none" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-18"
          style={{ marginBottom: "4.5rem" }}
        >
          <span className="section-index">{"//02 HOW IT WORKS"}</span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            From Exposed to{" "}
            <span className="gradient-text">Quantum-Resistant</span> in Hours
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            Harvest-now-decrypt-later attacks are already underway. The window
            to act is closing — R2PQ makes the path to PQC compliance fast,
            verifiable, and auditable.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden lg:block absolute h-px pointer-events-none"
            style={{
              top: "1.75rem",
              left: "12.5%",
              right: "12.5%",
              background: "linear-gradient(90deg, rgba(14,165,233,0.2), rgba(14,165,233,0.08), transparent)",
            }}
          />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Step circle */}
              <div
                className="relative z-10 flex items-center justify-center mb-5 font-display font-bold text-sm"
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(14,165,233,0.07)",
                  border: "1px solid rgba(14,165,233,0.2)",
                  color: "#38bdf8",
                  boxShadow: "0 0 16px rgba(14,165,233,0.08)",
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

        {/* PQC algorithm callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-14 gradient-border glass rounded-xl p-6 flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <p className="section-index mb-1" style={{ marginBottom: "0.35rem" }}>
              NIST-Approved Target Algorithms
            </p>
            <p className="text-slate-500 text-sm">
              All rotation playbooks target FIPS 203, 204 &amp; 205 standards
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["CRYSTALS-Kyber", "CRYSTALS-Dilithium", "FALCON", "SPHINCS+", "BIKE", "HQC"].map((algo) => (
              <span
                key={algo}
                className="font-mono font-semibold"
                style={{
                  padding: "0.25rem 0.65rem",
                  borderRadius: 4,
                  fontSize: "0.7rem",
                  color: "#7dd3fc",
                  border: "1px solid rgba(14,165,233,0.16)",
                  background: "rgba(14,165,233,0.05)",
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
