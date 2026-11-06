import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTENT, thumbBg } from '../../data/content';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, Reveal],
  templateUrl: './projects.html',
  host: { id: 'portfolio', class: 'section' },
})
export class Projects {
  protected readonly bg = thumbBg;

  protected readonly categories = ['Tutti', ...new Set(CONTENT.projects.map((p) => p.category))];
  protected readonly category = signal('Tutti');
  protected readonly filtered = computed(() =>
    this.category() === 'Tutti'
      ? CONTENT.projects
      : CONTENT.projects.filter((p) => p.category === this.category()),
  );
}
