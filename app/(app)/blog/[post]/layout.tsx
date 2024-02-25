import React from "react";
import { sanity } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

const url = new URL(process.env.APP_URL || "");

export async function generateMetadata({
  params,
}: {
  params: { post: string };
}) {
  const postData = await sanity.fetchPostBySlug(params.post);
  if (!postData) notFound();
  return {
    title: `Adify - ${postData.title}`,
    description: postData.subtitle,
    keyword: postData.keywords.map((keyword) => keyword.title),
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
