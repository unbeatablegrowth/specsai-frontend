"use client";
import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Connect",
    description:
      "Integrate R2PQ with your existing tools via our REST API, webhooks, or plug-and-play connectors. Setup takes under 5 minutes.",
    color: "#00d4ff",
  },
  {
    num: "02",
    title: "Configure",
    description:
      "Use our no-code workflow builder to define your AI pipelines, triggers, and output formats — no engineering required.",
    color: "#8b5cf6",
  },
  {
    num: "03",
    title: "Deploy",
    description:
      "Go live instantly with zero-downtime deployments. Our infrastructure auto-scales with your demand from day one.",
    color: "#3b82f6",
  },
  {
    num: "04",
    title: "Optimise",
    description:
      "R2PQ continuously learns from your data, improving model accuracy and surfacing opportunities you'd otherwise miss.",
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
            How It Works
          </span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            From Zero to{" "}
            <span className="gradient-text">Production</span> in Minutes
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            A streamlined path from integration to impact — built for teams
            that can&apos;t afford to wait.
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
              transition={{
                delay: i * 0.1,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Step number circle */}
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

              <h3 className="font-display font-semibold text-white text-xl mb-3">
                {s.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
