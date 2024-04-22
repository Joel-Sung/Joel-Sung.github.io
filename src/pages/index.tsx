import { useEffect, useRef, useState } from "react";
import { fetchAbout, fetchSections } from "../../sanity/api";
import { AboutDocument, SectionDocument } from "../../sanity/types";
import NavBar from "../features/navBar/NavBar";
import AboutSection from "../features/section/AboutSection";
import Section from "../features/section/Section";
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

  const [aboutSection, setAboutSection] = useState<AboutDocument | null>(null);

  const [jobSection, setJobSection] = useState<SectionDocument | null>(null);
  const [projectSection, setProjectSection] = useState<SectionDocument | null>(
    null
  );
  const [activitiesSection, setActivitiesSection] =
    useState<SectionDocument | null>(null);

  useEffect(() => {
    setMounted(true);

    const fetchData = async () => {
      const about = await fetchAbout();
      setAboutSection(about);

      const sections = await fetchSections();

      setJobSection(
        sections.find((section) => section.title === "Work Experiences")
      );
      setProjectSection(
        sections.find((section) => section.title === "Past Projects")
      );
      setActivitiesSection(
        sections.find((section) => section.title === "Co-Curricular Activities")
      );
    };
    fetchData();
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
            className={styles.section}
            description={aboutSection?.description || ""}
            image={aboutSection?.imageUrl || ""}
            id={aboutId}
            ref={aboutRef}
          />

          <Section
            id={jobId}
            ref={jobRef}
            className={styles.section}
            title={jobSection?.title || ""}
            subtitle={jobSection?.subtitle || ""}
            cards={jobSection?.cards || []}
          />

          <Section
            id={projectId}
            ref={projectRef}
            className={styles.section}
            title={projectSection?.title || ""}
            subtitle={projectSection?.subtitle || ""}
            cards={projectSection?.cards || []}
          />

          <Section
            id={activitiesId}
            ref={activitiesRef}
            className={styles.section}
            title={activitiesSection?.title || ""}
            subtitle={activitiesSection?.subtitle || ""}
            cards={activitiesSection?.cards || []}
          />
        </div>
      </div>
    </div>
  );
}
