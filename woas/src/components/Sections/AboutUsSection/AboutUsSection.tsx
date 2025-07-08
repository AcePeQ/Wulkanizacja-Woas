import AnimatedLine from "../../AnimatedLine/AnimatedLine";
import Counter from "../../Counter/Counter";
import Section from "../../Section/Section";
import styles from "./AboutUsSection.module.css";

const counters = [
  { text: "Zadowolonych klientów", value: 10000, plusSign: true },
  { text: "Mechaników", value: 7, plusSign: false },
  { text: "Napraw", value: 20000, plusSign: true },
  { text: "Lat doświadczenia", value: 10, plusSign: false },
];

function AboutUsSection() {
  return (
    <Section sectionClass="aboutus" overlay="light">
      <div className={styles.container}>
        <article className={styles.article}>
          <div className={styles.aboutus}>
            <h2>
              Poznaj nas
              <AnimatedLine />
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              dolores at voluptatibus itaque accusantium aliquid nostrum
              praesentium laudantium odio sed sapiente inventore vel placeat
              deleniti enim, reprehenderit unde maxime similique? itaque
              accusantium aliquid nostrum praesentium laudantium odio sed
              sapiente inventore vel placeat deleniti enim, reprehenderit unde
              maxime similique?
            </p>
          </div>

          <figure className={styles.imageWrapper}>
            <img src="about-us-bg.jpg" />
          </figure>
        </article>
        <div className={styles.counters}>
          {counters.map((counter) => (
            <Counter key={counter.text} {...counter} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default AboutUsSection;
