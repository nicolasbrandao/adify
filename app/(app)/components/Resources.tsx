import React from "react";
import { sanity } from "@/sanity/lib/client";
import ResourceBlock from "./ResourceBlock";

export default async function Resources() {
  const resources = await sanity.fetchResources();

  return (
    <section className="flex max-w-[1024px] flex-col gap-8 p-4 lg:p-0">
      {resources.map((resource, index) => (
        <ResourceBlock
          key={resource._id}
          resource={resource}
          reverse={index % 2 !== 0}
        />
      ))}
    </section>
  );
}
