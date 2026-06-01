"use client";
import { motion } from "framer-motion";
import ScannerTerminal from "./ScannerTerminal";

const CAPS = [
  { value: "FIPS 203–205",      label: "ML-KEM · ML-DSA · SLH-DSA" },
  { value: "Air-gapped",        label: "Source never leaves your environment" },
  { value: "Sovereign Receipt", label: "Tamper-evident audit artefact" },
  { value: "Y2Q Risk Score",    label: "Per-asset, per-algorithm rating" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Single whisper-level glow */}
      <div
        className="glow-blob"
        style={{
          width: 800,
          height: 500,
          background: "rgba(14,165,233,0.035)",
          top: -80,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      />

      <div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full"
        style={{ paddingTop: "8rem", paddingBottom: "5rem" }}
      >
        {/* Two-column: text left, terminal right */}
        <div className="grid lg:grid-cols-[1fr_460px] gap-12 lg:gap-20 items-center">

          {/* ── Left: copy ── */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded px-3.5 py-1.5 mb-8 text-xs font-medium backdrop-blur-sm"
              style={{
                border: "1px solid rgba(14,165,233,0.18)",
                background: "rgba(14,165,233,0.05)",
                color: "#7dd3fc",
                letterSpacing: "0.02em",
              }}
            >
              <span
                className="rounded-full animate-pulse-slow"
                style={{ width: 6, height: 6, background: "#0ea5e9", display: "inline-block" }}
              />
              Post-Quantum Cryptography Scanner — NIST IR 8547 Aligned
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="font-display font-bold text-white"
              style={{
                fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.01em",
              }}
            >
              Find Your Quantum
              <br />
              Vulnerabilities{" "}
              <span className="gradient-text">Before They Find You</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 text-slate-400 leading-relaxed max-w-xl lg:max-w-none"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}
            >
              R2PQ —{" "}
              <strong className="text-slate-300 font-medium">Rotate to Post-Quantum</strong>{" "}
              — scans your codebase for cryptographic vulnerabilities, issues a{" "}
              <span style={{ color: "#38bdf8" }}>Y2Q Score</span>, and delivers{" "}
              <span style={{ color: "#7dd3fc" }}>Sovereign Receipts</span> backed by{" "}
              <span style={{ color: "#bae6fd" }}>Merkle Root</span> verification — so you
              can act before quantum computing makes today&apos;s encryption obsolete.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a href="#contact" className="btn-primary text-base px-7 py-3.5">
                Scan Your Codebase
              </a>
              <a
                href="#how-it-works"
                className="btn-ghost text-base px-7 py-3.5 flex items-center gap-2.5"
              >
                <span
                  className="flex items-center justify-center rounded"
                  style={{
                    width: 28,
                    height: 28,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <svg
                    className="w-3 h-3"
                    style={{ transform: "translateX(1px)" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                See How It Works
              </a>
            </motion.div>
          </div>

          {/* ── Right: terminal ── */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <ScannerTerminal />
          </motion.div>
        </div>

        {/* ── Full-width: divider + capability row ── */}
        <motion.div custom={5} initial="hidden" animate="show" variants={fadeUp}>
          <div className="h-line mt-16 mb-10" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
            {CAPS.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="font-display font-bold gradient-text"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)" }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-slate-600 mt-1.5 font-medium leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#04060f] to-transparent z-10" />
    </section>
  );
}
