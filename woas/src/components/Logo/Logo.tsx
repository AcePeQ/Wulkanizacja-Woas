import styles from "./Logo.module.css";

function Logo({ isLogoFooter = false }: { isLogoFooter?: boolean }) {
  if (isLogoFooter) {
    return (
      <a
        className={styles.logoFooter}
        href="https://www.google.pl/maps/place/Mobilna+Wulkanizacja+Serwis+i+sprzeda%C5%BC+opon/@52.1966925,21.7578525,19z/data=!4m6!3m5!1s0x471f30c2b4edbb1b:0x684186c5a394fced!8m2!3d52.1966735!4d21.758097!16s%2Fg%2F11g697vpzw?hl=pl&entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
      >
        WOAS
      </a>
    );
  }

  return (
    <a className={styles.logo} href="#">
      🔧WOAS
    </a>
  );
}

export default Logo;
