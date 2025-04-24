import Image from 'next/image';
import { Divider, List, Paper, Skeleton, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import { useQuery } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';

import { type LanguagesData, type PersonalInfo, type SkillData } from '@/shared/api/types';
import { REACT_QUERY_KEYS } from '@/shared/constants';
import { http } from '@/core/api';

import SkillListItem from './SkillListItem';
import ValueToDisplay from './ValueToDisplay';
import styles from './MainInfo.module.css';

const MainInfo = () => {
  const { isLoading: loadingSkills, data: skillsData } = useQuery<AxiosResponse<SkillData[]>>({
    queryKey: [REACT_QUERY_KEYS.SKILLS],
    queryFn: async () => http.get('/api/skills'),
    retry: false,
    staleTime: 1000 * 60 * 60 * 48,
  });

  const { isLoading: loadingLanguages, data: languagesData } = useQuery<AxiosResponse<LanguagesData[]>>({
    queryKey: [REACT_QUERY_KEYS.LANGUAGES],
    queryFn: async () => http.get('/api/languages'),
    retry: false,
    staleTime: 1000 * 60 * 60 * 48,
  });

  const { data: personalInfoData, isLoading: personalInfoLoading } = useQuery<AxiosResponse<PersonalInfo>>({
    queryKey: [REACT_QUERY_KEYS.PERSONAL_INFO],
    queryFn: async () => http.get('/api/personal-info'),
    retry: false,
    staleTime: 1000 * 60 * 60 * 48,
  });

  const skills = skillsData?.data || [];
  const languages = languagesData?.data || [];
  const personalInfo = personalInfoData?.data || { phone: '', email: '' };

  return (
    <Paper elevation={4} className={styles.root}>
      <Image src="/avatar.jpg" alt="Petrivskyi Taras" width="445" height="500" className={styles.avatar} />
      <div className={styles.info}>
        { personalInfoLoading ? <Skeleton variant="rectangular" width="100%" height={210} /> : (
          <List className={styles.infoList}>
            <SkillListItem
              className={styles.listItem}
              icon={<PhoneIcon className={styles.listItemIcon} />}
              primaryText="Phone"
              secondaryText={<ValueToDisplay value={personalInfo.phone} fakeValue="+38 (096) 9....." buttonText="Show Phone" />}
            />
            <SkillListItem
              className={styles.listItem}
              icon={<EmailIcon className={styles.listItemIcon} />}
              primaryText="Email"
              secondaryText={<ValueToDisplay value={personalInfo.email} fakeValue="taras........@gmail.com" buttonText="Show Email" />}
            />
            <SkillListItem className={styles.listItem} icon={<HomeIcon className={styles.listItemIcon} />} primaryText="Address" secondaryText="Kyiv, Ukraine" />
          </List>
        ) }
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
          { loadingLanguages ? (
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
