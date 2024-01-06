import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  src: StaticImageData;
  alt: string;
  title: string;
  duration: string;
  type: string;
  links: string[];
  linksTo: string[];
  description: string;
  className?: string;
  isReverse?: boolean;
}
export default function ProjectCard(props: ProjectCardProps) {
  const {
    src,
    alt,
    title,
    duration,
    type,
    links,
    linksTo,
    description,
    className,
    isReverse = false,
  } = props;

  const [isFlipped, setIsFlipped] = useState(false);

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${className} ${styles[theme]}`}>
      <div
        className={`${styles.container} ${styles.hover}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`
            ${isFlipped ? styles.back : styles.front} 
            ${styles.frontContainer}
            ${isReverse && styles.frontR}
          `}
        >
          <Image src={src} alt={alt} className={styles.image} />
          <div className={styles.details}>
            <div>Title: {title}</div>
            <div>Duration: {duration}</div>
            <div>Type: {type}</div>
            <div>
              <FontAwesomeIcon icon={faGlobe} />:{" "}
              {links.map((link, index) => (
                <span key={index}>
                  {index !== 0 && ", "}
                  <a href={link} title={link}>
                    {linksTo[index]}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`
            ${isFlipped ? styles.front : styles.back} 
            ${styles.backContainer}
            ${styles.item}
            ${styles.hover}
          `}
        >
          {description}
        </div>
      </div>
    </div>
  );
}
