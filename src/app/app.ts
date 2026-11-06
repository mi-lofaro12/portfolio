import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header';
import { Footer } from './shared/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  template: `
    <app-header />
    <main><router-outlet /></main>
    <app-footer />
  `,
})
export class App {}
