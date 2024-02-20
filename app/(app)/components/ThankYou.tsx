import React from "react";
import Image from "next/image";
import Logo from "@/public/logo_transparent.png";
import { sanity } from "@/sanity/lib/client";
import PortableComponents from "./PortableComponents";
import PostCard from "./PostCard";
import keyword from "@/sanity/schemas/keywords.schema";
import ResourceBlock from "./ResourceBlock";

const thankYouData = await sanity.fetchThankYou();
const thankYou = thankYouData[0];

const posts = await sanity.fetchAllPosts();

const postsWithKeywords = await Promise.all(
  posts.map(async (post) => {
    const keywords = await sanity.fetchPostKeywords(post.keywords);
    return { ...post, keywords };
  }),
);

const sortedNewerPost = postsWithKeywords
  .sort(
    (a, b) =>
      new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime(),
  )
  .slice(0, 1);

const resources = await sanity.fetchResources();
const sortedNewerResource = resources
  .sort(
    (a, b) =>
      new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime(),
  )
  .slice(0, 1);

export default function About() {
  return (
    <section className="my-auto mt-28 max-w-[700px] p-4">
      <article className="flex flex-col gap-4">
        <header>
          <h1 className="text-[2rem] font-bold">{thankYou.title}</h1>
        </header>
        <PortableComponents value={thankYou.text} />
        <footer>
          <p className="flex items-center gap-4 font-bold italic">
            {thankYou.author}
            <Image src={Logo} height={32} width={32} alt="Logo Adify" />
          </p>
        </footer>
      </article>
      <div className="mt-8 flex flex-col items-center justify-center gap-8">
        <PostCard
          keywords={sortedNewerPost[0].keywords}
          post={sortedNewerPost[0]}
        />
        <ResourceBlock resource={sortedNewerResource[0]} />
      </div>
    </section>
  );
}
