import { Component } from '@angular/core';
import { CONTENT } from '../data/content';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="site-footer">
      <div class="container footer-inner">
        <p>© {{ year }} {{ c.profile.name }}. Realizzato con Angular.</p>
        <div class="socials">
          @for (s of c.socials; track s.label) {
            <a [href]="s.url" target="_blank" rel="noopener noreferrer">{{ s.label }}</a>
          }
        </div>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly c = CONTENT;
  protected readonly year = new Date().getFullYear();
}
