import { forwardRef } from "react";
import ItemCard from "../../components/card/ItemCard";
import TitleCard from "../../components/card/TitleCard";
import {
  EXCHANGE_DESCRIPTION,
  KARATE_DESCRIPTION,
  TA_DESCRIPTION,
} from "../../utils/constants";

interface ActivitiesSectionProps {
  id: string;
  className?: string;
}

const ActivitiesSection = forwardRef<HTMLDivElement, ActivitiesSectionProps>(
  function ({ id, className = "" }: ActivitiesSectionProps, ref) {
    return (
      <div className={className} ref={ref} id={id}>
        <TitleCard
          title="Co-Curricular Activities"
          subtitle="Other roles and experiences"
        />

        <ItemCard
          company="Teaching Assistant"
          duration="Aug 2023 - Nov 2023"
          position="Tutor"
          skills={["C++", "Algorithms", "Data Structures", "Teaching"]}
          description={TA_DESCRIPTION}
        />

        <ItemCard
          company="Overseas Exchange Semester at TU/e"
          duration="Feb 2023 - July 2023"
          position="Exchange Student"
          skills={[]}
          description={EXCHANGE_DESCRIPTION}
        />

        <ItemCard
          company="NUS Karate"
          duration="Aug 2022 - Apr 2023"
          position="Vice-President Internal"
          skills={["Leadership", "VBA", "Excel"]}
          description={KARATE_DESCRIPTION}
        />
      </div>
    );
  }
);

export default ActivitiesSection;
