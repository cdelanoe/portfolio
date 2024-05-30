import { LucideIcon } from "lucide-react";

export type LearningProps = {
  Logo: LucideIcon;
  title: string;
  school: string;
  date: string;
};

export const Learning = (props: LearningProps) => {
  return (
    <div className="inline-flex items-center gap-4 rounded">
      <span className="rounded-md bg-accent p-3 text-accent-foreground">
        <props.Logo size={32} />
      </span>
      <div>
        <p className="text-md font-semibold">{props.title}</p>
        <p className="text-xs text-muted-foreground">{props.school}</p>
      </div>
      <div className="ml-auto">
        <p className="text-end text-xs text-muted-foreground">{props.date}</p>
      </div>
    </div>
  );
};
