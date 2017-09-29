import {Component} from '@angular/core';
/**
 * Created by kathy on 9/28/17.
 */

@Component({
    selector: 'events-app',
    template: `
       <nav-bar></nav-bar> 
       <router-outlet></router-outlet>
    `
})
export class EventsAppComponent {
}
