// TODO: fix types on this whole file
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

type PortableComponentsConfigProps = {
  value?: {
    imageUrl?: string;
    href?: string | undefined;
  };
  children?: ReactNode;
};

const PortableComponentsConfig = {
  types: {
    image: ({ value }: PortableComponentsConfigProps) => (
      <Image
        src={urlFor(value).auto("format").url() || ""}
        className="mx-auto my-4 w-fit object-cover"
        width={500}
        height={500}
        alt="Imagem"
      />
    ),
  },
  list: {
    bullet: ({ children }: PortableComponentsConfigProps) => (
      <ul className="mt-xl list-disc pl-8">{children}</ul>
    ),
    number: ({ children }: PortableComponentsConfigProps) => (
      <ol className="mt-xl ml-8 list-decimal">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }: PortableComponentsConfigProps) => {
      const rel = !value!.href!.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      const target = !value!.href!.startsWith("/") ? "_blank" : undefined;
      return (
        <Link
          href={value!.href!}
          rel={rel}
          target={target}
          className="text-accent underline decoration-accent"
        >
          {children}
        </Link>
      );
    },
  },
  block: {
    h1: ({ children }: PortableComponentsConfigProps) => (
      <h1 className="text-[2.5rem]">{children}</h1>
    ),
    h2: ({ children }: PortableComponentsConfigProps) => (
      <h2 className="text-[2.3rem]">{children}</h2>
    ),
    h3: ({ children }: PortableComponentsConfigProps) => (
      <h3 className="text-[2.1rem]">{children}</h3>
    ),
    h4: ({ children }: PortableComponentsConfigProps) => (
      <h4 className="text-[1.9rem]">{children}</h4>
    ),
    h5: ({ children }: PortableComponentsConfigProps) => (
      <h5 className="text-[1.7rem]">{children}</h5>
    ),
    h6: ({ children }: PortableComponentsConfigProps) => (
      <h6 className="text-[1.5rem]">{children}</h6>
    ),
    blockquote: ({ children }: PortableComponentsConfigProps) => (
      <blockquote className="my-4 border-s-4 border-accent bg-base-100 p-4">
        <p className="text-xl font-medium italic leading-relaxed">{children}</p>
      </blockquote>
    ),
  },
};

function PortableComponents({ value }: any) {
  return (
    <PortableText value={value} components={PortableComponentsConfig as any} />
  );
}

export default PortableComponents;
