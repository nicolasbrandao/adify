import { defineField, defineType } from "sanity";

const stats = defineType({
  name: "stats",
  title: "Stats",
  type: "document",
  fields: [
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
      name: "value",
      title: "Value",
      type: "string",
    }),
  ],
});

export default stats;
