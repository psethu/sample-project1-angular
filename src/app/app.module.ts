import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RideComponent } from './components/ride/ride.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ValidateInputDirective } from './validate-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    RideComponent,
    AboutComponent,
    HeaderComponent,
    ValidateInputDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
