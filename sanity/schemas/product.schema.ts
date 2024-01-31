import { defineType, defineField } from "sanity";

const product = defineType({
  name: "product",
  title: "Product",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
  ],
});

export default product;
