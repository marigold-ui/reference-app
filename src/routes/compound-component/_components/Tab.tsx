import { useContext } from 'react';
import type { ReactNode } from 'react';
import { TabsContext } from './Tabs';
import { twMerge } from 'tailwind-merge';

const Tab = ({ index, children }: { index: number; children: ReactNode }) => {
  const { activeTab, changeTab } = useContext(TabsContext);
  return (
    <div
      onClick={() => changeTab(index)}
      className={twMerge(
        'py-2 transition tracking-wide text-center w-full bg-gray-200 cursor-pointer px-2 font-black text-gray-600',
        index === activeTab && 'bg-sky-700 text-gray-100'
      )}
    >
      {children}
    </div>
  );
};

export default Tab;
