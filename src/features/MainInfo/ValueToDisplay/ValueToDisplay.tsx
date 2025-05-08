import { type FC, type MouseEvent, useState } from 'react';
import { Button, Typography, Link } from '@mui/material';

import CopyButton from '@/features/MainInfo/ValueToDisplay/CopyButton';

import styles from './ValueToDisplay.module.css';

type Props = {
  value: string;
  fakeValue: string;
  displayName: string;
  forcedToShow?: boolean;
  href?: string;
};

const ValueToDisplay: FC<Props> = ({ value, fakeValue, forcedToShow, href, displayName }) => {
  const [show, setShow] = useState<boolean>(false);
  const showValue = show || forcedToShow;
  const valueToDisplay = showValue ? value : fakeValue;
  const showLink = !!href && showValue;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.isTrusted && !show) {
      setShow(true);
    }
  };

  return (
    <span className={styles.root}>
      { showLink ? (
        <Link variant="caption" href={href} className={styles.value}>{ valueToDisplay }</Link>
      ) : (
        <Typography variant="caption" className={styles.value}>{ valueToDisplay }</Typography>
      ) }
      { showValue ? (
        <CopyButton
          value={valueToDisplay}
          copiedText={`${ displayName } was copied`}
          copyText={`Copy ${ displayName }`}
          className={styles.copyButton}
        />
      ) : (
        <Button
          variant="text"
          size="small"
          classes={{
            root: styles.buttonRoot,
          }}
          className={styles.button}
          onClick={handleClick}
        >
          { `Show ${ displayName }` }
        </Button>
      ) }
    </span>

  );
};

export default ValueToDisplay;
