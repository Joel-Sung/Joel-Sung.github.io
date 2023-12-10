import { useState } from 'react';
import m1Logo from '../images/m1.png';
import yaraLogo from '../images/yara.png';
import styles from './JobSection.module.scss';
import ItemBox from './card/ItemBox';
import ItemDetails, { ItemInformation } from './card/ItemDetails';

export default function JobSection({ className }) {
  const [showDetails, setShowDetails] = useState(false);
  const [itemDetails, setItemDetails] = useState({
    src: null,
    company: "",
    duration: "",
    position: "",
    location: "",
    description: []
  });

  const toggleDetails = (newItemDetails: ItemInformation) => {
    setItemDetails({...newItemDetails});
    setShowDetails(true);
  }

  const untoggleDetails = () => {
    setShowDetails(false);
  }

  const m1Description = [
    "Delivered end-to-end automated processes for clients to save manhours and increase work efficiency",
    "Utilized RPA software Automation Anywhere 360 and Python to develop bots and scripts"
  ]
  const yaraDescription = [
    "Assisted with creating the user interface for android app FarmCare for farmers in India",
    "Created screens using React Native/Typescript",
    "Wrote tests using JEST and conducted QA testing using strapi CMS"
  ]

  return (
    <div className={className}>
      <div className={styles.container}>
        <ItemBox src={m1Logo} alt="M1 Limited" onClick={() => 
          toggleDetails({
            src: m1Logo,
            company: "M1 Limited",
            duration: "May 2022 - Oct 2022",
            position: "RPA Development Intern",
            location: "Singapore",
            description: m1Description
          })} 
        />
        <ItemBox src={yaraLogo} alt="Yara International" onClick={() => 
          toggleDetails({
            src: yaraLogo,
            company: "Yara International",
            duration: "Sep 2021 - Jan 2022",
            position: "FrontEnd Mobile Development Intern",
            location: "Singapore",
            description: yaraDescription
          })} />
      </div>
      {showDetails &&
          <ItemDetails
            details={itemDetails}
            onCancel={untoggleDetails}
          />
      }
    </div>
  )
}
