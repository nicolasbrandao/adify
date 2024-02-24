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

class SanityDAO {
  async fetchAbout(): Promise<About[]> {
    return await client
      .fetch("*[_type == 'about']")
      .then((about) => {
        return about;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }

  async fetchTestimonials(): Promise<Testimonials[]> {
    return await client
      .fetch("*[_type == 'testimonials']")
      .then((testimonials) => {
        return testimonials;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }

  async fetchHero(): Promise<Hero[]> {
    return await client
      .fetch("*[_type == 'hero']")
      .then((hero) => {
        return hero;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }

  async fetchAllPosts(abController?: AbortController): Promise<Post[]> {
    const controller = abController || new AbortController();
    const { signal } = controller;

    return await client
      .fetch("*[_type == 'post']", signal, {
        next: { revalidate: 2 },
        cache: "no-store",
      })
      .then((post) => {
        return post;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }

  async fetchPostBySlug(slug: string): Promise<Post> {
    return await client
      .fetch("*[_type == 'post' && slug.current == $slug][0]", { slug })
      .then((post) => {
        return post;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }

  async fetchPostsByKeyword(keyword: string): Promise<Post[]> {
    return await client
      .fetch('*[_type == "post" && references($keywordId)]', {
        keywordId: `*[_type == 'keyword' && name == $keyword][0]._id`,
        keyword,
      })
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
      .fetch("*[_type == 'keyword']")
      .then((keyword) => {
        return keyword;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }

  async fetchStats(): Promise<Stats[]> {
    return await client
      .fetch("*[_type == 'stats']")
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
      .fetch("*[_type == 'service']")
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
      .fetch("*[_type == 'service' && slug.current == $slug][0]", { slug })
      .then((service) => {
        return service;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }

  async fetchResources(): Promise<Resource[]> {
    return await client
      .fetch("*[_type == 'resource']")
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
      .fetch("*[_type == 'privacyPolicy']")
      .then((about) => {
        return about;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }

  async fetchThankYou(): Promise<ThankYou[]> {
    return await client
      .fetch("*[_type == 'thankYou']")
      .then((about) => {
        return about;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }
}

export const sanity = new SanityDAO();
