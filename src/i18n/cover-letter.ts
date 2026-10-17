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
    intro: `I am a self-taught Software Engineering Manager with {years}+ years of experience building
      and architecting web and mobile products. Learning is still the part of the job I enjoy
      most: I like problems I do not know how to solve yet, and turning them into something a
      team can understand and keep alive.`,
    experience: `My career has grown in layers. I started as a developer who learned every stack the work
      demanded, then led my first team, then larger migrations, and today I make architecture
      decisions that other teams build on. At Solera I designed a multi-framework UI system (Lit
      Web Components, design tokens, React and Angular wrappers) that several applications use, and
      I led the migration of Smartdrive's customer-facing screens from .NET Framework 4 to Web
      Components and React with zero production defects. Earlier I built the entire frontend of a
      Mexican Stock Exchange bond platform and led a Silverlight to Angular migration.`,
    differentiator: `I decide things by talking them through, with my team and with neighboring teams, and I
      want developers to question the product, not just build it. I measure a team by what it
      delivers and how well, not by hours at a desk, and I give people room to own technical
      decisions, with responsibility that grows as they do. I propose architecture where I see a
      real problem, such as MVVM with SwiftUI for Arlo's iOS app and a microfrontend monorepo for
      3Sixty's booking platform.`,
    learning: `I have learned each stack the problem required, from React and Angular on the web to
      Swift and Flutter on mobile, and I still try new tools in my own time out of curiosity. That
      lets me contribute from the first week, whichever technologies your team uses.`,
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
    intro: `Soy Software Engineering Manager autodidacta, con más de {years} años de experiencia
      construyendo y diseñando la arquitectura de productos web y móviles. Aprender sigue siendo
      lo que más disfruto de este trabajo: me gustan los problemas que aún no sé resolver y
      convertirlos en algo que un equipo pueda entender y mantener vivo.`,
    experience: `Mi carrera ha crecido por capas. Empecé como desarrollador que aprendía cada stack que el
      trabajo pedía, después lideré mi primer equipo, luego migraciones más grandes, y hoy tomo
      decisiones de arquitectura sobre las que construyen otros equipos. En Solera diseñé un
      sistema de UI multi-framework (Web Components con Lit, design tokens y wrappers para React y
      Angular) que usan varias aplicaciones, y lideré la migración de las pantallas de cara al
      cliente de Smartdrive desde .NET Framework 4 a Web Components y React con cero defectos en
      producción. Antes construí todo el frontend de una plataforma de bonos de la Bolsa Mexicana
      de Valores y lideré una migración de Silverlight a Angular.`,
    differentiator: `Decido hablando las cosas, con mi equipo y con los equipos vecinos, y quiero que los
      desarrolladores cuestionen el producto, no solo que lo construyan. Mido a un equipo por lo
      que entrega y cómo lo entrega, no por las horas frente al escritorio, y doy espacio para
      que cada persona tome decisiones técnicas, con una responsabilidad que crece con ella.
      Propongo arquitectura cuando veo un problema real, como MVVM con SwiftUI para la app iOS de
      Arlo y un monorepo de microfrontends para la plataforma de reservas de 3Sixty.`,
    learning: `He aprendido cada stack que el problema requería, desde React y Angular en web hasta
      Swift y Flutter en móvil, y sigo probando herramientas nuevas en mi tiempo libre por
      curiosidad. Eso me permite contribuir desde la primera semana, con las tecnologías que use
      tu equipo.`,
    contactBefore: `Me encantaría hablar sobre cómo mi experiencia encaja con lo que buscas. Puedes
      contactarme en `,
    contactOr: ` o a través de `,
    closing: 'Gracias por tu tiempo y consideración.',
    signOff: 'Atentamente,',
  },
};
