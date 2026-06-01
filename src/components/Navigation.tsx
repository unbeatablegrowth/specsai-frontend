"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About",        href: "#about" },
  { label: "Features",     href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact",      href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl border-b"
          : "bg-transparent"
      }`}
      style={scrolled ? {
        background: "rgba(4,6,15,0.85)",
        borderColor: "rgba(255,255,255,0.05)",
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <a
          href="/"
          className="font-display font-bold gradient-text tracking-tight"
          style={{ fontSize: "1.5rem" }}
        >
          R2PQ
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[0.84rem] text-slate-500 hover:text-slate-200 transition-colors duration-200 relative group"
              style={{ letterSpacing: "0.01em" }}
            >
              {l.label}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px transition-[width] duration-300 group-hover:w-full"
                style={{ background: "#0ea5e9" }}
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex gap-3 items-center">
          <a href="#contact" className="text-[0.84rem] text-slate-500 hover:text-slate-200 transition-colors">
            Sign In
          </a>
          <a href="#contact" className="btn-primary text-[0.84rem] py-2 px-5">
            Free Scan
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] w-6 h-5 justify-center"
          aria-label="Toggle menu"
        >
          <span className={`block h-[1.5px] bg-white rounded transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block h-[1.5px] bg-white rounded transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-[1.5px] bg-white rounded transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden backdrop-blur-2xl border-b"
            style={{ background: "rgba(4,6,15,0.96)", borderColor: "rgba(255,255,255,0.05)" }}
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors py-1"
                >
                  {l.label}
                </a>
              ))}
              <div className="h-line" />
              <a href="#contact" className="btn-primary text-center text-sm">
                Free Scan
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
