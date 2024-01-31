import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Adify - Política de Privacidade",
  description: "Adify - Política de Privacidade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
