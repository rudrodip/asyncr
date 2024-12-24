import ThemeToggler from "@/components/theme/toggler";
import { siteConfig } from "@/config/site.config";
import AsyncSelectExample from "@/components/examples/async-select-example";
import AsyncSelectPreloadExample from "@/components/examples/async-select-preload-example";
import { Button } from "@/components/ui/button";
import {
  CodeIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { ComponentWrapper } from "@/components/wrapper";
import { Docs } from "@/components/docs";

export default function Home() {

  return (
    <main className="relative w-full flex flex-col min-h-screen">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-4 mt-16 md:mt-24">
        <div className="w-full flex justify-between">
          <h1 className="head-text-md">Async Select</h1>
          <Socials />
        </div>
        <p className="text-lg">
          Async Select component built with React &{" "}
          <a
            href="https://ui.shadcn.com/docs/components/date-picker"
            target="_blank"
            className="font-semibold underline"
          >
            ShadCN UI
          </a>
        </p>
        <div className="flex items-end justify-between gap-4 my-6">
          <div className="flex flex-col gap-4 max-w-[375px]">
            <ComponentWrapper
              Component={AsyncSelectExample}
              label="Async Select"
              slug="async-select"
              Footer={() => (
                <span className="text-xs text-muted-foreground">
                  Async select component with search functionality
                </span>
              )}
            />
          </div>
          <div className="flex flex-col gap-4 max-w-[375px]">
            <ComponentWrapper
              Component={AsyncSelectPreloadExample}
              label="Async Select with preloaded options"
              slug="async-select-preload"
              Footer={() => (
                <span className="text-xs text-muted-foreground">
                  Async select component with preloaded options, with local filtering.
                </span>
              )}
            />
          </div>
        </div>
        <div>
          <Docs />
        </div>
      </div>
    </main>
  )
}

function Socials() {
  return (
    <div className="space-x-2">
      <ThemeToggler />
      <Button
        variant="outline"
        size="sm"
        className="rounded size-7 md:size-8 p-0"
        asChild
      >
        <a href={siteConfig.socials.x} target="_blank" rel="noreferrer">
          <TwitterLogoIcon className="size-3 md:size-4" />
        </a>
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="rounded size-7 md:size-8 p-0"
        asChild
      >
        <a href={siteConfig.socials.github} target="_blank" rel="noreferrer">
          <GitHubLogoIcon className="size-3 md:size-4" />
        </a>
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="rounded size-7 md:size-8 p-0"
        asChild
      >
        <a
          href={`${siteConfig.socials.github}/tree/main/src/components/async-select.tsx`}
          target="_blank"
          rel="noreferrer"
        >
          <CodeIcon className="size-3 md:size-4" />
        </a>
      </Button>
    </div>
  );
}
