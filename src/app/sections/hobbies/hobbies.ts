import { Component } from '@angular/core';
import { CONTENT } from '../../data/content';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-hobbies',
  imports: [Reveal],
  templateUrl: './hobbies.html',
  host: { id: 'hobbies', class: 'section' },
})
export class Hobbies {
  protected readonly c = CONTENT;
}
