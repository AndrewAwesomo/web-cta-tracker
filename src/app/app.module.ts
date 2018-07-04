import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainViewerComponent } from './main-viewer/main-viewer.component';
import { GetTrackerDataService } from './get-tracker-data.service';
import { ContainerComponent } from './container/container.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    MainViewerComponent,
    ContainerComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, MaterialModule
  ],
  providers: [GetTrackerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
