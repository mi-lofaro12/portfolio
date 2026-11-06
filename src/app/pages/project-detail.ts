import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTENT, thumbBg } from '../data/content';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  template: `
    <section class="detail container">
      @if (project(); as p) {
        <a class="back" [routerLink]="['/']" fragment="portfolio">← Tutti i progetti</a>
        <p class="section-eyebrow">{{ p.category }}</p>
        <h1>{{ p.title }}</h1>
        <p class="lead">{{ p.summary }}</p>

        <div class="detail-cover" [style.background]="bg(p)"></div>

        <div class="detail-grid">
          <div>
            @for (para of p.description; track para) {
              <p class="muted">{{ para }}</p>
            }
            <h3>Punti chiave</h3>
            <ul class="check-list">
              @for (h of p.highlights; track h) {
                <li>{{ h }}</li>
              }
            </ul>
          </div>

          <aside class="card meta">
            <dl>
              <dt>Anno</dt><dd>{{ p.year }}</dd>
              <dt>Ruolo</dt><dd>{{ p.role }}</dd>
              <dt>Categoria</dt><dd>{{ p.category }}</dd>
              <dt>Tecnologie</dt>
              <dd class="tags">
                @for (t of p.tags; track t) {
                  <span class="tag">{{ t }}</span>
                }
              </dd>
            </dl>
            <div class="btn-col">
              @if (p.link) {
                <a class="btn primary" [href]="p.link" target="_blank" rel="noopener noreferrer">Vedi il sito ↗</a>
              }
              @if (p.repo) {
                <a class="btn ghost" [href]="p.repo" target="_blank" rel="noopener noreferrer">Codice su GitHub ↗</a>
              }
            </div>
          </aside>
        </div>

        @if (next(); as n) {
          <a class="next" [routerLink]="['/progetti', n.slug]">
            <span>Progetto successivo</span>
            <strong>{{ n.title }} →</strong>
          </a>
        }
      } @else {
        <p>Progetto non trovato.</p>
        <a class="btn primary" [routerLink]="['/']" fragment="portfolio">Torna ai progetti</a>
      }
    </section>
  `,
})
export class ProjectDetail {
  /** Valorizzato dal parametro di rotta :slug (withComponentInputBinding). */
  readonly slug = input.required<string>();
  protected readonly bg = thumbBg;

  protected readonly project = computed(() => CONTENT.projects.find((p) => p.slug === this.slug()));
  protected readonly next = computed(() => {
    const list = CONTENT.projects;
    const i = list.findIndex((p) => p.slug === this.slug());
    return i === -1 ? undefined : list[(i + 1) % list.length];
  });
}
