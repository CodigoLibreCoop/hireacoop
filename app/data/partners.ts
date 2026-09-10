import CL from '../../public/CodigoLibre.svg';
import Animus from '../../public/images/optimized/Animus.webp';
import ALT from '../../public/ALT.svg';
import SeñoCourier from '../../public/images/optimized/LOGOS_SENORITAS-06.webp';
import Marialab from '../../public/images/optimized/Marialab.webp';
import MTST from '../../public/images/optimized/MTST.webp';
import CentralSalta from '../../public/images/optimized/Central Salta.webp';
import { StaticImageData } from 'next/image';

type Partner = {
  name: string;
  logo: StaticImageData;
  alt?: string;
}

export const partnersData: Partner[] = [
  { name: "Animus", logo: Animus, alt: 'Placeholder alt' },
  { name: "Alternativa Laboral Trans", logo: ALT, alt: 'Placeholder alt' },
  { name: "Codigo Libre", logo: CL, alt: 'Placeholder alt' },
  { name: "Señoritas Courier", logo: SeñoCourier, alt: 'Placeholder alt' },
  { name: "Central Salta", logo: CentralSalta, alt: 'Placeholder alt' },
  { name: "MTST", logo: MTST, alt: 'Placeholder alt' },
  { name: "Maria Lab", logo: Marialab, alt: 'Placeholder alt' },

];
