import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewClaimComponent } from './new-claim/new-claim.component';
import { VehicleComponent } from './new-claim/vehicle/vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    NewClaimComponent,
    VehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
