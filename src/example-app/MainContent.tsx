import Heading from './../components/Heading/Heading';
import Button from './../components/Button/Button';
import Alert from './../components/Alert/Alert';
import Card from './../components/Card/Card';
import Tabs from './../components/Tabs/Tabs';
import TaskSummaryItem from './../example-app/TaskSummaryItem.tsx';
import ContributionTrend from './../example-app/ContributionTrend.tsx';

const MainContent = () => {
  return (
    <div className="space-y-space-4 px-space-6 pt-space-4">
      <div className=" flex items-center justify-between space-y-space-4">
        <Heading>Dashboard</Heading>
        <div className="flex space-x-space-3">
          <Button variety="black" label="Create task" />
          <Button
            iconColor="default"
            iconRight="icon-action-arrowhead-down"
            label="Quick actions"
            variety="outline-gray"
          />
        </div>
      </div>

      <Alert
        title="This is demo app using test data, and some actions can not be completed."
        type="info"
      />
      <div>
        <Tabs
          className={'border-b'}
          tabLabel="Tab Label"
          tabLayout="horizontal"
          tabStyle="lines"
          tabsData={[
            {
              content: '', // how should this work?
              id: 'overview',
              title: 'Overview'
            },
            {
              content: '',
              id: 'projects',
              title: 'Projects'
            },
            {
              content: '',
              id: 'costs',
              title: 'Costs'
            }
          ]}
        />
      </div>
      <section className="grid grid-cols-3 gap-4">
        <Card>
          <div className="flex items-center justify-between">
            <Heading level={3}>Due soon</Heading>
            <Button variety="plain" label="Arrow"></Button>
          </div>

          <TaskSummaryItem
            title="UX Validation"
            description="YDENALI-2810"
            date="2 days remaining"
          />
          <TaskSummaryItem
            title="Enhanced Reporting Tool"
            description="COMMS-3218"
            date="3 days remaining"
          />
          <TaskSummaryItem
            title="Unit Tests "
            description="DRAGONFLY-2458"
            date="9 days remaining"
          />
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <Heading level={3}> Newly assigned</Heading>
            <Button variety="plain" label="Arrow"></Button>
          </div>
          <TaskSummaryItem
            title="Email Notification System with Custom Templates"
            description="COMMS-3218"
            date="7 days remaining"
          />
          <TaskSummaryItem
            title="Write functional tests"
            description="DATASYNC-1243"
            date="14 days remaining"
          />
          <TaskSummaryItem
            title="Bucket test plan"
            description="WEBPERF-2156"
            date="14 days remaining"
          />
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <Heading level={3}> Velocity trend</Heading>
            <Button variety="plain" label="Arrow"></Button>
          </div>
        </Card>
      </section>
      <section>
        <ContributionTrend />
      </section>
    </div>
  );
};

export default MainContent;
