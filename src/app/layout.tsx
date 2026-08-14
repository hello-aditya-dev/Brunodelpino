import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale";
import { SiteHeader } from "@/components/global/SiteHeader";
import { SiteFooter } from "@/components/global/SiteFooter";
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

// V2 metadata — pitch mode. noindex/nofollow, no official claim.
// Canonical: no fake .concept domain (V2 fix). Pitch mode uses no canonical
// to avoid claiming a domain we don't own.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteOrigin),
  title: {
    default: "Bruno Del Pino | FIA Formula 3 Driver #16",
    template: "%s | Bruno Del Pino",
  },
  description:
    "Bruno Del Pino — Spanish FIA Formula 3 driver, #16, Van Amersfoort Racing, 2026. Melbourne breakthrough, Barcelona home race, Madrid finale.",
  keywords: [
    "Bruno Del Pino",
    "FIA Formula 3",
    "Van Amersfoort Racing",
    "2026 season",
  ],
  authors: [{ name: "Independent Concept" }],
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Bruno Del Pino | FIA Formula 3 Driver #16",
    description:
      "Spanish FIA Formula 3 driver. #16, Van Amersfoort Racing, 2026.",
    type: "website",
    siteName: "Bruno Del Pino",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Bruno Del Pino — FIA Formula 3, #16, 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Del Pino | FIA Formula 3 Driver #16",
    description:
      "Spanish FIA Formula 3 driver. #16, Van Amersfoort Racing, 2026.",
    images: ["/og.png"],
  },
  alternates: {
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
