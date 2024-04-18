import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { forwardRef } from "react";
import ScrollContainer from "../../components/container/ScrollContainer";
import useIsMobile from "../../hooks/useIsMobile";
import profilePic from "../../images/me.jpg";
import { ABOUT_DESCRIPTION } from "../../utils/constants";
import styles from "./AboutSection.module.scss";

const ContactSection = () => {
  return (
    <div className={styles.contactSection}>
      <div>Contact me!</div>
      <div>
        <FontAwesomeIcon icon={faEnvelope} /> {"joelsung123@gmail.com"}
      </div>
      <div>
        {/* @ts-ignore */}
        <FontAwesomeIcon icon={faGithub} />{" "}
        <a href="https://github.com/Joel-Sung">
          {"https://github.com/Joel-Sung"}
        </a>
      </div>
      <div>
        {/* @ts-ignore */}
        <FontAwesomeIcon icon={faLinkedin} />{" "}
        <a href="https://www.linkedin.com/in/joel-sung-568418122/">
          {"https://www.linkedin.com/in/joel-sung-568418122/"}
        </a>
      </div>
    </div>
  );
};

interface AboutSectionProps {
  id: string;
  className?: string;
}

const AboutSection = forwardRef<HTMLDivElement, AboutSectionProps>(function (
  { id, className = "" }: AboutSectionProps,
  ref
) {
  const isMobile = useIsMobile();

  return (
    <div className={className} ref={ref} id={id}>
      <ScrollContainer type="fadeIn">
        <div className={styles.pictureContainer}>
          <Image
            src={profilePic}
            alt="Profile picture"
            className={styles.profilePic}
          />
          <div className={styles.introduction}>
            {ABOUT_DESCRIPTION}
            {!isMobile && <ContactSection />}
          </div>
        </div>
        {isMobile && <ContactSection />}
      </ScrollContainer>
    </div>
  );
});

export default AboutSection;
