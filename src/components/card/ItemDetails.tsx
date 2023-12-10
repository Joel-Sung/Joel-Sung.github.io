import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image, { StaticImageData } from 'next/image';
import styles from './ItemDetails.module.scss';

export interface ItemInformation {
  src: StaticImageData;
  company: string;
  duration: string;
  position: string;
  location: string;
  description: string[];
}
interface ItemDetailsProps {
  details: ItemInformation;
  onCancel: () => void;
}
export default function ItemDetails(props: ItemDetailsProps) {
  const { 
    details: information,
    onCancel
  } = props;

  const {
    src,
    company,
    duration,
    position,
    location,
    description
  } = information;

  return (
    <div className={styles.container}>

      <div className={styles.headerContainer}>
        <Image src={src} alt={company} className={styles.image} />
        <div className={styles.titleContainer}>
          <div>Company: {company}</div>
          <div>Duration: {duration}</div>
          <div>Position: {position}</div>
          <div>Location: {location}</div>
        </div>
        <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} onClick={onCancel}/>
      </div>

      <div>
        Description:<br/>
        {description.map(s => {
          return <p>-{s}</p>
        })}
      </div>
    </div>
  )
}