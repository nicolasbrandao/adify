import React from "react";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import Posts from "./components/Posts";
import Products from "./components/Products";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error */}
      <Posts />
      <Stats />
      <Products />
      <Testimonials />
      <ContactForm />
    </>
  );
}
