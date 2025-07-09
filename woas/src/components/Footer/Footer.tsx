import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>Telefon</div>
      <div className={styles.middle}>
        <Logo isLogoFooter />
      </div>
      <div className={styles.right}>
        <p>&copy; Copyright WOAS {year}</p>
        <p>
          Made by:{" "}
          <a className={styles.madeByLink} href="#">
            Maciej Nojszewski
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
