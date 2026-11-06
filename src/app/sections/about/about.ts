import { Component } from '@angular/core';
import { CONTENT } from '../../data/content';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-about',
  imports: [Reveal],
  templateUrl: './about.html',
  host: { id: 'about', class: 'section' },
})
export class About {
  protected readonly c = CONTENT;
}
