import { Component } from '@angular/core';
import { CONTENT } from '../../data/content';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-contact',
  imports: [Reveal],
  templateUrl: './contact.html',
  host: { id: 'contact', class: 'section' },
})
export class Contact {
  protected readonly c = CONTENT;

  protected send(event: Event, name: string, email: string, message: string): void {
    event.preventDefault();
    const subject = encodeURIComponent(`Contatto dal portfolio: ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${this.c.profile.email}?subject=${subject}&body=${body}`;
  }
}
