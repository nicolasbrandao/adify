import PostCard from "../components/PostCard";

export default function BlogPage() {
  return (
    <section className="mt-10 flex flex-col items-center gap-4 p-4">
      <div className="lg:max-w-[700px]">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Categoria</span>
          </div>
          <select className="select-bordered select">
            <option>Todas</option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </label>
      </div>

      <div className="my-auto flex max-w-[1024px] flex-col flex-wrap gap-4 lg:flex-row">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </section>
  );
}
