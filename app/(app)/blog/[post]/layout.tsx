import React from "react";
import { sanity } from "@/sanity/lib/client";

export async function generateMetadata({
  params,
}: {
  params: { post: string };
}) {
  const postData = await sanity.fetchPostBySlug(params.post);
  return {
    title: `Adify - ${postData.title}`,
    description: postData.subtitle,
    keyword: postData.keywords.map((keyword) => keyword.title),
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
