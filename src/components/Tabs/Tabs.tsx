/**
 * Defines the Tabs component.
 *
 * @file This file defines the Tabs component, designed for organizing and switching between related content.
 * @since 1.0.0
 */
import {
  Tabs as AriaTabs,
  TabProps as AriaTabProps,
  TabList,
  Tab,
  TabPanel
} from 'react-aria-components';
import '../../assets/css/App.css';
import './Tabs.css';

interface TabData {
  id: string;
  title: string;
  content: string;
  isDisabled?: boolean;
}

interface TabsProps extends AriaTabProps {
  tabStyle?: 'lines' | 'pills';
  tabLayout?: 'horizontal' | 'vertical';
  tabLabel: string;
  tabsData: TabData[];
  disabledKeys?: string[];
  isDisabled?: boolean;
}

const Tabs = ({
  tabStyle = 'lines',
  tabLayout = 'horizontal',
  tabLabel,
  tabsData,
  disabledKeys = [],
  isDisabled = false
}: TabsProps) => {
  let tabStyleClass: string;
  let tabLayoutClass: string;
  let tabPanelLayoutClass: string;

  switch (tabStyle) {
    case 'pills':
      tabStyleClass = 'tabs__tab--pill';
      break;
    default:
      tabStyleClass = 'tabs__tab--line';
  }

  switch (tabLayout) {
    case 'vertical':
      tabLayoutClass = 'tabs--vertical';
      tabPanelLayoutClass = 'tabs__panel-container--vertical';
      break;
    default:
      tabLayoutClass = 'tabs--horizontal';
      tabPanelLayoutClass = 'tabs__panel-container--horizontal';
  }

  return (
    <AriaTabs
      className={`tabs ${tabLayoutClass}`}
      disabledKeys={disabledKeys}
      isDisabled={isDisabled}
      orientation={tabLayout}
    >
      <TabList className="tabs__tab-list" aria-label={tabLabel}>
        {tabsData.map((tab) => (
          <Tab
            key={tab.id}
            id={tab.id}
            className={`tabs__tab ${tabStyleClass}`}
          >
            {tab.title}
          </Tab>
        ))}
      </TabList>
      <div className={`tabs__panel-container ${tabPanelLayoutClass}`}>
        {tabsData.map((tab) => (
          <TabPanel key={tab.id} className="tabs__tab-panel" id={tab.id}>
            {tab.content}
          </TabPanel>
        ))}
      </div>
    </AriaTabs>
  );
};

export default Tabs;
