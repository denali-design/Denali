import Heading from './../components/Heading/Heading';
import Paragraph from './../components/Paragraph/Paragraph';

export interface AlertProps {
  title: string;
  description?: string;
  date?: string;
}

const TaskSummaryItem = ({ title, description, date }) => {
  return (
    <div className="flex items-start gap-space-4">
      <div>
        <div className="h-8 w-8 rounded-full canvas-info"></div>
      </div>
      <div className="overflow-hidden">
        <Heading level={2} size={5} type="app" className="truncate">
          {title}
        </Heading>
        <Paragraph className="text-sm">
          {description} • {date}
        </Paragraph>
      </div>
    </div>
  );
};

export default TaskSummaryItem;
