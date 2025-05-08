import { IconButton, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { type FC, useState } from 'react';

type Props = {
  value: string;
  copyText: string;
  copiedText: string;
  className?: string;
};

const CopyButton: FC<Props> = ({ value, copyText, copiedText, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    let timerId: number | undefined = undefined;

    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      timerId = window.setTimeout(() => {
        window.clearTimeout(timerId);
        setCopied(false);
      }, 2000);
    } catch (err) {
      if (timerId) {
        window.clearTimeout(timerId);
      }
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Tooltip title={copied ? copiedText : copyText} arrow>
      <IconButton onClick={handleCopy} size="small" className={className}>
        <ContentCopyIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default CopyButton;
