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
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator
} from './events/index'
import {EventsAppComponent} from './events-app.component';
import {NavBarComponent} from './nav/navbar.component';
import { JQ_TOKEN,
         TOASTR_TOKEN,
         CollapsibleWellComponent,
         SimpleModalComponent,
         ModalTriggerDirective,
         Toastr } from './common/index';
import {} from "./common/collapsible-well.component";
import { appRoutes } from './routes';
import {Error404Component} from './errors/404.component';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateSessionComponent} from "./events/event-details/create-session.component";
import {SessionListComponent} from "./events/event-details/session-list.component";

const checkDirtyState = (component: CreateEventComponent) => component.isDirty ?
    window.confirm('You have not saved this event, do you really want to cancel?') : true;

declare let toastr: Toastr;
declare let jQuery: Object;
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
      DurationPipe,
      SimpleModalComponent,
      ModalTriggerDirective,
      UpvoteComponent,
      LocationValidator
    ],
    providers: [
      EventService,
      { provide: TOASTR_TOKEN, useValue: toastr },
      {provide: JQ_TOKEN, useValue: jQuery },
      EventRouteActivatorService,
      EventsListResolverService,
      AuthService,
      {
        provide: 'canDeactivateCreateEvent',
        useValue: checkDirtyState
      },
      VoterService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {}

