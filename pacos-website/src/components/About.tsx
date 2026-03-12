"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface TimelineDocument {
  label: string;
  url: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
  imageFit?: "cover" | "contain";
  imageBg?: string;
  documents?: TimelineDocument[];
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1902",
    title: "Gründung Stephan & Co.",
    description:
      "Gründung der Seifen- und Parfümeriefabrik Stephan & Co. GmbH in Halle (Saale). Beginn einer über 120-jährigen Tradition in der Kosmetikfertigung.",
    image: "/images/timeline/1902.png",
    imageFit: "contain",
    imageBg: "#fcfaf5",
    documents: [
      { label: "Gründungsurkunde", url: "/documents/gruendungsurkunde.pdf" },
    ],
  },
  {
    year: "1920er",
    title: "Erweiterung der Produktion",
    description:
      "Ausbau der Produktionskapazitäten und Erweiterung des Sortiments um Körperpflegeprodukte und Parfüms. Der Standort Halle etabliert sich als Kosmetik-Produktionsstätte.",
    image: "/images/timeline/1920.jpg",
  },
  {
    year: "1945",
    title: "Nachkriegszeit & Neuanfang",
    description:
      "Trotz der Wirren der Nachkriegszeit wird die Kosmetikproduktion am Standort fortgeführt. Die Versorgung der Bevölkerung mit Körperpflegeprodukten steht im Mittelpunkt.",
    image: "/images/timeline/1945.jpg",
  },
  {
    year: "1960er",
    title: "VEB Kosmetik Halle",
    description:
      "Als volkseigener Betrieb wird die Produktion weiter modernisiert. Kosmetische Erzeugnisse aus Halle werden in der gesamten DDR vertrieben.",
    image: "/images/timeline/1960.jpg",
  },
  {
    year: "1990",
    title: "Wende & Privatisierung",
    description:
      "Nach der Wiedervereinigung wird der Betrieb privatisiert. Die Tradition der Kosmetikfertigung am Standort bleibt ununterbrochen erhalten.",
    image: "/images/timeline/1990.jpg",
  },
  {
    year: "1999",
    title: "Gründung der PaCos GmbH",
    description:
      "Die PaCos GmbH wird gegründet und spezialisiert sich auf Lohn- und Auftragsproduktion im Kosmetikbereich. Neue Investitionen in moderne Fertigungsanlagen.",
    image: "/images/timeline/1999.jpg",
  },
  {
    year: "Heute",
    title: "Moderner Full-Service Partner",
    description:
      "Als mittelständisches Unternehmen bieten wir heute den kompletten Service von der Entwicklung über die Herstellung bis zur Konfektionierung und Logistik – alles aus einer Hand.",
    image: "/images/timeline/heute.jpg",
  },
];

export default function About() {
  const [activeEvent, setActiveEvent] = useState(0);

  return (
    <section id="ueber-uns" className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Über uns
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tradition trifft auf moderne Fertigung
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Die Geschichte unseres Standorts in Halle (Saale) reicht bis ins
            Jahr 1902 zurück – über 120 Jahre ununterbrochene Kosmetikfertigung.
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          {/* Timeline navigation bar */}
          <div className="relative mb-12">
            {/* Line */}
            <div className="absolute top-4 left-0 right-0 h-0.5 bg-slate-200 sm:top-5" />
            {/* Progress line */}
            <div
              className="absolute top-4 left-0 h-0.5 bg-primary-500 transition-all duration-500 sm:top-5"
              style={{
                width: `${(activeEvent / (timelineEvents.length - 1)) * 100}%`,
              }}
            />

            {/* Timeline dots */}
            <div className="relative flex justify-between">
              {timelineEvents.map((event, i) => (
                <button
                  key={event.year}
                  onClick={() => setActiveEvent(i)}
                  className="group relative flex flex-col items-center"
                >
                  {/* Dot - larger on mobile for touch targets */}
                  <div
                    className={`relative z-10 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      i === activeEvent
                        ? "border-primary-500 bg-primary-500 scale-110 shadow-lg shadow-primary-500/30"
                        : i < activeEvent
                          ? "border-primary-400 bg-primary-400"
                          : "border-slate-300 bg-white hover:border-primary-300 hover:bg-primary-50"
                    }`}
                  >
                    <span
                      className={`text-[10px] sm:text-xs font-bold ${
                        i <= activeEvent ? "text-white" : "text-slate-400 group-hover:text-primary-500"
                      }`}
                    >
                      {i + 1}
                    </span>
                  </div>
                  {/* Year label */}
                  <span
                    className={`mt-2 sm:mt-3 text-[10px] sm:text-xs font-semibold transition-colors duration-300 whitespace-nowrap ${
                      i === activeEvent
                        ? "text-primary-600"
                        : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {event.year}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active event detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEvent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image side */}
                <div className="relative h-64 lg:h-auto lg:min-h-[360px]">
                  <div
                    className={`absolute inset-0 bg-center ${
                      timelineEvents[activeEvent].imageFit === "contain"
                        ? "bg-contain bg-no-repeat"
                        : "bg-cover"
                    }`}
                    style={{
                      backgroundImage: `url('${timelineEvents[activeEvent].image}')`,
                      backgroundColor:
                        timelineEvents[activeEvent].imageBg || "#1e293b",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 lg:bg-gradient-to-r lg:from-transparent lg:to-white/5" />
                  {/* Year overlay */}
                  <div className="absolute bottom-6 left-6">
                    <span className="rounded-lg bg-primary-500/90 backdrop-blur-sm px-4 py-2 text-2xl font-bold text-white shadow-lg">
                      {timelineEvents[activeEvent].year}
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {timelineEvents[activeEvent].title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-500">
                    {timelineEvents[activeEvent].description}
                  </p>

                  {/* Document links */}
                  {timelineEvents[activeEvent].documents &&
                    timelineEvents[activeEvent].documents!.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {timelineEvents[activeEvent].documents!.map((doc) => (
                          <a
                            key={doc.label}
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 transition-all hover:bg-primary-100 hover:border-primary-300 hover:shadow-sm"
                          >
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                              />
                            </svg>
                            {doc.label}
                          </a>
                        ))}
                      </div>
                    )}

                  {/* Navigation arrows */}
                  <div className="mt-8 flex items-center gap-3">
                    <button
                      onClick={() =>
                        setActiveEvent(Math.max(0, activeEvent - 1))
                      }
                      disabled={activeEvent === 0}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all hover:border-primary-300 hover:text-primary-500 disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-400"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        setActiveEvent(
                          Math.min(timelineEvents.length - 1, activeEvent + 1)
                        )
                      }
                      disabled={activeEvent === timelineEvents.length - 1}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all hover:border-primary-300 hover:text-primary-500 disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-400"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                    <span className="ml-2 text-sm text-slate-400">
                      {activeEvent + 1} / {timelineEvents.length}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Key facts row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {[
            { title: "Seit 1902", text: "Über 120 Jahre Kosmetikfertigung" },
            { title: "Full Service", text: "Entwicklung bis Versand" },
            { title: "Flexibel", text: "300 bis 4.000 kg Chargen" },
            { title: "Mittelstand", text: "Persönliche Betreuung" },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm"
            >
              <h3 className="text-lg font-bold text-primary-600">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
