import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-popover py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">charlenedelanoe.com</h1>
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
          <ModeToggle />
        </ul>
      </Section>
    </header>
  );
};
