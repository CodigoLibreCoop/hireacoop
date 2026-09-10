import Script from "next/script";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export async function generateMetadata({ params }) {
  const { lang } = await params;

  const title = {
    es: "Hire a Coop - Contratá cooperativas para tus necesidades tecnológicas",
    pt: "Hire a Coop - Contrate cooperativas para suas necessidades tecnológicas",
  }[lang] ?? "Hire a Coop - Hire cooperatives for your tech needs";

  const description = {
    es: "La igualdad y la diversidad son fundamentales para nuestras creencias y valores. Alentamos a su organización a contratar cooperativas para sus necesidades digitales. De esta manera, obtiene calidad mientras fomenta un futuro más justo y sostenible en la fuerza laboral.",
    pt: "A igualdade e a diversidade são fundamentais para nossas crenças e valores. Incentivamos sua organização a contratar cooperativas para suas necessidades digitais. Dessa forma, você obtém qualidade enquanto promove um futuro mais justo e sustentável na força de trabalho.",
  }[lang] ?? "Equality and diversity are fundamental to our core beliefs and values. We encourage your organization to hire cooperatives for your digital needs. This way, you obtain quality while fostering a fairer and more sustainable future in the workforce.";

  const translatedKeywords = {
    en: [
      "web development and mobile applications",
      "data analysis and visualization",
      "report design, visual identities",
      "audiovisual production and digital illustration",
      "software development for document management",
      "design and implementation of virtual campuses",
      "digital illustration",
      "social media management",
      "secure infrastructure for data storage",
      "network infrastructure",
      "administrative process automation",
      "custom software development for data analysis",
      "training and consulting for technology project implementation",
      "cooperative services",
      "freelancer collective",
      "ethical business solutions",
      "worker-owned cooperative",
      "socially responsible hiring",
      "community-driven projects",
      "sustainable consulting",
      "cooperative workspaces",
      "inclusive business models",
      "collective entrepreneurship",
      "it services",
      "tech consulting",
      "software development",
      "cloud computing solutions",
      "cybersecurity services",
      "data analytics",
      "web development",
      "mobile app development",
      "digital transformation",
      "ai and machine learning"
    ],
    es: [
      "desarrollo web y aplicaciones móviles",
      "análisis de datos y visualización",
      "diseño de informes, identidades visuales",
      "producción audiovisual e ilustración digital",
      "desarrollo de software para gestión documental",
      "diseño e implementación de campus virtuales",
      "ilustración digital",
      "gestión de redes sociales",
      "infraestructura segura para almacenamiento de datos",
      "infraestructura de red - marialab?",
      "automatización de procesos administrativos",
      "desarrollo de software personalizado para análisis de datos",
      "capacitación y consultoría para la implementación de proyectos tecnológicos",
      "servicios cooperativos",
      "colectivo de freelancers",
      "soluciones empresariales éticas",
      "cooperativa de trabajadores",
      "contratación socialmente responsable",
      "proyectos impulsados por la comunidad",
      "consultoría sostenible",
      "espacios de trabajo cooperativos",
      "modelos de negocio inclusivos",
      "emprendimiento colectivo",
      "servicios de TI",
      "consultoría tecnológica",
      "desarrollo de software",
      "soluciones de computación en la nube",
      "servicios de ciberseguridad",
      "análisis de datos",
      "desarrollo web",
      "desarrollo de aplicaciones móviles",
      "transformación digital",
      "ia y aprendizaje automático"
    ],
    pt: [
      "desenvolvimento web e aplicativos móveis",
      "análise e visualização de dados",
      "design de relatórios, identidades visuais",
      "produção audiovisual e ilustração digital",
      "desenvolvimento de software para gestão documental",
      "design e implementação de campus virtuais",
      "ilustração digital",
      "gestão de redes sociais",
      "infraestrutura segura para armazenamento de dados",
      "infraestrutura de rede - marialab?",
      "automação de processos administrativos",
      "desenvolvimento de software personalizado para análise de dados",
      "treinamento e consultoria para a implementação de projetos tecnológicos",
      "serviços cooperativos",
      "coletivo de freelancers",
      "soluções empresariais éticas",
      "cooperativa de trabalhadores",
      "contratação socialmente responsável",
      "projetos impulsionados pela comunidade",
      "consultoria sustentável",
      "espaços de trabalho cooperativos",
      "modelos de negócios inclusivos",
      "empreendedorismo coletivo",
      "serviços de ti",
      "consultoria em tecnologia",
      "desenvolvimento de software",
      "soluções de computação em nuvem",
      "serviços de cibersegurança",
      "análise de dados",
      "desenvolvimento web",
      "desenvolvimento de aplicativos móveis",
      "transformação digital",
      "ia e aprendizado de máquina"
    ],
  };
  const keywords = translatedKeywords[lang] || translatedKeywords["en"];

  return {
    title,
    description,
    keywords,
    author: "ANIMUS",
  }
}

export default async function RootLayout({
  children,
  params
}) {
  const { lang } = await params;
  const language = ["es", "en", "pt"].includes(lang) ? lang : "en";

  return (
    <html lang={language}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
      <Script id="matomo" strategy="afterInteractive">
        {`
          var _paq = window._paq = window._paq || [];
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="https://hireacoopvercelapp.matomo.cloud/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src='https://cdn.matomo.cloud/hireacoopvercelapp.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        `}
      </Script>
    </html>
  );
}
