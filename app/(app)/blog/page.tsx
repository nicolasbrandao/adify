import React from "react";
import { sanity } from "@/sanity/lib/client";
import BlogGallery from "../components/BlogGallery";

export default async function BlogPage() {
  const posts = await sanity.fetchAllPosts();

  const postsWithKeywords = await Promise.all(
    posts.map(async (post) => {
      const keywords = await sanity.fetchPostKeywords(post.keywords);
      return { ...post, keywords };
    }),
  );

  const keywords = await sanity.fetchKeywords();

  return <BlogGallery keywords={keywords} postsData={postsWithKeywords} />;
}
