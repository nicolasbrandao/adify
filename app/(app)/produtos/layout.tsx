import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Adify - Produtos",
  description: "Adify - Produtos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
