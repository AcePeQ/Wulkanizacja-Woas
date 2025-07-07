import styles from "./HeroSection.module.css";

import AnimatedHeading from "../AnimatedHeader/AnimatedHeading";
import Section from "../Section/Section";

function HeroSection() {
  return (
    <Section sectionClass="hero" overlay="dark">
      <div className={styles.container}>
        <AnimatedHeading />
        <h1 className="sr_only">Wulkanizacja WOAS</h1>
        <h2 className={styles.subHeading}>
          Najlepsza wulkanizacja w Kałuszynie <br />
          Przyjedz do nas lub zadzwoń a to my przybędziemy z pomocą
        </h2>
      </div>
    </Section>
  );
}

export default HeroSection;
