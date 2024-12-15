import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styles from "./NavBar.module.scss";
import NavMenu from "./NavMenu";
import { AboutDocument, SectionDocument } from "../../../sanity/types";

interface NavBarProps {
  sections: (SectionDocument | null)[];
  aboutSection: AboutDocument;
}

export default function NavBar({ sections, aboutSection }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectionActive, setSectionActive] = useState<string>(
    aboutSection.title
  );

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar") as HTMLElement;
      const sectionElements = document.querySelectorAll(".section");

      const navbarBottom = navbar.getBoundingClientRect().bottom;

      sectionElements.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (
          sectionTop <= navbarBottom &&
          sectionTop + section.clientHeight > navbarBottom
        ) {
          setSectionActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.header} navbar`}>
        <FontAwesomeIcon
          icon={menuOpen ? faChevronLeft : faBars}
          className={styles.menuIcon}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <div className={styles.sectionName}>{sectionActive}</div>
      </div>

      <NavMenu
        menuOpen={menuOpen}
        currentSection={sectionActive}
        onMenuClick={() => setMenuOpen(false)}
        sections={sections}
        aboutSection={aboutSection}
      />
    </div>
  );
}
