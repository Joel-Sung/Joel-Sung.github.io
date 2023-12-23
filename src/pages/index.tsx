import {
  faBriefcase,
  faLightbulb,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import JobSection from "../components/JobSection";
import ProfileSection from "../components/ProfileSection";
import ProjectSection from "../components/ProjectSection";
import styles from "./index.module.scss";

interface ControlButtonProps {
  onClick: () => void;
  isActive: boolean;
  styleId: string;
  icon: any;
}
function ControlButton(props: ControlButtonProps) {
  const { onClick, isActive, styleId, icon } = props;
  return (
    <button
      onClick={onClick}
      className={`
          ${isActive ? styles.controlActive : styles.controlInactive} 
          ${styleId}
        `}
    >
      <FontAwesomeIcon icon={icon} className={styles.controlIcon} />
    </button>
  );
}

export default function HomePage({}) {
  const [profileActive, setProfileActive] = useState(true);
  const [jobsActive, setJobsActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);

  const changeActive = (setActive: (state: boolean) => void) => {
    setProfileActive(false);
    setJobsActive(false);
    setProjectsActive(false);
    setActive(true);
  };

  return (
    <div className={styles.main}>
      <div className={styles.sections}>
        {profileActive && <ProfileSection className={styles.section} />}
        {jobsActive && <JobSection className={styles.section} />}
        {projectsActive && <ProjectSection className={styles.section} />}
      </div>
      <div className={styles.controls}>
        <ControlButton
          onClick={() => changeActive(setProfileActive)}
          isActive={profileActive}
          styleId={styles.controlProfile}
          icon={faUser}
        />
        <ControlButton
          onClick={() => changeActive(setJobsActive)}
          isActive={jobsActive}
          styleId={styles.controlJobs}
          icon={faBriefcase}
        />
        <ControlButton
          onClick={() => changeActive(setProjectsActive)}
          isActive={projectsActive}
          styleId={styles.controlProjects}
          icon={faLightbulb}
        />
        <span className={styles.slider}></span>
      </div>
    </div>
  );
}
