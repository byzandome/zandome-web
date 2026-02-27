export type Locale = 'en' | 'es';

export type CoverLetterUI = {
  pageTitle: string;
  backToCV: string;
  switchLang: string;
  location: string;
  salutation: string;
  intro: string;
  experience: string;
  differentiator: string;
  learning: string;
  contactBefore: string;
  contactOr: string;
  closing: string;
  signOff: string;
};

export const ui: Record<Locale, CoverLetterUI> = {
  en: {
    pageTitle: 'Cover Letter | Miguel Mendoza',
    backToCV: '← Back to CV',
    switchLang: 'Ver en Español',
    location: 'Madrid, Spain',
    salutation: 'Dear Hiring Manager,',
    intro: `I am a Senior Frontend Engineer and Tech Lead with over {years} years of experience
      building scalable web and mobile products. I am passionate about creating performant,
      maintainable applications and leading engineering teams to deliver real business value.`,
    experience: `Over the course of my career, I have led engineering teams of up to 9 people, architected
      frontend systems for major platforms — including the Mexican Stock Exchange — and built
      component libraries that cut screen development time by 50% and reduced UI bugs by 80%.
      My work spans React, Next.js, TypeScript, microfrontend architectures, and cross-platform
      mobile development across fintech, eCommerce, and SaaS industries.`,
    differentiator: `What sets me apart is not just technical depth but the ability to align engineering
      decisions with product and business goals. I bring a product-oriented mindset to every
      project — understanding that the best technical solution is the one that creates measurable
      value. Whether defining architecture for a greenfield project, migrating a legacy codebase,
      or building a scalable design system, I focus on outcomes over process.`,
    learning: `I am fully self-taught and have independently mastered multiple technology stacks — from
      React and Angular on the web to Swift and Flutter on mobile. This track record of rapid
      learning means I can contribute meaningfully from day one, regardless of the specific
      technologies your team uses.`,
    contactBefore: `I would be glad to discuss how my experience aligns with what you are looking for. Please
      feel free to reach out at `,
    contactOr: ` or through `,
    closing: 'Thank you for your time and consideration.',
    signOff: 'Sincerely,',
  },
  es: {
    pageTitle: 'Carta de Presentación | Miguel Mendoza',
    backToCV: '← Volver al CV',
    switchLang: 'View in English',
    location: 'Madrid, España',
    salutation: 'Estimado equipo de selección,',
    intro: `Soy un Senior Frontend Engineer y Tech Lead con más de {years} años de experiencia
      construyendo productos web y móviles escalables. Me apasiona crear aplicaciones de alto
      rendimiento y fáciles de mantener, y liderar equipos de ingeniería que generen un valor
      real para el negocio.`,
    experience: `A lo largo de mi carrera, he liderado equipos de hasta 9 ingenieros, arquitectado sistemas
      frontend para plataformas de gran envergadura — incluyendo la Bolsa Mexicana de Valores —
      y construido librerías de componentes que redujeron el tiempo de desarrollo de pantallas en
      un 50% y los errores de UI en un 80%. Mi experiencia abarca React, Next.js, TypeScript,
      arquitecturas de microfrontend y desarrollo móvil multiplataforma en sectores como fintech,
      eCommerce y SaaS.`,
    differentiator: `Lo que me diferencia no es sólo la profundidad técnica, sino la capacidad de alinear las
      decisiones de ingeniería con los objetivos de producto y negocio. Adopto un enfoque
      orientado al producto en cada proyecto — entendiendo que la mejor solución técnica es la
      que genera valor medible. Ya sea definiendo la arquitectura de un proyecto desde cero,
      migrando una plataforma legacy o construyendo un sistema de diseño escalable, siempre me
      enfoco en los resultados.`,
    learning: `Soy completamente autodidacta y he dominado de forma independiente múltiples stacks
      tecnológicos — desde React y Angular en web hasta Swift y Flutter en móvil. Este historial
      de aprendizaje rápido me permite contribuir de manera significativa desde el primer día,
      independientemente de las tecnologías específicas que use tu equipo.`,
    contactBefore: `Me encantaría hablar sobre cómo mi experiencia se adapta a lo que buscas. No dudes en
      contactarme en `,
    contactOr: ` o a través de `,
    closing: 'Gracias por tu tiempo y consideración.',
    signOff: 'Atentamente,',
  },
};
