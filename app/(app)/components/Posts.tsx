"use client";

import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { sanity } from "@/sanity/lib/client";
import { Post } from "@/types/types";

export default function Posts() {
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await sanity.fetchAllPosts();

        const postsWithKeywords = await Promise.all(
          posts.map(async (post) => {
            const keywords = await sanity.fetchPostKeywords(post.keywords);
            return { ...post, keywords };
          }),
        );

        setPostsData(postsWithKeywords);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false); // Set loading to false whether successful or not
      }
    };

    fetchPosts();
  }, []);

  const sortedNewerPosts = postsData
    .sort(
      (a, b) =>
        new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime(),
    )
    .slice(0, 4);

  if (isLoading) {
    return (
      <div className="flex min-h-[624px] items-center">
        <div className="mx-auto my-auto h-fit w-fit">
          <span className="loading loading-spinner loading-lg" />
        </div>
      </div>
    );
  }

  return (
    <section className="flex min-h-[624px] w-full flex-col items-center justify-center gap-4 p-4 lg:flex-row lg:items-stretch">
      {sortedNewerPosts.map((post, index) => (
        <PostCard key={index} post={post} keywords={post.keywords} />
      ))}
    </section>
  );
}
