"use client";
import { motion } from "framer-motion";
import ParticleNetwork from "./ParticleNetwork";

const STATS = [
  { value: "10K+", label: "Active Users" },
  { value: "150+", label: "Countries" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "$2B+", label: "Value Processed" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Particle canvas */}
      <ParticleNetwork />

      {/* Radial glow blobs */}
      <div
        className="glow-blob w-[700px] h-[600px] bg-cyan-500/10 -top-40 left-1/2 -translate-x-1/2"
        style={{ zIndex: 1 }}
      />
      <div
        className="glow-blob w-[500px] h-[500px] bg-violet-600/10 top-1/3 -right-40"
        style={{ zIndex: 1 }}
      />
      <div
        className="glow-blob w-[400px] h-[400px] bg-blue-500/8 bottom-10 -left-20"
        style={{ zIndex: 1 }}
      />

      {/* Content */}
      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center"
        style={{ paddingTop: "7rem", paddingBottom: "5rem" }}
      >
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 mb-7 text-xs font-medium text-cyan-300 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-slow" />
          Introducing R2PQ — Next-Gen AI Intelligence
        </motion.div>

        {/* Main heading */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-display font-bold leading-[1.08] tracking-tight text-white"
          style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
        >
          Power Your Business With{" "}
          <span className="gradient-text">AI Intelligence</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-6 max-w-2xl text-slate-400 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}
        >
          R2PQ delivers real-time AI insights, intelligent automation, and
          seamless integrations — giving ambitious teams the edge they need to
          move faster and scale further.
        </motion.p>

        {/* CTA row */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-primary text-base px-7 py-3.5">
            Start Building Free
          </a>
          <a href="#how-it-works" className="btn-ghost text-base px-7 py-3.5 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 translate-x-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Watch Demo
          </a>
        </motion.div>

        {/* Divider */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="h-line w-full max-w-lg mt-14 mb-10 mx-auto"
        />

        {/* Stats */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10"
        >
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display font-bold text-2xl sm:text-3xl gradient-text">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050510] to-transparent z-10" />
    </section>
  );
}
