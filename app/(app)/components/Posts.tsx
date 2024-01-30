import PostCard from "./PostCard";

export default function Posts() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 p-4 lg:flex-row">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </section>
  );
}
