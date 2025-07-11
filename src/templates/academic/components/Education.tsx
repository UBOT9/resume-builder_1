import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';

export const EducationSection = ({ education }: { education: IEducationItem[] }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 border-b-2 border-black pb-1">
        Education
      </h2>
      
      {education.map((item: IEducationItem, index: number) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-bold text-lg">
                {item.institution}
              </h3>
              <div className="italic text-base">
                {item.studyType}, {item.area}
              </div>
              {item.score && (
                <div className="text-sm">
                  CGPA: {item.score}
                </div>
              )}
            </div>
            <div className="text-right text-sm font-medium">
              {dateParser(item.startDate)} – {item.isStudyingHere ? 'Present' : dateParser(item.endDate)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};