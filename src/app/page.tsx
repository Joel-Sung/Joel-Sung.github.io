"use client";

import { useEffect, useRef, useState } from "react";
import { fetchAbout, fetchSections } from "../../sanity/api";
import { AboutDocument, SectionDocument } from "../../sanity/types";
import NavBar from "../features/navBar/NavBar";
import AboutSection from "../features/section/AboutSection";
import Section from "../features/section/Section";
import styles from "./page.module.scss";
import LoadingScreen from "../features/LoadingScreen";

export default function HomePage() {
  const [isSanityDataFetched, setIsSanityDataFetched] = useState(false);

  const aboutRef = useRef(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [aboutSection, setAboutSection] = useState<AboutDocument | null>(null);
  const [sections, setSections] = useState<(SectionDocument | null)[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const aboutSectionData = await fetchAbout();
        const sectionsData = await fetchSections();

        setIsSanityDataFetched(true);

        setAboutSection(aboutSectionData);
        setSections(sectionsData);
      } catch (error) {
        console.error("Unable to fetch Sanity data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    sectionRefs.current = Array(sections.length).fill(null);
  }, [sections]);

  return (
    <>
      {!isSanityDataFetched ? (
        <LoadingScreen />
      ) : (
        <div className={styles.background}>
          <div className={styles.main}>
            <NavBar sections={sections} aboutSection={aboutSection} />

            <div className={styles.sections}>
              <AboutSection
                description={aboutSection?.description || ""}
                id={aboutSection.title}
                ref={aboutRef}
                imageUrl={aboutSection?.imageUrl || ""}
              />

              {sections.map((section, idx) => {
                return (
                  <Section
                    key={section.title}
                    id={section.title}
                    ref={(el) => (sectionRefs.current[idx] = el)}
                    section={section}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
