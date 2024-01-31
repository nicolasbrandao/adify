import { defineArrayMember, defineField, defineType } from "sanity";

const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image (700 x 384)",
      type: "image",
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "detailsOne",
      title: "Details One",
      type: "string",
    }),
    defineField({
      name: "detailsTwo",
      title: "Details Two",
      type: "string",
    }),
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [defineArrayMember({ type: "product" })],
    },
  ],
});

export default service;
