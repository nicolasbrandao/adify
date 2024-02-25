import React from "react";
import PostDetails from "../../components/PostDetails";
import { sanity } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const postsData = await sanity.fetchAllPosts();
  if (!postsData) notFound();
  return postsData.map((post) => ({
    post: post.slug.current,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { post: string };
}) {
  const postData = await sanity.fetchPostBySlug(params.post);
  if (!postData) notFound();

  const keywords = await sanity.fetchPostKeywords(postData.keywords);
  const postDetails = { ...postData, keywords };

  return (
    <>
      <PostDetails post={postDetails} keywords={keywords} />
    </>
  );
}
