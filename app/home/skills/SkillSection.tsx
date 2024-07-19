import { Section } from "@/app/components/Section";
import { Heading } from "@/app/components/Heading";
import { languages, frameworks, databases, tools } from '@/app/consts/data';
import { SkillCategory } from "@/app/home/skills/SkillCategory/SkillCategory";

export const SkillSection = () => (
    <Section>
        <Heading text="my skills:" />
        <SkillCategory title="Languages" skills={languages} />
        <SkillCategory title="Frameworks and Libraries" skills={frameworks} />
        <SkillCategory title="Databases" skills={databases} />
        <SkillCategory title="Tools" skills={tools} />
    </Section>
);
