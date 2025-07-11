import { useState } from "react";
import styles from "./Offer.module.css";
import OfferTabs from "./OfferTabs/OfferTabs";
import OfferFeatures from "./OfferFeatures/OfferFeatures";

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
      <OfferFeatures activeTabIndex={activeTabIndex} />
    </div>
  );
}

export default Offer;
