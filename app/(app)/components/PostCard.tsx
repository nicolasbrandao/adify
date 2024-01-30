import Image from "next/image";
import Link from "next/link";

export default function PostCard() {
  return (
    <div className="card w-[325px] bg-neutral text-base-300">
      <figure>
        <Image
          src="https://picsum.photos/700/384"
          width={700}
          height={384}
          alt="Shoes"
          className="h-[384px] w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Este é o título de um post!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions items-center justify-between">
          <div className="flex gap-1">
            <div className="badge-base-content badge badge-outline">
              #Marketing
            </div>
            <div className="badge-base-content badge badge-outline">#SEO</div>
          </div>
          <Link href={"/blog/teste"} className="btn-primary btn btn-xs">
            Ler mais
          </Link>
        </div>
      </div>
    </div>
  );
}
