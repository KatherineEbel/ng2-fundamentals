/**
 * Created by kathy on 9/29/17.
 */
import {Component} from '@angular/core';
import {AuthService} from '../user/auth.service';
import { ISession } from '../events/shared/session.model';
import { EventService } from '../events/shared/event.service';
@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px;} 
        #searchForm { margin-right: 100px;}
        @media (max-width: 1200px) {  #searchForm { display: none; }  }
        li > a.active { color: #F97924; }
    `]
})
export class NavBarComponent {
  searchTerm: string = '';
  searchResults: ISession[] = [];
    constructor(private _auth: AuthService,
                private _eventService: EventService) {
    }

  searchSessions (searchTerm: string) {
      this._eventService.searchSessions(searchTerm).subscribe(
        sessions => {
          this.searchResults = sessions;
          console.log(this.searchResults);
        }
      );
  }
}
