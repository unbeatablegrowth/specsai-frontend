"use client";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.607L5 14.5m14.8.5l1.196 4.784A1.5 1.5 0 0119.5 21H4.5a1.5 1.5 0 01-1.496-1.216L4.2 15m14.6 0H5" />
      </svg>
    ),
    color: "cyan",
    title: "AI Intelligence Core",
    description:
      "Harness advanced ML models trained on billions of data points to deliver real-time decision support and predictive analytics.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    color: "violet",
    title: "Seamless Integrations",
    description:
      "Connect R2PQ to your existing stack via REST API, webhooks, or 200+ native connectors — no-code setup in minutes.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    color: "blue",
    title: "Real-Time Analytics",
    description:
      "Interactive dashboards with live data streams, customisable KPIs, and AI-generated summaries delivered to your team.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: "cyan",
    title: "Enterprise Security",
    description:
      "SOC 2 Type II certified, end-to-end encrypted, with role-based access control and full audit trails.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: "violet",
    title: "Infinite Scalability",
    description:
      "Auto-scaling infrastructure built on Kubernetes. From one user to one million — zero performance degradation.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    color: "blue",
    title: "Global Reach",
    description:
      "Deployed across 20 AWS/GCP regions with sub-50ms latency for 150+ countries and 99.9% uptime SLA.",
  },
];

const colorMap: Record<string, string> = {
  cyan: "rgba(0,212,255,0.15)",
  violet: "rgba(139,92,246,0.15)",
  blue: "rgba(59,130,246,0.15)",
};

const borderMap: Record<string, string> = {
  cyan: "rgba(0,212,255,0.25)",
  violet: "rgba(139,92,246,0.25)",
  blue: "rgba(59,130,246,0.25)",
};

const textMap: Record<string, string> = {
  cyan: "#00d4ff",
  violet: "#a78bfa",
  blue: "#60a5fa",
};

export default function FeaturesSection() {
  return (
    <section id="features" className="section relative overflow-hidden">
      {/* Ambient glows */}
      <div className="glow-blob w-[600px] h-[500px] bg-violet-700/8 top-20 -left-60 pointer-events-none" />
      <div className="glow-blob w-[500px] h-[400px] bg-cyan-600/6 bottom-10 -right-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">
            Platform Capabilities
          </span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Everything You Need to{" "}
            <span className="gradient-text">Scale</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            A complete AI infrastructure layer — from raw data ingestion to
            actionable insight delivery.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.07,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="gradient-border glass p-7 rounded-2xl group cursor-default"
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: colorMap[f.color],
                  border: `1px solid ${borderMap[f.color]}`,
                  color: textMap[f.color],
                }}
              >
                {f.icon}
              </div>

              <h3 className="font-display font-semibold text-white text-[1.05rem] mb-2">
                {f.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {f.description}
              </p>

              {/* Hover underline accent */}
              <div
                className="mt-5 h-px w-0 group-hover:w-full transition-[width] duration-500"
                style={{
                  background: `linear-gradient(90deg, ${textMap[f.color]}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
