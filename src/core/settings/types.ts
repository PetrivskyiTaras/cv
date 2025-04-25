import { type Dispatch, type ReactNode, type SetStateAction } from 'react';
import { type PaletteMode } from '@mui/material/styles';

export type SettingsContextProps = {
  themeMode: PaletteMode;
  setThemeMode: Dispatch<SetStateAction<PaletteMode>>;
  toggleTheme: () => void;
};

export type SettingsProviderProps = {
  children: ReactNode;
};
