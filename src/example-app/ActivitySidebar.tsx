import Heading from '../components/Heading/Heading.tsx';
import Button from '../components/Button/Button.tsx';
import Alert from '../components/Alert/Alert.tsx';
import Card from '../components/Card/Card.tsx';
import Tabs from '../components/Tabs/Tabs.tsx';
import TaskSummaryItem from './TaskSummaryItem.tsx';
import ContributionTrend from './ContributionTrend.tsx';

const ActivitySidebar = () => {
  return (
    <aside className="border-gray-stroke h-svh w-1/3 border-l px-space-6 py-space-6">
      <Heading level={2}>Activities</Heading>
      <Heading level={3}>Recently Shared</Heading>
      <div className="mt-space-4">
        <TaskSummaryItem
          title="UX Validation"
          description="YDENALI-2810"
          date="2 days remaining"
        />
        <TaskSummaryItem
          title="UX Validation"
          description="YDENALI-2810"
          date="2 days remaining"
        />
        <TaskSummaryItem
          title="UX Validation"
          description="YDENALI-2810"
          date="2 days remaining"
        />
        <TaskSummaryItem
          title="UX Validation"
          description="YDENALI-2810"
          date="2 days remaining"
        />
      </div>
    </aside>
  );
};

export default ActivitySidebar;
