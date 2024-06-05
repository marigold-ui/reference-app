import { useContext } from 'react';
import type { ReactNode } from 'react';
import { TabsContext } from './Tabs';

const TabPanel = ({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) => {
  const { activeTab } = useContext(TabsContext);
  return index === activeTab ? (
    <div className="text-md flex items-center justify-center bg-gray-400 p-10 font-bold tracking-wide text-black">
      {children}
    </div>
  ) : null;
};

export default TabPanel;
