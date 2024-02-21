import { sanity } from "@/sanity/lib/client";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { service: string };
}) {
  const serviceData = await sanity.fetchServiceBySlug(params.service);
  return {
    title: `Adify - ${serviceData.title}`,
    description: serviceData.subtitle,
    keyword: serviceData.title,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
