import { Image, PortableTextBlock } from "sanity";

export type About = {
  _id: string;
  _createdAt: Date;
  title: string;
  text: PortableTextBlock[];
  author: string;
};

export type Hero = {
  _id: string;
  _createdAt: Date;
  title: string;
  subtitle: string;
  image: Image;
};

export type Testimonials = {
  _id: string;
  _createdAt: Date;
  name: string;
  testimonial: string;
  image: Image;
};

export type Post = {
  _id: string;
  _createdAt: Date;
  title: string;
  subtitle: string;
  author: string;
  slug: {
    _type: "slug";
    current: string;
  };
  image: Image;
  content: PortableTextBlock[];
  keywords: Keyword[];
};

export type Keyword = {
  _type: "keyword";
  _ref: string;
  _createdAt: Date;
  title: string;
};

export type Stats = {
  _id: string;
  _createdAt: Date;
  title: string;
  subtitle: string;
  value: string;
};

export type ThankYou = {
  _id: string;
  _createdAt: Date;
  title: string;
  text: PortableTextBlock[];
  author: string;
  linkedin: string;
  instagram: string;
};

export type PrivacyPolicy = {
  _id: string;
  _createdAt: Date;
  title: string;
  text: PortableTextBlock[];
};

export type Product = {
  _id: string;
  _createdAt: Date;
  title: string;
  description: string;
};

export type Service = {
  _id: string;
  _createdAt: Date;
  title: string;
  subtitle: string;
  image: Image;
  color: string;
  slug: {
    _type: "slug";
    current: string;
  };
  description: string;
  detailsOne: string;
  detailsTwo: string;
  products: Product[];
};

export type Resource = {
  _id: string;
  _createdAt: Date;
  image: Image;
  title: string;
  highlight: string;
  description: string;
  url: string;
};
