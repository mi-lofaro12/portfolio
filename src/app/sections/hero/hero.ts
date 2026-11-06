import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTENT } from '../../data/content';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, Reveal],
  templateUrl: './hero.html',
  host: { id: 'home', class: 'hero' },
})
export class Hero {
  protected readonly c = CONTENT;
}
