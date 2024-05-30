/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { Card } from "./ui/card";
import { Code, GraduationCap, LucideIcon } from "lucide-react";
import { Orbit } from "lucide-react";
import { Project, ProjectProps } from "./Project";
import { Work, WorkProps } from "./Work";
import { Learning, LearningProps } from "./Learning";

export const CVitae = () => {
  return (
    <Section className="flex items-start gap-4 max-md:flex-col">
      <div className="w-full flex-[3]">
        <Card className="flex w-full flex-col gap-2 p-4">
          <p className="text-lg text-muted-foreground">PROJETS RÉALISÉS</p>
          <div className="flex flex-col gap-4">
            {PROJECTS.map((project, index) => (
              <Project
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
        <Card className="mt-4 flex w-full flex-col gap-2 p-4">
          <p className="text-lg text-muted-foreground">FORMATIONS</p>
          <div className="flex flex-col gap-4">
            {LEARNINGS.map((learning, index) => (
              <Learning
                key={index}
                Logo={learning.Logo}
                title={learning.title}
                school={learning.school}
                date={learning.date}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex w-full flex-[2] flex-col gap-4">
        <Card className="flex w-full flex-col gap-1 p-4">
          <p className="text-lg text-muted-foreground">EXPÉRIENCES PRO</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
              />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};

// PROJECTS

const PROJECTS: ProjectProps[] = [
  {
    Logo: Orbit,
    title: "WebStellar",
    description:
      "Projet réalisé dans le cadre de ma formation chez O'Clock. Utilisation de React pour le Front et Symfony pour le Back.",
    url: "https://webstellar-xenon.vercel.app/",
  },
];

// WORKS

const WORKS: WorkProps[] = [
  {
    image: "https://www.1min30.com/wp-content/uploads/2019/05/Apple-logo-1.jpg",
    title: "Apple",
    role: "Mac Genius - Support IT",
    date: "JUIN 2022 - FEV 2024",
  },
  {
    image: "https://www.1min30.com/wp-content/uploads/2019/05/Apple-logo-1.jpg",
    title: "Apple",
    role: "Technical Expert - Support IT",
    date: "SEPT 2019 - JUIN 2022",
  },
  {
    image: "https://www.1min30.com/wp-content/uploads/2019/05/Apple-logo-1.jpg",
    title: "Apple",
    role: "Technical Specialist - Support IT",
    date: "JUIN 2018 - SEPT 2019",
  },
  {
    image: "https://www.1min30.com/wp-content/uploads/2019/05/Apple-logo-1.jpg",
    title: "Apple",
    role: "Specialist - Vente conseil",
    date: "DEC 2016 - JUIN 2018",
  },
];

// LEARNINGS

const LEARNINGS: LearningProps[] = [
  {
    Logo: Code,
    title: "Formation Développeur Web et Web Mobile",
    school: "O'Clock, téléprésentiel",
    date: "MAI 2023 - OCT 2023",
  },
  {
    Logo: GraduationCap,
    title: "BTS Management des Unités Commerciales",
    school: "IPSSA Étrelles, Alternance",
    date: "JUIN 2014 - JUIN 2016",
  },
];
