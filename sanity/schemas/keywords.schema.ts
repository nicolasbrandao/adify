import { defineField, defineType } from "sanity";

const keyword = defineType({
  name: "keyword",
  title: "Keyword",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
});

export default keyword;
