import { ISkillItem } from '@/stores/skill.interface';

export const SkillsSection = ({
  languages,
  frameworks,
  technologies,
  libraries,
  databases,
  tools,
  practices,
}: {
  languages: ISkillItem[];
  frameworks: ISkillItem[];
  technologies: ISkillItem[];
  libraries: ISkillItem[];
  databases: ISkillItem[];
  tools: ISkillItem[];
  practices: ISkillItem[];
}) => {
  const renderSkillCategory = (title: string, skills: ISkillItem[]) => {
    if (!skills || skills.length === 0) return null;
    
    return (
      <div className="mb-2">
        <span className="font-bold">{title}: </span>
        <span>{skills.map(skill => skill.name).join(', ')}</span>
      </div>
    );
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 border-b-2 border-black pb-1">
        Technical Skills
      </h2>
      
      <div className="space-y-2 text-sm">
        {renderSkillCategory('Programming Languages', languages)}
        {renderSkillCategory('Machine Learning & Data Science', [...frameworks, ...libraries])}
        {renderSkillCategory('Deep Learning', technologies)}
        {renderSkillCategory('Backend & APIs', databases)}
        {renderSkillCategory('Tools & Platforms', tools)}
        {renderSkillCategory('Deployment & DevOps', practices)}
      </div>
    </div>
  );
};