'use client';

import { SettingsProvider } from '@/core/settings/SettingsContext';

import styles from './page.module.css';

const Home = () => {
  return (
    <SettingsProvider>
      <main>
        <div className={styles.root}>
          New app for My CV
        </div>
      </main>
    </SettingsProvider>
  );
};

export default Home;
