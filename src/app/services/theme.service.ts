import { Injectable, effect, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(this.initial());

  constructor() {
    effect(() => {
      const t = this.theme();
      document.documentElement.setAttribute('data-theme', t);
      try {
        localStorage.setItem('theme', t);
      } catch {
        /* storage non disponibile */
      }
    });
  }

  toggle(): void {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  private initial(): Theme {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {
      /* ignora */
    }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
