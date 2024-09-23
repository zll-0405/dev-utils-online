"use client";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./base/CommandMenu";
import { getTools } from "@/data/tools";
import { Input } from "./base/InputComponent";
import { useEffect, useState } from "react";
import { Home } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

interface CDMKProps {
  showSearch?: boolean;
}

export function CMDK(props: CDMKProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const showSearch = props.showSearch ?? false;

  const { language } = useLanguage();
  const tools = getTools(language);

  useEffect(() => {
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
    <section className="flex justify-center">
      {showSearch && (
        <div className="relative max-w-[320px] w-full">
          <Input placeholder="Search" onFocus={() => setOpen(true)} />
          <div className="flex absolute top-[50%] right-[12px] text-sm text-muted-foreground translate-y-[-50%]">
            <div className="pointer-events-none inline-flex h-5 select-none items-center gap-1 border bg-background text-foreground px-1.5 py-1 text-xs rounded-md">
              CMD + K
            </div>
          </div>
        </div>
      )}

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Tools">
            {tools.map((tool) => (
              <CommandItem
                key={tool.title}
                onSelect={() => {
                  router.push(tool.link);
                }}
              >
                <span>{tool.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Links">
            <CommandItem
              onSelect={() => {
                router.push("/");
              }}
            >
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </section>
  );
}
