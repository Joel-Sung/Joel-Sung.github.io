import { useState } from 'react';
import akeeLogo from '../images/akee.png';
import koiosLogo from '../images/koios.png';
import nusLogo from '../images/nus.png';
import styles from './ProjectSection.module.scss';
import ItemBox from './card/ItemBox';
import ItemDetails, { ItemInformation } from './card/ItemDetails';

export default function ProjectSection({ className }) {
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

  const spaDescription = [
    "Wrote a static program analyzer that parses a programming language made for educational purposes",
    "SPA also parses and evaluates queries on a given piece of code",
    "Used C++ with clang-format and clang-tidy",
    "GitHub: https://github.com/nus-cs3203/23s1-cp-spa-team-17"
  ]
  const akeeDescription = [
    "Developed a web application which organizes information about the top and upcoming NFT collections and tokens",
    "Used NextJS with ChartJS for the graphs and MUI package for the UI elements",
    "Obtained NFT data using API from nftgo and coinmarketcap",
    "GitHub: https://github.com/Joel-Sung/akee-app",
    "Deployed on Vercel (CORS required): https://akee-ruddy.vercel.app/"
  ]
  const koiosDescription = [
    "Created web pages and UI elements for the platform",
    "Worked on the frontend using NextJS with the MUI UI package",
    "GitHub: https://github.com/koiosapp/koios-frontend"
  ]

  return (
    <div className={className}>
      <div className={styles.container}>
        <ItemBox src={nusLogo} alt="SPA" onClick={() => 
          toggleDetails({
            src: nusLogo,
            company: "SPA",
            duration: "Aug 2023 - Nov 2023",
            position: "Progam Analyzer Developer",
            location: "Singapore",
            description: spaDescription
          })} 
        />
        <ItemBox src={akeeLogo} alt="Akee" onClick={() => 
          toggleDetails({
            src: akeeLogo,
            company: "Akee",
            duration: "Dec 2022 - Feb 2023",
            position: "FrontEnd Web Developer",
            location: "Singapore",
            description: akeeDescription
          })} 
        />
        <ItemBox src={koiosLogo} alt="Koios" onClick={() => 
          toggleDetails({
            src: koiosLogo,
            company: "Koios",
            duration: "Nov 2022 - Feb 2023",
            position: "FrontEnd Web Developer",
            location: "Singapore",
            description: koiosDescription
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
