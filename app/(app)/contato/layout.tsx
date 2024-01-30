import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adify - Contato",
  description: "Adify - Contato",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
