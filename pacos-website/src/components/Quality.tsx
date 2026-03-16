"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import {
  Microscope,
  PackageCheck,
  Droplets,
  Activity,
  Leaf,
} from "lucide-react";

/* ─── Marquee Quality Items ─── */
const qualityMarqueeItems = [
  {
    title: "Mikrobiologische Kontrolle",
    subtitle: "Laboranalysen & Hygieneprüfung",
    icon: Microscope,
  },
  {
    title: "Rohstoffprüfung",
    subtitle: "Wareneingangskontrolle",
    icon: PackageCheck,
  },
  {
    title: "Keimfreies Wasser",
    subtitle: "Osmoseanlage",
    icon: Droplets,
  },
  {
    title: "Prozessüberwachung",
    subtitle: "Lückenlose Dokumentation",
    icon: Activity,
  },
  {
    title: "Ökologische Standards",
    subtitle: "Umweltbewusste Produktion",
    icon: Leaf,
  },
];

export default function Quality() {
  return (
    <section id="qualitaet" className="py-24 lg:py-32">
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
            Qualität & Zertifizierung
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Qualität in jedem Schritt
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Von der Rohstoffprüfung bis zum fertigen Produkt –
            Qualitätssicherung ist fest in unserem Fertigungsprozess verankert.
          </p>
        </motion.div>

        {/* Certification Badges — only 2 rings: thick outer + thick inner, text in the band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-20"
        >
          {/* GMP Badge */}
          <div className="flex flex-col items-center gap-3">
            <svg
              viewBox="0 0 220 220"
              className="h-40 w-40 sm:h-48 sm:w-48"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Thick outer ring */}
              <circle cx="110" cy="110" r="106" fill="none" stroke="#334155" strokeWidth="2" />
              {/* Thick inner ring */}
              <circle cx="110" cy="110" r="88" fill="none" stroke="#334155" strokeWidth="1.5" />

              {/* Top arc: CERTIFIED — centered in band between r=88 and r=106, so r≈97 */}
              <path
                id="gmpArcTop"
                d="M 17,110 A 93,93 0 0,1 203,110"
                fill="none"
              />
              <text fontSize="9" fontWeight="700" fill="#334155" letterSpacing="4">
                <textPath href="#gmpArcTop" startOffset="50%" textAnchor="middle">
                  CERTIFIED
                </textPath>
              </text>

              {/* Upper horizontal line */}
              <line x1="48" y1="88" x2="172" y2="88" stroke="#94a3b8" strokeWidth="0.5" />

              {/* Main text: GMP — vertically centered */}
              <text
                x="110"
                y="110"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="32"
                fontWeight="800"
                fill="#0f172a"
                letterSpacing="4"
                fontFamily="system-ui, sans-serif"
              >
                GMP
              </text>

              {/* Lower horizontal line — symmetric to upper */}
              <line x1="48" y1="132" x2="172" y2="132" stroke="#94a3b8" strokeWidth="0.5" />

              {/* DIN EN ISO 22716 */}
              <text
                x="110"
                y="146"
                textAnchor="middle"
                fontSize="10"
                fontWeight="600"
                fill="#475569"
                letterSpacing="1"
                fontFamily="system-ui, sans-serif"
              >
                DIN EN ISO 22716
              </text>

              {/* Bottom arc: GOOD MANUFACTURING PRACTICE — pushed toward outer ring at r≈101 */}
              <path
                id="gmpArcBottom"
                d="M 9,110 A 101,101 0 0,0 211,110"
                fill="none"
              />
              <text fontSize="7" fontWeight="600" fill="#64748b" letterSpacing="2">
                <textPath href="#gmpArcBottom" startOffset="50%" textAnchor="middle">
                  GOOD MANUFACTURING PRACTICE
                </textPath>
              </text>
            </svg>
          </div>

          {/* HACCP Badge */}
          <div className="flex flex-col items-center gap-3">
            <svg
              viewBox="0 0 220 220"
              className="h-40 w-40 sm:h-48 sm:w-48"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Thick outer ring */}
              <circle cx="110" cy="110" r="106" fill="none" stroke="#334155" strokeWidth="2" />
              {/* Thick inner ring */}
              <circle cx="110" cy="110" r="88" fill="none" stroke="#334155" strokeWidth="1.5" />

              {/* Top arc: CERTIFIED — centered in band at r≈97 */}
              <path
                id="haccpArcTop"
                d="M 17,110 A 93,93 0 0,1 203,110"
                fill="none"
              />
              <text fontSize="9" fontWeight="700" fill="#334155" letterSpacing="4">
                <textPath href="#haccpArcTop" startOffset="50%" textAnchor="middle">
                  CERTIFIED
                </textPath>
              </text>

              {/* Upper horizontal line */}
              <line x1="48" y1="88" x2="172" y2="88" stroke="#94a3b8" strokeWidth="0.5" />

              {/* Main text: HACCP — vertically centered */}
              <text
                x="110"
                y="110"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="28"
                fontWeight="800"
                fill="#0f172a"
                letterSpacing="3"
                fontFamily="system-ui, sans-serif"
              >
                HACCP
              </text>

              {/* Lower horizontal line — symmetric to upper */}
              <line x1="48" y1="132" x2="172" y2="132" stroke="#94a3b8" strokeWidth="0.5" />

              {/* Codex Alimentarius */}
              <text
                x="110"
                y="146"
                textAnchor="middle"
                fontSize="10"
                fontWeight="600"
                fill="#475569"
                letterSpacing="1"
                fontFamily="system-ui, sans-serif"
              >
                Codex Alimentarius
              </text>

              {/* Bottom arc: HAZARD ANALYSIS & CCP — pushed toward outer ring at r≈101 */}
              <path
                id="haccpArcBottom"
                d="M 9,110 A 101,101 0 0,0 211,110"
                fill="none"
              />
              <text fontSize="7" fontWeight="600" fill="#64748b" letterSpacing="2">
                <textPath href="#haccpArcBottom" startOffset="50%" textAnchor="middle">
                  HAZARD ANALYSIS &amp; CCP
                </textPath>
              </text>
            </svg>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-center text-sm text-slate-400 max-w-xl mx-auto"
        >
          Unsere Produktion erfüllt die strengen Anforderungen der DIN EN ISO
          22716 (Kosmetik-GMP) sowie des HACCP-Konzepts zur systematischen
          Gefahrenanalyse und Überwachung kritischer Kontrollpunkte.
        </motion.p>
      </div>

      {/* Quality Standards Marquee — symmetric padding */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Marquee
          pauseOnHover
          speed={40}
          className="!mt-12 sm:!mt-14"
        >
          {qualityMarqueeItems.map((item) => (
            <div
              key={item.title}
              className="relative h-full w-fit mx-8 sm:mx-12 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-4 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                <item.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 whitespace-nowrap">
                  {item.title}
                </p>
                <p className="text-xs text-slate-400">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
