import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./ThemeToggle.module.scss";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`${styles[theme]} ${styles.container}`}
    >
      <div
        className={`
          ${styles.toggleOne} 
          ${theme === "light" && styles.active} 
        `}
      >
        <FontAwesomeIcon icon={faSun} className={styles.icon} />
      </div>
      <div
        className={`
          ${styles.toggleTwo} 
          ${theme === "dark" && styles.active}
        `}
      >
        <FontAwesomeIcon icon={faMoon} className={styles.icon} />
      </div>
      <span className={`${styles.slider} ${styles.themeSecondary}`} />
    </button>
  );
}
