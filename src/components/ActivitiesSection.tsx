import styles from "./ActivitiesSection.module.scss";
import ActivitiesCard from "./card/ActivitiesCard";
import TitleCard from "./card/TitleCard";
import ScrollContainer, { ScrollEntry } from "./container/ScrollContainer";

export default function ActivitiesSection() {
  return (
    <div className={styles.container}>
      <ScrollContainer type={ScrollEntry.SlideUp}>
        <TitleCard
          title="Co-Curricular Activities"
          subtitle="Extra activities I signed up for"
        />
      </ScrollContainer>
      <ScrollContainer type={ScrollEntry.SlideUp} className={styles.activity}>
        <ActivitiesCard
          title="Teaching Assistant"
          duration="Aug 2023 - Nov 2023"
          description="
          I was a tutor for a Basic Algorithms and Data Structures course in NUS.
          My duties included conducting weekly tutorials, graded assignments and
          holding consultation sessions for 28 students.
          "
        />
      </ScrollContainer>
      <ScrollContainer type={ScrollEntry.SlideUp} className={styles.activity}>
        <ActivitiesCard
          title="Overseas Exchange Semester at TU/e"
          duration="Feb 2023 - July 2023"
          description="
          For one full semester, I had the opportunity to study at the Eindhoven
          University of Technology (TU/e) in the Netherlands. I got to meet many 
          people from all over the world and experience new cultures and 
          approaches to education.
          "
        />
      </ScrollContainer>
      <ScrollContainer type={ScrollEntry.SlideUp} className={styles.activity}>
        <ActivitiesCard
          title="Vice-President Internal (VPI) of NUS Karate"
          duration="Aug 2022 - Apr 2023"
          description="
          As the VPI of the Karate club in NUS, I was the main point of contact
          with the club members regarding club activites. I was also responsible
          for keeping track of member attendance. I utilized the attendance data
          to help revamp the club's payment and training structures.
          "
        />
      </ScrollContainer>
    </div>
  );
}
