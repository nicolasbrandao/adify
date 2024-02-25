import { sanity } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import React from "react";

const url = new URL(process.env.APP_URL || "");

export async function generateMetadata({
  params,
}: {
  params: { service: string };
}) {
  const serviceData = await sanity.fetchServiceBySlug(params.service);
  if (!serviceData) notFound();
  return {
    title: `Adify - ${serviceData.title}`,
    description: serviceData.subtitle,
    keyword: serviceData.title,
    metadataBase: url,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
