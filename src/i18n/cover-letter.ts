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
    intro: `I am a Software Engineering Manager with {years}+ years of experience building and
      architecting web and mobile products. At Solera I lead 7 engineers across two product
      lines, and I stay hands-on in frontend architecture and design systems.`,
    experience: `I designed a multi-framework UI system (Lit Web Components, a design-token CSS library and
      React and Angular wrappers) that 8 applications already use, roughly doubling the features
      the team delivers per sprint. I also led the migration of Smartdrive's customer-facing
      screens from .NET Framework 4 to Web Components and React: 6 months, a team of 14 and
      zero production defects. Earlier, I built the entire frontend of a Mexican Stock Exchange
      platform for buying government bonds and led the Silverlight to Angular migration of a
      construction CRM with a team of 6.`,
    differentiator: `What sets me apart is aligning engineering decisions with product and business goals.
      I propose architecture where I see a real problem, such as MVVM with SwiftUI for Arlo's
      iOS app (time to a useful screen from over 10 seconds to about 5) and a microfrontend
      monorepo for 3Sixty's booking platform. I am most useful when a legacy frontend has to
      move forward without breaking the business, or when several teams need one shared way to
      build interfaces.`,
    learning: `I am fully self-taught and have learned each stack the problem required, from React and
      Angular on the web to Swift and Flutter on mobile. That lets me contribute from the first
      week, whichever technologies your team uses.`,
    contactBefore: `I would be glad to discuss how my experience fits what you are looking for. You can
      reach me at `,
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
    intro: `Soy Software Engineering Manager con más de {years} años de experiencia construyendo y
      diseñando la arquitectura de productos web y móviles. En Solera lidero a 7 ingenieros en
      dos líneas de producto, y sigo trabajando de cerca en arquitectura frontend y sistemas de
      diseño.`,
    experience: `Diseñé un sistema de UI multi-framework (Web Components con Lit, una librería CSS de
      design tokens y wrappers para React y Angular) que ya usan 8 aplicaciones y que duplicó
      aproximadamente las funcionalidades que el equipo entrega por sprint. También lideré la
      migración de las pantallas de cara al cliente de Smartdrive desde .NET Framework 4 a Web
      Components y React: 6 meses, un equipo de 14 personas y cero defectos en producción. Antes,
      construí todo el frontend de una plataforma de la Bolsa Mexicana de Valores para comprar
      bonos gubernamentales y lideré con un equipo de 6 la migración de un CRM de construcción
      de Silverlight a Angular.`,
    differentiator: `Lo que me diferencia es alinear las decisiones de ingeniería con los objetivos de
      producto y negocio. Propongo arquitectura cuando veo un problema real, como MVVM con
      SwiftUI para la app iOS de Arlo (el tiempo hasta una pantalla útil pasó de más de 10
      segundos a unos 5) y un monorepo de microfrontends para la plataforma de reservas de
      3Sixty. Aporto más cuando un frontend legacy tiene que avanzar sin romper el negocio, o
      cuando varios equipos necesitan una forma común de construir interfaces.`,
    learning: `Soy completamente autodidacta y he aprendido cada stack que el problema requería, desde
      React y Angular en web hasta Swift y Flutter en móvil. Eso me permite contribuir desde la
      primera semana, con las tecnologías que use tu equipo.`,
    contactBefore: `Me encantaría hablar sobre cómo mi experiencia encaja con lo que buscas. Puedes
      contactarme en `,
    contactOr: ` o a través de `,
    closing: 'Gracias por tu tiempo y consideración.',
    signOff: 'Atentamente,',
  },
};
