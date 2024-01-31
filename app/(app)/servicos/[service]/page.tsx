import React from "react";
import ProductDetails from "../../components/ProductDetails";
import { sanity } from "@/sanity/lib/client";

type Props = {
  params: {
    service: string;
  };
};

export default async function ProductDetailsPage({
  params: { service },
}: Props) {
  const serviceData = await sanity.fetchServiceBySlug(service);
  return (
    <>
      <ProductDetails service={serviceData} />
    </>
  );
}
