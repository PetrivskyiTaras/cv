import { type Components, type Theme } from '@mui/material';

const MuiListItemText: Components<Theme>['MuiListItemText'] = {
  styleOverrides: {
    root: {
      marginTop: 0,
      marginBottom: 0,
      '& .MuiListItemText-primary': {
        fontWeight: 600,
      },
      '& .MuiListItemText-secondary': {
        fontWeight: 500,
      },
    },
  },
};

export default MuiListItemText;
