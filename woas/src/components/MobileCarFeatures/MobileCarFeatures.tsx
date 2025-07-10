import styles from "./MobileCarFeatures.module.css";

import { LucideAlarmClock } from "lucide-react";
import AnimatedLine from "../AnimatedLine/AnimatedLine";

const mobileCarFeatures = [
  {
    icon: <LucideAlarmClock />,
    title: "Szybka Naprawa",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam blanditiis aut temporibus molestiae nemo fuga dicta harum nobis officiis nisi.",
  },

  {
    icon: <LucideAlarmClock />,
    title: "Szybka Naprawa",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam blanditiis aut temporibus molestiae nemo fuga dicta harum nobis officiis nisi.",
  },

  {
    icon: <LucideAlarmClock />,
    title: "Szybka Naprawa",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam blanditiis aut temporibus molestiae nemo fuga dicta harum nobis officiis nisi.",
  },

  {
    icon: <LucideAlarmClock />,
    title: "Szybka Naprawa",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam blanditiis aut temporibus molestiae nemo fuga dicta harum nobis officiis nisi.",
  },
];

function MobileCarFeatures() {
  return (
    <ul className={styles.list}>
      {mobileCarFeatures.map((feature) => {
        return (
          <li key={feature.title} className={styles.item}>
            {feature.icon}
            <h3>
              {feature.title}
              <AnimatedLine />
            </h3>
            <p>{feature.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default MobileCarFeatures;
