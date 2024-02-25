import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";
import {
  About,
  Testimonials,
  Hero,
  Post,
  Keyword,
  Stats,
  Service,
  Resource,
  PrivacyPolicy,
  ThankYou,
} from "@/types/types";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

const revalidate = 600; // seconds

class SanityDAO {
  async fetchAbout(): Promise<About[]> {
    return await client
      .fetch("*[_type == 'about']", {}, { next: { revalidate } })
      .then((about) => {
        return about;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }

  async fetchTestimonials(): Promise<Testimonials[]> {
    return await client
      .fetch("*[_type == 'testimonials']", {}, { next: { revalidate } })
      .then((testimonials) => {
        return testimonials;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }

  async fetchHero(): Promise<Hero[]> {
    return await client
      .fetch("*[_type == 'hero']", {}, { next: { revalidate } })
      .then((hero) => {
        return hero;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }

  async fetchAllPosts(
    page = 1,
    pageSize = 10,
    keyword?: string,
  ): Promise<Post[]> {
    const skip = (page - 1) * pageSize;
    const limit = pageSize;

    let query;

    if (keyword && keyword !== "all") {
      query = `*[_type == "post" && references(*[_type == 'keyword' && title == $keyword][0]._id)] | order(_createdAt desc) [${skip}...${skip + limit}]`;
    } else {
      query = `*[_type == "post"] | order(_createdAt desc) [${skip}...${skip + limit}]`;
    }

    return await client
      .fetch(query, keyword ? { keyword } : {}, { cache: "no-store" })
      .then((posts) => {
        return posts;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }

  async fetchTotalPostsCount(): Promise<number> {
    return await client
      .fetch("count(*[_type == 'post'])", {}, { cache: "no-store" })
      .then((count) => {
        return count;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
        return 0;
      });
  }

  async fetchTotalPostsCountByKeyword(keyword: string): Promise<number> {
    const query = `count(*[_type == 'post' && references(*[_type == 'keyword' && title == $keyword][0]._id)])`;

    return await client
      .fetch(query, { keyword }, { cache: "no-store" })
      .then((count) => {
        return count;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
        return 0;
      });
  }

  async fetchPostBySlug(slug: string): Promise<Post> {
    return await client
      .fetch(
        "*[_type == 'post' && slug.current == $slug][0]",
        { slug },
        { next: { revalidate } },
      )
      .then((post) => {
        return post;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }

  async fetchPostsByKeyword(keyword: string): Promise<Post[]> {
    return await client
      .fetch(
        '*[_type == "post" && references($keywordId)]',
        {
          keywordId: `*[_type == 'keyword' && name == $keyword][0]._id`,
          keyword,
        },
        { next: { revalidate } },
      )
      .then((posts) => {
        return posts;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
        return [];
      });
  }

  async fetchPostKeywords(keywords: Keyword[]): Promise<Keyword[]> {
    const keywordPromises: Promise<Keyword | undefined>[] = keywords.map(
      async (keyword) => {
        const keywordId = keyword._ref;
        const keywordData: Keyword | undefined =
          await client.getDocument(keywordId);
        return keywordData;
      },
    );

    const resolvedKeywords: (Keyword | undefined)[] =
      await Promise.all(keywordPromises);
    const filteredKeywords: Keyword[] = resolvedKeywords.filter(
      (keyword): keyword is Keyword => keyword !== undefined,
    );

    return filteredKeywords;
  }

  async fetchKeywords(): Promise<Keyword[]> {
    return await client
      .fetch("*[_type == 'keyword']", {}, { next: { revalidate } })
      .then((keyword) => {
        return keyword;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }

  async fetchStats(): Promise<Stats[]> {
    return await client
      .fetch("*[_type == 'stats']", {}, { next: { revalidate } })
      .then((stats) => {
        return stats;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
        return [];
      });
  }

  async fetchServices(): Promise<Service[]> {
    return await client
      .fetch("*[_type == 'service']", {}, { next: { revalidate } })
      .then((services) => {
        return services;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
        return [];
      });
  }

  async fetchServiceBySlug(slug: string): Promise<Service> {
    return await client
      .fetch(
        "*[_type == 'service' && slug.current == $slug][0]",
        { slug },
        { next: { revalidate } },
      )
      .then((service) => {
        return service;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }

  async fetchResources(): Promise<Resource[]> {
    return await client
      .fetch("*[_type == 'resource']", {}, { next: { revalidate } })
      .then((resources) => {
        return resources;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
        return [];
      });
  }

  async fetchPrivacyPolicy(): Promise<PrivacyPolicy[]> {
    return await client
      .fetch("*[_type == 'privacyPolicy']", {}, { next: { revalidate } })
      .then((about) => {
        return about;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }

  async fetchThankYou(): Promise<ThankYou[]> {
    return await client
      .fetch("*[_type == 'thankYou']", {}, { next: { revalidate } })
      .then((about) => {
        return about;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }
}

export const sanity = new SanityDAO();
