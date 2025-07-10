import styles from "./ImageSlider.module.css";

function ImageSlider({
  images,
}: {
  images: { id: number; path: string; alt: string; format: string }[];
}) {
  const currentImageIndex = images[0];

  return (
    <figure className={styles.imageWrapper}>
      <img
        src={`${currentImageIndex.path}.${currentImageIndex.format}`}
        alt={currentImageIndex.alt}
      />
    </figure>
  );
}

export default ImageSlider;
