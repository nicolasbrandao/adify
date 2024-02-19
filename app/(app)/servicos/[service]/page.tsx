import React from "react";
import ProductDetails from "../../components/ProductDetails";
import { sanity } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

type Props = {
  params: {
    service: string;
  };
};

export async function generateStaticParams() {
  const servicesData = await sanity.fetchServices();
  return servicesData.map((service) => ({
    service: service.slug.current,
  }));
}

export default async function ProductDetailsPage({
  params: { service },
}: Props) {
  const serviceData = await sanity.fetchServiceBySlug(service);
  if (!serviceData) notFound();
  return (
    <>
      <ProductDetails service={serviceData} />
    </>
  );
}
