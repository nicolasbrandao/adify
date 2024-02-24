import React from "react";
import Image from "next/image";
import classNames from "classnames";
import { sanity } from "@/sanity/lib/client";
import { Testimonials as TestimonialsType } from "@/types/types";
import { urlForImage } from "@/sanity/lib/image";

export default async function Testimonials() {
  const testimonialsData = await sanity.fetchTestimonials();

  return (
    <section className="flex w-full flex-col items-center gap-6 p-4 lg:flex-row lg:justify-center">
      {testimonialsData.map((testimonial, index) => {
        return (
          <TestimonialCard
            key={index}
            reverse={index % 2 !== 0}
            testimonial={testimonial}
          />
        );
      })}
    </section>
  );
}

type TestimonialCardProps = {
  testimonial: TestimonialsType;
  reverse?: boolean;
};

function TestimonialCard({ reverse, testimonial }: TestimonialCardProps) {
  const chatBubbleContainer = classNames(
    "chat my-auto",
    reverse ? "chat-end lg:chat-start" : "chat-start",
  );

  const chatName = classNames(
    "card-title text-secondary",
    reverse && "self-end lg:self-start",
  );

  return (
    <div className="flex flex-col p-4 lg:max-w-[300px]">
      <div className={chatBubbleContainer}>
        <div className="chat-image avatar">
          <div className="w-14 rounded-full">
            <Image
              alt={testimonial.name}
              src={urlForImage(testimonial.image)}
              width={56}
              height={56}
            />
          </div>
        </div>
        <div className="chat-bubble w-fit bg-base-100 text-base-content lg:rounded-br-lg">
          {testimonial.testimonial}
        </div>
      </div>
      <h2 className={chatName}>{testimonial.name}</h2>
    </div>
  );
}
