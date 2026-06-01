"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(14,165,233,0.06) 0%, transparent 65%)",
        }}
      />
      <div className="h-line absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-index" style={{ marginBottom: "1.25rem" }}>Get Your Y2Q Score</span>

          <h2
            className="font-display font-bold text-white leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}
          >
            Is Your Codebase <br />
            <span className="gradient-text">Quantum-Ready?</span>
          </h2>

          <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto mb-10">
            Run a free scan in minutes. Get your Y2Q Score, a full vulnerability
            report, and a Merkle Root-verified Sovereign Receipt — no agents,
            no code changes, no commitment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:hello@r2pq.io" className="btn-primary text-base px-8 py-4">
              Start Free Scan
            </a>
            <a href="mailto:hello@r2pq.io" className="btn-ghost text-base px-8 py-4">
              Talk to Our Team
            </a>
          </div>

          <p className="mt-7 text-xs text-slate-600">
            Read-only · No agents installed · Findings-only · Sovereign Receipt issued on completion
          </p>
        </motion.div>
      </div>

      <div className="h-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
