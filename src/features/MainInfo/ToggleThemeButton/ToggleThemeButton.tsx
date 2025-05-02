import { Fab, Tooltip } from '@mui/material';
import Brightness7 from '@mui/icons-material/Brightness7';
import Brightness4 from '@mui/icons-material/Brightness4';
import { type FC } from 'react';

import useSettings from '@/core/settings/useSettings';

type Props = {
  className?: string;
};

const ToggleThemeButton: FC<Props> = ({ className }) => {
  const { themeMode, toggleTheme } = useSettings();
  const title = themeMode === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode';

  return (
    <Tooltip title={title} placement="right" arrow>
      <Fab onClick={toggleTheme} color="default" className={className} size="small">
        { themeMode === 'dark' ? <Brightness7 /> : <Brightness4 /> }
      </Fab>
    </Tooltip>
  );
};

export default ToggleThemeButton;
