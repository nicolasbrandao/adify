import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Keyword, Post } from "@/types/types";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  post: Post;
  keywords: Keyword[];
};

export default function PostCard({ post, keywords }: Props) {
  return (
    <div className="card h-[600px] w-[325px] bg-neutral text-base-300">
      <figure>
        <Image
          src={urlForImage(post.image)}
          width={700}
          height={384}
          alt={post.title}
          className="h-[384px] w-full object-cover"
        />
      </figure>
      <div className="card-body h-[200px]">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.subtitle}</p>
        <div className="card-actions flex flex-col items-center justify-between">
          <div className="flex gap-1 self-start">
            {keywords.map((keyword) => (
              <div
                key={keyword._ref}
                className="badge-base-content badge badge-outline whitespace-nowrap"
              >
                {keyword.title}
              </div>
            ))}
          </div>
          <Link
            href={`/blog/${post.slug.current}`}
            className="btn-primary btn btn-xs self-end"
          >
            Ler mais
          </Link>
        </div>
      </div>
    </div>
  );
}
