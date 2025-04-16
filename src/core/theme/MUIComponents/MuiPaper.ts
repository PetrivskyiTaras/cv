import { type Components, type Theme } from '@mui/material';

const MuiPaper: Components<Theme>['MuiPaper'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: '4px',
      boxShadow: 'var(--mui-shadows-8)',
      '& .MuiPaper-root': {
        backgroundColor: theme.palette.background.default,
      },
    }),
  },
  defaultProps: {
    elevation: 2,
  },
};

export default MuiPaper;
