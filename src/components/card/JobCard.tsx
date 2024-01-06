import {
  faAngleDoubleDown,
  faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./JobCard.module.scss";

interface JobCardProps {
  src: StaticImageData;
  alt: string;
  company: string;
  duration: string;
  position: string;
  location: string;
  description: string[];
}
export default function JobCard(props: JobCardProps) {
  const { src, alt, company, duration, position, location, description } =
    props;
  const [showMore, setShowMore] = useState(false);
  const buttonText = showMore ? "Show less" : "Show more";

  const targetRef = useRef<HTMLDivElement>(null);
  const [divHeight, setDivHeight] = useState(0);

  useEffect(() => {
    if (targetRef.current) {
      setDivHeight(targetRef.current.scrollHeight);
    }
  }, [showMore]);

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <div className={styles.title}>
        <Image src={src} alt={alt} className={styles.image} />
        <div className={styles.details}>
          <div>Company: {company}</div>
          <div>Duration: {duration}</div>
          <div>Position: {position}</div>
          <div>Location: {location}</div>
        </div>
      </div>

      <div className={styles.body}>
        <div
          className={`
            description
            ${showMore ? "descriptionAppear" : "descriptionHidden"}
          `}
          ref={targetRef}
        >
          {showMore &&
            description.map((text, index) => {
              return (
                <p key={index} className={styles.bulletPoint}>
                  {index + 1}. {text}
                </p>
              );
            })}
        </div>
        <style jsx>{`
          .description {
            transition: all 0.5s;
            margin-bottom: 2vh;
          }

          .descriptionHidden {
            height: 0;
          }

          .descriptionAppear {
            height: ${divHeight}px;
          }
        `}</style>
        <button
          className={`${styles.button} ${styles.hover}`}
          onClick={() => setShowMore(!showMore)}
        >
          <FontAwesomeIcon
            icon={showMore ? faAngleDoubleUp : faAngleDoubleDown}
            className={styles.letter}
          />{" "}
          {buttonText.split("").map((letter, index) => {
            return (
              <span key={index} className={styles.letter}>
                {letter}
              </span>
            );
          })}
        </button>
      </div>
    </div>
  );
}
