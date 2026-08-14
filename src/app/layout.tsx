import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale";
import { SiteHeader } from "@/components/global/SiteHeader";
import { SiteFooter } from "@/components/global/SiteFooter";
import { ConceptBanner } from "@/components/global/ConceptBanner";
import { siteConfig } from "@/content/site-config";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// CONCEPT MODE metadata — noindex/nofollow, no "official" claim,
// no Person/ProfilePage structured data, no sitemap submission.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "Bruno Del Pino — Independent Website Concept",
    template: "%s · Bruno Del Pino Concept",
  },
  description:
    "An independent, private website concept for Spanish FIA Formula 3 driver Bruno Del Pino (#16, Van Amersfoort Racing, 2026). Not an official site.",
  keywords: [
    "Bruno Del Pino",
    "FIA Formula 3",
    "Van Amersfoort Racing",
    "concept website",
  ],
  authors: [{ name: "Independent Concept" }],
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "Bruno Del Pino — Independent Website Concept",
    description:
      "Private concept site. Not affiliated with Bruno Del Pino, Van Amersfoort Racing or FIA Formula 3.",
    type: "website",
    siteName: "Bruno Del Pino Concept",
  },
  twitter: {
    card: "summary",
    title: "Bruno Del Pino — Independent Website Concept",
    description:
      "Private concept site. Not affiliated with Bruno Del Pino, Van Amersfoort Racing or FIA Formula 3.",
  },
  alternates: {
    canonical: "/",
    languages: { en: "/", es: "/" },
  },
};

export const viewport: Viewport = {
  themeColor: "#090909",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${barlow.variable} ${inter.variable} flex min-h-screen flex-col bg-background text-foreground antialiased`}
      >
        <LocaleProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:left-4 focus:top-4 focus:bg-signal focus:px-4 focus:py-2 focus:text-ink focus:text-sm focus:font-semibold"
          >
            Skip to content
          </a>
          <ConceptBanner />
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
