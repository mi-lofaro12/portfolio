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
export interface TimelineItem { period: string; title: string; place: string; text: string; }
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
    initials: 'TN',
    role: 'Software Developer',
    headline: 'Sviluppo software solido, leggibile e pensato per durare nel tempo.',
    intro: 'Software developer con esperienza in ambito enterprise. Lavoro in team strutturati su applicazioni usate ogni giorno da molte persone.',
    email: 'michele.lofaro12@gmail.com',
    location: 'Italia',
    available: false,
    cvUrl: 'CV.pdf',
    about: [
      'Sono un software developer e lavoro in azienda in team di sviluppo, dall\'analisi dei requisiti al rilascio. Mi piace il codice chiaro, le soluzioni semplici e il lavoro di squadra.',
      'Fuori dal lavoro studio nuove tecnologie e sperimento con progetti personali per tenermi aggiornato.',
    ],
    chips: ['Angular', 'Java', 'PostgresSQL', 'Alfresco'],
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
    { label: 'GitHub', url: 'https://github.com/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
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
    { name: 'Angular / RxJS', level: 90 },
    { name: 'TypeScript / JavaScript', level: 90 },
    { name: 'HTML / SCSS', level: 85 },
    { name: 'Node.js', level: 70 },
    { name: 'SQL', level: 70 },
    { name: 'Git / CI-CD', level: 75 },
  ],

  tools: ['Git', 'VS Code', 'Jira', 'Jest', 'Cypress', 'Docker', 'Azure DevOps', 'SQL Server'],

  experience: [
    { period: '2022 — oggi', title: 'Software Developer', place: 'Nome Azienda', text: 'Sviluppo e manutenzione di applicazioni web aziendali in un team agile. Mi occupo di nuove funzionalità, miglioramento delle prestazioni e qualità del codice.' },
    { period: '2019 — 2022', title: 'Junior Developer', place: 'Nome Azienda Precedente', text: 'Prime esperienze in team di sviluppo: implementazione di funzionalità, correzione di bug e scrittura di test.' },
  ],

  education: [
    { period: '2015 — 2018', title: 'Laurea in Informatica', place: 'Università degli Studi', text: 'Ingegneria del software, basi di dati, reti e algoritmi.' },
    { period: '2020', title: 'Corso di specializzazione Angular', place: 'Ente di formazione', text: 'Approfondimento su architetture frontend e testing.' },
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
