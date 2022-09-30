import { createContext } from 'react';
import { DisplayMode } from '../types/DisplayMode';

type DisplayModeContextProps = {
  displayMode: DisplayMode;
  toggleDisplayMode: () => void;
};

const DisplayModeContext = createContext<DisplayModeContextProps>({
  displayMode: 'dark',
  toggleDisplayMode: () => {},
});

export default DisplayModeContext;
