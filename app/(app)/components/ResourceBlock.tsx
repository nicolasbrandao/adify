import { urlForImage } from "@/sanity/lib/image";
import { Resource } from "@/types/types";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Reveal from "./animated/Reveal";

type Props = {
  resource: Resource;
  reverse?: boolean;
};

function ResourceBlock({ resource, reverse }: Props) {
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
        <Reveal>
          <h2 className="text-[2rem]">{resource.title}</h2>
        </Reveal>
        <Reveal>
          <p className="bg-gradient-to-r from-cyan-300 to-gray-200 bg-clip-text text-[2.5rem] text-transparent">
            {resource.highlight}
          </p>
        </Reveal>
        <Reveal>
          <p>{resource.description}</p>
        </Reveal>
        <Reveal>
          <Link
            href={resource.url}
            target="_blank"
            className="btn-primary btn flex max-w-[250px]"
          >
            Download
            <ArrowDownTrayIcon className="h-6" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}

export default ResourceBlock;
