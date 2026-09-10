import CL from '../../public/CodigoLibre.svg';
import Animus from '../../public/images/optimized/Animus.webp';
import ALT from '../../public/ALT.svg';
import { StaticImageData } from 'next/image';

type Partner = {
  name: string;
  logo: StaticImageData;
  alt?: string;
}

export const partnersData: Partner[] = [
  { name: "Animus", logo: Animus, alt: 'Placeholder alt' },
  { name: "ALT", logo: ALT, alt: 'Placeholder alt' },
  { name: "Codigo Libre", logo: CL, alt: 'Placeholder alt' },
];
