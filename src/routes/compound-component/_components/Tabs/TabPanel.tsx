import type { ReactNode } from 'react';
import { useTabsContext } from './Context';

export interface TabPanelProps {
  id: string;
  children?: ReactNode;
}

export const TabPanel = ({ id, children }: TabPanelProps) => {
  const { activeTab } = useTabsContext();

  if (activeTab !== id) {
    return null;
  }

  return <div className="px-4 py-2">{children}</div>;
};
