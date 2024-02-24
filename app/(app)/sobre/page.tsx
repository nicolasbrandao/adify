import React from "react";
import About from "../components/About";

export default function AboutPage() {
  return (
    <>
      {/* @ts-expect-error */}
      <About />
    </>
  );
}
