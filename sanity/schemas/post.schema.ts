import { defineArrayMember, defineField, defineType } from "sanity";

const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image (700 x 384)",
      type: "image",
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
      name: "author",
      title: "Author",
      type: "string",
    }),
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "reference", to: [{ type: "keyword" }] }],
      validation: (Rule) => Rule.max(1).warning("Only one keyword is allowed."),
    },
  ],
});

export default post;
