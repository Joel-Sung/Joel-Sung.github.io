import styles from './BouncingChars.module.css';

const BouncingCharacter = ({ char, delay }) => {
  const animationDelay:string = delay.toString() + 'ms';
  return (
    <span className={styles.container}>
      <span className={[styles.bounce,styles.animation].join(" ")} style={{animationDelay: animationDelay}}>{char}</span>
      {char.trim() != "" && <span className={[styles.shadow,styles.animation].join(" ")} style={{animationDelay: animationDelay}}></span>}
    </span>
  );
}

export default function BouncingChars({ text, delay=100 }) {
  return (
    <div>
      {[...text].map((char, index) => {
        return (<BouncingCharacter char={char} delay={index * delay}/>);
      })}
    </div>
  );
}
