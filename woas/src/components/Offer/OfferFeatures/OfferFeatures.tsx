import styles from "./OfferFeatures.module.css";
import { motion } from "motion/react";

const offers = [
  {
    id: 1,
    offerType: "Samochód osobowy",
    services: [
      "Naprawa opon",
      "Wymiana szyby",
      "Wymiana oleju",
      "Zmiana opon na letnie",
      "Zmiana opon na zimowe",
      "Wyważanie opon",
      "Kupno opon",
      "Wyważanie opon",
      "Kupno opon",
      "Wyważanie opon",
    ],
  },

  {
    id: 2,
    offerType: "Samochód ciężarowy",
    services: [
      "Naprawa opon",
      "Wymiana szyby",
      "Wymiana oleju",
      "Zmiana opon na letnie",
      "Zmiana opon na zimowe",
      "Wyważanie opon",
      "Kupno opon",
    ],
  },

  {
    id: 3,
    offerType: "Ciągnik",
    services: [
      "Naprawa opon ciężarowych",
      "Wymiana szyby",
      "Wymiana oleju",
      "Zmiana opon na letnie",
      "Zmiana opon na zimowe",
      "Wyważanie opon",
    ],
  },

  {
    id: 4,
    offerType: "Jednoślad",
    services: ["Naprawa opon", "Wymiana szyby", "Wymiana oleju"],
  },
];

function OfferFeatures({ activeTabIndex }: { activeTabIndex: number }) {
  const currentOffer = offers.find((offer) => offer.id === activeTabIndex);

  return (
    <ul className={styles.offerFeatures}>
      {currentOffer?.services.map((service, index) => (
        <motion.li
          key={index + service + currentOffer.id}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", visualDuration: 6, delay: index / 2 }}
          className={styles.item}
        >
          {service}
        </motion.li>
      ))}
    </ul>
  );
}

export default OfferFeatures;
