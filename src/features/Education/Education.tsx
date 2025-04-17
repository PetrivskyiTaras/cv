import { Paper, Typography, Divider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Fragment } from 'react';

import { educationData } from './educationData';
import styles from './Education.module.css';

const Education = () => {
  return (
    <Paper className={styles.root}>
      <div className={styles.title}>
        <SchoolIcon className={styles.icon} />
        <Typography variant="h3">Education</Typography>
      </div>
      <div className={styles.educationWrap}>
        { educationData.map((item, index) => {
          return (
            <Fragment key={item.placeName}>
              { index > 0 ? <Divider flexItem /> : null }
              <div className={styles.educationInfo}>
                <Typography variant="body1" className={styles.placeTitle}>{ item.placeName }</Typography>
                <div className={styles.date}>
                  <CalendarMonthIcon color="success" className={styles.dateItem} />
                  <Typography variant="body1" color="success" className={styles.dateItem}>{ item.date }</Typography>
                </div>
                <div>
                  <Typography variant="body1" className={styles.degree}>{ item.degree }</Typography>
                </div>
              </div>
            </Fragment>
          );
        }) }
      </div>
    </Paper>
  );
};

export default Education;
