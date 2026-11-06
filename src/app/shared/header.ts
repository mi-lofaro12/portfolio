import { Component, HostListener, afterNextRender, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTENT } from '../data/content';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header class="site-header" [class.scrolled]="scrolled()">
      <div class="container header-inner">
        <a class="brand" [routerLink]="['/']" fragment="home" (click)="open.set(false)">
          <span class="brand-mark">&lt;/&gt;</span>
          <span class="brand-name">{{ c.profile.name }}</span>
        </a>

        <nav class="nav" [class.open]="open()" aria-label="Navigazione principale">
          @for (item of c.nav; track item.id) {
            <a
              [routerLink]="['/']"
              [fragment]="item.id"
              [class.active]="active() === item.id"
              (click)="open.set(false)"
              >{{ item.label }}</a
            >
          }
        </nav>

        <div class="header-actions">
          <button
            type="button"
            class="icon-btn"
            (click)="theme.toggle()"
            [attr.aria-label]="theme.theme() === 'dark' ? 'Attiva tema chiaro' : 'Attiva tema scuro'"
          >
            {{ theme.theme() === 'dark' ? '☀️' : '🌙' }}
          </button>
          <button
            type="button"
            class="icon-btn menu-btn"
            (click)="open.set(!open())"
            [attr.aria-expanded]="open()"
            aria-label="Apri menu"
          >
            {{ open() ? '✕' : '☰' }}
          </button>
        </div>
      </div>
    </header>
  `,
})
export class Header {
  protected readonly c = CONTENT;
  protected readonly theme = inject(ThemeService);
  protected readonly active = signal('home');
  protected readonly scrolled = signal(false);
  protected readonly open = signal(false);

  constructor() {
    afterNextRender(() => this.onScroll());
  }

  /** Scroll spy: evidenzia la sezione visibile. Sulle pagine di dettaglio non evidenzia nulla. */
  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 10);
    if (!document.getElementById('home')) {
      this.active.set('');
      return;
    }
    let current = this.c.nav[0].id;
    for (const item of this.c.nav) {
      const el = document.getElementById(item.id);
      if (el && el.getBoundingClientRect().top <= 140) current = item.id;
    }
    this.active.set(current);
  }
}
