import { defineArrayMember, defineField, defineType } from "sanity";

const privacyPolicy = defineType({
  name: "privacyPolicy",
  title: "Privacy Policy",
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
  ],
});

export default privacyPolicy;
