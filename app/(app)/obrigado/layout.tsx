import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Adify - Obrigado!",
  description: "Adify - Obrigado!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
