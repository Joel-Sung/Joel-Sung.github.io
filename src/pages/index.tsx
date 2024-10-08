import { useEffect, useRef, useState } from "react";
import { fetchAbout, fetchSections } from "../../sanity/api";
import { AboutDocument, SectionDocument } from "../../sanity/types";
import NavBar from "../features/navBar/NavBar";
import AboutSection from "../features/section/AboutSection";
import Section from "../features/section/Section";
import styles from "./index.module.scss";
import {
  ABOUT_ID,
  ACTIVITIES_ID,
  EDUCATION_ID,
  JOBS_ID,
  PROJECTS_ID,
} from "../constants/constants";

export default function HomePage({ aboutSectionData, sectionsData }) {
  const aboutRef = useRef(null);
  const jobRef = useRef(null);
  const educationRef = useRef(null);
  const projectRef = useRef(null);
  const activitiesRef = useRef(null);

  const [aboutSection, setAboutSection] = useState<AboutDocument | null>(null);
  const [jobSection, setJobSection] = useState<SectionDocument | null>(null);
  const [educationSection, setEducationSection] =
    useState<SectionDocument | null>(null);
  const [projectSection, setProjectSection] = useState<SectionDocument | null>(
    null
  );
  const [activitiesSection, setActivitiesSection] =
    useState<SectionDocument | null>(null);

  useEffect(() => {
    setMounted(true);

    setAboutSection(aboutSectionData);
    setJobSection(
      sectionsData.find((section) => section.title === "Work Experiences")
    );
    setEducationSection(
      sectionsData.find((section) => section.title === "Education")
    );
    setProjectSection(
      sectionsData.find((section) => section.title === "Past Projects")
    );
    setActivitiesSection(
      sectionsData.find(
        (section) => section.title === "Co-Curricular Activities"
      )
    );
  }, []);

  const [mounted, setMounted] = useState(false);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <NavBar />

        <div className={styles.sections}>
          <AboutSection
            description={aboutSection?.description || ""}
            id={ABOUT_ID}
            ref={aboutRef}
          />

          <Section id={JOBS_ID} ref={jobRef} section={jobSection} />

          <Section
            id={EDUCATION_ID}
            ref={educationRef}
            section={educationSection}
          />

          <Section id={PROJECTS_ID} ref={projectRef} section={projectSection} />

          <Section
            id={ACTIVITIES_ID}
            ref={activitiesRef}
            section={activitiesSection}
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const aboutSectionData = await fetchAbout();
  const sectionsData = await fetchSections();

  return {
    props: {
      aboutSectionData,
      sectionsData,
    },
  };
}
