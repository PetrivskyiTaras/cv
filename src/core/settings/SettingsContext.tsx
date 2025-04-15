import type React from 'react';
import { createContext, useMemo, useState } from 'react';
import { type PaletteMode, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import useAppTheme from '@/core/theme/useAppTheme';

import { initialState } from './constants';
import { type SettingsContextProps, type SettingsProviderProps } from './types';

const SettingsContext = createContext<SettingsContextProps>(initialState);

const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<PaletteMode>('light');
  const theme = useAppTheme(themeMode);
  const settings = useMemo(() => ({
    themeMode,
    setThemeMode,
  }), [themeMode]);

  return (
    <SettingsContext value={settings}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          { /* <link rel="shortcut icon" href={favicon} /> */ }
          <link rel="preconnect" />
          { children }
        </ThemeProvider>
      </StyledEngineProvider>
    </SettingsContext>
  );
};

export { SettingsProvider, SettingsContext };
