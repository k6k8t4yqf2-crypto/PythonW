import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen – PaCos GmbH",
};

export default function AGB() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:text-primary-900"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Zurück zur Startseite
      </Link>

      <h1 className="mt-8 text-3xl font-bold text-slate-900">
        Allgemeine Geschäftsbedingungen
      </h1>

      <div className="mt-8 space-y-6 text-slate-600 leading-relaxed">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm text-slate-500">
            Die Allgemeinen Geschäftsbedingungen werden in Kürze hier
            veröffentlicht.
          </p>
        </div>
      </div>
    </main>
  );
}
