import { StaticImageData } from 'next/image';
import { WithTranslation } from './common';

import branding from '../../public/images/optimized/branding.webp'
import communityManager from '../../public/images/optimized/community-manager.webp'
import socialImpact from '../../public/images/optimized/social-impact.webp'
import softwareDevelopment from '../../public/images/optimized/software-development.webp'
import staffAugmentation from '../../public/images/optimized/staff-augmentation.webp'
import virtualQueue from '../../public/images/optimized/virtual-queue.webp'
import designUxui from '../../public/images/optimized/design-uxui.webp'


type Service = {
  text: WithTranslation;
  image: StaticImageData;
  alt?: string;
}

export const servicesData: Service[] = [
  {
    text: {
      es: 'Desarrollo web y de aplicaciones móviles',
      en: 'Web and mobile application development',
      pt: 'Desenvolvimento de aplicativos de Web',
    },
    image: softwareDevelopment,
    alt: 'Web and mobile application development image',
  },
  {
    text: {
      es: 'Diseño de marca',
      en: 'Branding',
      pt: 'Design de marca',
    },
    image: branding,
    alt: 'Branding image',
  },
  {
    text: {
      es: 'Diseño UX/UI',
      en: 'UX/UI design',
      pt: 'Design UX/UI',
    },
    image: designUxui,
    alt: 'UX/UI design image',
  },
  {
    text: {
      es: 'Community Manager',
      en: 'Community Manager',
      pt: 'Community Manager',
    },
    image: communityManager,
    alt: 'Community Manager image',
  },
  {
    text: {
      es: 'Staff Augmentation',
      en: 'Staff Augmentation',
      pt: 'Staff Augmentation',
    },
    image: staffAugmentation,
    alt: 'Staff Augmentation image',
  },
  {
    text: {
      es: 'Virtual queue',
      en: 'Virtual queue',
      pt: 'Fila virtual',
    },
    image: virtualQueue,
    alt: 'Virtual queue image',
  },
  {
    text: {
      es: 'Gestión de proyectos de impacto social',
      en: 'Social impact project management',
      pt: 'Gestão de projetos de impacto social',
    },
    image: socialImpact,
    alt: 'Social impact project management image',
  },
];
