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
        {/* 1. Verantwortlicher */}
        <section>
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
            Fax: +49 345 56 75-217
            <br />
            E-Mail: service@pacos-gmbh.de
          </p>
          <p className="mt-2">
            Geschäftsführer: Thomas Hirsch
          </p>
        </section>

        {/* 2. Übersicht der Verarbeitungen */}
        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            2. Übersicht der Verarbeitungen
          </h2>
          <p className="mt-2">
            Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten
            und die Zwecke ihrer Verarbeitung zusammen und verweist auf die
            betroffenen Personen.
          </p>
          <h3 className="mt-4 font-medium text-slate-800">
            Arten der verarbeiteten Daten
          </h3>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Bestandsdaten (z.&nbsp;B. Namen, Adressen)</li>
            <li>Kontaktdaten (z.&nbsp;B. E-Mail, Telefonnummern)</li>
            <li>Inhaltsdaten (z.&nbsp;B. Eingaben in Formularen)</li>
            <li>
              Nutzungsdaten (z.&nbsp;B. besuchte Seiten, Zugriffszeit)
            </li>
            <li>
              Meta-/Kommunikationsdaten (z.&nbsp;B. IP-Adressen, Geräte-Informationen)
            </li>
          </ul>
          <h3 className="mt-4 font-medium text-slate-800">
            Kategorien betroffener Personen
          </h3>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Kommunikationspartner</li>
            <li>Nutzer (z.&nbsp;B. Webseitenbesucher)</li>
          </ul>
        </section>

        {/* 3. Rechtsgrundlagen */}
        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            3. Maßgebliche Rechtsgrundlagen
          </h2>
          <p className="mt-2">
            Nachfolgend erhalten Sie eine Übersicht der Rechtsgrundlagen der
            DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten.
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>
              <strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</strong> – Die
              betroffene Person hat ihre Einwilligung in die Verarbeitung der
              sie betreffenden personenbezogenen Daten für einen oder mehrere
              bestimmte Zwecke gegeben.
            </li>
            <li>
              <strong>
                Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1
                lit. b DSGVO)
              </strong>{" "}
              – Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
              Vertragspartei die betroffene Person ist, oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
              betroffenen Person erfolgen.
            </li>
            <li>
              <strong>
                Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)
              </strong>{" "}
              – Die Verarbeitung ist zur Wahrung der berechtigten Interessen
              des Verantwortlichen oder eines Dritten erforderlich, sofern
              nicht die Interessen oder Grundrechte und Grundfreiheiten der
              betroffenen Person überwiegen.
            </li>
          </ul>
        </section>

        {/* 4. Sicherheitsmaßnahmen */}
        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            4. Sicherheitsmaßnahmen
          </h2>
          <p className="mt-2">
            Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
            Berücksichtigung des Stands der Technik, der Implementierungskosten
            und der Art, des Umfangs, der Umstände und der Zwecke der
            Verarbeitung sowie der unterschiedlichen
            Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der
            Rechte und Freiheiten natürlicher Personen geeignete technische und
            organisatorische Maßnahmen, um ein dem Risiko angemessenes
            Schutzniveau zu gewährleisten.
          </p>
          <p className="mt-2">
            Zu den Maßnahmen gehören insbesondere die Sicherung der
            Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
            Kontrolle des physischen und elektronischen Zugangs zu den Daten als
            auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe,
            der Sicherung der Verfügbarkeit und ihrer Trennung. Ferner haben
            wir Verfahren eingerichtet, die eine Wahrnehmung von
            Betroffenenrechten, die Löschung von Daten und Reaktionen auf die
            Gefährdung der Daten gewährleisten.
          </p>
          <h3 className="mt-4 font-medium text-slate-800">
            SSL- bzw. TLS-Verschlüsselung
          </h3>
          <p className="mt-2">
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
            Übertragung vertraulicher Inhalte eine SSL- bzw.
            TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
            daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf
            &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer
            Browserzeile.
          </p>
        </section>

        {/* 5. Hosting */}
        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            5. Bereitstellung des Onlineangebotes und Webhosting
          </h2>
          <p className="mt-2">
            Wir verarbeiten die Daten der Nutzer, um ihnen unsere
            Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck
            verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um
            die Inhalte und Funktionen unserer Online-Dienste an den Browser
            bzw. das Endgerät der Nutzer zu übermitteln.
          </p>
          <h3 className="mt-4 font-medium text-slate-800">
            Erhebung von Zugriffsdaten und Server-Logfiles
          </h3>
          <p className="mt-2">
            Unser Hosting-Anbieter erhebt auf Grundlage unserer berechtigten
            Interessen im Sinne des Art. 6 Abs. 1 lit. f DSGVO Daten über
            jeden Zugriff auf den Server, auf dem sich dieser Dienst befindet
            (sogenannte Server-Logfiles). Zu den Zugriffsdaten gehören:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Name der abgerufenen Webseite und Datei</li>
            <li>Datum und Uhrzeit des Abrufs</li>
            <li>Übertragene Datenmenge</li>
            <li>Meldung über erfolgreichen Abruf</li>
            <li>Browsertyp nebst Version</li>
            <li>Das Betriebssystem des Nutzers</li>
            <li>Referrer URL (die zuvor besuchte Seite)</li>
            <li>IP-Adresse und der anfragende Provider</li>
          </ul>
          <p className="mt-2">
            Logfile-Informationen werden aus Sicherheitsgründen (z.&nbsp;B. zur
            Aufklärung von Missbrauchs- oder Betrugshandlungen) für die Dauer
            von maximal 7 Tagen gespeichert und danach gelöscht. Daten, deren
            weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur
            endgültigen Klärung des jeweiligen Vorfalls von der Löschung
            ausgenommen.
          </p>
          <h3 className="mt-4 font-medium text-slate-800">
            Hosting-Anbieter
          </h3>
          <p className="mt-2">
            UAB Hostinger, Jonavos g. 60C, LT-44192 Kaunas, Litauen.
            Serverstandort: Europäische Union. Datenschutzerklärung:{" "}
            <a
              href="https://www.hostinger.de/datenschutzrichtlinie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-700 underline hover:text-primary-900"
            >
              hostinger.de/datenschutzrichtlinie
            </a>
            . Mit dem Hosting-Anbieter wurde ein Auftragsverarbeitungsvertrag
            (AVV) gemäß Art. 28 DSGVO geschlossen.
          </p>
        </section>

        {/* 6. Kontaktaufnahme */}
        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            6. Kontaktaufnahme
          </h2>
          <p className="mt-2">
            Bei der Kontaktaufnahme mit uns (z.&nbsp;B. per E-Mail oder
            Telefon) werden die Angaben des Nutzers zur Bearbeitung der
            Kontaktanfrage und deren Abwicklung gemäß Art. 6 Abs. 1 lit. b
            DSGVO (vorvertragliche bzw. vertragliche Maßnahmen) verarbeitet.
          </p>
          <p className="mt-2">
            Die Angaben der Nutzer können in unserem
            Customer-Relationship-Management-System oder vergleichbarer
            Anfragenorganisation gespeichert werden.
          </p>
          <p className="mt-2">
            Wir löschen die Anfragen, sofern diese nicht mehr erforderlich
            sind. Wir überprüfen die Erforderlichkeit alle zwei Jahre. Im Fall
            der gesetzlichen Archivierungspflichten erfolgt die Löschung nach
            deren Ablauf (Ende handelsrechtlicher [6 Jahre] und
            steuerrechtlicher [10 Jahre] Aufbewahrungspflicht).
          </p>
          <h3 className="mt-4 font-medium text-slate-800">
            Hinweis zur E-Mail-Kommunikation
          </h3>
          <p className="mt-2">
            Wir weisen darauf hin, dass die Datenübertragung im Internet
            (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken
            aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
            durch Dritte ist nicht möglich.
          </p>
        </section>

        {/* 7. Schriftarten */}
        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            7. Verwendung von Schriftarten
          </h2>
          <p className="mt-2">
            Diese Website verwendet die Schriftart &bdquo;Plus Jakarta Sans&ldquo; von
            Google Fonts. Die Schriftarten werden beim Erstellen der Website
            heruntergeladen und lokal von unserem Server ausgeliefert. Es
            findet keine Verbindung zu Google-Servern statt. Es werden keine
            Daten an Google übermittelt.
          </p>
        </section>

        {/* 8. Betroffenenrechte */}
        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            8. Rechte der betroffenen Personen
          </h2>
          <p className="mt-2">
            Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu,
            die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>
              <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das
              Recht, eine Bestätigung darüber zu verlangen, ob betreffende
              Daten verarbeitet werden, und auf Auskunft über diese Daten sowie
              auf weitere Informationen und Kopie der Daten.
            </li>
            <li>
              <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie
              haben das Recht, die Vervollständigung der Sie betreffenden Daten
              oder die Berichtigung der Sie betreffenden unrichtigen Daten zu
              verlangen.
            </li>
            <li>
              <strong>
                Recht auf Löschung und Einschränkung der Verarbeitung (Art. 17,
                18 DSGVO):
              </strong>{" "}
              Sie haben das Recht, zu verlangen, dass betreffende Daten
              unverzüglich gelöscht werden, bzw. alternativ die Einschränkung
              der Verarbeitung der Daten zu verlangen.
            </li>
            <li>
              <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong>{" "}
              Sie haben das Recht, betreffende Daten, die Sie uns
              bereitgestellt haben, in einem strukturierten, gängigen und
              maschinenlesbaren Format zu erhalten oder die Übermittlung an
              einen anderen Verantwortlichen zu fordern.
            </li>
            <li>
              <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben
              das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
              ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden
              personenbezogenen Daten Widerspruch einzulegen.
            </li>
            <li>
              <strong>
                Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):
              </strong>{" "}
              Sie haben das Recht, erteilte Einwilligungen jederzeit zu
              widerrufen. Die Rechtmäßigkeit der aufgrund der Einwilligung bis
              zum Widerruf erfolgten Verarbeitung wird dadurch nicht berührt.
            </li>
          </ul>
        </section>

        {/* 9. Beschwerderecht */}
        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            9. Beschwerderecht bei einer Aufsichtsbehörde
          </h2>
          <p className="mt-2">
            Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
            gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde
            bei einer Aufsichtsbehörde zu, wenn Sie der Ansicht sind, dass die
            Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die
            DSGVO verstößt.
          </p>
          <p className="mt-2">
            Zuständige Aufsichtsbehörde:
            <br />
            Landesbeauftragter für den Datenschutz Sachsen-Anhalt
            <br />
            Leiterstraße 9
            <br />
            39104 Magdeburg
            <br />
            Telefon: +49 391 81803-0
            <br />
            E-Mail: poststelle@lfd.sachsen-anhalt.de
            <br />
            Website:{" "}
            <a
              href="https://datenschutz.sachsen-anhalt.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-700 underline hover:text-primary-900"
            >
              datenschutz.sachsen-anhalt.de
            </a>
          </p>
        </section>

        {/* 10. Cookies */}
        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            10. Cookies
          </h2>
          <p className="mt-2">
            Unsere Website verwendet keine Cookies, die einer Einwilligung
            bedürfen. Es werden keine Tracking-, Analyse- oder
            Marketing-Cookies eingesetzt. Es werden keine Daten an
            Drittanbieter übermittelt.
          </p>
        </section>

        {/* 11. Aktualität */}
        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            11. Aktualität und Änderung dieser Datenschutzerklärung
          </h2>
          <p className="mt-2">
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
            März 2026. Durch die Weiterentwicklung unserer Website oder
            aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es
            notwendig werden, diese Datenschutzerklärung zu ändern.
          </p>
        </section>

        <p className="text-sm text-slate-400 border-t border-slate-200 pt-6">
          Es wird empfohlen, diese Datenschutzerklärung zusätzlich anwaltlich
          prüfen zu lassen.
        </p>
      </div>
    </main>
  );
}
