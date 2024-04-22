export interface AboutDocument {
  description: string;
  imageUrl: string;
}

export interface Card {
  company: string;
  duration: string;
  position: string;
  skills: string[];
  description: string;
  link: string;
}

export interface SectionDocument {
  title: string;
  subtitle: string;
  cards: Card[];
}
