import type { ReactNode } from 'react';
import { useTabsContext } from './Context';

export interface GotoProps {
  to: string;
  children?: ReactNode;
}

export const Goto = ({ to, children }: GotoProps) => {
  const { setActiveTab } = useTabsContext();

  return (
    <span
      className="cursor-pointer underline decoration-purple-400 decoration-dotted decoration-2 underline-offset-4 hover:decoration-purple-700"
      onClick={() => setActiveTab(to)}
    >
      {children}
    </span>
  );
};
