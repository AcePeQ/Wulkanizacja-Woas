import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import styles from "./Header.module.css";
import { motion } from "motion/react";

function Header() {
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const sections = [...document.querySelectorAll("section")];
    const navLinksNodes = document
      .querySelector("#mainNav")
      ?.querySelectorAll("a");
    let currentSection = "home";

    function checkActiveSection() {
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - section.clientHeight / 4) {
          currentSection = section.id;
        }
      });

      navLinksNodes?.forEach((navLink) => {
        if (navLink.href.includes(`#${currentSection}`)) {
          document.querySelector(".active")?.classList.remove("active");
          navLink.classList.add("active");
        }
      });
    }

    checkActiveSection();

    window.addEventListener("scroll", checkActiveSection);

    return () => window.removeEventListener("scroll", checkActiveSection);
  }, []);

  useEffect(() => {
    function handleScroll() {
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
