import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz – PaCos GmbH",
};

export default function Datenschutz() {
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
        Datenschutzerklärung
      </h1>

      <div className="mt-8 space-y-8 text-slate-600 leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            1. Verantwortlicher
          </h2>
          <p className="mt-2">
            PaCos GmbH
            <br />
            Reideburger Straße 27
            <br />
            06112 Halle (Saale)
            <br />
            Telefon: +49 345 56 75-0
            <br />
            E-Mail: service@pacos-gmbh.de
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            2. Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p className="mt-2">
            Beim Besuch unserer Website werden automatisch Informationen durch
            den Browser übermittelt und in Server-Logfiles gespeichert. Dies
            umfasst Browsertyp und -version, das verwendete Betriebssystem,
            die Referrer-URL, den Hostnamen des zugreifenden Rechners sowie
            die Uhrzeit der Serveranfrage. Diese Daten sind nicht bestimmten
            Personen zuordenbar und werden nicht mit anderen Datenquellen
            zusammengeführt.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            3. Kontaktaufnahme
          </h2>
          <p className="mt-2">
            Wenn Sie uns per E-Mail oder über das Kontaktformular kontaktieren,
            werden die von Ihnen mitgeteilten Daten (Name, E-Mail-Adresse,
            Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert. Eine
            Weitergabe an Dritte erfolgt nicht.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            4. Ihre Rechte
          </h2>
          <p className="mt-2">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
            Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
            Bitte wenden Sie sich hierzu an die oben genannten Kontaktdaten.
          </p>
        </div>

        <p className="text-sm text-slate-400">
          Hinweis: Diese Datenschutzerklärung ist ein Platzhalter und sollte
          durch eine vollständige, rechtlich geprüfte Fassung ersetzt werden.
        </p>
      </div>
    </main>
  );
}
