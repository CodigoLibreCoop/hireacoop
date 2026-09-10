import facttic from '../../public/images/optimized/FACTTIC.webp';
import digilabour from '../../public/images/optimized/Digitalabour.webp';
import WOIP from '../../public/images/optimized/WOIP.webp';
import TorontoUniversity from '../../public/images/optimized/TorontoUniversity.webp';
import SSHRC from '../../public/images/optimized/SSHRC.webp';
import { StaticImageData } from 'next/image';

type Financier = {
  name: string;
  logo: StaticImageData;
  alt?: string;
  url: string;
}

export const financierData: Financier[] = [
  { name: "WOIP", logo: WOIP, alt: 'Placeholder alt', url:'https://digilabour.com.br/worker-owned-intersectional-platforms-woip/' },
  { name: "DigiLabour", logo: digilabour, alt: 'Placeholder alt', url:'https://digilabour.com.br/' },
  { name: "FACTTIC", logo: facttic, alt: 'Placeholder alt', url:'https://facttic.org.ar/' },
  { name: "University of Toronto", logo: TorontoUniversity, alt: 'Placeholder alt', url:'https://www.utoronto.ca/' },
  { name: "SSHRC", logo: SSHRC, alt: 'Placeholder alt', url:'https://www.sshrc-crsh.gc.ca/' },

];