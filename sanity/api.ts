import { client } from "./client";
import { AboutDocument, SectionDocument } from "./types";

const ABOUT_QUERY = `
  *[_type == "about"][0] {
    title,
    description,
    "imageUrl": image.asset->url
  }
`;
const SECTION_QUERY = `*[_type == "section"]`;

export const fetchAbout = async () => {
  const aboutSection = await client.fetch<AboutDocument>(ABOUT_QUERY);
  return aboutSection;
};

export const fetchSections = async () => {
  const sections = await client.fetch<SectionDocument[]>(SECTION_QUERY);
  return sections;
};
