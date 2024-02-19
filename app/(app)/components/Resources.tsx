import React from "react";
import { sanity } from "@/sanity/lib/client";
import ResourceBlock from "./ResourceBlock";

const resources = await sanity.fetchResources();

export default function Resources() {
  return (
    <section className="flex max-w-[1024px] flex-col gap-8">
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
