import AnimatedLine from "../../AnimatedLine/AnimatedLine";
import ContactInformations from "../../ContactInformations/ContactInformations";
import Map from "../../Map/Map";
import OpenHoursList from "../../OpenHoursList/OpenHoursList";
import Section from "../../Section/Section";
import styles from "./ContactSection.module.css";

function ContactSection() {
  return (
    <Section sectionClass="contact" overlay="light">
      <div className={styles.container}>
        <article className={styles.contact}>
          <h2>
            Kontakt
            <AnimatedLine />
          </h2>

          <div className={styles.details}>
            <h3>Dane kontaktowe</h3>
            <ContactInformations />
          </div>

          <div className={styles.details}>
            <h3>Godziny otwarcia</h3>
            <OpenHoursList />
          </div>
        </article>
        <div className={styles.mapWrapper}>
          <Map />
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;
