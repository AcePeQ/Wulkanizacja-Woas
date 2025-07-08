import styles from "./AnimatedLine.module.css";
import { motion } from "motion/react";

function AnimatedLine() {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ type: "spring", duration: 3, bounce: 0.4 }}
      className={styles.line}
      aria-disabled={true}
    ></motion.div>
  );
}

export default AnimatedLine;
