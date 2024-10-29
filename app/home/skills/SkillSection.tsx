import { Section } from "@/app/components/Section";
import { Heading } from "@/app/components/Heading";
import { SkillCategory } from "./SkillCategory/SkillCategory";
import { skillCategories } from "@/consts/data";

export const SkillSection = () => {
  return (
    <Section>
      <Heading text="my skills:" />

      {skillCategories.map(({ skills, title }) => (
        <SkillCategory title={title} skills={skills} key={title} />
      ))}
    </Section>
  );
};
