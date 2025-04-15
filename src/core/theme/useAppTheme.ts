import { useMemo } from 'react';
import { createTheme, type PaletteMode } from '@mui/material/styles';

const useAppTheme = (themeMode: PaletteMode) => {
  return useMemo(() => {
    return createTheme({
      cssVariables: true,
      typography: {
        fontFamily: '--font-geist-sans',
      },
      palette: {
        mode: themeMode,
      },
    });
  }, [themeMode]);
};

export default useAppTheme;
