import PostCard from "./PostCard";

export default function Posts() {
  return (
    <section className="flex flex-col lg:flex-row gap-4 items-center justify-center p-4 w-full">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </section>
  );
}
