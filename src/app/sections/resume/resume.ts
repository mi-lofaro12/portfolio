import { Component } from '@angular/core';
import { CONTENT } from '../../data/content';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-resume',
  imports: [Reveal],
  templateUrl: './resume.html',
  host: { id: 'resume', class: 'section' },
})
export class Resume {
  protected readonly c = CONTENT;
}
