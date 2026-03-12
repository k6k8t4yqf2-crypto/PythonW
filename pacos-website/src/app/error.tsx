"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
        Fehler
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Etwas ist schiefgelaufen
      </h1>
      <p className="mt-6 text-base leading-7 text-slate-600">
        Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
      </p>
      <div className="mt-10">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-lg bg-primary-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-900"
        >
          Erneut versuchen
        </button>
      </div>
    </main>
  );
}
