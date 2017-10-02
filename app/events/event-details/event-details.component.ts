import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import {ISession} from "../shared/session.model";
import { IEvent } from '../shared/event.model';

@Component({
  templateUrl: '/app/events/event-details/event-details.component.html',
  styles: [`    
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
    a { cursor: pointer }
  `]
})
export class EventDetailsComponent implements OnInit {
  event: any;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'name';

  constructor(private _eventService: EventService,
              private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.data.forEach((data) => {
        this.event = data['event'];
        this.event = data['event'];
        this.addMode = false;
    });
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math
      .max
      .apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this._eventService.saveEvent(this.event).subscribe();
    this.addMode = false
  }

  cancelAddSession() {
    this.addMode = false;
  }
}