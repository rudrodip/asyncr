import { snippets } from "#site/content";
import { Label } from "@/components/ui/label";
import { CopyButton } from "@/components/copy-button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";

export const ComponentWrapper = ({
  Component,
  label,
  slug,
  Footer,
}: {
  Component: React.ElementType;
  label?: string;
  slug: string;
  Footer?: React.ElementType;
}) => {
  const filteredSnippets = snippets.filter(snippet => snippet.slugAsParams === slug);
  const exampleSnippets = snippets.filter(snippet => snippet.slugAsParams === slug + "-example");
  if (filteredSnippets.length === 0 && exampleSnippets.length === 0) {
    return null;
  }
  const snippet = filteredSnippets[0];
  const exampleSnippet = exampleSnippets[0];
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex justify-between items-center">
        <Label>{label}</Label>
        <div className="flex items-center gap-2">
          <CopyButton className="size-5 flex items-center justify-center p-0 border-border" iconClassName="size-3">
            {snippet.code}
          </CopyButton>
          <div className="w-px h-4 bg-border"></div>
          <Drawer>
            <DrawerTrigger asChild>
              <button className="text-xs py-px px-1 rounded border">View code</button>
            </DrawerTrigger>
            <DrawerContent className="h-[80vh]">
              <DrawerHeader>
                <DrawerTitle>{snippet.title}</DrawerTitle>
                <DrawerDescription>
                  {snippet.description}
                </DrawerDescription>
              </DrawerHeader>
              <div className="w-full p-4 max-h-[70vh] overflow-y-scroll">
                <Tabs defaultValue="component" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="component">Component</TabsTrigger>
                    <TabsTrigger value="example">Example</TabsTrigger>
                  </TabsList>
                  <TabsContent value="component">
                    <MDXContentRenderer code={snippet.body} />
                  </TabsContent>
                  <TabsContent value="example">
                    <MDXContentRenderer code={exampleSnippet.body} />
                  </TabsContent>
                </Tabs>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      <Component />
      {Footer && <Footer />}
    </div>
  );
};