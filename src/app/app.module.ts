import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatapickerComponent } from './shared/datapicker/datapicker.component';
import { SidenavBackdropExample } from './shared/sidenav-tasks/sidenav-tasks.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DatapickerComponent,
    SidenavBackdropExample
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
