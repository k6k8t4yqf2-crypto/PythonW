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
            Angaben gemäß § 5 DDG
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

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-2">
            Thomas Hirsch
            <br />
            Reideburger Straße 27
            <br />
            06112 Halle (Saale)
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            EU-Streitschlichtung
          </h2>
          <p className="mt-2">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-700 underline hover:text-primary-900"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="mt-2">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Haftung für Inhalte
          </h2>
          <p className="mt-2">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach
            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
            hinweisen.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Haftung für Links
          </h2>
          <p className="mt-2">
            Unser Angebot enthält Links zu externen Websites Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
            diese fremden Inhalte auch keine Gewähr übernehmen. Für die
            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
            oder Betreiber der Seiten verantwortlich. Eine permanente
            inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
            konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
            Links umgehend entfernen.
          </p>
        </div>
      </div>
    </main>
  );
}
