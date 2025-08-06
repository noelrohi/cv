"use client";

import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { isMacOs } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [isClient, setIsClient] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isPrinting, startPrinting] = React.useTransition();

  React.useEffect(() => {
    setIsClient(true);
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="fixed right-0 bottom-0 left-0 hidden border-t border-t-muted bg-white p-1 text-center text-muted-foreground text-sm xl:block print:hidden">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-medium font-mono text-[10px] text-muted-foreground opacity-100">
          <span className="text-xs">
            {isClient && isMacOs() ? "⌘ K" : "Ctrl K"}
          </span>
        </kbd>{" "}
        to open the command menu
      </p>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed right-4 bottom-4 flex rounded-full shadow-2xl xl:hidden print:hidden"
      >
        <Menu className="my-6 size-6" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                startPrinting(async () => {
                  await new Promise((r) => setTimeout(r, 500));
                  window.print();
                });
              }}
            >
              <span>Print{isPrinting && "ing..."}</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                navigator.share({
                  title: "Rohi's CV",
                  url: "https://cv.noelrohi.com",
                });
              }}
            >
              <span>Share CV</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, "_blank");
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};
