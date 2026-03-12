"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Upload, MapPin, Clock, Briefcase } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

/* ---------- Gallery Carousel ---------- */

const galleryItems = [
  {
    id: "produktion",
    title: "Produktion",
    description:
      "Moderne Produktionsanlagen für Cremes, Lotionen, Gele und mehr – in Chargen von 300 bis 4.000 kg.",
    image: "/images/karriere/produktion.jpg",
  },
  {
    id: "labor",
    title: "Labor & Entwicklung",
    description:
      "In unseren Laboratorien entwickeln und testen wir Rezepturen nach höchsten Standards.",
    image: "/images/karriere/labor.jpg",
  },
  {
    id: "qualitaet",
    title: "Qualitätssicherung",
    description:
      "Kontinuierliche Kontrolle vom Rohstoffeingang bis zum fertigen Produkt.",
    image: "/images/karriere/qualitaet.jpg",
  },
  {
    id: "team",
    title: "Teamarbeit",
    description:
      "Kurze Wege, direkte Kommunikation und ein familiäres Betriebsklima.",
    image: "/images/karriere/team.jpg",
  },
  {
    id: "logistik",
    title: "Logistik & Versand",
    description:
      "Termingerechte Konfektionierung und Versand – zuverlässig und flexibel.",
    image: "/images/karriere/lager.jpg",
  },
];

