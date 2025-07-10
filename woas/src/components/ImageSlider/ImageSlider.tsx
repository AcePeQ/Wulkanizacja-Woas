import { useEffect, useState } from "react";
import styles from "./ImageSlider.module.css";
import { AnimatePresence, motion } from "motion/react";

function ImageSlider({
  images,
}: {
  images: { id: number; path: string; alt: string; format: string }[];
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  const currentImage = images[currentImageIndex];

  return (
    <figure className={styles.imageWrapper}>
      <AnimatePresence>
        <motion.img
          key={currentImage.id}
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ type: "tween" }}
          src={`${currentImage.path}.${currentImage.format}`}
          alt={currentImage.alt}
        />
      </AnimatePresence>
    </figure>
  );
}

export default ImageSlider;
