import Image from 'next/image';
import Link from 'next/link';

import styles from './footer.module.scss';

import HACLogo from '../../../public/HAC-fist-black.svg';
import InstagramIcon from '../../../public/icons/instagram.svg';
import AnimusLogo from '../../../public/images/optimized/Animus.webp';
import ALTLogo from '../../../public/ALT.svg';
import CodigoLibreLogo from '../../../public/CodigoLibre.svg';

export default async function Footer({ dictionary }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <div className={styles.imageContainer}>
          <Image
            src={HACLogo}
            alt="HAC logo"
            className={styles.image}
            fill
            priority
          />
        </div>

        <div className={styles.socialMedia}>
          <Link href="https://www.instagram.com/hireacoop/" className={styles.item} target="_blank">
            <div className={styles.iconContainer}>
              <Image
                src={InstagramIcon}
                alt="Instagram"
                fill
              />
            </div>
            <p>Instagram</p>
          </Link>
        </div>
      </div>

      <div className={styles.poweredBy}>
        <p className={styles.text}>{dictionary.poweredBy}</p>

        <div className={styles.logosWrapper}>
          <Link href="https://animus.coop/" target='_blank'>
            <div className={styles.logoContainer}>
              <Image src={AnimusLogo} className={styles.logo} alt="Animus Logo" fill unoptimized />
            </div>
          </Link>

          <Link href="https://altcooperativa.com/" target='_blank'>
            <div className={styles.logoContainer}>
              <Image src={ALTLogo} className={styles.logo} alt="ALT Logo" fill />
            </div>
          </Link>

          <Link href="https://codigolibre.coop.ar/" target='_blank'>
            <div className={styles.logoContainer}>
              <Image src={CodigoLibreLogo} className={styles.logo} alt="Codigo Libre Logo" fill />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  )
}