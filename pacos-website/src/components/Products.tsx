"use client";

import { motion } from "framer-motion";
import InteractiveSelector from "@/components/ui/interactive-selector";

const productForms = [
  {
    name: "Cremes & Lotionen",
    detail: "Emulsionen in verschiedenen Konsistenzen – von leicht bis reichhaltig",
    bgImage: "/images/forms/cremes.jpg",
  },
  {
    name: "Gele & Salben",
    detail: "Transparente und deckende Formulierungen für diverse Anwendungen",
    bgImage: "/images/forms/gele.jpg",
  },
  {
    name: "Pasten",
    detail: "Hochviskose Zubereitungen mit präziser Konsistenz",
    bgImage: "/images/forms/pasten.jpg",
  },
  {
    name: "Pflegeöle",
    detail: "Reine Öle und Ölmischungen für Haut und Haar",
    bgImage: "/images/forms/oele.jpg",
  },
  {
    name: "Tensidhaltige Produkte",
    detail: "Shampoos, Duschgele, Reinigungsmittel",
    bgImage: "/images/forms/tenside.jpg",
  },
  {
    name: "Alkoholhaltige Produkte",
    detail: "Tonics, Aftershaves, Desinfektionsmittel",
    bgImage: "/images/forms/alkohol.jpg",
  },
];

export default function Products() {
  return (
    <section className="bg-slate-900 py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-400">
            Produktspektrum
          </span>
        </motion.div>

        {/* Interactive product selector with all categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <InteractiveSelector
            heading="Vielfalt in der Fertigung"
            subheading="Wir produzieren ein breites Spektrum kosmetischer Produkte – klicken Sie sich durch unsere Produktpalette."
          />
        </motion.div>

        {/* Darreichungsformen - Large cards with background images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Darreichungsformen
            </h3>
            <p className="mt-3 text-slate-400 max-w-xl mx-auto">
              Flexible Fertigung in verschiedenen Formulierungen und Konsistenzen –
              individuell angepasst an Ihre Produktvision.
            </p>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
            {productForms.map((form, i) => (
              <motion.div
                key={form.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                className="group relative min-w-[280px] snap-center overflow-hidden rounded-2xl lg:min-w-0"
              >
                {/* Background image */}
                <div className="relative h-[240px] lg:h-[280px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${form.bgImage}')`,
                      backgroundColor: "#1e293b",
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-slate-900/10" />

                  {/* Content at bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                    <h4 className="text-lg font-semibold text-white">
                      {form.name}
                    </h4>
                    <p className="mt-1.5 text-sm text-white/70 leading-relaxed">
                      {form.detail}
                    </p>
                  </div>
                </div>

                {/* Border */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 transition-colors duration-300 group-hover:border-white/25" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
