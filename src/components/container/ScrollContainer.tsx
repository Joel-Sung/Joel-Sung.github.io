import { useEffect, useRef } from "react";
import styles from "./ScrollContainer.module.scss";

interface ScrollContainerProps {
  children: any;
  type?: "slideUp" | "fadeIn";
  threshold?: number;
  className?: string;
}

export default function ScrollContainer(props: ScrollContainerProps) {
  const { children, threshold = 0.0, type = "slideUp", className } = props;

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (type) {
              case "fadeIn":
                entry.target.classList.add(styles.fadeIn);
                break;
              default:
                entry.target.classList.add(styles.slideUp);
            }
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
