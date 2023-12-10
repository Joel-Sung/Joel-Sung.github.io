import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import profilePic from '../images/profile.png';
import styles from './ProfileSection.module.scss';

export default function ProfileSection({ className }) {
  return (
    <div className={className}>
      <div className={styles.main}>
        <Image
          src={profilePic}
          alt="Profile picture"
          className={styles.profilePic}
        />
        <div className={styles.description}>
          <div>
            Hi there! My name is Joel and I am a final year Computer Science undergraduate at the National University of Singapore (NUS). 
            I graduate in May 2024 and aspire to be a Software Engineer. On the right, you may navigate to the jobs and projects tabs to 
            find out more about my past experiences. 
          </div>
          <br/>
          <ul>
            <li><FontAwesomeIcon icon={faEnvelope} />: joelsung123@gmail.com</li>
            <li>
              {/* @ts-ignore */}
              <FontAwesomeIcon icon={faGithub} />: <a href="https://github.com/Joel-Sung"> 
                https://github.com/Joel-Sung</a>
            </li>
            <li>
              {/* @ts-ignore */}
              <FontAwesomeIcon icon={faLinkedin} />: <a href="https://www.linkedin.com/in/joel-sung-568418122/">
                https://www.linkedin.com/in/joel-sung-568418122/</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}