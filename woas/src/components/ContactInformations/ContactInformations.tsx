import styles from "./ContactInformations.module.css";

function ContactInformations() {
  return (
    <address className={styles.address}>
      Wulkanizacja WOAS <br />
      ul. Warszawska 40 <br />
      07-110, Kałuszyn <br />
      <a className={styles.link} href="tel:48 664 134 054">
        +48 664 134 054
      </a>
      <br />
      <a className={styles.link} href="mailto:jacek.nojszewski@gmail.com">
        jacek.nojszewski@gmail.com
      </a>
    </address>
  );
}

export default ContactInformations;
