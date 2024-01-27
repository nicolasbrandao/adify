import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adify - Materiais",
  description: "Adify - Materiais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
