import { defineField, defineType } from "sanity";

const testimonials = defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "string",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image (56x56)",
      type: "image",
    }),
  ],
});

export default testimonials;
