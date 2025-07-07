import type { ReactElement } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  children: ReactElement;
  sectionClass: string;
  overlay: string;
};

function Section({ children, sectionClass, overlay }: SectionProps) {
  return (
    <section
      className={`${styles.section} ${styles[sectionClass]} ${
        overlay ? styles[overlay] : ""
      }`}
    >
      {children}
    </section>
  );
}

export default Section;
