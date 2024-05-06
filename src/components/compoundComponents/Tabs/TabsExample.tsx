import Tabs from './Tabs';

function TabsExample() {
  return (
    <Tabs>
      <div className="flex">
        <Tabs.Tab index={0}>Mouse Settings</Tabs.Tab>
        <Tabs.Tab index={1}>Keyboard Settings</Tabs.Tab>
        <Tabs.Tab index={2}>Gamepad Settings</Tabs.Tab>
      </div>
      <Tabs.TabPanel index={0}>
        Adjust the sensitivity, acceleration, and button assignments for your
        mouse.
      </Tabs.TabPanel>
      <Tabs.TabPanel index={1}>
        Customize the key bindings and input behavior for your keyboard.
      </Tabs.TabPanel>
      <Tabs.TabPanel index={2}>
        Configure the controls, dead zones, and vibration settings for your
        gamepad.
      </Tabs.TabPanel>
    </Tabs>
  );
}

export default TabsExample;
