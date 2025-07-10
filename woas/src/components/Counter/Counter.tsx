import {
  animate,
  useMotionValue,
  motion,
  useTransform,
  useInView,
} from "motion/react";
import styles from "./Counter.module.css";
import { useEffect, useRef } from "react";

type CounterProps = {
  text: string;
  value: number;
  plusSign: boolean;
};

function Counter({ text, value, plusSign }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 3 });

      return () => controls.stop();
    }
  }, [count, value, isInView]);

  return (
    <div className={styles.counter}>
      <dt>{text}</dt>
      <dd ref={ref}>
        <motion.pre>{rounded}</motion.pre>
        {plusSign ? "+" : ""}
      </dd>
    </div>
  );
}

export default Counter;
