import { type ReactNode } from 'react';
import { type PaletteMode } from '@mui/material/styles';

export type SettingsContextProps = {
  themeMode: PaletteMode;
  setThemeMode: (theme: PaletteMode) => void;
};

export type SettingsProviderProps = {
  children: ReactNode;
};
