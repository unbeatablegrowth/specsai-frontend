"use client";
import { motion } from "framer-motion";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/config";

export default function CTASection() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(53,133,188,0.05) 0%, transparent 65%)",
        }}
      />
      <div className="h-line absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="section-index" style={{ marginBottom: "1.25rem" }}>
            Get Started
          </span>

          <h2
            className="font-display font-bold text-white leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
          >
            Ready to See Your{" "}
            <span className="gradient-text">Full Crypto Inventory?</span>
          </h2>

          <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto mb-10">
            Book a Readiness Assessment — we scan your codebase, produce your
            complete crypto inventory and Y2Q Risk Score, and hand you a
            Sovereign Receipt you can show auditors and your board. All in a
            single engagement.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={BOOKING_URL} className="btn-primary text-base px-8 py-4">
              Book a Readiness Assessment
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="btn-ghost text-base px-8 py-4"
            >
              Talk to Our Team
            </a>
          </div>

          <p className="mt-7 text-xs text-slate-600">
            Read-only · No agents installed · Source stays in your environment · Sovereign Receipt on completion
          </p>
        </motion.div>
      </div>

      <div className="h-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
