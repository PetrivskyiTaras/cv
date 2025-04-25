'use client';

import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { type PaletteMode, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import useAppTheme from '@/core/theme/useAppTheme';

import { initialState } from './constants';
import { type SettingsContextProps, type SettingsProviderProps } from './types';

const SettingsContext = createContext<SettingsContextProps>(initialState);

const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<PaletteMode>('light');
  const theme = useAppTheme(themeMode);

  const toggleTheme = useCallback(() => {
    setThemeMode((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';

      localStorage.setItem('theme', newTheme);

      return newTheme;
    });
  }, []);

  const settings = useMemo(() => ({
    themeMode,
    setThemeMode,
    toggleTheme,
  }), [themeMode, toggleTheme]);

  useEffect(() => {
    const stored = localStorage.getItem('theme');

    if (stored === 'light' || stored === 'dark') {
      setThemeMode(stored);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      setThemeMode(prefersDark ? 'dark' : 'light');
    }
  }, []);

  return (
    <SettingsContext value={settings}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          { children }
        </ThemeProvider>
      </StyledEngineProvider>
    </SettingsContext>
  );
};

export { SettingsProvider, SettingsContext };
