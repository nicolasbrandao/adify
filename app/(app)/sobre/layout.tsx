import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Adify - Sobre",
  description: "Adify - Sobre",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
