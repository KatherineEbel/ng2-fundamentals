/**
 * Created by kathy on 9/28/17.
 */
import {NgModule, SystemJsNgModuleLoaderConfig} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventService,
  CreateEventComponent,
  EventRouteActivatorService,
  EventsListResolverService,
  DurationPipe
} from './events/index'
import {EventsAppComponent} from './events-app.component';
import {NavBarComponent} from './nav/navbar.component';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { CollapsibleWellComponent } from "./common/collapsible-well.component";
import { appRoutes } from './routes';
import {Error404Component} from './errors/404.component';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateSessionComponent} from "./events/event-details/create-session.component";
import {SessionListComponent} from "./events/event-details/session-list.component";

const checkDirtyState = (component: CreateEventComponent) => component.isDirty ?
    window.confirm('You have not saved this event, do you really want to cancel?') : true;

declare let toastr: Toastr;

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes)
    ],
    declarations: [
      EventsAppComponent,
      EventsListComponent,
      EventThumbnailComponent,
      NavBarComponent,
      EventDetailsComponent,
      CreateEventComponent,
      Error404Component,
      CreateSessionComponent,
      SessionListComponent,
      CollapsibleWellComponent,
      DurationPipe
    ],
    providers: [
      EventService,
      { provide: TOASTR_TOKEN, useValue: toastr },
      EventRouteActivatorService,
      EventsListResolverService,
      AuthService,
      {
        provide: 'canDeactivateCreateEvent',
        useValue: checkDirtyState
      }
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {}

