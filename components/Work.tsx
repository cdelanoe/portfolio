/* eslint-disable @next/next/no-img-element */
export type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
};

export const Work = (props: WorkProps) => {
  return (
    <div className="inline-flex items-center gap-4 rounded">
      <img
        src={props.image}
        alt={props.title}
        className="h-11 w-11 rounded-md object-contain"
      />
      <div>
        <p className="text-md font-semibold">{props.title}</p>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-end text-xs text-muted-foreground">{props.date}</p>
      </div>
    </div>
  );
};
