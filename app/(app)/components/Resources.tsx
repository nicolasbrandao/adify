import React from "react";
import classNames from "classnames";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { sanity } from "@/sanity/lib/client";
import { Resource } from "@/types/types";
import { urlForImage } from "@/sanity/lib/image";

const resources = await sanity.fetchResources();

export default function Resources() {
  console.log(resources);
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

type ResourceBlockProps = {
  resource: Resource;
  reverse?: boolean;
};

function ResourceBlock({ resource, reverse }: ResourceBlockProps) {
  const mainContainer = classNames(
    "flex flex-col lg:items-center relative",
    reverse ? "lg:flex-row-reverse" : "lg:flex-row",
  );

  const imageContainer = classNames("w-full h-[700px] object-cover");

  const textContainer = classNames(
    "flex flex-col gap-4 p-4 absolute top-0 left-0 lg:static backdrop-blur h-full bg-base-100/40 lg:bg-base-300 place-content-center",
  );

  return (
    <div className={mainContainer}>
      <Image
        src={urlForImage(resource.image)}
        width={700}
        height={700}
        alt={resource.title}
        className={imageContainer}
      />
      <div className={textContainer}>
        <h2 className="text-[2rem]">{resource.title}</h2>
        <p className="bg-gradient-to-r from-cyan-300 to-gray-200 bg-clip-text text-[2.5rem] text-transparent">
          {resource.highlight}
        </p>
        <p>{resource.description}</p>
        <Link
          href={resource.url}
          target="_blank"
          className="btn-primary btn flex max-w-[250px]"
        >
          Download
          <ArrowDownTrayIcon className="h-6" />
        </Link>
      </div>
    </div>
  );
}
