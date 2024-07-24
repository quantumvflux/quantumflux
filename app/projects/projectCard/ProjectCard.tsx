import Image from "next/image";
import profile from "@/public/assets/profile-1.jpg";
import { SkillItem } from "@/app/home/skills/skillItem/SkillItem";
import { getSkills } from "@/app/functions/getSkill";
import Link from "next/link";

interface Props {
    name: string;
    technologyNames: string[];
}

export const ProjectCard = ({ name, technologyNames }: Props) => {
    const skills = getSkills(technologyNames);

    return (
        <div className="mb-10 flex flex-col items-center py-4 min-h-full w-72 opacity-85 hover:opacity-100 transition-opacity bg-white rounded-md shadow-md">
            <Link href={`/projects/${name.toLowerCase()}`}>
                <div className="h-64 w-64 relative ">
                    <Image src={profile} alt="Profile" fill className="rounded-md" />
                </div>
                <p className="font-bold text-2xl mb-2">{name}</p>
                <div className="flex gap-1 flex-wrap">
                    {skills.map(skill => (
                        <SkillItem key={skill.name} name={skill.name}>
                            <skill.icon />
                        </SkillItem>
                    ))}
                </div>
            </Link>
        </div>
    );
};

