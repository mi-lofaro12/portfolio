import { Component, HostListener, afterNextRender, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTENT } from '../../data/content';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  
  templateUrl: './header.html',
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
