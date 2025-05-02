import { type FC, type MouseEvent, useState } from 'react';
import { Button, Typography } from '@mui/material';

import styles from './ValueToDisplay.module.css';

type Props = {
  value: string;
  fakeValue: string;
  buttonText?: string;
  forcedToShow?: boolean;
};

const ValueToDisplay: FC<Props> = ({ value, fakeValue, buttonText, forcedToShow }) => {
  const [show, setShow] = useState<boolean>(false);
  const showValue = show || forcedToShow;
  const valueToDisplay = showValue ? value : fakeValue;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.isTrusted && !show) {
      setShow(true);
    }
  };

  return (
    <span className={styles.root}>
      <Typography variant="caption" className={styles.value}>{ valueToDisplay }</Typography>
      { showValue ? null : (
        <Button
          variant="text"
          size="small"
          classes={{
            root: styles.buttonRoot,
          }}
          className={styles.button}
          onClick={handleClick}
        >
          { buttonText || 'Show more' }
        </Button>
      ) }
    </span>

  );
};

export default ValueToDisplay;
