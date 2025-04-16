import { useMemo } from 'react';
import { createTheme, type PaletteMode } from '@mui/material/styles';

import components from './components';

const useAppTheme = (themeMode: PaletteMode) => {
  return useMemo(() => {
    return createTheme({
      cssVariables: true,
      typography: {
        fontFamily: '--font-libre',
      },
      palette: {
        mode: themeMode,
        background: {
          paper: '#f1f1f1',
          default: '#ffffff',
        },
      },
      components,
    });
  }, [themeMode]);
};

export default useAppTheme;
