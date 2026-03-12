"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
    title: "Entwicklung",
    subtitle: "Rezeptur & Qualitätssicherung",
    description:
      "Von der Idee zum fertigen Produkt: Wir entwickeln Rezepturen nach Ihren Vorgaben, testen in hauseigenen und externen Laboratorien und begleiten Sie mit Marketingberatung bei der Verpackungsauswahl.",
    features: [
      "Rezepturentwicklung nach Kundenvorgaben",
      "Hauseigene & externe Laboratorien",
      "Physikalische & mikrobiologische Prüfung",
      "Verpackungsauswahl & Marketingberatung",
    ],
    bgImage: "/images/services/entwicklung.jpg",
    step: "01",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21.5c4.142 0 7.5-3.971 7.5-7.875C19.5 9.723 12 2.5 12 2.5S4.5 9.723 4.5 13.625C4.5 17.529 7.858 21.5 12 21.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.5c2.071 0 3.75-1.986 3.75-3.938C15.75 12.612 12 9 12 9s-3.75 3.612-3.75 5.563C8.25 16.514 9.929 18.5 12 18.5z"
        />
      </svg>
    ),
    title: "Herstellung",
    subtitle: "Flexible Produktionskapazitäten",
    description:
      "Unsere Produktionsanlagen ermöglichen Ein- und Zweiphasenansätze im Warm- oder Kaltverfahren. Von Cremes und Lotionen über Gele bis hin zu Shampoos und Duschbädern.",
    features: [
      "Losgrößen von 300 bis 4.000 kg",
      "Vakuumanlagen (Becomix, Fryma)",
      "Aufbereitetes, keimfreies Osmose-Wasser",
      "Warm- und Kaltverfahren",
    ],
    bgImage: "/images/services/herstellung.jpg",
    step: "02",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0h2.25m0 0v4.5m0-4.5h3.75M7.5 14.25v-1.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V14.25m-4.5 0h4.5"
        />
      </svg>
    ),
    title: "Abfüllung & Versand",
    subtitle: "Konfektionierung & Logistik",
    description:
      "Rationelle und flexible Abfüllanlagen für Dosen, Tuben und Flaschen. Etikettierung, Chargenkennzeichnung, Geschenkpackungen und termingerechter Versand.",
    features: [
      "Glas-, Kunststoff- & Aluminiumverpackungen",
      "Tuben- und Flaschenabfüllung (15–1.000 ml)",
      "Etikettierung & Chargenkennzeichnung",
      "Palettierung & termingerechter Versand",
    ],
    bgImage: "/images/services/abfuellung.jpg",
    step: "03",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="leistungen" className="relative bg-white py-24 lg:py-32 overflow-hidden">

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Full Manufacturing Service
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-500">
            Von der ersten Idee bis zum versandfertigen Produkt –
            <br />
            wir decken die gesamte Wertschöpfungskette ab.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="relative mt-20">
          {/* Cards grid */}
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative min-h-[450px] cursor-pointer overflow-hidden rounded-2xl"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Full-bleed background image with hover zoom */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] ease-out will-change-transform group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${service.bgImage}')`,
                    backgroundColor: "#0f172a",
                  }}
                />

                {/* Multi-layer gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Decorative large step number */}
                <div className="absolute top-0 right-0 select-none overflow-hidden">
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                    className="block -mr-2 -mt-4 text-[120px] font-black leading-none text-white/[0.06] lg:text-[140px]"
                  >
                    {service.step}
                  </motion.span>
                </div>

                {/* Top badge with icon */}
                <div className="absolute top-5 left-5 z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors duration-300 group-hover:border-primary-400/40 group-hover:bg-primary-500/20">
                    {service.icon}
                  </div>
                </div>

                {/* Bottom content area */}
                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-6 lg:p-7">
                  {/* Title block */}
                  <div className="mb-1">
                    <h3 className="text-2xl font-bold tracking-tight text-white lg:text-[1.65rem]">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary-400">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-300/80">
                    {service.description}
                  </p>

                  {/* Features list - reveals on hover (desktop), always visible (mobile) */}
                  <div className="mt-4 lg:mt-0">
                    {/* Mobile: always visible */}
                    <ul className="space-y-2 lg:hidden">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-slate-300/70"
                        >
                          <svg
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Desktop: animated reveal on hover */}
                    <AnimatePresence>
                      {hoveredIndex === i && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="hidden overflow-hidden lg:block"
                        >
                          <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                            {service.features.map((feature, fi) => (
                              <motion.li
                                key={feature}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{
                                  duration: 0.25,
                                  delay: fi * 0.06,
                                }}
                                className="flex items-start gap-2 text-sm text-slate-300/80"
                              >
                                <svg
                                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2.5}
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
                                {feature}
                              </motion.li>
                            ))}
                          </div>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border border-white/[0.06] transition-colors duration-500 group-hover:border-primary-500/20" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
