import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./SkillCard.module.scss";

export default function SkillCard({ skill }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`
        ${styles[theme]}
        ${styles.container}
        ${styles.themeItem}
    `}
    >
      {skill}
    </div>
  );
}
