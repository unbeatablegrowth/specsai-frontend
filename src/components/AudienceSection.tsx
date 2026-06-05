"use client";
import { motion } from "framer-motion";

const AUDIENCES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    title: "Credit Unions & Community Banks",
    desc: "You handle member financial data under NCUA or state examination. Examiners are already beginning to ask about your post-quantum posture — and your technology vendors and correspondent banks will follow.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Healthcare Organisations",
    desc: "Clinics, health networks, and medical practices transmit PHI over encrypted channels every day. HIPAA is table stakes — post-quantum readiness is the next compliance layer your auditors will ask about.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Regional Professional Services",
    desc: "Legal, accounting, and advisory firms hold sensitive client data under duty-of-care obligations. Know exactly what algorithms are protecting that data — and whether they will hold against the quantum threat.",
  },
];

export default function AudienceSection() {
  return (
    <section id="audience" className="section relative overflow-hidden">
      <div
        className="glow-blob"
        style={{
          width: 600,
          height: 400,
          background: "rgba(53,133,188,0.018)",
          top: 40,
          right: -160,
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="section-index">{"//02 WHO IT'S FOR"}</span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Built for{" "}
            <span className="gradient-text">Regulated Mid-Market</span>{" "}
            Organisations
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            You handle sensitive data and have compliance obligations — but you
            likely don&apos;t have a dedicated cryptography team. That&apos;s exactly who R2PQ is designed for.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {AUDIENCES.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="gradient-border glass p-7 rounded-xl group cursor-default"
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center mb-5"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  background: "rgba(53,133,188,0.07)",
                  border: "1px solid rgba(53,133,188,0.14)",
                  color: "#5a9ec9",
                }}
              >
                {a.icon}
              </div>

              <h3 className="font-display font-semibold text-white text-[1rem] mb-3 tracking-tight">
                {a.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>

              <div
                className="mt-5 h-px w-0 group-hover:w-full transition-[width] duration-500"
                style={{ background: "linear-gradient(90deg, #3585bc, transparent)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
