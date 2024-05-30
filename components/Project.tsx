import { LucideIcon } from "lucide-react";
import Link from "next/link";

export type ProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

export const Project = (props: ProjectProps) => {
  return (
    <Link
      href={props.url}
      target="_blank"
      className="inline-flex items-center gap-4 rounded transition-colors hover:bg-accent/50"
    >
      <span className="rounded-md bg-accent p-3 text-accent-foreground">
        <props.Logo size={32} />
      </span>
      <div>
        <p className="text-md font-semibold">{props.title}</p>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
