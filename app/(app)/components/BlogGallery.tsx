"use client";

import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { sanity } from "@/sanity/lib/client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Keyword, Post } from "@/types/types";

const pageSize = 10;

function BlogGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedKeyword, setSelectedKeyword] = useState("all");
  const [renderedPosts, setRenderedPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [keywords, setKeywords] = useState<Keyword[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      let totalPostsCount;

      const filteredPosts = await sanity.fetchAllPosts(
        currentPage,
        pageSize,
        selectedKeyword,
      );

      if (selectedKeyword === "all") {
        totalPostsCount = await sanity.fetchTotalPostsCount();
      } else {
        totalPostsCount =
          await sanity.fetchTotalPostsCountByKeyword(selectedKeyword);
      }

      setTotalPages(Math.ceil(totalPostsCount / pageSize));

      const postsWithKeywords = await Promise.all(
        filteredPosts.map(async (post) => ({
          ...post,
          keywords: await sanity.fetchPostKeywords(post.keywords),
        })),
      );

      setRenderedPosts(postsWithKeywords);
      setIsLoading(false);
    };

    fetchPosts();
  }, [currentPage, selectedKeyword]);

  useEffect(() => {
    const fetchKeywords = async () => {
      const fetchedKeywords = await sanity.fetchKeywords();
      setKeywords(fetchedKeywords);
    };

    fetchKeywords();
  }, []);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedKeyword(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-between gap-4 p-4 pt-[60px]">
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
        {isLoading ? (
          <LoadingSpinner />
        ) : renderedPosts.length > 0 ? (
          renderedPosts.map((post) => (
            <PostCard key={post._id} post={post} keywords={post.keywords} />
          ))
        ) : (
          <p>Nenhum post encontrado 😔</p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button
          className="btn-outline btn btn-circle"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowLeftIcon className="h-[20px]" />
        </button>
        <button
          className="btn-outline btn btn-circle"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage * pageSize >= totalPages}
        >
          <ArrowRightIcon className="h-[20px]" />
        </button>
      </div>
    </section>
  );
}

export default BlogGallery;

function LoadingSpinner() {
  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto my-auto h-fit w-fit">
        <span className="loading loading-spinner loading-lg" />
      </div>
    </div>
  );
}
