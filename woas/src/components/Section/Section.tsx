import type { ReactElement } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  children: ReactElement;
  sectionClass: string;
  overlay?: string;
  sectionId: string;
};

function Section({ children, sectionClass, overlay, sectionId }: SectionProps) {
  return (
    <section
      id={sectionId}
      className={`${styles.section} ${styles[sectionClass]} ${
        overlay ? styles[overlay] : ""
      }`}
    >
      {children}
    </section>
  );
}

export default Section;
