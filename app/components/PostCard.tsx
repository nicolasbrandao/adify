import Image from "next/image";

export default function PostCard() {
  return (
    <div className="card w-full lg:max-w-[380px] bg-base-300 flex-1">
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
            <div className="badge badge-base-content badge-outline">
              #Marketing
            </div>
            <div className="badge badge-base-content badge-outline">#SEO</div>
          </div>
          <button className="btn btn-xs btn-primary text-base-100">Ler mais</button>
        </div>
      </div>
    </div>
  );
}
