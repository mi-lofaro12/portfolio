import { Component } from '@angular/core';
import { CONTENT } from '../../data/content';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-services',
  imports: [Reveal],
  templateUrl: './services.html',
  host: { id: 'services', class: 'section' },
})
export class Services {
  protected readonly c = CONTENT;
}
