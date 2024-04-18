import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ScrollContainer from "../../components/container/ScrollContainer";
import { Sections } from "../../types/types";
import styles from "./NavBar.module.scss";
import { NavMenu } from "./NavMenu";

interface NavBarProps {
  sectionActive: Sections;
}
export default function NavBar({ sectionActive }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ScrollContainer type="fadeIn" className={styles.container}>
      <div className={styles.header}>
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
