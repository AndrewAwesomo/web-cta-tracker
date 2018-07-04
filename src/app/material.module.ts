import { NgModule } from '@angular/core';

// import {
//   MatButtonModule,
//   MatMenuModule,
//   MatToolbarModule,
//   MatIconModule,
//   MatCardModule,
  
// } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    // MatButtonModule,
    // MatMenuModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatCardModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  exports: [
    // MatButtonModule,
    // MatMenuModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatCardModule,
    BrowserAnimationsModule,
    MatSelectModule
  ]
})
export class MaterialModule {}
