import Circle1Img from '../../public/images/optimized/circle1.jpg';
import Circle2Img from '../../public/images/optimized/circle2.png';
import Circle3Img from '../../public/images/optimized/circle3.jpg';

import { WithTranslation } from './common';
import { StaticImageData } from 'next/image';

type Hire = {
    text: WithTranslation;
    image: StaticImageData;
    alt?: string;
  }

export const hireData: Hire[] = [
  {
    text: {
      es: 'Somos empresas democráticas y horizontales',
      en: 'We are democratic and horizontal companies',
      pt: 'Somos empresas democráticas e horizontais',
    },
    image: Circle1Img,
    alt: 'Image with lots of hands raised',
  },
  {
    text: {
      es: 'Somos organizaciones propiedad de sus trabajadores',
      en: 'We are organizations owned by their workers',
      pt: 'Somos organizações pertencentes a suas pessoas trabalhadoras',
    },
    image: Circle2Img,
    alt: 'Image of a hand holding a key',
  },
  {
    text: {
      es: 'Ponemos la innovación al servicio del bien común',
      en: 'We put innovation at the service of the common good',
      pt: 'Colocamos a inovação a serviço do bem comum',
    },
    image: Circle3Img,
    alt: 'Image representing concense',
  },
]