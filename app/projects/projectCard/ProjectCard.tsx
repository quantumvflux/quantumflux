import Image, { StaticImageData } from "next/image";
import { SkillItem } from "@/app/home/skills/skillItem/SkillItem";
import { getSkills } from "@/functions/getSkill";
import Link from "next/link";

interface Props {
  name: string;
  image: StaticImageData;
  technologyNames: string[];
  company?: string;
  link: string;
}

export const ProjectCard = ({
  name,
  technologyNames,
  image,
  company,
  link,
}: Props) => {
  const skills = getSkills(technologyNames);

  return (
    <Link
      className="flex flex-col items-center py-4 px-4 min-h-full w-72 opacity-100 hover:opacity-100 transition-all bg-white rounded-md shadow-md hover:scale-[1.04] ease-linear"
      href={link}
      target={"_blank"}
    >
      <div className="h-64 w-64 relative">
        <Image src={image} alt="Profile" fill className="rounded-md" />
      </div>
      <div className="mb-2 flex flex-col items-center">
        <p className="font-bold text-2xl">{name}</p>
        {company && (
          <p>
            at <span className="font-bold">{company}</span>
          </p>
        )}
      </div>
      <div className="flex justify-start gap-1 flex-wrap">
        {skills.map((skill) => (
          <SkillItem key={skill.name} name={skill.name}>
            <skill.icon />
          </SkillItem>
        ))}
      </div>
    </Link>
  );
};
