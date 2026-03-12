"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCounter(end: number, duration: number, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, inView]);

  return count;
}

interface StatItemProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  inView: boolean;
  delay: number;
}

function StatItem({
  value,
  suffix = "",
  prefix = "",
  label,
  sublabel,
  inView,
  delay,
}: StatItemProps) {
  const count = useCounter(value, 2000, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-white sm:text-5xl">
        {prefix}
        {inView ? count : 0}
        {suffix}
      </div>
      <div className="mt-2 text-base font-semibold text-primary-200">
        {label}
      </div>
      <div className="mt-1 text-sm text-primary-300/70">{sublabel}</div>
    </motion.div>
  );
}

const stats = [
  {
    value: 120,
    suffix: "+",
    label: "Jahre Erfahrung",
    sublabel: "Seit 1902 am Standort Halle",
  },
  {
    value: 4000,
    suffix: " kg",
    label: "Max. Losgröße",
    sublabel: "Flexible Chargen ab 300 kg",
  },
  {
    value: 6,
    suffix: "",
    label: "Produktionslinien",
    sublabel: "Für Dosen, Tuben & Flaschen",
  },
  {
    value: 100,
    suffix: "%",
    label: "GMP-konform",
    sublabel: "Kosmetik-GMP-gerechte Fertigung",
  },
];

export default function Facts() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-primary-900 py-24 lg:py-28"
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900 to-primary-950" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-400">
            PaCos in Zahlen
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Fakten, die für sich sprechen
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
              inView={inView}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
