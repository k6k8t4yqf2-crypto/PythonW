import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PaCos GmbH – Kosmetik-Lohnherstellung seit 1902",
  description:
    "PaCos GmbH – Ihr Partner für Kosmetik-Lohnherstellung in Halle (Saale). Entwicklung, Produktion und Abfüllung aus einer Hand. GMP-konforme Fertigung seit über 120 Jahren.",
  keywords: [
    "Kosmetik-Lohnhersteller",
    "Lohnherstellung",
    "Kosmetikproduktion",
    "Contract Manufacturing",
    "PaCos GmbH",
    "Halle Saale",
  ],
  openGraph: {
    title: "PaCos GmbH – Kosmetik-Lohnherstellung seit 1902",
    description:
      "Entwicklung, Produktion und Abfüllung kosmetischer Produkte aus einer Hand.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${jakarta.variable} antialiased`}>{children}</body>
    </html>
  );
}
