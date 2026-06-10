import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { baseMetadata } from "@/lib/metadata";
import Navbar from "@/components/Navbar";
import MobileAppBar from "@/components/MobileAppBar";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";
import { StickySavingsBar } from "@/components/StickySavingsBar";
import { FaqSchema } from "@/components/FaqSchema";
import { OrganizationSchema, PhysicianSchema, ServiceSchema } from "@/components/StructuredData";
import { SharedFooter } from "@/components/SharedFooter";
import BackToTop from "@/components/BackToTop";
import GoogleTagManager from "@/components/GoogleTagManager";
import { Toaster } from "sonner";
import { DpcQuizProvider, DpcQuizMobileSticky } from "@/components/dpc-fit-quiz";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0D9488" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DPC Indy" />
        <link rel="apple-touch-icon" href="/images/logos/dci-icon-192.png" sizes="192x192" />
      </head>
      <body className={`${sans.variable} ${display.variable} antialiased`}>
        {process.env.NEXT_PUBLIC_GTM_ID ? (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        ) : null}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <DpcQuizProvider>
            {/* SEO & Structured Data */}
            <FaqSchema />
            <OrganizationSchema />
            <PhysicianSchema />
            <ServiceSchema />

            {/* Navigation Layer */}
            <Navbar />

            {/* Main Content */}
            <div id="main-content" className="pt-20 pb-20 md:pb-0">
              {children}
            </div>

            {/* Footer */}
            <SharedFooter />

            {/* Mobile App Bar (Bottom Navigation) */}
            <MobileAppBar />

            {/* Mobile quiz CTA */}
            <DpcQuizMobileSticky />

            {/* PWA Install Prompt */}
            <PWAInstallPrompt />

            {/* Sticky Value Hook */}
            <StickySavingsBar />

            {/* Back to Top Button */}
            <BackToTop />
          </DpcQuizProvider>
        </ThemeProvider>

        <Toaster position="top-right" richColors closeButton />

        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').then(
                  () => {
                    // Service worker registered successfully (silent in production)
                  },
                  () => {
                    // Service worker registration failed (silent in production)
                  }
                );
              });
            }
          `
        }} />
      </body>
    </html>
  );
}
