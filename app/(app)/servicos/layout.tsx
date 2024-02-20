import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Adify - Serviços",
  description: "Adify - Serviços",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
