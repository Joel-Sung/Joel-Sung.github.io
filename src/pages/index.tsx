import {
  faBriefcase,
  faLightbulb,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import JobSection from "../components/JobSection";
import ProfileSection from "../components/ProfileSection";
import ProjectSection from "../components/ProjectSection";
import ToggleButton from "../components/button/ToggleButton";
import { ThemeContext } from "../context/ThemeContext";
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
        ${styles.hover}
      `}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className={styles.controlIcon} />
    </Link>
  );
}

export default function HomePage() {
  const [profileActive, setProfileActive] = useState(true);
  const [jobsActive, setJobsActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);

  const changeActive = (setActive: (state: boolean) => void) => {
    setProfileActive(false);
    setJobsActive(false);
    setProjectsActive(false);
    setActive(true);
  };

  const [scrolledUp, setScrolledUp] = useState(true);
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    window.addEventListener("scroll", function () {
      const currentScrollPos = window.scrollY;
      setScrolledUp(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    });
  }, []);

  const profileRef = useRef(null);
  const jobRef = useRef(null);
  const projectRef = useRef(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id == "profile-section") {
              changeActive(setProfileActive);
            } else if (entry.target.id == "job-section") {
              changeActive(setJobsActive);
            } else if (entry.target.id == "project-section") {
              changeActive(setProjectsActive);
            }
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (mounted) {
      observer.observe(profileRef.current);
      observer.observe(jobRef.current);
      observer.observe(projectRef.current);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.main} ${styles[theme]}`}>
      <div
        className={`
          ${styles.navBar} 
          ${!scrolledUp && styles.hide}
          ${styles.secondary}
        `}
      >
        <div className={`${styles.controls}`}>
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
          <span
            className={`${styles.slider} ${styles.item} ${styles.hover}`}
          ></span>
        </div>
        <div className={styles.toggle}>
          <ToggleButton />
        </div>
      </div>
      <div className={styles.sections}>
        <div
          className={`${styles.section} ${styles.fadeIn}`}
          id="profile-section"
          ref={profileRef}
        >
          <ProfileSection />
        </div>
        <div className={styles.section} id="job-section" ref={jobRef}>
          <JobSection />
        </div>
        <div className={styles.section} id="project-section" ref={projectRef}>
          <ProjectSection />
        </div>
      </div>
    </div>
  );
}
