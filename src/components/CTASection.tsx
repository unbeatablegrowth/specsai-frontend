"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.1) 0%, rgba(139,92,246,0.07) 40%, transparent 70%)",
        }}
      />
      <div className="glow-blob w-[600px] h-[600px] bg-violet-600/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Gradient border top line */}
      <div className="h-line absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-5">
            Get Started Today
          </span>

          <h2
            className="font-display font-bold text-white leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}
          >
            Ready to Transform the Way <br />
            <span className="gradient-text">Your Business Operates?</span>
          </h2>

          <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto mb-10">
            Join thousands of teams already using R2PQ to accelerate growth,
            automate workflows, and unlock insights at scale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:hello@r2pq.com" className="btn-primary text-base px-8 py-4">
              Start Free Trial
            </a>
            <a href="mailto:hello@r2pq.com" className="btn-ghost text-base px-8 py-4">
              Talk to Sales
            </a>
          </div>

          {/* Micro-trust */}
          <p className="mt-7 text-xs text-slate-600">
            No credit card required &middot; SOC 2 certified &middot; Cancel anytime
          </p>
        </motion.div>
      </div>

      <div className="h-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
