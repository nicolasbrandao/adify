import React from "react";
import { sanity } from "@/sanity/lib/client";
import BlogGallery from "../components/BlogGallery";

export const dynamic = "force-dynamic";

const posts = await sanity.fetchAllPosts();

const postsWithKeywords = await Promise.all(
  posts.map(async (post) => {
    const keywords = await sanity.fetchPostKeywords(post.keywords);
    return { ...post, keywords };
  }),
);

const keywords = await sanity.fetchKeywords();

export default function BlogPage() {
  return <BlogGallery keywords={keywords} postsData={postsWithKeywords} />;
}
