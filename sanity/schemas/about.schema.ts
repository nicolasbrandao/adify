import { defineArrayMember, defineField, defineType } from "sanity";

const about = defineType({
  name: "about",
  title: "About",
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
  ],
});

export default about;
