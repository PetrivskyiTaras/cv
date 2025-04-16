import Image from 'next/image';
import { Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

import styles from './MainInfo.module.css';

const MainInfo = () => {
  return (
    <Paper elevation={4} className={styles.root}>
      <Image src="/avatar.jpg" alt="Petrivskyi Taras" width="445" height="500" className={styles.avatar} />
      <div className={styles.info}>
        <List>
          <ListItem className={styles.listItem}>
            <ListItemIcon><PhoneIcon /></ListItemIcon>
            <ListItemText
              classes={{
                primary: styles.textPrimary,
                secondary: styles.textSecondary,
              }}
              primary="Phone"
              secondary="+38 (098) 123 45 67"
            />
          </ListItem>
          <ListItem className={styles.listItem}>
            <ListItemIcon><EmailIcon /></ListItemIcon>
            <ListItemText
              classes={{
                primary: styles.textPrimary,
                secondary: styles.textSecondary,
              }}
              primary="Email"
              secondary="tarasemailtest@gmail.com"
            />
          </ListItem>
          <ListItem className={styles.listItem}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText
              classes={{
                primary: styles.textPrimary,
                secondary: styles.textSecondary,
              }}
              primary="Address"
              secondary="Kyiv, Ukraine"
            />
          </ListItem>
        </List>
        <Divider flexItem />
        <div>
          <Typography variant="h6" className={styles.skillsTitle}>Skills</Typography>
          <List className={styles.skillList}>
            <ListItem>
              <ListItemText
                classes={{
                  primary: styles.textPrimary,
                  secondary: styles.textSecondary,
                }}
                primary="Languages:"
                secondary="JavaScript (ES5, 6+), TypeScript, HTML/CSS (LESS, SCSS)"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                classes={{
                  primary: styles.textPrimary,
                  secondary: styles.textSecondary,
                }}
                primary="Technologies:"
                secondary="React, Next.JS, Redux/Redux Toolkit + Redux Saga, GraphQL/Apollo, MobX, Webpack/Vite, GIT, Docker, NX, React Native (don't want to work with it), Node.js (I developed small services only, can take small BE tasks)"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                classes={{
                  primary: styles.textPrimary,
                  secondary: styles.textSecondary,
                }}
                primary="DBMS:"
                secondary="MSSQL, MySQL"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                classes={{
                  primary: styles.textPrimary,
                  secondary: styles.textSecondary,
                }}
                primary="JS Libraries:"
                secondary="Material-UI, TanStack Query (FKA React Query), React Hook Form, Redux Form, Storybook, Jest + React Testing Library, React-Awesome-Query-Builder, Highcharts, Chart.js"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                classes={{
                  primary: styles.textPrimary,
                  secondary: styles.textSecondary,
                }}
                primary="Tools:"
                secondary="JetBrains WebStorm/IntelliJ IDEA, GitHub/GitLab/Bitbucket, JIRA, Azure DevOps, Bpm’online, Microsoft Visual Studio"
              />
            </ListItem>
          </List>
        </div>
        <div>
          <Typography variant="h6" className={styles.languageTitle}>Languages</Typography>
          <List className={styles.skillList}>
            <ListItem>
              <ListItemText
                classes={{
                  primary: styles.textPrimary,
                  secondary: styles.textSecondary,
                }}
                primary="Ukrainian:"
                secondary="native speaker"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                classes={{
                  primary: styles.textPrimary,
                  secondary: styles.textSecondary,
                }}
                primary="English:"
                secondary="upper intermediate"
              />
            </ListItem>
          </List>
        </div>
      </div>
    </Paper>
  );
};

export default MainInfo;
