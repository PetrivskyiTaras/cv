import Image from 'next/image';
import { Divider, List, Paper, Skeleton, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import { useQuery } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';

import SkillListItem from '@/features/MainInfo/SkillListItem';
import { type LanguagesData, type SkillData } from '@/shared/api/types';
import { REACT_QUERY_KEYS } from '@/shared/constants';
import { http } from '@/core/api';

import styles from './MainInfo.module.css';

const MainInfo = () => {
  const { isLoading: loadingSkills, data: skillsData } = useQuery<AxiosResponse<SkillData[]>>({
    queryKey: [REACT_QUERY_KEYS.SKILLS],
    queryFn: async () => http.get('/api/skills'),
    retry: false,
    staleTime: 1000 * 60 * 60 * 48,
  });

  const { isLoading: loadingLanuages, data: languagesData } = useQuery<AxiosResponse<LanguagesData[]>>({
    queryKey: [REACT_QUERY_KEYS.LANGUAGES],
    queryFn: async () => http.get('/api/languages'),
    retry: false,
    staleTime: 1000 * 60 * 60 * 48,
  });

  const skills = skillsData?.data || [];
  const languages = languagesData?.data || [];

  return (
    <Paper elevation={4} className={styles.root}>
      <Image src="/avatar.jpg" alt="Petrivskyi Taras" width="445" height="500" className={styles.avatar} />
      <div className={styles.info}>
        <List>
          <SkillListItem className={styles.listItem} icon={<PhoneIcon />} primaryText="Phone" secondaryText="+38 (098) 123 45 67" />
          <SkillListItem className={styles.listItem} icon={<EmailIcon />} primaryText="Email" secondaryText="tarasemailtest@gmail.com" />
          <SkillListItem className={styles.listItem} icon={<HomeIcon />} primaryText="Address" secondaryText="Kyiv, Ukraine" />
        </List>
        <Divider flexItem />
        <div className={styles.skillsWrap}>
          <Typography variant="h6" className={styles.skillsTitle}>Skills</Typography>
          { loadingSkills ? (
            <Skeleton variant="rectangular" width="100%" height={500} />
          ) : (
            <List className={styles.skillList}>
              { skills.map((item) => (
                <SkillListItem key={item.id} primaryText={`${ item.category }:`} secondaryText={item.skill} />
              )) }
            </List>
          ) }
        </div>
        <Divider flexItem />
        <div className={styles.skillsWrap}>
          <Typography variant="h6" className={styles.languageTitle}>Languages</Typography>
          { loadingLanuages ? (
            <Skeleton variant="rectangular" width="100%" height={140} />
          ) : (
            <List className={styles.skillList}>
              { languages.map((item) => (
                <SkillListItem key={item.id} primaryText={`${ item.name }:`} secondaryText={item.level} />
              )) }
            </List>
          ) }
        </div>
      </div>
    </Paper>
  );
};

export default MainInfo;
