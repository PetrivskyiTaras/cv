import { Paper, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

import styles from './WorkExperience.module.css';

const WorkExperience = () => {
  return (
    <Paper className={styles.root}>
      <div className={styles.experienceTitle}>
        <WorkIcon className={styles.workExperienceIcon} />
        <Typography variant="h3">Work Experience</Typography>
      </div>
    </Paper>
  );
};

export default WorkExperience;
