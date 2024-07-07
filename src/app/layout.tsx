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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.className} ${instrumentSerif.variable} ${inter.variable} min-h-screen h-content`}
      >
        {children}
      </body>
    </html>
  );
}
