import akeeLogo from "../images/akee.png";
import koiosLogo from "../images/koios.png";
import nusLogo from "../images/nus.png";
import styles from "./ProjectSection.module.scss";
import ProjectCard from "./card/ProjectCard";
import ScrollContainer, { ScrollEntry } from "./container/ScrollContainer";

interface ProjectWrapperProps {
  children: any;
  type: ScrollEntry;
  threshold: number;
}
function ProjectWrapper(props: ProjectWrapperProps) {
  const { children, type, threshold } = props;
  return (
    <div className={styles.project}>
      <ScrollContainer type={type} threshold={threshold}>
        {children}
      </ScrollContainer>
    </div>
  );
}

export default function ProjectSection() {
  const spaDescription = `
  For a school project, I wrote a static program analyzer (SPA) which parses a pseudo programming 
  language. The aim of the project was to practice good software development principles and project 
  management. SPA was developed using C++.
  `;

  const akeeDescription = `
  Akee is a web application which organizes information about the top and upcoming NFT collections 
  and tokens. This was a freelance project which I picked up for a client. The app was built using
  Next.js with the Chart.js library for the graphs. The NFT data was obtained using API from nftgo
  and coinmarketcap.
  `;

  const koiosDescription = `
  Koios is a web application where tuition centres can register and advertise classes. This app was
  an idea a friend had and I helped to develop the frontend, using Next.js with the MUI library for
  the UI elements.
  `;

  const scrollThreshold = 0.5;

  return (
    <div className={styles.container}>
      <ScrollContainer
        type={ScrollEntry.SlideLeft}
        className={styles.titleContainer}
      >
        <div className={styles.title}>Past Projects</div>
        <div className={styles.subtitle}>Click each row to find out more</div>
      </ScrollContainer>
      <ProjectWrapper type={ScrollEntry.SlideRight} threshold={scrollThreshold}>
        <ProjectCard
          src={nusLogo}
          alt="SPA"
          title="Static Program Analyzer (SPA)"
          duration="Aug 2023 - Nov 2023"
          type="School Project"
          links={["https://github.com/nus-cs3203/23s1-cp-spa-team-17"]}
          linksTo={["GitHub"]}
          description={spaDescription}
        />
      </ProjectWrapper>
      <ProjectWrapper type={ScrollEntry.SlideLeft} threshold={scrollThreshold}>
        <ProjectCard
          src={akeeLogo}
          alt="Akee"
          title="Akee"
          duration="Dec 2022 - Feb 2023"
          type="Freelance"
          links={[
            "https://akee-ruddy.vercel.app/",
            "https://github.com/Joel-Sung/akee-app",
          ]}
          linksTo={["Vercel", "GitHub"]}
          isReverse={true}
          description={akeeDescription}
        />
      </ProjectWrapper>
      <ProjectWrapper type={ScrollEntry.SlideRight} threshold={scrollThreshold}>
        <ProjectCard
          src={koiosLogo}
          alt="Koios"
          title="Koios"
          duration="Nov 2022 - Feb 2023"
          type="Freelance"
          links={["https://github.com/koiosapp/koios-frontend"]}
          linksTo={["GitHub"]}
          description={koiosDescription}
        />
      </ProjectWrapper>
    </div>
  );
}
