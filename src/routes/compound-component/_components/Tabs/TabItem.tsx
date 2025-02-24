import type { ReactNode } from 'react';
import { useTabsContext } from './Context';

export interface TabItemProps {
  id: string;
  children?: ReactNode;
}

export const TabItem = ({ id, children }: TabItemProps) => {
  const { activeTab, setActiveTab } = useTabsContext();

  return (
    <div
      className="-mb-px cursor-pointer border-b border-transparent px-4 py-2 text-sm font-medium text-secondary-600 hover:text-secondary-950 data-active:border-primary-500 data-active:text-primary-500"
      data-active={activeTab === id ? '' : undefined}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </div>
  );
};
