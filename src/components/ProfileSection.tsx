import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
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

export default function ProfileSection({ className, id = "", ref = null }) {
  return (
    <div className={className} id={id} ref={ref}>
      <div className={styles.main}>
        <div className={styles.description}>
          <Image
            src={profilePic}
            alt="Profile picture"
            className={styles.profilePic}
          />
          <div>{description}</div>
        </div>
        <div className={styles.contact}>
          <div>Contact me!</div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> joelsung123@gmail.com
            </li>
            <li>
              {/* @ts-ignore */}
              <FontAwesomeIcon icon={faGithub} />{" "}
              <a href="https://github.com/Joel-Sung">
                https://github.com/Joel-Sung
              </a>
            </li>
            <li>
              {/* @ts-ignore */}
              <FontAwesomeIcon icon={faLinkedin} />{" "}
              <a href="https://www.linkedin.com/in/joel-sung-568418122/">
                https://www.linkedin.com/in/joel-sung-568418122/
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
