import Image, { StaticImageData } from "next/image";
import { SkillItem } from "@/app/home/skills/skillItem/SkillItem";
import { getSkills } from "@/functions/getSkill";
import Link from "next/link";
import { sanitizeString } from "@/helpers/sanitizeString";

interface Props {
  name: string;
  image: StaticImageData;
  technologyNames: string[];
  company?: string;
}

export const ProjectCard = ({
  name,
  technologyNames,
  image,
  company,
}: Props) => {
  const skills = getSkills(technologyNames);
  const sanitizedLink = sanitizeString(name).toLowerCase();

  return (
    <Link
      className="mb-10 flex flex-col items-center py-4 px-4 min-h-full w-72 opacity-85  hover:opacity-100 transition-all bg-white rounded-md shadow-md hover:scale-105"
      href={`/projects/${sanitizedLink}`}
    >
      <div className="h-64 w-64 relative">
        <Image src={image} alt="Profile" fill className="rounded-md" />
      </div>
      <div className="mb-2 flex flex-col items-center">
        <p className="font-bold text-2xl">{name}</p>
        <p>
          at <span className="font-bold">{company}</span>
        </p>
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
