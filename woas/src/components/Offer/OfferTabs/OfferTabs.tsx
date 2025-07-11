import styles from "./OfferTabs.module.css";

const offerTabs = [
  { id: 1, name: "Samochód osobowy" },
  { id: 2, name: "Samochód ciężarowy" },
  { id: 3, name: "Ciągnik" },
  { id: 4, name: "Jednoślady" },
];

function OfferTabs({
  activeTabIndex,
  onSetActiveTab,
}: {
  activeTabIndex: number;
  onSetActiveTab: (index: number) => void;
}) {
  return (
    <ul className={styles.tabs}>
      {offerTabs.map((tab) => (
        <li key={tab.id} className={styles.tabItem}>
          <button
            onClick={() => onSetActiveTab(tab.id)}
            className={`${styles.tabButton} ${
              styles[activeTabIndex === tab.id ? "tabActive" : ""]
            }`}
          >
            {tab.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default OfferTabs;
