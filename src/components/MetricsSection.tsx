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
  { end: 10000, suffix: "+", label: "Active Users", sub: "Teams worldwide" },
  { end: 150, suffix: "+", label: "Countries", sub: "Global coverage" },
  { end: 99.9, suffix: "%", label: "Uptime SLA", sub: "Guaranteed reliability" },
  { end: 2, suffix: "B+", prefix: "$", label: "Value Processed", sub: "Across all accounts" },
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
      <div className="font-display font-bold gradient-text" style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}>
        {metric.prefix ?? ""}
        {display}
        {metric.suffix}
      </div>
      <div className="mt-2 text-base font-semibold text-white">{metric.label}</div>
      <div className="mt-1 text-sm text-slate-500">{metric.sub}</div>
    </div>
  );
}

export default function MetricsSection() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Glow blobs */}
      <div className="glow-blob w-[700px] h-[400px] bg-cyan-600/6 -top-20 left-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Full-width gradient banner */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">
            By the Numbers
          </span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Trusted by Teams{" "}
            <span className="gradient-text">Across the Globe</span>
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {METRICS.map((m) => (
            <Counter key={m.label} metric={m} />
          ))}
        </motion.div>

        {/* Separator */}
        <div className="h-line mt-16" />

        {/* Logos / trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-500 text-sm mb-6">
            Powering operations at forward-thinking companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {["Acme Corp", "Vercel", "Stripe", "Linear", "Notion", "Figma"].map(
              (name) => (
                <span
                  key={name}
                  className="font-display font-bold text-lg text-slate-400 tracking-tight"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
