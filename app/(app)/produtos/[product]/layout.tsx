import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Adify - Produto",
  description: "Adify - Produto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
