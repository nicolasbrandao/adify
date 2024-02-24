import React from "react";
import Resources from "../components/Resources";

export default function ResourcesPage() {
  return (
    <section className="mb-12 mt-20 flex w-full flex-wrap justify-center lg:gap-4">
      {/* @ts-expect-error */}
      <Resources />
    </section>
  );
}
