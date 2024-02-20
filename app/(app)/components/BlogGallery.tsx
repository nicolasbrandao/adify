"use client";

import { Keyword, Post } from "@/types/types";
import React, { useState } from "react";
import PostCard from "./PostCard";

type Props = {
  keywords: Keyword[];
  postsData: Post[];
};

function BlogGallery({ keywords, postsData }: Props) {
  const [renderedPosts, setRenderedPosts] = useState<Post[]>(postsData);
  const [selectedKeyword, setSelectedKeyword] = useState<string>("all");

  const handleKeywordChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelectedKeyword = event.target.value;
    setSelectedKeyword(newSelectedKeyword);

    if (newSelectedKeyword === "all") {
      setRenderedPosts(postsData);
    } else {
      const filteredPosts = postsData.filter(
        (post) => post.keywords[0].title === newSelectedKeyword,
      );
      setRenderedPosts(filteredPosts);
    }
  };

  return (
    <section className="mt-10 flex flex-col items-center gap-4 p-4">
      <div className="lg:max-w-[700px]">
        <label className="form-control w-full">
          <div className="label w-full place-content-center">
            <span className="label-text w-fit">Selecione uma categoria</span>
          </div>
          <select
            className="select-bordered select"
            onChange={handleKeywordChange}
          >
            <option value={"all"}>Todas</option>
            {keywords.map((keyword, index) => (
              <option key={index} value={keyword.title}>
                {keyword.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="my-auto flex flex-col flex-wrap gap-4 lg:flex-row lg:justify-center">
        {renderedPosts.length > 0 ? (
          renderedPosts.map((post) => (
            <PostCard key={post._id} post={post} keywords={post.keywords} />
          ))
        ) : (
          <p>Nenhum post encontrado 😔</p>
        )}
      </div>
    </section>
  );
}

export default BlogGallery;
