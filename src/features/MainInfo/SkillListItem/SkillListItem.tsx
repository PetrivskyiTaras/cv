import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { type FC } from 'react';

import styles from './SkillListItem.module.css';

type Props = {
  primaryText: string;
  secondaryText: string;
  icon?: React.ReactNode;
  className?: string;
};

const SkillListItem: FC<Props> = ({ primaryText, secondaryText, icon, className }) => {
  return (
    <ListItem className={className}>
      { icon ? <ListItemIcon>{ icon }</ListItemIcon> : null }
      <ListItemText
        classes={{
          primary: styles.textPrimary,
          secondary: styles.textSecondary,
        }}
        primary={primaryText}
        secondary={secondaryText}
      />
    </ListItem>
  );
};

export default SkillListItem;
