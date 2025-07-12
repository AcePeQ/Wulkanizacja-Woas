import { useEffect, useRef, useState } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import styles from "./MobileHeader.module.css";
import { motion } from "motion/react";
import Button from "../Button/Button";
import { Menu } from "lucide-react";

function MobileHeader() {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isOnTop, setIsOnTop] = useState(true);

  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleCheckClick(e: MouseEvent) {
      const target = e.target as Node;

      if (!menuRef.current) return;

      if (!menuRef.current.contains(target)) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("click", handleCheckClick);

    return () => window.removeEventListener("click", handleCheckClick);
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

  function handleToggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5, delay: 1, ease: "anticipate" }}
      className={`${styles.header} ${isOnTop ? styles.top : styles.under}`}
    >
      <Logo />

      <div ref={menuRef} className={styles.menu}>
        <Button onClick={handleToggleMenu} buttonStyle="menu">
          <Menu size={32} />
        </Button>

        <Navigation isMenuOpen={isMenuOpen} />
      </div>
    </motion.header>
  );
}

export default MobileHeader;
