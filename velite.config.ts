import { defineConfig, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeShiki from "@shikijs/rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: {
    snippets: {
      name: "Snippets",
      pattern: "snippets/**/*.mdx",
      schema: s
        .object({
          slug: s.path(),
          title: s.string().max(99),
          description: s.string().max(999),
          code: s.string(),
          body: s.mdx(),
          toc: s.toc(),
        })
        .transform(computedFields),
    },
  },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      [
        rehypeShiki,
        {
          theme: "github-dark-high-contrast",
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
    remarkPlugins: [remarkMath, remarkGfm],
  },
});
