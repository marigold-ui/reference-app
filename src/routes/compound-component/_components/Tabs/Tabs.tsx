import { useState } from 'react';
import type { ReactNode } from 'react';

import { TabsContextProvider } from './Context';
import { TabList } from './TabList';
import { TabItem } from './TabItem';
import { TabPanel } from './TabPanel';

export interface TabsProps {
  defaultActiveTab: string;
  children?: ReactNode;
}

export const Tabs = ({ children, defaultActiveTab }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <TabsContextProvider value={{ activeTab, setActiveTab }}>
      <div className="grid gap-2">{children}</div>
    </TabsContextProvider>
  );
};

Tabs.List = TabList;
Tabs.Item = TabItem;
Tabs.Panel = TabPanel;
