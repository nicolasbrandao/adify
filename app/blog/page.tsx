import PostCard from "../components/PostCard";

export default function BlogPage() {
  return (
    <section className=" flex flex-col gap-4 mt-10 p-4">
      <div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Categoria</span>
          </div>
          <select className="select select-bordered">
            <option disabled selected>
              Pick one
            </option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </label>
      </div>

      <div className="flex flex-col gap-4">
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
