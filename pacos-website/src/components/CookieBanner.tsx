"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "cookie-notice-accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    });
    return () => cancelAnimationFrame(id);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6"
        >
          <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white px-6 py-4 shadow-lg">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed text-slate-600">
                Diese Website verwendet ausschließlich technisch notwendige
                Cookies, die für den Betrieb der Seite erforderlich sind. Mehr
                dazu in unserer{" "}
                <Link
                  href="/datenschutz"
                  className="text-primary-700 underline hover:text-primary-900"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
              <button
                onClick={accept}
                className="shrink-0 rounded-lg bg-primary-700 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-800"
              >
                Verstanden
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
