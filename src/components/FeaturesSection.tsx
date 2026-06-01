"use client";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "Infrastructure Scanner",
    description:
      "Deep-scan TLS certificates, API endpoints, SSH keys, code dependencies, and HSMs for RSA, ECC, and DH — the algorithms quantum computers will break first.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Y2Q Score",
    description:
      "Your proprietary Years-to-Quantum risk score — a single number that quantifies how exposed your cryptographic surface is as quantum computing power grows. Updated continuously.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Sovereign Receipts",
    description:
      "Cryptographically signed, tamper-evident audit receipts issued per scan — giving you and your auditors verifiable proof of your security posture at any point in time.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: "Merkle Root Verification",
    description:
      "Every scan report is hashed into a Merkle tree. The root is published on-chain, making your vulnerability data immutable, auditable, and independently verifiable.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: "Rotation Playbooks",
    description:
      "Auto-generated, step-by-step migration guides to NIST-approved post-quantum algorithms — CRYSTALS-Kyber, CRYSTALS-Dilithium, FALCON, and SPHINCS+ — prioritised by risk.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Continuous Monitoring",
    description:
      "R2PQ watches your infrastructure 24/7 for newly deployed quantum-vulnerable patterns, certificate renewals with weak algorithms, and drift from your approved crypto baseline.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section relative overflow-hidden">
      {/* Single whisper glow */}
      <div
        className="glow-blob"
        style={{ width: 600, height: 500, background: "rgba(14,165,233,0.03)", top: 60, right: -200, pointerEvents: "none" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="section-index">{"//03 CAPABILITIES"}</span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Six Layers of{" "}
            <span className="gradient-text">Quantum Defence</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            From initial scan to verified remediation — everything you need to
            make your codebase quantum-resistant before Y2Q arrives.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="gradient-border glass p-7 rounded-xl group cursor-default"
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  background: "rgba(14,165,233,0.07)",
                  border: "1px solid rgba(14,165,233,0.14)",
                  color: "#38bdf8",
                }}
              >
                {f.icon}
              </div>

              <h3 className="font-display font-semibold text-white text-[1rem] mb-2 tracking-tight">
                {f.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>

              {/* Hover underline */}
              <div
                className="mt-5 h-px w-0 group-hover:w-full transition-[width] duration-500"
                style={{ background: "linear-gradient(90deg, #0ea5e9, transparent)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
