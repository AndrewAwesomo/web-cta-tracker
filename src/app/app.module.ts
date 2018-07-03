import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainViewerComponent } from './main-viewer/main-viewer.component';
import { GetTrackerDataService } from './get-tracker-data.service';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewerComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [GetTrackerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
