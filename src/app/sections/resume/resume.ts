import { Component } from '@angular/core';
import { CONTENT } from '../../data/content';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-resume',
  imports: [Reveal],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
  host: { id: 'resume', class: 'section' },
})
export class Resume {
  protected readonly c = CONTENT;

  /** Separa "Etichetta: testo" in due parti, per mostrare l'etichetta in grassetto. */
  protected parts(item: string): { label: string | null; text: string } {
    const i = item.indexOf(':');
    if (i > 0 && i <= 28) {
      return { label: item.slice(0, i).trim(), text: item.slice(i + 1).trim() };
    }
    return { label: null, text: item };
  }
}
