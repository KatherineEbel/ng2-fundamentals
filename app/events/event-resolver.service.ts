import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {EventService} from './shared/event.service';
import 'rxjs/add/operator/map';

@Injectable()
export class EventResolverService implements Resolve<any> {
  constructor(private _eventService: EventService) {}
  resolve(route: ActivatedRouteSnapshot): any {
    return this._eventService.getEvent(route.params['id']);
  }

}
