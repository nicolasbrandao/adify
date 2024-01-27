import Image from "next/image";
import classNames from "classnames";

export default function Testimonials() {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-center gap-6 items-center w-full p-4">
      <TestimonialCard />
      <TestimonialCard reverse />
      <TestimonialCard />
    </section>
  );
}

type TestimonialCardProps = {
  reverse?: boolean;
};

function TestimonialCard({ reverse }: TestimonialCardProps) {
  const chatBubbleContainer = classNames(
    "chat my-auto",
    reverse ? "chat-end lg:chat-start" : "chat-start",
  );

  const chatName = classNames(
    "card-title text-secondary",
    reverse && "self-end lg:self-start",
  );

  return (
    <div className="flex flex-col lg:max-w-[300px]">
      <div className={chatBubbleContainer}>
        <div className="chat-image avatar">
          <div className="w-14 rounded-full">
            <Image
              alt="Tailwind CSS chat bubble component"
              src="https://picsum.photos/56/56?random=1"
              width={56}
              height={56}
            />
          </div>
        </div>
        <div className="chat-bubble w-fit bg-base-100 text-base-content">
          Not leave it in Darkness. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Mollitia dolores aliquid perferendis esse ipsa
          incidunt. Porro, fuga, assumenda.
        </div>
      </div>
      <h2 className={chatName}>Mary Jane</h2>
    </div>
  );
}
