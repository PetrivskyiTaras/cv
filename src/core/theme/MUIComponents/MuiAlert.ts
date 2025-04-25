import { type Components, type Theme } from '@mui/material';

const MuiAlert: Components<Theme>['MuiAlert'] = {
  styleOverrides: {
    root: {
      '&.MuiAlert-root': {
        backgroundColor: 'var(--mui-overlays-2)',
      },
    },
  },
};

export default MuiAlert;
