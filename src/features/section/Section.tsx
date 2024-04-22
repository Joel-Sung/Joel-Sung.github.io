import { forwardRef } from "react";
import { Card } from "../../../sanity/types";
import ItemCard from "../../components/card/ItemCard";
import TitleCard from "../../components/card/TitleCard";

interface SectionProps {
  id: string;
  className?: string;
  title: string;
  subtitle: string;
  cards: Card[];
}

const Section = forwardRef<HTMLDivElement, SectionProps>(function (
  { id, className = "", title, subtitle, cards }: SectionProps,
  ref
) {
  return (
    <div className={className} ref={ref} id={id}>
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
