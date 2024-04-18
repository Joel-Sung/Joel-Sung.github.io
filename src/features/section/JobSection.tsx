import { forwardRef } from "react";
import ItemCard from "../../components/card/ItemCard";
import TitleCard from "../../components/card/TitleCard";
import {
  M1_DESCRIPTION,
  MJ_DESCRIPTION,
  YARA_DESCRIPTION,
} from "../../utils/constants";

interface JobSectionProps {
  id: string;
  className?: string;
}

const JobSection = forwardRef<HTMLDivElement, JobSectionProps>(function (
  { id, className = "" }: JobSectionProps,
  ref
) {
  return (
    <div className={className} ref={ref} id={id}>
      <TitleCard
        title="Work Experiences"
        subtitle="My past professional experiences"
      />

      <ItemCard
        company="Mighty Jaxx"
        duration="Jan 2024 - Apr 2024"
        position="Software Engineer Intern"
        skills={[
          "Next.js",
          "Shopify",
          "Sanity",
          "Klaviyo",
          "Jest",
          "Playwright",
          "Node.js",
          "MongoDB",
          "Redis",
        ]}
        description={MJ_DESCRIPTION}
        link="https://www.mightyjaxx.com/"
      />

      <ItemCard
        company="M1 Limited"
        duration="May 2022 - Oct 2022"
        position="RPA Development Intern"
        skills={[
          "RPA",
          "Automation Anywhere 360",
          "Python",
          "Documentation",
          "Business Communication",
        ]}
        description={M1_DESCRIPTION}
        link="https://www.m1.com.sg/"
      />

      <ItemCard
        company="Yara International"
        duration="Sep 2021 - Jan 2022"
        position="FrontEnd Mobile Development Intern"
        skills={["React Native", "Typescript", "JEST", "Strapi CMS"]}
        description={YARA_DESCRIPTION}
        link="https://play.google.com/store/apps/details?id=com.yara.farmhealth.production&hl=en_US&pli=1"
      />
    </div>
  );
});

export default JobSection;
