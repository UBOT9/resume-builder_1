import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { IActivity } from '@/stores/activity.interface';

export const ProjectsSection = ({ activities }: { activities: IActivity }) => {
  if (!activities.involvements && !activities.achievements) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 border-b-2 border-black pb-1">
        Projects
      </h2>
      
      {activities.involvements && (
        <div className="mb-4">
          <div className="text-sm">
            <HTMLRenderer htmlString={activities.involvements} />
          </div>
        </div>
      )}
      
      {activities.achievements && (
        <div className="mb-4">
          <div className="text-sm">
            <HTMLRenderer htmlString={activities.achievements} />
          </div>
        </div>
      )}
    </div>
  );
};