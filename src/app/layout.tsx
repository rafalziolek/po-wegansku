import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Instrument_Sans({ subsets: ["latin"], variable: "--font-inter" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Po Wegańsku. Na Słodko — Nikola Chmiel",
  description:
    "Proste, wegańskie przepisy na słodkie wypieki oraz przysmaki pt. “po wegańsku. na słodko” autorki Nikola Chmiel. Książka jest kierowana do wszystkich. Wegan czy nie wegan. To nie jest istotne. Chcę, abyście z moich przepisów czerpali inspirację do lepszego traktowania swojego ciała, a może nawet spędzili trochę czasu i poczytali o weganizmie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.className} ${instrumentSerif.variable} ${inter.variable} min-h-screen h-content bg-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
