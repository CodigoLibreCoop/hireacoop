import Image from "next/image";
import styles from "./financiers.module.scss";

export default function FinanciersBadge({ name, image, alt = "", url, key }) {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className={styles.image}
            unoptimized
          />
        </a>
      </div>
    </div>
  );
}