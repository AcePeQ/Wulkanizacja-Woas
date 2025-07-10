import AnimatedLine from "../../AnimatedLine/AnimatedLine";
import ImageSlider from "../../ImageSlider/ImageSlider";
import MobileCarFeatures from "../../MobileCarFeatures/MobileCarFeatures";
import Section from "../../Section/Section";
import styles from "./MobileCarSection.module.css";

const mobileCarImages = [
  { id: 1, path: "/mobilecar/mcar-1", alt: "", format: "jpg" },
  { id: 2, path: "/mobilecar/mcar-2", alt: "", format: "jpg" },
  { id: 3, path: "/mobilecar/mcar-3", alt: "", format: "jpg" },
  { id: 4, path: "/mobilecar/mcar-4", alt: "", format: "jpg" },
];

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

        <ImageSlider images={mobileCarImages} />
      </div>
    </Section>
  );
}

export default MobileCarSection;
