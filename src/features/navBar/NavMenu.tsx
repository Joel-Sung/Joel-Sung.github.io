import Link from "next/link";
import styles from "./NavMenu.module.scss";
import {
  ABOUT_ID,
  JOBS_ID,
  EDUCATION_ID,
  PROJECTS_ID,
  ACTIVITIES_ID,
} from "../../constants/constants";

interface MenuItemProps {
  href: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}
const MenuItem = ({ href, title, isActive, onClick }: MenuItemProps) => {
  return (
    <Link
      href={href}
      className={`
        ${styles.menuItem} 
        ${isActive ? styles.themeColorFont : styles.themeFont}
      `}
      onClick={onClick}
    >
      <div
        className={`
          ${styles.itemLine} 
          ${isActive ? styles.itemLineFull : styles.itemLineEmpty} 
          ${isActive ? styles.themeColorBackground : styles.themeFill}
        `}
      />
      <div
        className={`
          ${styles.bulletPoint} 
          ${isActive ? styles.themeColorBackground : styles.themeFill}
          ${isActive && styles.shift}
        `}
      />
      {title}
    </Link>
  );
};

interface NavMenuProps {
  menuOpen: boolean;
  currentSection: string;
  onMenuClick: () => void;
}
export const NavMenu = ({
  menuOpen,
  currentSection,
  onMenuClick,
}: NavMenuProps) => {
  return (
    <div className={styles.container}>
      <div
        className={`
          ${styles.navMenu} 
          ${menuOpen && styles.open}
        `}
      >
        <MenuItem
          href="#About"
          title="About"
          isActive={currentSection === ABOUT_ID}
          onClick={onMenuClick}
        />
        <MenuItem
          href="#Jobs"
          title="Jobs"
          isActive={currentSection === JOBS_ID}
          onClick={onMenuClick}
        />
        <MenuItem
          href="#Education"
          title="Education"
          isActive={currentSection === EDUCATION_ID}
          onClick={onMenuClick}
        />
        <MenuItem
          href="#Projects"
          title="Projects"
          isActive={currentSection === PROJECTS_ID}
          onClick={onMenuClick}
        />
        <MenuItem
          href="#Activities"
          title="Other Activities"
          isActive={currentSection === ACTIVITIES_ID}
          onClick={onMenuClick}
        />
      </div>
    </div>
  );
};
