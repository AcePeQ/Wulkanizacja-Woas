import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import styles from "./Header.module.css";
import { motion } from "motion/react";

function Header() {
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    function handleScroll() {
      console.log(window.pageYOffset);
      if (window.pageYOffset === 0) {
        setIsOnTop(true);
      } else if (window.pageYOffset >= 220) {
        setIsOnTop(false);
      }
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5, delay: 1, ease: "anticipate" }}
      className={`${styles.header} ${isOnTop ? styles.top : styles.under}`}
    >
      <Logo />

      <Navigation />
    </motion.header>
  );
}

export default Header;
