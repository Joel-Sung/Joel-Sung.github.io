import {
  faBriefcase,
  faLightbulb,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import JobSection from "../components/JobSection";
import ProfileSection from "../components/ProfileSection";
import ProjectSection from "../components/ProjectSection";
import styles from "./index.module.scss";

interface ControlButtonProps {
  href?: string;
  onClick?: () => void;
  isActive: boolean;
  stylesId: string;
  icon: any;
}
function ControlButton(props: ControlButtonProps) {
  const { href, onClick, isActive, stylesId, icon } = props;

  return (
    <Link
      href={href}
      scroll={false}
      className={`
        ${isActive ? styles.controlActive : styles.controlInactive} 
        ${stylesId}
      `}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className={styles.controlIcon} />
    </Link>
  );
}

function Sections({}) {
  return (
    <div className={styles.sections}>
      <ProfileSection className={styles.section} />
      <JobSection className={styles.section} id="job-section" />
      <ProjectSection className={styles.section} id="project-section" />
    </div>
  );
}

function Controls({}) {
  const [profileActive, setProfileActive] = useState(true);
  const [jobsActive, setJobsActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);

  const changeActive = (setActive: (state: boolean) => void) => {
    setProfileActive(false);
    setJobsActive(false);
    setProjectsActive(false);
    setActive(true);
  };

  const [scrolledUp, setScrolledUp] = useState(false);
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    window.addEventListener("scroll", function () {
      const currentScrollPos = window.scrollY;
      setScrolledUp(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    });
  }, []);

  return (
    <div className={`${styles.controls} ${!scrolledUp && styles.hide}`}>
      <ControlButton
        href="#profile-section"
        onClick={() => changeActive(setProfileActive)}
        isActive={profileActive}
        stylesId={styles.controlProfile}
        icon={faUser}
      />
      <ControlButton
        href="#job-section"
        onClick={() => changeActive(setJobsActive)}
        isActive={jobsActive}
        stylesId={styles.controlJobs}
        icon={faBriefcase}
      />
      <ControlButton
        href="#project-section"
        onClick={() => changeActive(setProjectsActive)}
        isActive={projectsActive}
        stylesId={styles.controlProjects}
        icon={faLightbulb}
      />
      <span className={styles.slider}></span>
    </div>
  );
}

export default function HomePage({}) {
  const [width, setWidth] = useState(-1);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div>
      <div className={styles.main} id="profile-section">
        <Controls />
        <Sections />
      </div>
    </div>
  );
}
