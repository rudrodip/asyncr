import { snippets } from "#site/content";
import { MDXContentRenderer } from "./mdx/mdx-content-renderer";
import { DashboardTableOfContents } from "./mdx/toc";

export const Docs = () => {
  const filteredSnippets = snippets.filter(snippet => snippet.slugAsParams === "component-api");
  if (filteredSnippets.length === 0) {
    return null;
  }
  const snippet = filteredSnippets[0];
  return (
    <div className="w-full">
      <MDXContentRenderer code={snippet.body} />
      <div className="hidden text-sm min-[1400px]:inline-flex">
        <div className="fixed top-24 right-[100px] h-full z-50">
          <DashboardTableOfContents toc={snippet.toc} />
        </div>
      </div>
    </div>
  );
}