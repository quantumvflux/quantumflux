import { Heading } from "@/app/components/Heading";
import { Section } from "@/app/components/Section";

export const Main = () => {
  return (
    <div>
      <Section>
        <Heading text="about:" />
        <p className="text-xl">
          Hello, everyone! I&apos;m Marcos, a freelance web developer hailing
          from Argentina. Specializing in crafting bespoke digital marketing
          solutions, my focus is on tailoring these to suit your enterprise or
          personal brand. My creative thinking and problem-solving abilities are
          fueled by a passion for technology, entrepreneurship, video games,
          music, and economics. Embracing new ideas and maintaining an open mind
          allows me to approach projects from various angles, ensuring the
          delivery of innovative solutions ^^
        </p>
      </Section>
    </div>
  );
};
