import { forwardRef } from "react";
import ItemCard from "../../components/card/ItemCard";
import TitleCard from "../../components/card/TitleCard";
import {
  AKEE_DESCRIPTION,
  KOIOS_DESCRIPTION,
  SPA_DESCRIPTION,
} from "../../utils/constants";

interface ProjectSectionProps {
  id: string;
  className?: string;
}

const ProjectSection = forwardRef<HTMLDivElement, ProjectSectionProps>(
  function ({ id, className = "" }: ProjectSectionProps, ref) {
    return (
      <div className={className} ref={ref} id={id}>
        <TitleCard
          title="Past Projects"
          subtitle="Freelance and academic projects"
        />

        <ItemCard
          company="Static Program Analyzer (SPA)"
          duration="Aug 2023 - Nov 2023"
          position="Software Engineering Project"
          skills={["C++", "Jira", "Project Management", "SWE Principles"]}
          description={SPA_DESCRIPTION}
        />

        <ItemCard
          company="Akee"
          duration="Dec 2022 - Feb 2023"
          position="Freelance Web Developer"
          skills={["Next.js", "Chart.js", "Vercel"]}
          description={AKEE_DESCRIPTION}
          link="https://akee-ruddy.vercel.app/"
        />

        <ItemCard
          company="Koios"
          duration="Nov 2022 - Feb 2023"
          position="Freelance Frontend Developer"
          skills={["Next.js", "MUI"]}
          description={KOIOS_DESCRIPTION}
        />
      </div>
    );
  }
);

export default ProjectSection;