function KarriereGallery() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    update();
    carouselApi.on("select", update);
    return () => {
      carouselApi.off("select", update);
    };
  }, [carouselApi]);

  return (
    <div className="relative">

      <div className="relative">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": { dragFree: true },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {galleryItems.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[380px]"
              >
                <div className="group relative h-full min-h-[24rem] overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col p-6 text-white md:p-8">
                    <div className="mb-2 text-xl font-semibold">
                      {item.title}
                    </div>
                    <div className="line-clamp-2 text-sm text-white/80">
                      {item.description}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Navigation arrows overlaid on carousel edges, vertically centered */}
        <button
          onClick={() => carouselApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg border border-slate-200 text-slate-700 transition-all hover:bg-white hover:shadow-xl disabled:opacity-0 disabled:pointer-events-none md:left-4"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => carouselApi?.scrollNext()}
          disabled={!canScrollNext}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg border border-slate-200 text-slate-700 transition-all hover:bg-white hover:shadow-xl disabled:opacity-0 disabled:pointer-events-none md:right-4"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {galleryItems.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full transition-colors ${
              currentSlide === i ? "bg-primary-900" : "bg-primary-200"
            }`}
            onClick={() => carouselApi?.scrollTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- Job Listings ---------- */

const jobs = [
  {
    title: "Maschinen- und Anlagenbediener (m/w/d)",
    type: "Vollzeit",
    location: "Halle (Saale)",
    tasks: [
      "Bedienung und Überwachung von Produktions- und Abfüllanlagen",
      "Herstellung von Emulsionen, Cremes und Lotionen nach Rezepturvorgaben",
      "Qualitätskontrolle und Dokumentation im Fertigungsprozess",
      "Einhaltung von Hygiene-, Sicherheits- und GMP-Standards",
      "Reinigung und Pflege der Produktionsanlagen",
    ],
    requirements: [
      "Ausbildung im Produktionsumfeld oder Quereinstieg möglich",
      "Technisches Verständnis und sorgfältige Arbeitsweise",
      "Bereitschaft zur Schichtarbeit",
      "Teamfähigkeit und Zuverlässigkeit",
    ],
  },
  {
    title: "Elektroniker für Betriebstechnik (m/w/d)",
    type: "Vollzeit",
    location: "Halle (Saale)",
    tasks: [
      "Wartung, Instandhaltung und Reparatur von Produktionsanlagen",
      "Störungssuche und -beseitigung an Maschinen und Steuerungen",
      "Installation elektrischer Bauteile und Schaltschrankbau",
      "Programmierung und Prüfung von SPS-Steuerungen",
      "Dokumentation und Einhaltung von Sicherheitsvorschriften",
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Elektroniker oder vergleichbar",
      "Erfahrung in Industrieelektrik und Anlagenwartung",
      "Kenntnisse in SPS-Programmierung (z.B. Siemens S7)",
      "Selbstständige und zuverlässige Arbeitsweise",
    ],
  },
];

const benefits = [
  {
    text: "Unbefristete Festanstellung",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    text: "Attraktive Vergütung mit Schichtzulagen",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    text: "26 Tage Urlaub",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    text: "Familiäres Betriebsklima",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    text: "Kurze Entscheidungswege",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    text: "Einarbeitung & Weiterbildung",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    text: "Arbeitskleidung wird gestellt",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    text: "Zuschüsse für Sicherheitsschuhe",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    text: "Betriebliche Altersvorsorge",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    text: "Gute Verkehrsanbindung & Parkplätze",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

function JobCard({
  job,
  index,
}: {
  job: (typeof jobs)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h4 className="text-lg font-semibold text-slate-900">{job.title}</h4>
          <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Briefcase className="h-3.5 w-3.5" />
              {job.type}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              Ab sofort
            </span>
          </div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="shrink-0 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
        >
          {expanded ? "Weniger" : "Details"}
        </button>
      </div>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="mt-6 grid gap-6 border-t border-slate-100 pt-6 sm:grid-cols-2"
        >
          <div>
            <h5 className="text-sm font-semibold text-slate-900">Aufgaben</h5>
            <ul className="mt-3 space-y-2">
              {job.tasks.map((task) => (
                <li
                  key={task}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                  {task}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-900">
              Anforderungen
            </h5>
            <ul className="mt-3 space-y-2">
              {job.requirements.map((req) => (
                <li
                  key={req}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      {/* Jetzt bewerben Button inside card */}
      <div className="mt-6 border-t border-slate-100 pt-6">
        <a
          href="#bewerbung"
          className="inline-flex items-center justify-center rounded-lg bg-primary-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-950"
        >
          Jetzt bewerben
        </a>
      </div>
    </motion.div>
  );
}

/* ---------- Application Form ---------- */

function ApplicationForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:service@pacos-gmbh.de?subject=${encodeURIComponent(`Bewerbung: ${formData.position || "Initiativbewerbung"}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nE-Mail: ${formData.email}\nPosition: ${formData.position || "Initiativbewerbung"}\n\n${formData.message}\n\n(Bewerbungsunterlagen bitte als Anhang per E-Mail senden)`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h3 className="text-xl font-semibold text-slate-900">Jetzt bewerben</h3>
      <p className="mt-2 text-sm text-slate-500">
        Senden Sie uns Ihre Bewerbung – wir freuen uns darauf, Sie kennenzulernen.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="bewerbung-name"
              className="block text-sm font-medium text-slate-700"
            >
              Name
            </label>
            <input
              type="text"
              id="bewerbung-name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
              placeholder="Ihr vollständiger Name"
            />
          </div>
          <div>
            <label
              htmlFor="bewerbung-email"
              className="block text-sm font-medium text-slate-700"
            >
              E-Mail
            </label>
            <input
              type="email"
              id="bewerbung-email"
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

        <div>
          <label
            htmlFor="bewerbung-position"
            className="block text-sm font-medium text-slate-700"
          >
            Position
          </label>
          <select
            id="bewerbung-position"
            value={formData.position}
            onChange={(e) =>
              setFormData({ ...formData, position: e.target.value })
            }
            className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
          >
            <option value="">Initiativbewerbung</option>
            {jobs.map((job) => (
              <option key={job.title} value={job.title}>
                {job.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="bewerbung-message"
            className="block text-sm font-medium text-slate-700"
          >
            Anschreiben / Nachricht
          </label>
          <textarea
            id="bewerbung-message"
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="mt-1.5 block w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
            placeholder="Erzählen Sie uns kurz von sich..."
          />
        </div>

        {/* File upload */}
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Bewerbungsunterlagen (PDF)
          </label>
          <div
            onClick={() => fileInputRef.current?.click()}
            className="mt-1.5 flex cursor-pointer items-center gap-3 rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-4 transition-colors hover:border-primary-300 hover:bg-primary-50/30"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
              <Upload className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              {fileName ? (
                <p className="truncate text-sm font-medium text-slate-900">
                  {fileName}
                </p>
              ) : (
                <>
                  <p className="text-sm font-medium text-slate-700">
                    PDF hochladen
                  </p>
                  <p className="text-xs text-slate-400">
                    Lebenslauf, Zeugnisse, Anschreiben (max. 10 MB)
                  </p>
                </>
              )}
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-lg bg-primary-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-primary-950 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none sm:w-auto"
        >
          Bewerbung absenden
        </button>
      </form>
    </motion.div>
  );
}

/* ---------- Main Karriere Section ---------- */

export default function Karriere() {
  return (
    <section id="karriere" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Karriere
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Werden Sie Teil unseres Teams
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Über 120 Jahre Kosmetikfertigung am Standort Halle –
            <br />
            in einem familiären Umfeld, in dem jeder wachsen kann.
          </p>
        </motion.div>
      </div>

      {/* Gallery */}
      <div className="mt-16">
        <KarriereGallery />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 rounded-2xl border border-primary-100 bg-primary-50/50 p-6 sm:p-8"
        >
          <h3 className="text-lg font-semibold text-slate-900 text-center">
            Was wir bieten
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.text}
                className="flex flex-col items-center gap-2 rounded-xl bg-white/80 p-4 text-center"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                  {benefit.icon}
                </div>
                <span className="text-sm font-medium text-slate-700 leading-snug">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Job listings */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-slate-900">
            Offene Stellen
          </h3>
          <p className="mt-2 text-slate-500">
            Aktuell suchen wir Verstärkung in folgenden Bereichen.
          </p>
          <div className="mt-8 space-y-4">
            {jobs.map((job, i) => (
              <JobCard key={job.title} job={job} index={i} />
            ))}
          </div>
        </div>

        {/* Application form */}
        <div id="bewerbung" className="mt-16 scroll-mt-24">
          <ApplicationForm />
        </div>
      </div>
    </section>
  );
}
