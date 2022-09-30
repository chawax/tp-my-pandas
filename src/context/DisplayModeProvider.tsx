import React, { useState } from 'react';
import { DisplayMode } from '../types/DisplayMode';
import DisplayModeContext from './DisplayModeContext';

type DisplayModeProviderProps = {
  children: React.ReactNode;
};

export const DisplayModeProvider = ({ children }: DisplayModeProviderProps) => {
  const [displayMode, setDisplayMode] = useState<DisplayMode>('dark');
  const toggleDisplayMode = () => {
    setDisplayMode(displayMode === 'dark' ? 'light' : 'dark');
  };
  return (
    <DisplayModeContext.Provider value={{ displayMode, toggleDisplayMode }}>
      {children}
    </DisplayModeContext.Provider>
  );
};
