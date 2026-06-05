"use client";
import { motion } from "framer-motion";
import ScannerTerminal from "./ScannerTerminal";
import { BOOKING_URL } from "@/lib/config";

const CAPS = [
  { value: "Complete Inventory",   label: "Every algorithm catalogued" },
  { value: "Y2Q Risk Score",       label: "Per-file, per-algorithm rating" },
  { value: "Migration Roadmap",    label: "Prioritised by risk and deadline" },
  { value: "Sovereign Receipt",    label: "Tamper-evident audit artefact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Whisper glow */}
      <div
        className="glow-blob"
        style={{
          width: 800,
          height: 500,
          background: "rgba(53,133,188,0.022)",
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
                border: "1px solid rgba(53,133,188,0.18)",
                background: "rgba(53,133,188,0.04)",
                color: "#7db8d8",
                letterSpacing: "0.02em",
              }}
            >
              <span
                className="rounded-full animate-pulse-slow"
                style={{ width: 6, height: 6, background: "#3585bc", display: "inline-block" }}
              />
              Cryptographic Visibility + Agility — Source-Layer Detection
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="font-display font-bold text-white"
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 4.2rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.01em",
              }}
            >
              Know Every Algorithm
              <br />
              in Your Codebase.{" "}
              <span className="gradient-text">Migrate With Confidence.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 text-slate-400 leading-relaxed max-w-xl lg:max-w-none"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}
            >
              R2PQ —{" "}
              <strong className="text-slate-300 font-medium">Rotate to Post-Quantum</strong>{" "}
              — gives regulated organisations complete cryptographic visibility: every
              algorithm, every file, every dependency. You receive a{" "}
              <span style={{ color: "#5a9ec9" }}>Y2Q Risk Score</span>, a{" "}
              <span style={{ color: "#7db8d8" }}>prioritised migration roadmap</span>, and a{" "}
              <span style={{ color: "#a8c8de" }}>Sovereign Receipt</span> you can show
              your board and regulators.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a href={BOOKING_URL} className="btn-primary text-base px-7 py-3.5">
                Book a Readiness Assessment
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
                  style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.15rem)" }}
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
