import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from "react";

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
      <body className={montserrat.className}>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center bg-base-300">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
