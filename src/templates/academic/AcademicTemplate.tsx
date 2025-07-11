import { useContext } from 'react';
import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { BasicIntro } from './components/BasicIntro';
import { EducationSection } from './components/Education';
import { SkillsSection } from './components/Skills';
import { WorkSection } from './components/Work';
import { ProjectsSection } from './components/Projects';
import { CertificationsSection } from './components/Certifications';

export default function AcademicTemplate() {
  const resumeData = useContext(StateContext);

  return (
    <div className="p-8 font-serif text-black bg-white min-h-full">
      {/* Header Section */}
      <BasicIntro
        name={resumeData.basics.name}
        label={resumeData.basics.label}
        url={resumeData.basics.url}
        email={resumeData.basics.email}
        city={resumeData.basics.location.city}
        phone={resumeData.basics.phone}
        profiles={resumeData.basics.profiles}
      />

      {/* Education Section */}
      <SectionValidator value={resumeData.education}>
        <EducationSection education={resumeData.education} />
      </SectionValidator>

      {/* Technical Skills Section */}
      <SkillsSection 
        languages={resumeData.skills.languages}
        frameworks={resumeData.skills.frameworks}
        technologies={resumeData.skills.technologies}
        libraries={resumeData.skills.libraries}
        databases={resumeData.skills.databases}
        tools={resumeData.skills.tools}
        practices={resumeData.skills.practices}
      />

      {/* Work Experience Section */}
      <SectionValidator value={resumeData.work}>
        <WorkSection experience={resumeData.work} />
      </SectionValidator>

      {/* Projects Section */}
      <ProjectsSection activities={resumeData.activities} />

      {/* Certifications Section */}
      <SectionValidator value={resumeData.awards}>
        <CertificationsSection awards={resumeData.awards} />
      </SectionValidator>
    </div>
  );
}