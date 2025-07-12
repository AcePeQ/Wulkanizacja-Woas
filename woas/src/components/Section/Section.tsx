import type { ReactElement } from "react";
import styles from "./Section.module.css";
import { Element } from "react-scroll";

type SectionProps = {
  children: ReactElement;
  sectionClass: string;
  overlay?: string;
  sectionId: string;
};

function Section({ children, sectionClass, overlay, sectionId }: SectionProps) {
  return (
    <Element name={sectionId}>
      <section
        id={sectionId}
        className={`${styles.section} ${styles[sectionClass]} ${
          overlay ? styles[overlay] : ""
        }`}
      >
        {children}
      </section>
    </Element>
  );
}

export default Section;
