import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pricing — R2PQ",
  description: "Simple engagement packages for cryptographic readiness assessments, agility roadmaps, and ongoing monitoring.",
};

// ── Pricing packages ───────────────────────────────────────────────────────

const PACKAGES = [
  {
    name: "Readiness Assessment",
    tag: "One-time engagement",
    price: "PRICE_PLACEHOLDER",  // TODO: set price before going live
    tagline: "Understand your cryptographic exposure in a single engagement.",
    features: [
      "Codebase scan (up to FILE_LIMIT_PLACEHOLDER source files)",  // TODO: set file limit
      "Y2Q Risk Score",
      "Crypto inventory summary report",
      "Sovereign Receipt (Merkle Root-anchored audit artefact)",
    ],
    cta: "Book this Engagement",
    ctaHref: BOOKING_URL,
    featured: false,
  },
  {
    name: "Agility Roadmap",
    tag: "One-time engagement · Most Comprehensive",
    price: "PRICE_PLACEHOLDER",  // TODO: set price before going live
    tagline: "A complete picture of your crypto posture and a clear, prioritised path forward.",
    features: [
      "Everything in Readiness Assessment",
      "Full crypto inventory (every algorithm, file, dependency)",
      "Risk-prioritised migration roadmap",
      "Algorithm replacement guidance (NIST-aligned targets)",
      "1-hour readout call with findings walkthrough",
    ],
    cta: "Book this Engagement",
    ctaHref: BOOKING_URL,
    featured: true,
  },
  {
    name: "Monitoring Retainer",
    tag: "Monthly retainer",
    price: "PRICE_PLACEHOLDER / month",  // TODO: set price before going live
    tagline: "Stay ahead of cryptographic drift as your codebase evolves.",
    features: [
      "Everything in Agility Roadmap",
      "Monthly re-scans of your codebase",
      "Drift alerts when new vulnerable algorithms are introduced",
      "Quarterly roadmap update and readout call",
    ],
    cta: "Talk to Us About This",
    ctaHref: `mailto:${CONTACT_EMAIL}`,
    featured: false,
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────

const FAQ = [
  {
    q: "Why act now? The quantum threat isn't here yet.",
    a: "Harvest-now-decrypt-later attacks are already underway. Adversaries are collecting and storing encrypted data today to decrypt once quantum computers are available — meaning your current records are at risk now, not in the future. Additionally, full cryptographic migration takes 18–36 months on average. NIST IR 8547 sets hard deadlines: deprecation of RSA, ECC, and DH by 2030 and prohibition by 2035. Organisations that wait for the threat to materialise will be too late.",
  },
  {
    q: "Is this just for large federal organisations or enterprises?",
    a: "No. NIST IR 8547 pressure flows directly downstream to regulated mid-market organisations through vendor security questionnaires, partner due diligence requirements, and examiner checklists. Credit unions, clinics, and regional professional firms are already receiving questions about their post-quantum posture. R2PQ is built specifically for organisations that need a credible answer but don't have a dedicated cryptography team.",
  },
  {
    q: "What do I actually receive at the end of an engagement?",
    a: "At minimum: a crypto inventory report listing every algorithm found in your codebase, a Y2Q Risk Score, and a Sovereign Receipt — a tamper-evident, Merkle Root-anchored artefact you can show auditors, boards, or regulators as proof that an assessment was conducted. Higher-tier packages add a full detailed inventory and a prioritised migration roadmap.",
  },
  {
    q: "Do you need access to our production systems or source code?",
    a: "No. R2PQ scans your codebase from a local copy or a secure transfer you control. We never store your source code, install agents, or connect to your production infrastructure. The scan is entirely read-only and produces no changes to your files.",
  },
];

// ── Component ──────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <main className="relative bg-[#04060f]">
      <Navigation />

      {/* ── Page header ── */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: "10rem", paddingBottom: "5rem" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(53,133,188,0.04) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span
            className="section-index"
            style={{ marginBottom: "1rem" }}
          >
            Pricing
          </span>
          <h1
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
          >
            Simple, Transparent{" "}
            <span className="gradient-text">Engagements</span>
          </h1>
          <p className="mt-5 text-slate-400 text-base leading-relaxed max-w-xl mx-auto">
            No subscriptions required. Every engagement delivers a complete
            crypto inventory and a Sovereign Receipt. Choose based on depth of
            analysis and ongoing support.
          </p>
        </div>
      </section>

      {/* ── Pricing cards ── */}
      <section
        className="relative overflow-hidden"
        style={{ paddingBottom: "7rem", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className="gradient-border glass rounded-xl flex flex-col"
                style={
                  pkg.featured
                    ? {
                        border: "1px solid rgba(53,133,188,0.28)",
                        background: "rgba(53,133,188,0.04)",
                      }
                    : {}
                }
              >
                <div className="p-8 flex flex-col flex-1">
                  {/* Tag */}
                  <span
                    className="font-mono text-[0.62rem] tracking-widest uppercase mb-4 inline-block"
                    style={{ color: pkg.featured ? "#5a9ec9" : "#2d3f52" }}
                  >
                    {pkg.tag}
                  </span>

                  {/* Name */}
                  <h2
                    className="font-display font-bold text-white leading-tight mb-2"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)" }}
                  >
                    {pkg.name}
                  </h2>

                  {/* Price */}
                  <div className="mb-4">
                    <span
                      className="font-display font-bold"
                      style={{
                        fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                        color: pkg.featured ? "#5a9ec9" : "#3585bc",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {pkg.price}
                    </span>
                    <p
                      className="text-xs font-mono mt-1"
                      style={{ color: "#2d3f52", letterSpacing: "0.06em" }}
                    >
                      PLACEHOLDER — fill in before launch
                    </p>
                  </div>

                  {/* Tagline */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {pkg.tagline}
                  </p>

                  {/* Divider */}
                  <div className="h-line mb-6" />

                  {/* Features */}
                  <ul className="space-y-3 flex-1 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <svg
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: "#3585bc" }}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span className="text-slate-400 text-sm leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={pkg.ctaHref}
                    className={pkg.featured ? "btn-primary text-center text-sm py-3" : "btn-ghost text-center text-sm py-3"}
                  >
                    {pkg.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-slate-600">
            All engagements include a Sovereign Receipt. Prices shown are placeholders — contact us for current rates.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "4rem",
          paddingBottom: "7rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          background: "rgba(0,0,0,0.1)",
        }}
      >
        <div className="h-line absolute top-0 left-0 right-0" />
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-index">{"//FAQ"}</span>
            <h2
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
            >
              Common Questions
            </h2>
          </div>

          <div className="space-y-8">
            {FAQ.map((item) => (
              <div
                key={item.q}
                className="gradient-border glass rounded-xl p-7"
              >
                <h3 className="font-display font-semibold text-white text-[1rem] mb-3 leading-snug">
                  {item.q}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA strip ── */}
      <section
        className="relative"
        style={{ paddingTop: "5rem", paddingBottom: "5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
      >
        <div className="h-line absolute top-0 left-0 right-0" />
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-display font-bold text-white leading-tight mb-5"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
          >
            Not sure which engagement is right for you?
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-lg mx-auto mb-8">
            Talk to us. We&apos;ll help you choose the right starting point
            based on your codebase size, regulatory context, and timeline.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={BOOKING_URL} className="btn-primary text-base px-8 py-3.5">
              Book a Readiness Assessment
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="btn-ghost text-base px-8 py-3.5"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
