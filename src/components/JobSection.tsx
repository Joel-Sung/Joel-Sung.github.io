import m1Logo from "../images/m1.png";
import yaraLogo from "../images/yara.png";
import styles from "./JobSection.module.scss";
import ItemCard from "./card/ItemCard";
import ScrollContainer, { ScrollEntry } from "./container/ScrollContainer";

const m1Description = [
  "Delivered end-to-end automated processes for clients to save manhours and increase work efficiency",
  "Utilized RPA software Automation Anywhere 360 and Python to develop bots and scripts",
];

const yaraDescription = [
  "Assisted with creating the user interface for android app FarmCare for farmers in India",
  "Created screens using React Native/Typescript",
  "Wrote tests using JEST and conducted QA testing using strapi CMS",
];

export default function JobSection({}) {
  return (
    <div className={styles.container}>
      <ScrollContainer type={ScrollEntry.SlideUp}>
        <ItemCard
          src={m1Logo}
          alt="M1 Limited"
          company="M1 Limited"
          duration="May 2022 - Oct 2022"
          position="RPA Development Intern"
          location="Singapore"
          description={m1Description}
        />
      </ScrollContainer>
      <ScrollContainer type={ScrollEntry.SlideUp}>
        <ItemCard
          src={yaraLogo}
          alt="Yara International"
          company="Yara International"
          duration="Sep 2021 - Jan 2022"
          position="FrontEnd Mobile Development Intern"
          location="Singapore"
          description={yaraDescription}
        />
      </ScrollContainer>
    </div>
  );
}
