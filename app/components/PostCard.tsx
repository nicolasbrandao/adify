import Image from "next/image";

export default function PostCard() {
  return (
    <div className="card w-full bg-base-300">
      <figure>
        <Image
          src="https://picsum.photos/700/384"
          width={700}
          height={384}
          alt="Shoes"
          className="w-full h-[384px] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Este é o título de um post!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-between items-center">
          <div className="flex gap-1">
            <div className="badge badge-accent badge-outline">#Marketing</div>
            <div className="badge badge-accent badge-outline">#SEO</div>
          </div>
          <button className="btn btn-primary">Ler</button>
        </div>
      </div>
    </div>
  );
}
