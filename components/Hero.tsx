/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { Code } from "./Code";

export const Hero = () => {
  return (
    <Section className="flex items-center gap-4 max-md:flex-col">
      <div className="flex w-full flex-[3] flex-col gap-2">
        <h2 className="font-caption text-5xl font-bold text-primary">
          Charlène DELANOË
        </h2>
        <h3 className="font-caption text-3xl">Développeuse Front-end</h3>
        <p className="text-sm">
          J&apos;ai travaillé pendant 7 ans chez <Code>Apple</Code> où j&apos;ai
          pu évoluer à plusieurs reprises au sein de leur service technique.
        </p>
        <p className="text-sm">
          {" "}
          Actuellement en reconversion professionnelle, j&apos;ai récemment
          obtenu le{" "}
          <Code>Titre Professionnel Développeur Web et Web Mobile</Code> et suis
          à la recherche d&apos;une première expérience.
        </p>
      </div>
      <div className="ml-auto flex-[2] max-md:m-auto">
        <img
          src="https://avatars.githubusercontent.com/u/129315285?v=4"
          className="h-auto w-full max-w-xs rounded-full max-md:w-56"
          alt="Photo de Charlène"
        />
      </div>
    </Section>
  );
};
