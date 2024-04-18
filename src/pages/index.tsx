import { useEffect, useRef, useState } from "react";
import NavBar from "../features/navBar/NavBar";
import AboutSection from "../features/section/AboutSection";
import ActivitiesSection from "../features/section/ActivitiesSection";
import JobSection from "../features/section/JobSection";
import ProjectSection from "../features/section/ProjectSection";
import { Sections } from "../types/types";
import styles from "./index.module.scss";

export default function HomePage() {
  const [sectionActive, setSectionActive] = useState<Sections>(Sections.ABOUT);

  const aboutRef = useRef(null);
  const jobRef = useRef(null);
  const projectRef = useRef(null);
  const activitiesRef = useRef(null);

  const aboutId = "about-section";
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
              case aboutId:
                setSectionActive(Sections.ABOUT);
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
      observer.observe(aboutRef.current);
      observer.observe(jobRef.current);
      observer.observe(projectRef.current);
      observer.observe(activitiesRef.current);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <NavBar sectionActive={sectionActive} />
        <div className={styles.sections}>
          <AboutSection
            id={aboutId}
            ref={aboutRef}
            className={styles.section}
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
