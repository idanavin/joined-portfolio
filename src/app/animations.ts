import { trigger, state, transition, style, animate } from '@angular/animations';


export let viewAnimation = trigger('viewed', [
    state('notViewed', style({
        // height: 0,
        opacity: 0
    })),
    state('viewed', style({
        opacity: 1
    })),
    transition('notViewed => viewed', animate(2000))
]);