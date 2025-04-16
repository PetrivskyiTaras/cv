import { Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Fragment } from 'react';

import { experienceData } from './experienceData';
import styles from './WorkExperience.module.css';

const WorkExperience = () => {
  return (
    <Paper className={styles.root}>
      <div className={styles.experienceTitle}>
        <WorkIcon className={styles.workExperienceIcon} />
        <Typography variant="h3">Work Experience</Typography>
      </div>
      <div className={styles.jobInfoWrap}>
        { experienceData.map((job, index) => {
          return (
            <Fragment key={job.date}>
              { index > 0 ? <Divider flexItem /> : null }
              <div className={styles.jobInfo}>
                <Typography variant="body1" className={styles.positionTitle}>{ job.position }</Typography>
                <div className={styles.date}>
                  <CalendarMonthIcon color="success" className={styles.dateItem} />
                  <Typography variant="body1" color="success" className={styles.dateItem}>{ job.date }</Typography>
                </div>
                <div>
                  <Typography variant="body1" className={styles.positionSubTitle}>{ job.projectName }</Typography>
                  <List className={styles.list}>
                    <ListItem>
                      <ListItemText
                        classes={{
                          primary: styles.textPrimary,
                          secondary: styles.textSecondary,
                        }}
                        primary="Responsibilities:"
                        secondary={job.responsibilities}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        classes={{
                          primary: styles.textPrimary,
                          secondary: styles.textSecondary,
                        }}
                        primary="Technologies:"
                        secondary={job.technologies}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        classes={{
                          primary: styles.textPrimary,
                          secondary: styles.textSecondary,
                        }}
                        primary="Tools:"
                        secondary={job.tools}
                      />
                    </ListItem>
                  </List>
                </div>
              </div>
            </Fragment>
          );
        }) }
      </div>
    </Paper>
  );
};

export default WorkExperience;
