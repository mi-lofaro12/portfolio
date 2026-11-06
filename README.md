# Portfolio — Angular 20

Sito portfolio one-page che unisce lo stile pulito e minimale di *Jenna* (hero, scroll spy, galleria progetti)
con la struttura più ricca di *Lilon* (pagina di dettaglio per i progetti). Codice originale, nessun asset dei template.

## Avvio

```bash
npm install
npm start          # http://localhost:4200
npm run build      # output in dist/portfolio
```

Richiede Node 20.19+ (o 22+).

## Come modificare i contenuti

**Tutto si gestisce da un solo file: `src/app/data/content.ts`.**
Nome, testi, attività, competenze, esperienza, formazione, progetti (opzionali), social e contatti.
La sezione **Progetti** è nascosta finché l'elenco `PROJECTS` è vuoto: quando avrai un progetto personale
da mostrare, aggiungi un oggetto (c'è un esempio commentato) e sezione, menu, card, pagina di dettaglio e filtro compaiono da soli.

- **Immagini**: metti i file in `public/img/` e scrivi `image: 'img/nome.jpg'` nel progetto.
  Senza `image` compare un riquadro sfumato con i colori di `colors`.
- **CV**: metti il PDF in `public/cv.pdf`.
- **Colore principale**: variabile `--accent` in `src/styles.scss`.

## Struttura

Ogni sezione della home è un componente separato (file `.ts` + `.html`), richiamato in `pages/home.html`.

```
src/app/
  data/content.ts            ← tutti i contenuti
  pages/home.ts / home.html  ← componente principale: richiama le sezioni in ordine
  pages/project-detail.ts    ← /progetti/:slug
  sections/
    hero/       hero.ts, hero.html
    about/      about.ts, about.html
    services/   services.ts, services.html
    resume/     resume.ts, resume.html
    hobbies/    hobbies.ts, hobbies.html
    projects/   projects.ts, projects.html   (mostrata solo se PROJECTS non è vuoto)
    contact/    contact.ts, contact.html
  shared/header.ts           ← menu con scroll spy e tema chiaro/scuro
  shared/footer.ts, reveal.ts
  services/theme.service.ts
```

Per cambiare l'ordine delle sezioni modifica `pages/home.html` (e `nav` in `content.ts` per il menu).
Gli sfondi alternati si calcolano da soli in base alla posizione.
# portfolio
