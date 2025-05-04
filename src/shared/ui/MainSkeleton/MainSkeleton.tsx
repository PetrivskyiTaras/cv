import { Skeleton } from '@mui/material';

import styles from './MainSkeleton.module.css';

const MainSkeleton = () => {
  return (
    <div className={styles.root}>
      <Skeleton variant="rectangular" className={styles.leftSkeleton} animation="wave" />
      <Skeleton variant="rectangular" className={styles.rightSkeleton} animation="wave" />
    </div>
  );
};

export default MainSkeleton;
