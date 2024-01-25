import Image from "next/image";
import PostCard from "./PostCard";

export default function Posts() {
  return (
    <section className="flex flex-col items-center p-4 bg-base-100 w-full">
      <div className="carousel bg-base-100 w-full">
        <div id="item1" className="carousel-item w-full">
          <PostCard />
        </div>
        <div id="item2" className="carousel-item w-full">
          <PostCard />
        </div>
        <div id="item3" className="carousel-item w-full">
          <PostCard />
        </div>
        <div id="item4" className="carousel-item w-full">
          <PostCard />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </section>
  );
}
