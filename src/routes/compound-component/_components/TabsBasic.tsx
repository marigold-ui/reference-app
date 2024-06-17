import { useState } from 'react';
import type { ReactNode } from 'react';

export interface TabsProps {
  tabs: { title: ReactNode; content: ReactNode }[];
}

export const Tabs = ({ tabs }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid gap-2">
      <div className="flex gap-4 border-b border-secondary-300">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="-mb-px cursor-pointer border-b border-transparent px-4 py-2 text-sm font-medium text-secondary-600 hover:text-secondary-950 data-[active]:border-primary-500 data-[active]:text-primary-500"
            data-active={activeIndex === index ? '' : undefined}
            onClick={() => setActiveIndex(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="px-4 py-2">{tabs[activeIndex]!.content}</div>
    </div>
  );
};
