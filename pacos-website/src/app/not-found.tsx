import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Seite nicht gefunden
      </h1>
      <p className="mt-6 text-base leading-7 text-slate-600">
        Die angeforderte Seite existiert leider nicht.
      </p>
      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-primary-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-900"
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
      </div>
    </main>
  );
}
