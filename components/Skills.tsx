import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { ReactIcon } from "./icons/ReactIcon";
import { Code } from "./Code";
import { TailwindIcon } from "./icons/TailwindIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Ce que j&apos;apprends et maîtrise :
      </h2>
      <div className="flex items-center gap-4 max-md:flex-col">
        <div className="flex flex-1 flex-col gap-2">
          <ReactIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            Expertise du framework <Code>React</Code> . Actuellement en cours
            d&apos;apprentissage du framework <Code>Next.js</Code> .
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <TailwindIcon size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
          <p className="text-sm text-muted-foreground">
            Je peux créer de <u>beaux</u> sites web <i>très rapidement</i> grâce
            à <Code>TailwindCSS</Code> .
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <TypeScriptIcon size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">TypeScript</h3>
          <p className="text-sm text-muted-foreground">
            En apprenant <Code>TypeScript</Code> , je vise à réduire les erreurs
            de code et à améliorer la maintenabilité.
          </p>
        </div>
      </div>
    </Section>
  );
};
