import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Sections } from "../../types/types";
import styles from "./NavMenu.module.scss";

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
  currentSection: Sections;
  onMenuClick: () => void;
}
export const NavMenu = ({
  menuOpen,
  currentSection,
  onMenuClick,
}: NavMenuProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`
        ${styles.container}  
        ${styles[theme]} 
      `}
    >
      <div
        className={`
          ${styles.navMenu} 
          ${menuOpen && styles.open}
        `}
      >
        <MenuItem
          href="#profile-section"
          title="Profile"
          isActive={currentSection === Sections.PROFILE}
          onClick={onMenuClick}
        />
        <MenuItem
          href="#jobs-section"
          title="Jobs"
          isActive={currentSection === Sections.JOBS}
          onClick={onMenuClick}
        />
        <MenuItem
          href="#projects-section"
          title="Projects"
          isActive={currentSection === Sections.PROJECTS}
          onClick={onMenuClick}
        />
        <MenuItem
          href="#activities-section"
          title="Other Activities"
          isActive={currentSection === Sections.ACTIVITIES}
          onClick={onMenuClick}
        />
      </div>
    </div>
  );
};
