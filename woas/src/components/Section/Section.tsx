import type { ReactElement } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  children: ReactElement;
  sectionClass: string;
};

function Section({ children, sectionClass }: SectionProps) {
  return (
    <section className={`${styles.section} ${styles[sectionClass]}`}>
      {children}
    </section>
  );
}

export default Section;
