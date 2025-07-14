import styles from "./Navigation.module.css";
import { Link } from "react-scroll";

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

function Navigation({
  isMenuOpen,
  onCloseMenu,
}: {
  isMenuOpen?: boolean;
  onCloseMenu?: () => void;
}) {
  return (
    <nav
      id="mainNav"
      className={`${styles.nav} ${styles[isMenuOpen ? "navOpen" : ""]}`}
    >
      <ul className={styles.list}>
        {navigation_links.map((link) => (
          <li className={styles.item} key={link.path}>
            <Link
              to={link.id}
              activeClass="active"
              smooth={true}
              spy={true}
              className={styles.link}
              href={link.path}
              duration={3}
              offset={-100}
              onClick={onCloseMenu}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
