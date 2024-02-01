import { forwardRef } from "react";
import m1Logo from "../images/m1.png";
import mjLogo from "../images/mj.png";
import yaraLogo from "../images/yara.png";
import styles from "./JobSection.module.scss";
import JobCard from "./card/JobCard";
import TitleCard from "./card/TitleCard";
import ScrollContainer, { ScrollEntry } from "./container/ScrollContainer";

const mjDescription = [
  "Collaborate with product managers and tech leads to support application engineering teams",
  "Work on the Mighty Jaxx website using Next.js, HTML and CSS",
  "Develop backend services using Node.js and test scripts using Javascript",
];

const m1Description = [
  "Delivered end-to-end automated processes for clients to save manhours and increase work efficiency",
  "Utilized RPA software Automation Anywhere 360 and Python to develop bots and scripts",
];

const yaraDescription = [
  "Assisted with creating the user interface for android app FarmCare for farmers in India",
  "Created screens using React Native/Typescript",
  "Wrote tests using JEST and conducted QA testing using strapi CMS",
];

interface JobSectionProps {
  id: string;
  className?: string;
}
const JobSection = forwardRef<HTMLDivElement, JobSectionProps>(function (
  { id, className = "" }: JobSectionProps,
  ref
) {
  return (
    <div className={`${styles.container} ${className}`} ref={ref} id={id}>
      <ScrollContainer type={ScrollEntry.SlideUp} className={styles.title}>
        <TitleCard
          title="Work Experiences"
          subtitle="My past professional experiences"
        />
      </ScrollContainer>
      <ScrollContainer type={ScrollEntry.SlideUp} className={styles.job}>
        <JobCard
          src={mjLogo}
          alt="Mighty Jaxx"
          company="Mighty Jaxx"
          duration="Jan 2024 - Current"
          position="Software Engineer Intern"
          location="Singapore"
          skills={[
            "Next.js",
            "Node.js",
            "Web Development",
            "Business Communication",
          ]}
          description={mjDescription}
        />
      </ScrollContainer>
      <ScrollContainer type={ScrollEntry.SlideUp} className={styles.job}>
        <JobCard
          src={m1Logo}
          alt="M1 Limited"
          company="M1 Limited"
          duration="May 2022 - Oct 2022"
          position="RPA Development Intern"
          location="Singapore"
          skills={[
            "Automation Anywhere 360",
            "Python",
            "Documentation",
            "Business Communication",
          ]}
          description={m1Description}
        />
      </ScrollContainer>
      <ScrollContainer type={ScrollEntry.SlideUp}>
        <JobCard
          src={yaraLogo}
          alt="Yara International"
          company="Yara International"
          duration="Sep 2021 - Jan 2022"
          position="FrontEnd Mobile Development Intern"
          location="Singapore"
          skills={[
            "React Native",
            "Typescript",
            "JEST",
            "Testing",
            "Strapi CMS",
            "QA Testing",
          ]}
          description={yaraDescription}
        />
      </ScrollContainer>
    </div>
  );
});

export default JobSection;
