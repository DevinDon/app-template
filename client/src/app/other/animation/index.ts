import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        width: 'calc(100% - 2rem)'
      })
    ], { optional: true }),
    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms', style({ opacity: 0 }))], { optional: true }),
      query(':enter', [animate('300ms', style({ opacity: 1 }))], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true }),
  ])
]);
