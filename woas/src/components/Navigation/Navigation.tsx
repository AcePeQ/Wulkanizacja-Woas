import styles from "./Navigation.module.css";

const navigation_links = [
  { text: "Home", path: "#" },
  { text: "O Firmie", path: "#onas" },
  { text: "Oferta", path: "#oferta" },
  { text: "Mobilna Wulkanizacja", path: "#mobilnawulkanizacja" },
  { text: "Kontakt", path: "#kontakt" },
];

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navigation_links.map((link) => (
          <li className={styles.item} key={link.path}>
            <a className={styles.link} href={link.path}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
