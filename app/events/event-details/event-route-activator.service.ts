import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {EventService} from '../shared/event.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {
  constructor(private _eventService: EventService,
              private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const eventExists = !!this._eventService.getEvent(+route.params['id']);
    if (!eventExists) {
      this._router.navigate(['/404'])
    }
    return eventExists;
  }
}