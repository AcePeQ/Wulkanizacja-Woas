import styles from "./Navigation.module.css";

const navigation_links = [
  { text: "Home", path: "#home", id: "home" },
  { text: "O Firmie", path: "#onas", id: "onas" },
  { text: "Oferta", path: "#oferta", id: "oferta" },
  {
    text: "Mobilna Wulkanizacja",
    path: "#mobilna-wulkanizacja",
    id: "mobilna-wulkanizacja",
  },
  { text: "Kontakt", path: "#kontakt", id: "kontakt" },
];

function Navigation() {
  return (
    <nav id="mainNav" className={styles.nav}>
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
