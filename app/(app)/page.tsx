import React from "react";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import Posts from "./components/Posts";
import Products from "./components/Products";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import SlideIn from "./components/animated/SlideIn";

export default function Home() {
  return (
    <>
      {/* @ts-expect-error */}
      <Hero />

      <Posts />

      <SlideIn>
        {/* @ts-expect-error */}
        <Stats />
      </SlideIn>
      {/* @ts-expect-error */}
      <Products />

      <SlideIn>
        {/* @ts-expect-error */}
        <Testimonials />
      </SlideIn>
      <SlideIn>
        <ContactForm />
      </SlideIn>
    </>
  );
}
