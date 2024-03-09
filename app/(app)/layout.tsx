import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from "react";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"] });

const url = new URL(process.env.APP_URL || "");

export const metadata: Metadata = {
  title: "Adify - Growth Marketing",
  description:
    "Ajudamos empresas que dependem da geração de leads a encontrarem seus indicadores, maturarem os resultados e escalarem no digital",
  keywords: ["growth marketing", "analytics", "seo"],
  metadataBase: url,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta property="og:url" content={process.env.APP_URL} />
        <meta name="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={montserrat.className}>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center bg-base-300">
          {children}
        </main>
        <Footer />
        <Script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PKGBZKP');`,
          }}
          id="gtm-script"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
