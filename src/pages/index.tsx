import { faBriefcase, faLightbulb, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import JobSection from '../components/JobSection';
import ProfileSection from '../components/ProfileSection';
import ProjectSection from '../components/ProjectSection';
import styles from './index.module.scss';

export default function HomePage({}) {
  const [profileActive, setProfileActive] = useState(true);
  const [jobsActive, setJobsActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);

  const changeActive = (setActive: (state: boolean) => void) => {
    setProfileActive(false);
    setJobsActive(false);
    setProjectsActive(false);
    setActive(true);
  }

  return (
    <div className={styles.main}>
      <div className={styles.sections}>
        {profileActive && 
          <ProfileSection className={styles.section} />
        }
        {jobsActive && 
          <JobSection className={styles.section} />
        }
        {projectsActive &&
          <ProjectSection className={styles.section} />
        }
      </div>
      <div className={styles.controls}>
        <FontAwesomeIcon icon={faUser} 
          onClick={() => changeActive(setProfileActive)}
          className={profileActive ? styles.controlActive : styles.controlInactive} />
        <FontAwesomeIcon icon={faBriefcase} 
          onClick={() => changeActive(setJobsActive)}
          className={jobsActive ? styles.controlActive : styles.controlInactive} />
        <FontAwesomeIcon icon={faLightbulb} 
          onClick={() => changeActive(setProjectsActive)}
          className={projectsActive ? styles.controlActive : styles.controlInactive} />
      </div>
    </div>
  )
}
