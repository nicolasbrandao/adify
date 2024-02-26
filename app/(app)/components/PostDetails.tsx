import React from "react";

import Image from "next/image";
import { Post, Keyword } from "@/types/types";
import { urlForImage } from "@/sanity/lib/image";
import PortableComponents from "./PortableComponents";
import SocialShare from "./SocialShare";

type Props = {
  post: Post;
  keywords: Keyword[];
};

const url = process.env.APP_URL ?? "";

export default function PostDetails({ post, keywords }: Props) {
  const date = new Date(post._createdAt);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <section className="mb-8 mt-16 flex flex-col lg:max-w-[700px]">
      <article>
        <header>
          <Image
            className="w-full p-4 lg:rounded-b-xl"
            src={urlForImage(post.image)}
            width={700}
            height={384}
            alt={post.title}
          />
          <div className="p-4">
            <h1 className="w-fit bg-gradient-to-r from-cyan-300 to-gray-200 bg-clip-text text-[2rem] font-bold text-transparent">
              {post.title}
            </h1>
            <h2 className="my-2 font-bold">{post.subtitle}</h2>
            <p className="text-sm italic">{post.author}</p>
            <p className="text-xs italic">
              {date.toLocaleDateString("pt-BR", options)}
            </p>
          </div>
          <div className="flex gap-1 p-4">
            {keywords.map((keyword, index) => (
              <div
                key={index}
                className="badge badge-accent badge-outline whitespace-nowrap"
              >
                {keyword.title}
              </div>
            ))}
          </div>
        </header>
        <div className="p-4">
          <PortableComponents value={post.content} />
        </div>
      </article>
      <SocialShare
        slug={post.slug.current}
        type="blog"
        message={post.title}
        baseUrl={url}
      />
    </section>
  );
}
