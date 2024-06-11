import { createContext, useContext } from 'react';

export interface TabsContextProps {
  activeTab: string;
  setActiveTab: (idx: string) => void;
}

const TabsContext = createContext<TabsContextProps | null>(null);

export const TabsContextProvider = TabsContext.Provider;

export const useTabsContext = () => {
  const ctx = useContext(TabsContext);

  if (!ctx) {
    throw new Error(
      'The "useTabsContext" hook can only be used within a <Tabs> component!'
    );
  }

  return ctx;
};
