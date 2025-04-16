'use client';

import { Paper } from '@mui/material';

import { SettingsProvider } from '@/core/settings/SettingsContext';
import MainInfo from '@/features/MainInfo';
import WorkExperience from '@/features/WorkExperience';

import styles from './page.module.css';

const HomePage = () => {
  return (
    <SettingsProvider>
      <main>
        <div className={styles.root}>
          <div className={styles.mainIfo}>
            <MainInfo />
          </div>
          <div className={styles.experience}>
            <WorkExperience />
            <Paper>My education</Paper>
          </div>
        </div>
      </main>
    </SettingsProvider>
  );
};

export default HomePage;
