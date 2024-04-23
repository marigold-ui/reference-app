import Tabs from './Tabs';

function TabsExample() {
  return (
    <Tabs>
      <div className="flex">
        <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
        <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
        <Tabs.Tab index={2}>Tab 3</Tabs.Tab>
      </div>
      <Tabs.TabPanel index={0}>Tabpanel 1</Tabs.TabPanel>
      <Tabs.TabPanel index={1}>Tabpanel 2</Tabs.TabPanel>
      <Tabs.TabPanel index={2}>Tabpanel 3</Tabs.TabPanel>
    </Tabs>
  );
}

export default TabsExample;
