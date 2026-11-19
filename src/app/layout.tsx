import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/content/site";
import { SITE_URL } from "@/lib/site-url";

/* Self-hosted variable fonts (SIL Open Font License), no request to Google. */
const fraunces = localFont({
  variable: "--font-fraunces",
  src: [
    { path: "../fonts/fraunces.woff2", style: "normal" },
    { path: "../fonts/fraunces-italic.woff2", style: "italic" },
  ],
  display: "swap",
});

const instrument = localFont({
  variable: "--font-instrument",
  src: [
    { path: "../fonts/instrument-sans.woff2", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Maria Roszyk — front-end engineer and art historian", template: "%s — Maria Roszyk" },
  description:
    "Maria Roszyk is a front-end engineer and art historian in Half Moon Bay, California. She builds production interfaces and AI-native tools for families, and makes art from fabric scraps, wildflowers and code.",
  openGraph: { type: "website", siteName: site.name, locale: "en_US" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrument.variable} h-full`}>
      <body className="min-h-full flex flex-col px-4 sm:px-6">
        <div className="mx-auto w-full max-w-[1040px] flex-1">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
