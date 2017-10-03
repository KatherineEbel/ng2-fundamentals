import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';
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
export class EventsAppComponent implements OnInit {
  constructor(private _auth: AuthService) {}

  ngOnInit (): void {
    this._auth.checkAuthenticationStatus();
  }
}
