"use client";
import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Connect",
    description:
      "Point R2PQ at your infrastructure — provide IP ranges, domains, API endpoints, or CI/CD pipelines. No agents required. Read-only, zero footprint.",
    color: "#00d4ff",
  },
  {
    num: "02",
    title: "Scan",
    description:
      "Our engine enumerates every cryptographic primitive in use: TLS handshakes, certificate chains, SSH key types, JWT signing algorithms, and library dependencies — catalogued and risk-ranked.",
    color: "#8b5cf6",
  },
  {
    num: "03",
    title: "Score",
    description:
      "Receive your Y2Q Score, a full vulnerability inventory, and a Merkle Root-anchored Sovereign Receipt — a tamper-proof artefact you can share with auditors, boards, and regulators.",
    color: "#3b82f6",
  },
  {
    num: "04",
    title: "Rotate",
    description:
      "Execute auto-generated rotation playbooks that migrate your cryptography to NIST-approved PQC standards (FIPS 203/204/205). R2PQ re-scans after each rotation to verify compliance.",
    color: "#06b6d4",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section relative overflow-hidden"
      style={{ background: "rgba(0,0,0,0.2)" }}
    >
      <div className="glow-blob w-[500px] h-[500px] bg-blue-700/7 top-0 left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">
            The R2PQ Process
          </span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            From Exposed to{" "}
            <span className="gradient-text">Quantum-Resistant</span> in Hours
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Harvest-now-decrypt-later attacks are already underway. The window
            to act is closing — R2PQ makes the path to PQC compliance fast,
            verifiable, and auditable.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[2.6rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-cyan-500/30 via-violet-500/30 to-cyan-500/0 pointer-events-none" />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-5 font-display font-bold text-base"
                style={{
                  background: `radial-gradient(circle at 40% 40%, ${s.color}22, ${s.color}06)`,
                  border: `1px solid ${s.color}40`,
                  color: s.color,
                  boxShadow: `0 0 20px ${s.color}20`,
                }}
              >
                {s.num}
              </div>
              <h3 className="font-display font-semibold text-white text-xl mb-3">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        {/* PQC algorithm callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-14 gradient-border glass rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-1">
              NIST-Approved Algorithms R2PQ Migrates To
            </p>
            <p className="text-slate-400 text-sm">
              All rotation playbooks target FIPS 203, 204 &amp; 205 standards
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["CRYSTALS-Kyber", "CRYSTALS-Dilithium", "FALCON", "SPHINCS+", "BIKE", "HQC"].map(
              (algo) => (
                <span
                  key={algo}
                  className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-cyan-300 border border-cyan-500/20 bg-cyan-500/5"
                >
                  {algo}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
