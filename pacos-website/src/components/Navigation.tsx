"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#qualitaet", label: "Qualität" },
  { href: "#karriere", label: "Karriere" },
  { href: "#kontakt", label: "Kontakt" },
];

function GermanyFlag() {
  return (
    <div className="flex h-[3px] w-full overflow-hidden rounded-full">
      <div className="flex-1 bg-black" />
      <div className="flex-1 bg-red-600" />
      <div className="flex-1 bg-yellow-400" />
    </div>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white/30 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative flex h-16 items-center lg:h-20">
          {/* Logo - left aligned */}
          <a
            href="#"
            className="text-xl font-light tracking-wide text-primary-900"
          >
            PaCos GmbH
          </a>

          {/* Made in Germany - centered absolutely in the full nav bar */}
          <div className="hidden flex-col items-center gap-1 lg:flex absolute left-1/2 -translate-x-1/2">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary-900/50 whitespace-nowrap">
              Made in Germany
            </span>
            <div className="w-full">
              <GermanyFlag />
            </div>
          </div>

          {/* Desktop nav - far right */}
          <div className="hidden items-center gap-1.5 lg:flex ml-auto -mr-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-white/40 hover:text-primary-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 lg:hidden"
            aria-label="Navigation öffnen"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-0.5 w-full rounded-full bg-slate-700 transition-all duration-300 ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-slate-700 transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-slate-700 transition-all duration-300 ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 z-40 bg-white pt-20 lg:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              {/* Made in Germany mobile */}
              <div className="mb-4 flex flex-col items-center gap-1">
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary-900/50">
                  Made in Germany
                </span>
                <div className="w-16">
                  <GermanyFlag />
                </div>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-lg font-medium text-slate-700 hover:bg-slate-50"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
