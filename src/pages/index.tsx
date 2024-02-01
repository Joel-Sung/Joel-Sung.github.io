import { useContext, useEffect, useRef, useState } from "react";
import ActivitiesSection from "../components/ActivitiesSection";
import JobSection from "../components/JobSection";
import ProfileSection from "../components/ProfileSection";
import ProjectSection from "../components/ProjectSection";
import { ThemeContext } from "../context/ThemeContext";
import NavBar from "../features/navBar/NavBar";
import { Sections } from "../types/types";
import styles from "./index.module.scss";

export default function HomePage() {
  const [sectionActive, setSectionActive] = useState<Sections>(
    Sections.PROFILE
  );

  const profileRef = useRef(null);
  const jobRef = useRef(null);
  const projectRef = useRef(null);
  const activitiesRef = useRef(null);

  const profileId = "profile-section";
  const jobId = "jobs-section";
  const projectId = "projects-section";
  const activitiesId = "activities-section";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target.id) {
              case profileId:
                setSectionActive(Sections.PROFILE);
                break;
              case jobId:
                setSectionActive(Sections.JOBS);
                break;
              case projectId:
                setSectionActive(Sections.PROJECTS);
                break;
              case activitiesId:
                setSectionActive(Sections.ACTIVITIES);
                break;
            }
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    if (mounted) {
      observer.observe(profileRef.current);
      observer.observe(jobRef.current);
      observer.observe(projectRef.current);
      observer.observe(activitiesRef.current);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.background} ${styles[theme]}`}>
      <div className={`${styles.main}`}>
        <NavBar sectionActive={sectionActive} />
        <div className={styles.sections}>
          <ProfileSection
            id={profileId}
            ref={profileRef}
            className={`${styles.section} ${styles.fadeIn}`}
          />
          <JobSection id={jobId} ref={jobRef} className={styles.section} />
          <ProjectSection
            id={projectId}
            ref={projectRef}
            className={styles.section}
          />
          <ActivitiesSection
            id={activitiesId}
            ref={activitiesRef}
            className={styles.section}
          />
        </div>
      </div>
    </div>
  );
}
