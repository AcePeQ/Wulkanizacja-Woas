import styles from "./HeroSection.module.css";

import AnimatedHeading from "../AnimatedHeader/AnimatedHeading";
import Section from "../Section/Section";
import { motion } from "motion/react";

function HeroSection() {
  return (
    <Section sectionClass="hero" overlay="dark">
      <div className={styles.container}>
        <AnimatedHeading />
        <h1 className="sr_only">Wulkanizacja WOAS</h1>
        <motion.h2
          initial={{ y: "200px", opacity: 0 }}
          animate={{ y: "0px", opacity: 1 }}
          transition={{
            duration: 6,
            delay: 1,
            type: "spring",
            damping: 15,
            mass: 2,
          }}
          className={styles.subHeading}
        >
          Najlepsza wulkanizacja w Kałuszynie <br />
          Przyjedz do nas lub zadzwoń a to my przybędziemy z pomocą
        </motion.h2>
      </div>
    </Section>
  );
}

export default HeroSection;
