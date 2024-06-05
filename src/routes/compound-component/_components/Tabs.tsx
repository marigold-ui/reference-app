import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import Tab from './Tab';
import TabPanel from './TabPanel';

export const TabsContext = createContext({} as any);

const Tabs = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const changeTab = (tab: number) => setActiveTab(tab);
  return (
    <TabsContext.Provider value={{ activeTab, changeTab }}>
      <div className="w-[600px] rounded shadow-xl">{children}</div>
    </TabsContext.Provider>
  );
};

Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;
export default Tabs;
