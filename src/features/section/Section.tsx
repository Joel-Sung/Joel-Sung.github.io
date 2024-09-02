import { forwardRef } from "react";
import { SectionDocument } from "../../../sanity/types";
import ItemCard from "../../components/card/ItemCard";
import TitleCard from "../../components/card/TitleCard";
import styles from "./Section.module.scss";

interface SectionProps {
  id: string;
  className?: string;
  section: SectionDocument;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(function (
  { id, className = "", section }: SectionProps,
  ref
) {
  const title = section?.title || "";
  const subtitle = section?.subtitle || "";
  const cards = section?.cards || [];

  return (
    <div className={`${className} ${styles.section} section`} ref={ref} id={id}>
      <TitleCard title={title} subtitle={subtitle} />

      {cards.length > 0 &&
        cards.map((card, index) => (
          <ItemCard
            key={index}
            company={card.company}
            duration={card.duration}
            position={card.position}
            skills={card.skills}
            description={card.description}
            link={card.link}
          />
        ))}
    </div>
  );
});

export default Section;
