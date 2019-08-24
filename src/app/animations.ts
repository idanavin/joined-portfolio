import { trigger, state, transition, style, animate, query, stagger } from '@angular/animations';


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

export let noFilter = trigger('nofilter', [
    transition('notViewed => viewed', [
        query('.service__icon', [
            style({
                filter: 'grayscale(0)'
            }),
            stagger(300, [
                animate(2000, style({
                    filter: 'grayscale(1)'
                }))
            ])
        ])
    ])
]);