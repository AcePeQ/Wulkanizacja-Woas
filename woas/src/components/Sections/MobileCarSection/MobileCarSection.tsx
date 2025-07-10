import AnimatedLine from "../../AnimatedLine/AnimatedLine";
import MobileCarFeatures from "../../MobileCarFeatures/MobileCarFeatures";
import Section from "../../Section/Section";
import styles from "./MobileCarSection.module.css";

function MobileCarSection() {
  return (
    <Section sectionId="mobilna-wulkanizacja" sectionClass="mobilecar">
      <div className={styles.container}>
        <article className={styles.mobilecar}>
          <h2>
            Mobilna Wulkanizacja
            <AnimatedLine />
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            dolores at voluptatibus itaque accusantium aliquid nostrum
            praesentium laudantium odio sed sapiente inventore vel placeat
            deleniti enim, reprehenderit unde maxime similique? itaque
            accusantium aliquid nostrum praesentium laudantium odio sed sapiente
            inventore vel placeat deleniti enim, reprehenderit unde maxime
            similique?
          </p>

          <MobileCarFeatures />
        </article>

        <figure className={styles.imageWrapper}>
          <img src="about-us-bg.jpg" />
        </figure>
      </div>
    </Section>
  );
}

export default MobileCarSection;
