import { type Components, type Theme } from '@mui/material';

const MuiButton: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: {
      textTransform: 'none',
    },
  },
};

export default MuiButton;
