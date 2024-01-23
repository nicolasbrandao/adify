import Image from "next/image"

export default function Testimonials() {
  return (
    <section className='flex flex-col lg:flex-row lg:justify-center gap-6 items-center w-full p-4'>
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </section>
  )
}

function TestimonialCard() {
  return (
    <div className="w-96 bg-base-100 text-base-300">
        <div className="chat chat-start my-auto">
          <div className="chat-image avatar">
            <div className="w-14 rounded-full">
              <Image alt="Tailwind CSS chat bubble component" src="https://picsum.photos/56/56?random=1" width={56} height={56} />
            </div>
          </div>
          <div className="chat-bubble w-[348px] lg:w-fit">Not leave it in Darkness. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dolores aliquid perferendis esse ipsa incidunt. Porro, fuga, assumenda.</div>
        </div>
        <h2 className="card-title text-base-content">Mary Jane</h2>
    </div>
  )
}