import Image from "next/image";
import styles from "./page.module.scss";
import { getDictionary } from "../../get-dictionary";
import Nav from "./components/nav";

import AnimationWrapper from "./components/animation-wrapper";
import WithRecatchaContent from '@/contexts/with-recaptcha-content';

import CollaborateForm from "./components/collaborate-form";
import ContactForm from "./components/contact-form";
import FinanciersBadge from "./components/financiers";
import FloatingCard from "./components/floating-card";
import PartnerBadge from "./components/partner-badge";
import SmallItem from "./components/small-item";
import WideCard from "./components/wide-card";

import Footer from "./components/footer";

import HAC_1 from "../../public/images/optimized/HAC_1.webp";
import HAC_2 from "../../public/images/optimized/HAC_2.webp";
import WOIP_1 from "../../public/images/optimized/WOIP_1.webp";
import Icono1 from "../../public/images/optimized/Icono_1.webp";
import Icono2 from "../../public/images/optimized/Icono_2.webp";
import Icono3 from "../../public/images/optimized/Icono_3.webp";
import Icono4 from "../../public/images/optimized/Icono_4.webp";
import HireCard from "./components/hire-card";
import { hireData } from "../data/hire";

import { servicesData } from "../data/services";
import { partnersData } from "../data/partners";

import HeroImg from "../../public/images/optimized/hero.webp";
import { financierData } from "../data/financiers";
import Link from "next/link";

export default async function Home({
  params: { lang }
}) {
  const dictionary = await getDictionary(lang);

  const hero = dictionary["hero"];
  const about = dictionary["about"];
  const services = dictionary["services"];
  const aboutWOIP = dictionary["aboutWOIP"];
  const cooperativism = dictionary["cooperativism"];
  const contactForm = dictionary["contactForm"];
  const contactEmailForm = contactForm["emailForm"];
  const partners = dictionary["partners"];
  const hire = dictionary["hire"];
  const footer = dictionary["footer"];
  const collaborateForm = dictionary["collaborateForm"];
  const collaborateEmailForm = collaborateForm["emailForm"];

  return (
    <AnimationWrapper>
      <main className={styles.main}>

        <Nav dictionary={dictionary} lang={lang} />

        <div className={styles.hero}>
          <div className={styles.imageContainer + ' scroll-down-parallax'}>
            <Image
              src={HeroImg}
              alt="HaC logo"
              fill
              priority
              sizes="100vw"
              className={styles.image}
              placeholder="blur"
            />
            <div className={styles.overlay}></div>
          </div>

          <div className={styles.titleContainer}>
            <h1>
              {hero["title"]}
            </h1>
          </div>
        </div>

        <div id="services" className={styles.services}>
          <h2 className={styles.sectionTitle}>{services["title"]}</h2>

          <div className={styles.cardsContainer}>
            {servicesData.map((service, index) => (
              <FloatingCard
                key={index}
                text={service["text"]}
                image={service["image"]}
                alt=""
                lang={lang}
              />
            ))}
          </div>
        </div>

        <div className={styles.hire}>
          <div className={styles.titlesContainer}>
            <h2 className={styles.sectionTitle}>{hire["title2"]}</h2>
          </div>

          <div className={styles.hireCardsContainer}>
            {hireData.map((hireItem, index) => (
              <HireCard
                key={index}
                image={hireItem.image}
                title={hireItem.text[lang]}
                alt={hireItem.alt}
              />
            ))}
          </div>
        </div>

        <WithRecatchaContent lang={lang}>
          <div id="contact" className={styles.contactForm}>
            <h2 className={styles.sectionTitle}>{contactForm["title"]}</h2>
            <p className={styles.sectionSubtitle}>{contactForm["values"]}</p>

            <div className={styles.formContainer}>
              <ContactForm
                dictionary={contactEmailForm}
                lang={lang}
              />
            </div>
          </div>

          <div id="about" className={styles.about}>
            <h2 className={styles.sectionTitle}>{about["title"]}</h2>

            <div className={styles.itemsContainer}>
              <WideCard
                text={about["item1Text"]}
                image={HAC_1}
                reverse
              />

              <WideCard
                text={about["item2Text"]}
                image={HAC_2}
              />
            </div>
          </div>

          <div className={styles.about}>
            <h2 className={styles.sectionTitle}>{aboutWOIP["title"]}<Link className={styles.link} href="https://digilabour.com.br/worker-owned-intersectional-platforms-woip/" target="_blank">WOIP</Link></h2>

            <div className={styles.itemsContainer}>
              <WideCard
                text={aboutWOIP["item1Text"]}
                image={WOIP_1}
                reverse
              />
            </div>
          </div>

          <div id="collaborate" className={styles.collaborateForm}>
            <h2 className={styles.sectionTitle}>{collaborateForm["title"]}</h2>
            <div
              className={styles.sectionSubtitle}
              dangerouslySetInnerHTML={{ __html: collaborateForm["subtitle"] }}
            />

            <div className={styles.formContainer}>
              <CollaborateForm
                dictionary={collaborateEmailForm}
                lang={lang}
              />
            </div>
          </div>
        </WithRecatchaContent>

        <div className={styles.cooperativism}>
          <h2 className={styles.sectionTitle}>{cooperativism["title"]}</h2>

          <div className={styles.itemsContainer}>
            <SmallItem image={Icono1} text={cooperativism["item1Text"]} />
            <SmallItem image={Icono3} text={cooperativism["item2Text"]} />
            <SmallItem image={Icono2} text={cooperativism["item3Text"]} />
            <SmallItem image={Icono4} text={cooperativism["item4Text"]} />
          </div>
        </div>

        <div className={styles.partners}>
          <h2 className={styles.sectionTitle}>{partners["title1"]}</h2>

          <div className={styles.itemsContainer}>
            {partnersData.map((partner, index) => (
              <PartnerBadge
                key={index}
                image={partner.logo}
                alt={partner.alt || ""}
              />
            ))}
          </div>
        </div>

        <div className={styles.partners}>
          <h2 className={styles.sectionTitle}>{partners["title2"]}</h2>

          <div className={styles.itemsContainer}>
            {financierData.map((financier, index) => (
              <FinanciersBadge
                key={index}
                image={financier.logo}
                alt={financier.alt || ""}
                name={financier.name}
                url={financier.url}
              />
            ))}
          </div>
        </div>

        <Footer dictionary={footer} lang={lang} />

      </main>
    </AnimationWrapper>
  );
}
