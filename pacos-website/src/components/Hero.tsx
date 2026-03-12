"use client";

import { motion } from "framer-motion";
import WarpShaderHero from "@/components/ui/warp-shader";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
      {/* Shader background */}
      <WarpShaderHero />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 lg:px-8">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-4xl font-light leading-tight tracking-tight text-primary-950 sm:text-5xl lg:text-7xl"
          >
            Bewährt. Zuverlässig.
            <span className="mt-1 block font-semibold">Seit 1902.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 max-w-3xl text-lg font-light leading-relaxed text-primary-900/60 sm:text-xl"
          >
            Ihr Partner für Kosmetik-Lohnherstellung in Halle (Saale).
            <br />
            Von der Rezeptur bis zur fertigen Verpackung – alles aus einer Hand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-lg bg-primary-900 px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-primary-950/15 transition-all hover:bg-primary-950"
            >
              Kontakt aufnehmen
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center rounded-lg border border-primary-900/15 bg-white/50 px-7 py-3.5 text-sm font-medium text-primary-900 backdrop-blur-sm transition-all hover:bg-white/70"
            >
              Leistungen entdecken
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
