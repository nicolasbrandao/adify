import React from "react";
import PostCard from "./PostCard";
import { sanity } from "@/sanity/lib/client";

const externalController = new AbortController();
const posts = await sanity.fetchAllPosts(externalController);

const postsWithKeywords = await Promise.all(
  posts.map(async (post) => {
    const keywords = await sanity.fetchPostKeywords(post.keywords);
    return { ...post, keywords };
  }),
);

const sortedNewerPosts = postsWithKeywords
  .sort(
    (a, b) =>
      new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime(),
  )
  .slice(0, 4);

export default function Posts() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 p-4 lg:flex-row lg:items-stretch">
      {sortedNewerPosts.map((post, index) => (
        <PostCard key={index} post={post} keywords={post.keywords} />
      ))}
    </section>
  );
}
