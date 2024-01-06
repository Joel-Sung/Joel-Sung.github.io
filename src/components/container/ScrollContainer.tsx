import { useEffect, useRef } from "react";
import styles from "./ScrollContainer.module.scss";

export enum ScrollEntry {
  SlideUp,
  SlideRight,
  SlideLeft,
}
interface ScrollContainerProps {
  children: any;
  type: ScrollEntry;
  threshold?: number;
  className?: string;
}
export default function ScrollContainer(props: ScrollContainerProps) {
  const { children, type, threshold = 0.0, className } = props;
  const animationClass =
    type == ScrollEntry.SlideUp
      ? styles.slideUp
      : type == ScrollEntry.SlideRight
      ? styles.slideRight
      : type == ScrollEntry.SlideLeft
      ? styles.slideLeft
      : undefined;

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          }
        });
      },
      {
        threshold: threshold,
      }
    );

    observer.observe(ref.current);
  }, []);

  return (
    <div className={`${styles.hidden} ${className}`} ref={ref}>
      {children}
    </div>
  );
}
