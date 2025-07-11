import { IAwardItem } from '@/stores/awards.interface';
import { dateParser } from '@/helpers/utils';

export const CertificationsSection = ({ awards }: { awards: IAwardItem[] }) => {
  if (!awards || awards.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 border-b-2 border-black pb-1">
        Certifications
      </h2>
      
      {awards.map((award: IAwardItem, index: number) => (
        <div key={index} className="mb-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-base">{award.title}</h3>
              <div className="italic text-sm">{award.awarder}</div>
            </div>
            <div className="text-sm font-medium">
              {dateParser(award.date)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};