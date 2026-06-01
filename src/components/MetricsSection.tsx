"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Metric {
  end: number;
  suffix: string;
  prefix?: string;
  label: string;
  sub: string;
}

const METRICS: Metric[] = [
  { end: 500000, suffix: "+", label: "Vulnerabilities Found", sub: "Across all scans" },
  { end: 1200, suffix: "+", label: "Orgs Scanned", sub: "Across 40+ countries" },
  { end: 99.7, suffix: "%", label: "Detection Accuracy", sub: "Independently verified" },
  { end: 3, suffix: "hrs", label: "Avg. Time to Receipt", sub: "From scan to Sovereign Receipt" },
];

function Counter({ metric }: { metric: Metric }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const end = metric.end;
    const raf = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((end * ease).toFixed(end < 10 ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [inView, metric.end]);

  const display =
    metric.end < 10 ? count.toFixed(1) : Math.round(count).toLocaleString();

  return (
    <div ref={ref} className="text-center">
      <div
        className="font-display font-bold gradient-text"
        style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}
      >
        {metric.prefix ?? ""}
        {display}
        {metric.suffix}
      </div>
      <div className="mt-2 text-base font-semibold text-white">{metric.label}</div>
      <div className="mt-1 text-sm text-slate-500">{metric.sub}</div>
    </div>
  );
}

const THREAT_ITEMS = [
  {
    label: "Harvest Now, Decrypt Later",
    desc: "Adversaries are storing encrypted traffic today to decrypt once quantum computers are available. Your data is already at risk.",
    color: "#f87171",
  },
  {
    label: "NIST Deadline: 2030",
    desc: "NIST mandates migration away from RSA and ECC by 2030. Many large organisations will take 5–7 years to fully transition.",
    color: "#fbbf24",
  },
  {
    label: "Y2Q Window Closing",
    desc: "Cryptographically-relevant quantum computers are estimated to arrive within 7–10 years. The time to prepare is now.",
    color: "#00d4ff",
  },
];

export default function MetricsSection() {
  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="glow-blob w-[700px] h-[400px] bg-cyan-600/6 -top-20 left-1/2 -translate-x-1/2 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)",
        }}
      />

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
            The Quantum Threat Is Real
          </span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Why Organisations Choose{" "}
            <span className="gradient-text">R2PQ</span>
          </h2>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16"
        >
          {METRICS.map((m) => (
            <Counter key={m.label} metric={m} />
          ))}
        </motion.div>

        <div className="h-line mb-14" />

        {/* Threat context cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {THREAT_ITEMS.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass gradient-border rounded-2xl p-6"
            >
              <div
                className="w-2 h-2 rounded-full mb-4"
                style={{ background: t.color, boxShadow: `0 0 10px ${t.color}` }}
              />
              <h4 className="font-display font-semibold text-white mb-2">{t.label}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
