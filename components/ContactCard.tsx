/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight } from "lucide-react";
import { Card } from "./ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url: string;
  className?: string;
}) => {
  return (
    <Link
      href={props.url}
      className={cn("w-full", props.className)}
      target="_blank"
    >
      <Card className="group flex items-center gap-4 bg-accent/10 p-3 transition-colors hover:bg-accent/30">
        <div className="relative h-10 w-10">
          <img
            src={props.image}
            alt={props.name}
            className="h-10 w-10 rounded-full object-contain"
          />
          <img
            src={props.mediumImage}
            alt={props.name}
            className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full object-contain"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight
          className="mr-4 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2"
          size={16}
        />
      </Card>
    </Link>
  );
};
