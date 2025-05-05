import { SkillItem } from "@/app/home/skills/skillItem/SkillItem";
import { ISkillItem } from "@/interfaces/interfaces";

interface Props {
  title: string;
  skills: ISkillItem[];
}

export const SkillCategory = ({ title, skills }: Props) => (
  <div className="mb-4">
    <h4 className="font-medium text-2xl">{title}</h4>
    <div className="flex gap-1 flex-wrap">
      {skills.map(({ name, icon: Icon }) => (
        <SkillItem key={name} name={name}>
          <Icon />
        </SkillItem>
      ))}
    </div>
  </div>
);
