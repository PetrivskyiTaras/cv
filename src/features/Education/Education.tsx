import { Paper, Typography, Divider, Skeleton } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Fragment } from 'react';
import { useQuery } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';

import { type EducationData } from '@/shared/api/types';
import { REACT_QUERY_KEYS } from '@/shared/constants';
import { http } from '@/core/api';

import styles from './Education.module.css';

const Education = () => {
  const { data, isLoading } = useQuery<AxiosResponse<EducationData[]>>({
    queryKey: [REACT_QUERY_KEYS.EDUCATION],
    queryFn: async () => http.get('/api/education'),
    retry: false,
    staleTime: 1000 * 60 * 60 * 48,
  });

  const educationData = data?.data || [];

  return isLoading ? (
    <Skeleton variant="rectangular" width="100%" height={400} />
  ) : (
    <Paper className={styles.root}>
      <div className={styles.title}>
        <SchoolIcon className={styles.icon} />
        <Typography variant="h4">Education</Typography>
      </div>
      <div className={styles.educationWrap}>
        { educationData.map((item, index) => {
          return (
            <Fragment key={item.id}>
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
