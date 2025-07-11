import AnimatedLine from "../../AnimatedLine/AnimatedLine";
import Offer from "../../Offer/Offer";
import Section from "../../Section/Section";
import styles from "./OfferSection.module.css";

function OfferSection() {
  return (
    <Section sectionId="oferta" sectionClass="offer" overlay="light">
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Oferta
          <AnimatedLine />
        </h2>

        <Offer />
      </div>
    </Section>
  );
}

export default OfferSection;
