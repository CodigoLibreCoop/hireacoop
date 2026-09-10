import Image from "next/image";
import styles from "./partner-badge.module.scss";

export default function PartnerBadge({ image, alt = "", key }) {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className={styles.image}
          unoptimized
        />
      </div>
    </div>
  );
}