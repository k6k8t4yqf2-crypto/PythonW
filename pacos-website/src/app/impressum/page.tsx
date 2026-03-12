import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – PaCos GmbH",
};

export default function Impressum() {
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

      <h1 className="mt-8 text-3xl font-bold text-slate-900">Impressum</h1>

      <div className="mt-8 space-y-6 text-slate-600 leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="mt-2">
            PaCos GmbH
            <br />
            Reideburger Straße 27
            <br />
            06112 Halle (Saale)
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Vertreten durch
          </h2>
          <p className="mt-2">Geschäftsführer: Thomas Hirsch</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Kontakt</h2>
          <p className="mt-2">
            Telefon: +49 345 56 75-0
            <br />
            Fax: +49 345 56 75-217
            <br />
            E-Mail: service@pacos-gmbh.de
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Registereintrag
          </h2>
          <p className="mt-2">
            Registergericht: Amtsgericht Stendal
            <br />
            Registernummer: HRB 212315
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Umsatzsteuer-ID
          </h2>
          <p className="mt-2">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a
            Umsatzsteuergesetz:
            <br />
            DE 201185677
          </p>
        </div>
      </div>
    </main>
  );
}
