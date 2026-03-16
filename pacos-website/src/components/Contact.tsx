"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [attachment, setAttachment] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      alert("Die Datei darf maximal 10 MB groß sein.");
      e.target.value = "";
      return;
    }
    setAttachment(file);
  };

  const handleRemoveFile = () => {
    setAttachment(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:service@pacos-gmbh.de?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nE-Mail: ${formData.email}\n\n${formData.message}${attachment ? `\n\n[Anhang: ${attachment.name}]` : ""}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="kontakt" className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Kontakt
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Sprechen Sie uns an
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Sie haben ein Projekt oder eine Produktidee? Wir beraten Sie gerne
            persönlich und unverbindlich.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700"
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700"
                >
                  Betreff
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                  placeholder="Anfrage Lohnherstellung"
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700"
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="mt-1.5 block w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                  placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                />
              </div>

              {/* File attachment */}
              <div className="mt-6">
                <label
                  htmlFor="attachment"
                  className="block text-sm font-medium text-slate-700"
                >
                  Anhang{" "}
                  <span className="font-normal text-slate-400">(optional, max. 10 MB)</span>
                </label>
                <div className="mt-2">
                  {attachment ? (
                    <div className="flex items-center gap-3 rounded-lg border border-primary-200 bg-primary-50 px-4 py-3">
                      <svg
                        className="h-5 w-5 shrink-0 text-primary-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                        />
                      </svg>
                      <span className="flex-1 truncate text-sm text-primary-700">
                        {attachment.name}
                      </span>
                      <span className="text-xs text-primary-500">
                        {(attachment.size / 1024 / 1024).toFixed(1)} MB
                      </span>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="shrink-0 rounded p-1 text-primary-400 transition-colors hover:bg-primary-100 hover:text-primary-600"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <label
                      htmlFor="attachment"
                      className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-500 transition-colors hover:border-primary-400 hover:bg-primary-50 hover:text-primary-600"
                    >
                      <svg
                        className="h-5 w-5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                        />
                      </svg>
                      Datei anhängen
                    </label>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    id="attachment"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.zip"
                  />
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-400">
                Hinweis: Die Datenübertragung per E-Mail erfolgt unverschlüsselt.
                Details finden Sie in unserer{" "}
                <a href="/datenschutz" className="text-primary-600 underline hover:text-primary-800">
                  Datenschutzerklärung
                </a>.
              </p>

              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-primary-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-950 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none sm:w-auto"
              >
                Nachricht senden
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6 lg:col-span-2"
          >
            {/* Address cards */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">
                Produktion & Verwaltung
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <div>
                    PaCos GmbH
                    <br />
                    Reideburger Str. 27
                    <br />
                    06112 Halle (Saale)
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">Erreichbarkeit</h3>
              <div className="mt-4 space-y-3 text-sm">
                <a
                  href="tel:+4934556750"
                  className="flex items-center gap-3 text-slate-600 transition-colors hover:text-primary-700"
                >
                  <svg
                    className="h-4 w-4 shrink-0 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  +49 345 56 75-0
                </a>
                <div className="flex items-center gap-3 text-slate-600">
                  <svg
                    className="h-4 w-4 shrink-0 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18.75 12H5.25"
                    />
                  </svg>
                  +49 345 56 75-217
                </div>
                <a
                  href="mailto:service@pacos-gmbh.de"
                  className="flex items-center gap-3 text-slate-600 transition-colors hover:text-primary-700"
                >
                  <svg
                    className="h-4 w-4 shrink-0 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  service@pacos-gmbh.de
                </a>
              </div>
            </div>

            {/* Versand & Lager */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">
                Versand & Lager
              </h3>
              <div className="mt-4 space-y-4 text-sm text-slate-600">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded bg-primary-100 px-1.5 text-[10px] font-bold text-primary-700">
                      T1
                    </span>
                    <span>Freiimfelde – Tor 1 (Anmeldung)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded bg-primary-100 px-1.5 text-[10px] font-bold text-primary-700">
                      T2
                    </span>
                    <span>Freiimfelde – Tor 2</span>
                  </div>
                  <p className="text-slate-400 text-xs ml-7">
                    06112 Halle (Saale)
                  </p>
                </div>

                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Ladezeiten
                  </p>
                  <div className="mt-2.5 space-y-1.5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-medium text-slate-700">Mo – Do</span>
                      <span className="text-sm text-slate-600">
                        6:30 – 9:30 &amp; 10:30 – 14:30 Uhr
                      </span>
                    </div>
                    <div className="h-px bg-slate-200" />
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-medium text-slate-700">Freitag</span>
                      <span className="text-sm text-slate-600">
                        6:30 – 9:30 &amp; 10:30 – 12:00 Uhr
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
