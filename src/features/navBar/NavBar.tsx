import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import ThemeToggle from "../../components/button/ThemeToggle";
import { ThemeContext } from "../../context/ThemeContext";
import { Sections } from "../../types/types";
import styles from "./NavBar.module.scss";
import { NavMenu } from "./NavMenu";

interface NavBarProps {
  sectionActive: Sections;
}
export default function NavBar({sectionActive}: NavBarProps) {
  const { theme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <div className={`${styles.header}`}>
        <div className={`${styles.controls}`}>
          <FontAwesomeIcon
            icon={menuOpen ? faChevronLeft : faBars}
            className={styles.menuIcon}
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <div className={`${styles.themeBold} ${styles.sectionName}`}>
            {sectionActive}
          </div>
        </div>
        <ThemeToggle />
      </div>
      <NavMenu
        menuOpen={menuOpen}
        currentSection={sectionActive}
        onMenuClick={() => setMenuOpen(false)}
      />
    </div>
  );
}
