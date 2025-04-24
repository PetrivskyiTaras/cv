import { type FC, type MouseEvent, useState } from 'react';
import { Button, Typography } from '@mui/material';

import styles from './ValueToDisplay.module.css';

type Props = {
  value: string;
  fakeValue: string;
};

const ValueToDisplay: FC<Props> = ({ value, fakeValue }) => {
  const [show, setShow] = useState<boolean>(false);
  const valueToDisplay = show ? value : fakeValue;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.isTrusted && !show) {
      setShow(true);
    }
  };

  return (
    <span className={styles.root}>
      <Typography variant="caption" className={styles.value}>{ valueToDisplay }</Typography>
      { show ? null : (
        <Button
          variant="text"
          size="small"
          classes={{
            root: styles.buttonRoot,
          }}
          className={styles.button}
          onClick={handleClick}
        >
          Show Phone
        </Button>
      ) }
    </span>

  );
};

export default ValueToDisplay;
