import { Component } from '@angular/core';
import { CONTENT } from '../../data/content';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly c = CONTENT;
  protected readonly year = new Date().getFullYear();
}
