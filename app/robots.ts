import { MetadataRoute } from "next";

const url = process.env.APP_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/studio/",
    },
    sitemap: `${url}/sitemap.xml`,
  };
}
