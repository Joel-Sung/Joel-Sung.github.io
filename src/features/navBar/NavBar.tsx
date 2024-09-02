import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ScrollContainer from "../../components/container/ScrollContainer";
import styles from "./NavBar.module.scss";
import { NavMenu } from "./NavMenu";
import { ABOUT_ID } from "../../constants/constants";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectionActive, setSectionActive] = useState<string>(ABOUT_ID);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar") as HTMLElement;
      const sections = document.querySelectorAll(".section");

      const navbarBottom = navbar.getBoundingClientRect().bottom;

      sections.forEach((section) => {
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
    <ScrollContainer type="fadeIn" className={styles.container}>
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
      />
    </ScrollContainer>
  );
}
