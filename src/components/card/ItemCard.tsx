import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollContainer from "../container/ScrollContainer";
import styles from "./ItemCard.module.scss";
import SkillCard from "./SkillCard";

interface ItemCardProps {
  company: string;
  duration: string;
  position: string;
  skills: string[];
  description: string;
  link?: string;
}

export default function ItemCard({
  company,
  duration,
  position,
  skills,
  description,
  link,
}: ItemCardProps) {
  return (
    <ScrollContainer className={styles.title}>
      <a className={styles.container} href={link}>
        <div className={styles.header}>
          <div className={styles.duration}>{duration}</div>
          {link && (
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className={styles.linkIcon}
            />
          )}
        </div>

        <div className={styles.company}>{company}</div>
        <div className={styles.position}>{position}</div>
        <div className={styles.description}>{description}</div>

        <div className={styles.skills}>
          {skills.map((skill, index) => {
            return <SkillCard key={index} skill={skill} />;
          })}
        </div>
      </a>
    </ScrollContainer>
  );
}
