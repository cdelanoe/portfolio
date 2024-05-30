import { Section } from "./Section";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";

export const Footer = () => {
  return (
    <footer className="bg-popover">
      <Section className="flex items-baseline py-8">
        <p className="text-start text-sm text-muted-foreground">
          @Copywrite 2024 Charlène Delanoë
        </p>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/cdelanoe"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }), "size-9 p-0")}
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/charlenedelanoe/"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }), "size-9 p-0")}
          >
            <LinkedInIcon size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </footer>
  );
};
