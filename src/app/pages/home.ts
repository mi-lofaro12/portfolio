import { Component } from '@angular/core';
import { CONTENT } from '../data/content';
import { Hero } from '../sections/hero/hero';
import { About } from '../sections/about/about';
import { Services } from '../sections/services/services';
import { Resume } from '../sections/resume/resume';
import { Hobbies } from '../sections/hobbies/hobbies';
import { Projects } from '../sections/projects/projects';
import { Contact } from '../sections/contact/contact';

/** Pagina principale: richiama in ordine i componenti delle sezioni. */
@Component({
  selector: 'app-home',
  imports: [Hero, About, Services, Resume, Hobbies, Projects, Contact],
  templateUrl: './home.html',
})
export class Home {
  protected readonly c = CONTENT;
}
