import {Injectable} from '@angular/core';
import {Resolve, RouterStateSnapshot} from '@angular/router';
import {EventService} from './shared/event.service';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsListResolverService implements Resolve<any> {
  constructor(private _eventService: EventService) {}
  resolve(): any {
    return this._eventService.getEvents().map(events => events);
  }

}