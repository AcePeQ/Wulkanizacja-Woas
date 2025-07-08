import {
  animate,
  useMotionValue,
  motion,
  useTransform,
  useSpring,
  useInView,
} from "motion/react";
import styles from "./Counter.module.css";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  text: string;
  value: number;
  plusSign: boolean;
};

function Counter({ text, value, plusSign }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  const motionValue = useMotionValue(0);
  const springCount = useSpring(motionValue, {
    duration: 10000,
  });

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springCount.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springCount]);

  return (
    <div className={styles.counter}>
      <dt>{text}</dt>
      <dd>
        <span ref={ref}>0</span>
        {plusSign ? "+" : ""}
      </dd>
    </div>
  );
}

export default Counter;
