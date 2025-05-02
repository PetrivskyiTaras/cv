import { Fab, Tooltip } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { type FC, useEffect, useRef, useState } from 'react';

type Props = {
  className?: string;
};

const DownloadPdfButton: FC<Props> = ({ className }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const timerId = useRef<number | undefined>(undefined);

  const handleDownload = () => {
    if (!isDownloading && typeof window !== 'undefined') {
      setIsDownloading(true);

      if (timerId.current) {
        window.clearTimeout(timerId.current);
      }
      timerId.current = window.setTimeout(() => {
        setIsDownloading(false);
      }, 5000);
    }
  };

  useEffect(() => {
    return () => {
      if (timerId.current && typeof window !== 'undefined') {
        window.clearTimeout(timerId.current);
      }
    };
  }, []);

  return (
    <Tooltip title="Download CV in PDF format" arrow>
      <Fab
        color="primary"
        className={className}
        size="small"
        href={isDownloading ? '' : '/api/pdf'}
        onClick={handleDownload}
        disabled={isDownloading}
      >
        <PictureAsPdfIcon />
      </Fab>
    </Tooltip>
  );
};

export default DownloadPdfButton;
