'use client';

import { Alert, Paper } from '@mui/material';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { useRef } from 'react';

import MainInfo from '@/features/MainInfo';
import WorkExperience from '@/features/WorkExperience';
import Education from '@/features/Education';

import styles from './page.module.css';

const HomePage = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={rootRef} className={styles.root}>
      <div className={styles.mainIfo}>
        <MainInfo rootRef={rootRef} />
      </div>
      <div className={styles.experience}>
        <Paper elevation={1} className={styles.purpose} classes={{ root: styles.purpose }}>
          <Alert
            severity="success"
            icon={<BeenhereIcon />}
            classes={{ root: styles.purposeRootAlert }}
          >
            {
              `I want to join a company that offers me an opportunity within the IT industry and enables me 
                to become a professional in my field allowing me to achieve success for the company.`
            }
          </Alert>
        </Paper>
        <WorkExperience />
        <Education />
      </div>
    </div>
  );
};

export default HomePage;
