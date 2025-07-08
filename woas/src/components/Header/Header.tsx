import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import styles from "./Header.module.css";
import { motion } from "motion/react";

function Header() {
  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
      className={styles.header}
    >
      <Logo />

      <Navigation />
    </motion.header>
  );
}

export default Header;
