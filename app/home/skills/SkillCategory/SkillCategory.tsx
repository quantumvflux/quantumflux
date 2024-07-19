import { SkillItem } from '@/app/home/skills/skillItem/SkillItem';
import { ISkillItem } from '@/app/consts/data';

interface SkillCategoryProps {
    title: string;
    skills: ISkillItem[];
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
    <div className='mb-4'>
        <h4 className='font-medium text-xl'>{title}</h4>
        <div className='flex gap-1 flex-wrap'>
            {skills.map(({ name, icon: Icon }) => (
                <SkillItem key={name} name={name}>
                    <Icon />
                </SkillItem>
            ))}
        </div>
    </div>
);