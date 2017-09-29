import {NgModule, SystemJsNgModuleLoaderConfig} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EventsAppComponent} from './events-app.component';
/**
 * Created by kathy on 9/28/17.
 */

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        EventsAppComponent
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {}
