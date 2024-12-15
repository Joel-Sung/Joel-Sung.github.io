import Link from "next/link";
import styles from "./NavMenu.module.scss";
import { AboutDocument, SectionDocument } from "../../../sanity/types";

interface MenuItemProps {
  href: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

function MenuItem({ href, title, isActive, onClick }: MenuItemProps) {
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
}

interface NavMenuProps {
  menuOpen: boolean;
  currentSection: string;
  onMenuClick: () => void;
  sections: (SectionDocument | null)[];
  aboutSection: AboutDocument;
}

export default function NavMenu({
  menuOpen,
  currentSection,
  onMenuClick,
  sections,
  aboutSection,
}: NavMenuProps) {
  return (
    <div className={styles.container}>
      <div
        className={`
          ${styles.navMenu} 
          ${menuOpen && styles.open}
        `}
      >
        <MenuItem
          href={"#" + aboutSection.title}
          title={aboutSection.title}
          isActive={currentSection === aboutSection.title}
          onClick={onMenuClick}
        />

        {sections.map((section) => {
          return (
            <MenuItem
              key={section.title}
              href={"#" + section.title}
              title={section.title}
              isActive={currentSection === section.title}
              onClick={onMenuClick}
            />
          );
        })}
      </div>
    </div>
  );
}
