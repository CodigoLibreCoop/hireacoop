import Image from "next/image";
import styles from "./floating-card.module.scss";

const FloatingCard = ({
	text,
  image,
	lang,
}) => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.imageContainer}>
				<Image
					className={styles.image}
					src={image}
					alt=""
					fill
					placeholder="blur"
					sizes="(max-width: 768px) 100vw, 33vw"
					unoptimized
				/>
			</div>

			<p className={styles.text}>{text[lang]}</p>
		</div>
	);
};

export default FloatingCard;
