/**
 * ============================================================
 *  TUTTI I CONTENUTI DEL SITO STANNO IN QUESTO FILE
 * ============================================================
 *  Modifica solo questo file per cambiare testi, esperienza,
 *  competenze, social e contatti. I template HTML non vanno toccati.
 *
 *  PROGETTI PERSONALI (opzionale): la sezione "Progetti" compare
 *  e entra nel menu SOLO se l'elenco PROJECTS qui sotto non è vuoto.
 *  Quando avrai qualcosa di tuo da mostrare, aggiungi un oggetto
 *  (vedi l'esempio commentato) e la sezione appare da sola.
 *
 *  Immagini: metti i file in /public/img/ e indica il percorso
 *  nel campo `image` (es. 'img/progetto1.jpg').
 * ============================================================
 */

export interface NavItem { id: string; label: string; }
export interface Service { icon: string; title: string; text: string; }
export interface Skill { name: string; level: number; }
export interface TimelineItem { period: string; title: string; place: string; text: string; activities?: string[]}
export interface Hobby { icon: string; title: string; text: string; tags: string[]; }
export interface Social { label: string; url: string; }
export interface Stat { value: string; label: string; }

export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string[];
  highlights: string[];
  tags: string[];
  year: string;
  role: string;
  colors: [string, string];
  image?: string;
  link?: string;
  repo?: string;
}

export interface Content {
  profile: {
    name: string;
    initials: string;
    role: string;
    headline: string;
    intro: string;
    email: string;
    location: string;
    available: boolean;
    cvUrl: string;
    about: string[];
    chips: string[];
  };
  nav: NavItem[];
  socials: Social[];
  stats: Stat[];
  services: Service[];
  skills: Skill[];
  tools: string[];
  experience: TimelineItem[];
  education: TimelineItem[];
  hobbies: Hobby[];
  projects: Project[];
}

/** Progetti personali: lascia vuoto finché non ne hai. */
const PROJECTS: Project[] = [
  // {
  //   slug: 'mio-progetto',
  //   title: 'Mio Progetto',
  //   category: 'Side project',
  //   summary: 'Una riga che spiega cos\'è.',
  //   description: ['Primo paragrafo.', 'Secondo paragrafo.'],
  //   highlights: ['Punto chiave 1', 'Punto chiave 2'],
  //   tags: ['Angular', 'TypeScript'],
  //   year: '2026',
  //   role: 'Autore',
  //   colors: ['#6c5ce7', '#a29bfe'],
  //   repo: 'https://github.com/',
  // },
];

