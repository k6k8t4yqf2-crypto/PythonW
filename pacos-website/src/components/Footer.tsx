export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div className="lg:col-span-2">
            <div>
              <span className="text-xl font-light tracking-wide text-primary-900">
                PaCos GmbH
              </span>
              <p className="mt-0.5 text-xs text-slate-400">
                Patina Cosmetic Service
              </p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              Ihr Partner für Kosmetik-Lohnherstellung in Halle (Saale).
              Entwicklung, Produktion und Abfüllung aus einer Hand – seit 1902.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Navigation</h4>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "#leistungen", label: "Leistungen" },
                { href: "#ueber-uns", label: "Über uns" },
                { href: "#qualitaet", label: "Qualität" },
                { href: "#karriere", label: "Karriere" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-primary-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Kontakt</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-500">
              <li>Reideburger Str. 27</li>
              <li>06112 Halle (Saale)</li>
              <li>
                <a
                  href="tel:+4934556750"
                  className="transition-colors hover:text-primary-700"
                >
                  +49 345 56 75-0
                </a>
              </li>
              <li>
                <a
                  href="mailto:service@pacos-gmbh.de"
                  className="transition-colors hover:text-primary-700"
                >
                  service@pacos-gmbh.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} PaCos GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a
              href="/impressum"
              className="transition-colors hover:text-slate-600"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="transition-colors hover:text-slate-600"
            >
              Datenschutz
            </a>
            <a
              href="/agb"
              className="transition-colors hover:text-slate-600"
            >
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
