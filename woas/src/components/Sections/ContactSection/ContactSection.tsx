import AnimatedLine from "../../AnimatedLine/AnimatedLine";
import ContactInformations from "../../ContactInformations/ContactInformations";
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1222.7867847591!2d21.75754085372298!3d52.196623538071144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f30c2b4edbb1b%3A0x684186c5a394fced!2sMobilna%20Wulkanizacja%20Serwis%20i%20sprzeda%C5%BC%20opon!5e0!3m2!1spl!2spl!4v1752075860277!5m2!1spl!2spl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;
