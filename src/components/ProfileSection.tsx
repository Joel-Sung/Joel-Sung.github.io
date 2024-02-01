import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { forwardRef, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import useIsMobile from "../hooks/useIsMobile";
import profilePic from "../images/profile.png";
import styles from "./ProfileSection.module.scss";

const description = `
  Hi there! Welcome to my portfolio website! My name is Joel and I am a
  final year Computer Science undergraduate at the National University
  of Singapore (NUS), graduating in May 2024. This website not only
  serves as a repository of my past projects and experiences, but also
  as a sandbox for me to experiment with FrontEnd development. Feel 
  free to scroll and explore!
`;

const ContactSection = () => {
  return (
    <div className={styles.contact}>
      <div>Contact me!</div>
      <ul>
        <li>
          <FontAwesomeIcon icon={faEnvelope} /> {"joelsung123@gmail.com"}
        </li>
        <li>
          {/* @ts-ignore */}
          <FontAwesomeIcon icon={faGithub} />{" "}
          <a href="https://github.com/Joel-Sung">
            {"https://github.com/Joel-Sung"}
          </a>
        </li>
        <li>
          {/* @ts-ignore */}
          <FontAwesomeIcon icon={faLinkedin} />{" "}
          <a href="https://www.linkedin.com/in/joel-sung-568418122/">
            {"https://www.linkedin.com/in/joel-sung-568418122/"}
          </a>
        </li>
      </ul>
    </div>
  );
};

interface ProfileSectionProps {
  id: string;
  className?: string;
}
const ProfileSection = forwardRef<HTMLDivElement, ProfileSectionProps>(
  function ({ id, className = "" }: ProfileSectionProps, ref) {
    const { theme } = useContext(ThemeContext);
    const isMobile = useIsMobile();

    return (
      <div
        className={`${styles.container} ${className} ${styles[theme]}`}
        ref={ref}
        id={id}
      >
        <div className={styles.pictureContainer}>
          <Image
            src={profilePic}
            alt="Profile picture"
            className={styles.profilePic}
          />
          <div className={styles.introduction}>
            {description}
            {!isMobile && <ContactSection />}
          </div>
        </div>
        {isMobile && <ContactSection />}
      </div>
    );
  }
);

export default ProfileSection;
