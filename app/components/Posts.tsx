import Image from "next/image"

export default function Posts() {
  return (
    <section className="flex flex-col items-center p-4 bg-base-content w-full">
      <div className="carousel bg-base-content w-full">
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
        <a href="#item1" className="btn btn-xs">1</a> 
        <a href="#item2" className="btn btn-xs">2</a> 
        <a href="#item3" className="btn btn-xs">3</a> 
        <a href="#item4" className="btn btn-xs">4</a>
      </div>  
    </section>
  )
}

function PostCard() {
  return (
    <div className="card w-full bg-base-100">
      <figure>
        <Image src="https://picsum.photos/700/384" width={700} height={384} alt="Shoes" className="w-full h-[384px] object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Este é o título de um post!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Ler</button>
        </div>
      </div>
  </div>
  )
}
