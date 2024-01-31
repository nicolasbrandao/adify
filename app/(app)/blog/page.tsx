import React from "react";
import PostCard from "../components/PostCard";
import { sanity } from "@/sanity/lib/client";

const posts = await sanity.fetchAllPosts();

const postsWithKeywords = await Promise.all(
  posts.map(async (post) => {
    const keywords = await sanity.fetchPostKeywords(post.keywords);
    return { ...post, keywords };
  }),
);

const keywords = await sanity.fetchKeywords();

export default function BlogPage() {
  return (
    <section className="mt-10 flex flex-col items-center gap-4 p-4">
      <div className="lg:max-w-[700px]">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Categoria</span>
          </div>
          <select className="select-bordered select">
            <option value={"all"}>Todas</option>
            {keywords.map((keyword, index) => (
              <option key={index} value={keyword.title}>
                {keyword.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="my-auto flex max-w-[1024px] flex-col flex-wrap gap-4 lg:flex-row">
        {postsWithKeywords.map((post, index) => (
          <PostCard key={index} post={post} keywords={post.keywords} />
        ))}
      </div>
    </section>
  );
}
