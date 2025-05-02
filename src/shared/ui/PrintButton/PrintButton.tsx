import { Fab, Tooltip } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import { useReactToPrint } from 'react-to-print';
import { type FC, type MouseEvent, type RefObject } from 'react';

type Props = {
  contentRef: RefObject<HTMLDivElement | null>;
  className?: string;
  onBeforePrint?: () => Promise<void>;
  onAfterPrint?: () => void;
};

const PrintButton: FC<Props> = ({ contentRef, className, onBeforePrint, onAfterPrint }) => {
  const reactToPrintFn = useReactToPrint({ contentRef, onBeforePrint, onAfterPrint });

  const handlePrint = (event: MouseEvent<HTMLButtonElement>) => {
    if (contentRef.current && event.isTrusted) {
      reactToPrintFn();
    }
  };

  return (
    <Tooltip title="Print CV" arrow>
      <Fab onClick={handlePrint} color="primary" className={className} size="small">
        <PrintIcon />
      </Fab>
    </Tooltip>
  );
};

export default PrintButton;
