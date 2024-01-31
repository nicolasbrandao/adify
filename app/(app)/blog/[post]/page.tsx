import React from "react";
import PostDetails from "../../components/PostDetails";
import { sanity } from "@/sanity/lib/client";

export default async function PostPage({
  params,
}: {
  params: { post: string };
}) {
  const postData = await sanity.fetchPostBySlug(params.post);
  const keywords = await sanity.fetchPostKeywords(postData.keywords);
  const postDetails = { ...postData, keywords };
  return (
    <>
      <PostDetails post={postDetails} keywords={keywords} />
    </>
  );
}
