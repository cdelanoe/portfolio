import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Me contacter</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Heureuse de faire ta connaissance !
      </h2>
      <div className="flex w-full items-center gap-4 max-md:flex-col">
        <ContactCard
          className="flex-1"
          name="/in/charlenedelanoe/"
          image="https://media.licdn.com/dms/image/D4E03AQGhkap8i5w5AQ/profile-displayphoto-shrink_100_100/0/1703691273939?e=1722470400&v=beta&t=MBhxj0O0igW93Id_GIHCe2IavzFMuTStb7WAvlYU0O4"
          mediumImage="data:image/png;base64,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"
          description="Mon profil LinkedIn"
          url="https://www.linkedin.com/in/charlenedelanoe/"
        />
        <ContactCard
          className="flex-1"
          name="c.delanoe53@gmail.com"
          image="https://media.licdn.com/dms/image/D4E03AQGhkap8i5w5AQ/profile-displayphoto-shrink_100_100/0/1703691273939?e=1722470400&v=beta&t=MBhxj0O0igW93Id_GIHCe2IavzFMuTStb7WAvlYU0O4"
          mediumImage="data:image/png;base64,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"
          description="N'hésitez pas à m'envoyer un email"
          url="mailto:c.delanoe53@gmail.com"
        />
      </div>
    </Section>
  );
};
