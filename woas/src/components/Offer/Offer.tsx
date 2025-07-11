import { useState } from "react";
import styles from "./Offer.module.css";
import OfferTabs from "./OfferTabs/OfferTabs";

function Offer() {
  const [activeTabIndex, setActiveTabIndex] = useState(1);

  function handleSetActiveTab(index: number) {
    setActiveTabIndex(index);
  }

  return (
    <div className={styles.offer}>
      <OfferTabs
        activeTabIndex={activeTabIndex}
        onSetActiveTab={handleSetActiveTab}
      />
      <div className={styles.offerFeatures}></div>
    </div>
  );
}

export default Offer;
