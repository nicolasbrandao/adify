import { defineArrayMember, defineField, defineType } from "sanity";

const thankYou = defineType({
  name: "thankYou",
  title: "Thank You",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    },
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn",
      type: "string",
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "string",
    }),
  ],
});

export default thankYou;
