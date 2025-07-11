import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export const WorkSection = ({ experience }: { experience: IExperienceItem[] }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 border-b-2 border-black pb-1">
        Work Experience
      </h2>
      
      {experience.map((item: IExperienceItem, index: number) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg">{item.name}</h3>
              <div className="italic text-base">{item.position}</div>
            </div>
            <div className="text-right text-sm">
              <div className="font-medium">
                {dateParser(item.startDate)} – {item.isWorkingHere ? 'Present' : dateParser(item.endDate)}
              </div>
              {item.years && (
                <div className="text-xs italic">
                  {item.years}
                </div>
              )}
            </div>
          </div>
          
          <div className="text-sm">
            <HTMLRenderer htmlString={item.summary} />
          </div>
        </div>
      ))}
    </div>
  );
};