export const CONTENT: Content = {
  profile: {
    name: 'Michele Lofaro',
    initials: 'ML',
    role: 'Software Developer',
    headline: 'Sviluppo software solido, leggibile e pensato per durare nel tempo.',
    intro: 'Software developer con esperienza in ambito enterprise. Lavoro in team strutturati su applicazioni usate ogni giorno da molte persone.',
    email: 'michele.lofaro12@gmail.com',
    location: 'Italia',
    available: true,
    cvUrl: 'CV.pdf',
    about: [
      'Sono un software developer e lavoro in azienda in team di sviluppo, dall\'analisi dei requisiti al rilascio. Mi piace il codice chiaro, le soluzioni semplici e il lavoro di squadra.',
      'Fuori dal lavoro studio nuove tecnologie e sperimento con progetti personali per tenermi aggiornato.',
    ],
    chips: ['Angular', 'Java', 'Docker', 'Alfresco', 'PostgresSQL'],
  },

  nav: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Chi sono' },
    { id: 'services', label: 'Cosa faccio' },
    { id: 'resume', label: 'Curriculum' },
    { id: 'hobbies', label: 'Hobby' },
    // ...(PROJECTS.length ? [{ id: 'portfolio', label: 'Progetti' }] : []),
    { id: 'contact', label: 'Contatti' },
  ],

  socials: [
    { label: 'GitHub', url: 'https://github.com/repos?q=owner%3A%40me' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/michele-lofaro-146455239/' },
  ],

  stats: [
    { value: '4+', label: 'Anni di esperienza' },
    { value: '10+', label: 'Tecnologie usate' },
    { value: '3', label: 'Team in cui ho lavorato' },
    { value: '2', label: 'Certificazioni' },
  ],

  services: [
    { icon: '🧩', title: 'Sviluppo frontend', text: 'Realizzazione di interfacce web con Angular e TypeScript: componenti riusabili, routing, gestione dello stato e accessibilità.' },
    { icon: '⚙️', title: 'Backend e API', text: 'Sviluppo e integrazione di API REST, accesso ai dati e collegamento con servizi esterni.' },
    { icon: '🧪', title: 'Qualità e testing', text: 'Test automatici, code review e attenzione alla manutenibilità del codice.' },
    { icon: '🤝', title: 'Lavoro in team', text: 'Metodologie agile, confronto con analisti e colleghi, affiancamento di chi è più junior.' },
  ],

  skills: [
    { name: 'Angular', level: 75 },
    { name: 'TypeScript / JavaScript', level: 75 },
    { name: 'HTML / SCSS', level: 90 },
    { name: 'Java', level: 60 },
    { name: 'Spring boot', level: 60 },
    { name: 'SQL', level: 70 },
    { name: 'Docker / Portainer', level: 50 },
    { name: 'Git / CI-CD', level: 75 },
  ],

  tools: ['Git', 'VS Code', 'Eclipse', 'Java', 'Spring boot', 'Angular', 'HTML/CSS', 'PostgreSQL',
        'Docker', 'PgAdmin', 'Portainer', 'Postman' ],

  experience: [
    { 
      period: '2022 — oggi',
      title: 'Software Developer',
      place: 'Datagraf Servizi S.r.l',
      text: 'Sviluppo e manutenzione di applicazioni web aziendali in un team agile. Mi occupo di nuove funzionalità, miglioramento delle prestazioni e qualità del codice. Le principali competenze tecniche e soft skill includono:',
      activities: [
        'Backend: sviluppo con Java, Spring Boot e JPA, per applicazioni robuste, scalabili e manutenibili;',
        'Database: gestione di database relazionali con PostgreSQL e utilizzo avanzato di pgAdmin;',
        'Frontend: sviluppo con Angular, per interfacce moderne, intuitive e responsive;',
        'Mobile: sviluppo cross-platform con Ionic, per applicazioni ibride performanti e versatili;',
        'Gestione documentale: utilizzo di Alfresco per archiviazione e workflow dei documenti;',
        'Soft skill: eccellenti capacità di team working e problem solving, con approccio proattivo e orientato agli obiettivi.',
      ]
    },
    { 
      period: '2019 — 2019',
      title: 'Assistente amministrativo',
      place: 'Unipol Sai',
      text: `Durante l’esperienza in azienda ho svolto attività di supporto amministrativo e gestione documentale, tra cui:`,
      activities: [
        'Accoglienza clienti: gestione dell’accoglienza e assistenza alla clientela;',
        'Gestione contrattuale: stesura e verifica di contratti sotto la supervisione del tutor aziendale;',
        'Archiviazione documentale: riordino, organizzazione e archiviazione della documentazione quotidiana.'
      ]
    },
  ],

  education: [
    { 
      period: '2026 — Attuale', 
      title: 'Università Pegaso',
      place: '',
      text: "Iscritto alla facoltà di informatica per le aziende digitale (L-31) all'università telematica Pegaso;"
    },
    { 
      period: '2023 — 2023', 
      title: 'Corso angular',
      place: 'ReteInformaticaLavoro',
      text: "Corso di formazione tecnica nel settore dello sviluppo di applicazioni Angular. Argomenti visti durante il periodo di formazione: Components, Module, Direttive, Pipe, Service, Observable, Routing, Form;"
    },
    {
      period: '2021 - 2022',
      title: 'Master in sviluppo applicazioni e servizi',
      place: 'Consorzio ELIS',
      text: 'Corso di formazione tecnica certificata, nel settore dello sviluppo di applicazioni software Java. Moduli conseguiti, suddivisi per aree tematiche:',
      activities: [
        'Back-End: Java 11 SE e Java 11 EE, JSP, JDBC, Architettura DAO, MAVEN, Framework Java Repository Api(JPA), Basi di Dati e MYSQL;',
        'Front-End: HTML5, CSS, BOOTSTRAP, JAVASCRIPT, JQUERY;',
        'Salesforce: Modulo Administrator(Competenze Point&Click) e Modulo Developer(Conoscenza base di Apex, SOQL, SOSL, Trigger, Classi di Test);',
        'Ambiente di Sviluppo: Eclipse, Visual Studio Code;',
        'Area Personal Branding: Time Management, Team Working, Comunicazione Efficace, Problem Solving, Organizzazione Aziendale, Orientamento al Cliente',
      ]
    },
    {
      period: '2016 - 2021',
      title: 'Diploma scuola superiore',
      place: 'Istituto Tecnico Commerciale "Gemelli Careri" (Amministrazione Finanza e Marketing); Taurianova(RC)',
      text: 'Voto finale 82/100'
    },
  ],

  hobbies: [
    {
      icon: '🥧',
      title: 'Home lab con Raspberry Pi',
      text: 'Metto in produzione in casa quello che sviluppo: container Docker, deploy ripetibili e servizi sempre attivi su una piccola infrastruttura personale.',
      tags: ['Raspberry Pi', 'Docker', 'Linux'],
    },
    {
      icon: '🧪',
      title: 'Progetti personali',
      text: 'Nel tempo libero creo piccole applicazioni per sperimentare nuove tecnologie e imparare facendo, dall\'idea al rilascio.',
      tags: ['Side project', 'Sperimentazione'],
    },
    {
      icon: '🖨️',
      title: 'Stampa 3D',
      text: 'Progetto e stampo oggetti in 3D: dalla modellazione alla stampa, per risolvere piccoli problemi quotidiani o per il gusto di costruire.',
      tags: ['Stampa 3D', 'Modellazione', 'Maker'],
    },
  ],

  projects: PROJECTS,
};

export const thumbBg = (item: { colors: [string, string]; image?: string }): string =>
  item.image
    ? `url(${item.image}) center / cover no-repeat`
    : `linear-gradient(135deg, ${item.colors[0]}, ${item.colors[1]})`;
