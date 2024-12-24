export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  origin: string;
  og: string;
  keywords: string[];
  creator: {
    name: string;
    url: string;
  }
  socials: {
    github: string;
    x: string;
  }
}

export type Theme = "light" | "dark";

export type Blog = {
  id: number;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
}