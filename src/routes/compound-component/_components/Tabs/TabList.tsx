import type { ReactNode } from 'react';

export interface TabListProps {
  children?: ReactNode;
}

export const TabList = ({ children }: TabListProps) => (
  <div className="flex gap-4 border-b border-secondary-300">{children}</div>
);
