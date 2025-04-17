import { Paper, Typography, List, ListItem, ListItemText, Divider, Collapse, Button } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Fragment, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { experienceData } from './experienceData';
import styles from './WorkExperience.module.css';

const WorkExperience = () => {
  const [collapseItems, setCollapseItems] = useState<Partial<Record<string, boolean>>>(
    () => experienceData.reduce((acc, item) => ({ ...acc, [item.id]: true }), {}),
  );

  const anyExpandItem = Object.values(collapseItems).some((item) => item);

  const handleToggleAll = () => {
    setCollapseItems(
      experienceData.reduce((acc, item) => ({ ...acc, [item.id]: !anyExpandItem }), {}),
    );
  };

  return (
    <Paper className={styles.root}>
      <div className={styles.experienceTitle}>
        <WorkIcon className={styles.workExperienceIcon} />
        <Typography variant="h3">Work Experience</Typography>
        <div className={styles.collapseAllButton}>
          <Button variant="text" color="success" onClick={handleToggleAll}>
            { anyExpandItem ? 'Collapse All' : 'Expand All' }
          </Button>
        </div>
      </div>
      <div className={styles.jobInfoWrap}>
        { experienceData.map((job, index) => {
          return (
            <Fragment key={job.id}>
              { index > 0 ? <Divider flexItem /> : null }
              <div className={styles.jobInfo}>
                <div className={styles.positionWrap}>
                  <Typography variant="body1" className={styles.positionTitle}>{ job.position }</Typography>
                  <Button
                    className={styles.collapseItemButton}
                    variant="text"
                    endIcon={collapseItems[job.id] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    onClick={() => setCollapseItems((prevState) => ({ ...prevState, [job.id]: !prevState[job.id] }))}
                  >
                    { collapseItems[job.id] ? 'Show less' : 'Show more' }
                  </Button>
                </div>
                <div className={styles.date}>
                  <CalendarMonthIcon color="success" className={styles.dateItem} />
                  <Typography variant="body1" color="success" className={styles.dateItem}>{ job.date }</Typography>
                </div>
                <Collapse in={collapseItems[job.id]}>
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
                </Collapse>
              </div>
            </Fragment>
          );
        }) }
      </div>
    </Paper>
  );
};

export default WorkExperience;
