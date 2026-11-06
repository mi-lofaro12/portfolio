import { DestroyRef, Directive, ElementRef, inject } from '@angular/core';

/** Fa comparire l'elemento con un fade quando entra nella viewport. */
@Directive({ selector: '[reveal]' })
export class Reveal {
  constructor() {
    const el = inject(ElementRef).nativeElement as HTMLElement;
    el.classList.add('reveal');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    inject(DestroyRef).onDestroy(() => io.disconnect());
  }
}
