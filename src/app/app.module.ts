import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatapickerComponent } from './shared/datapicker/datapicker.component';
import { SidenavBackdropExample } from './shared/sidenav-tasks/sidenav-tasks.component';
import { NewTaskDialogDialog } from './shared/new-task-dialog/new-task-dialog.component';
import { FormsModule } from '@angular/forms';
// import { DialogDataExample } from './shared/new-task-dialog/new-task-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavBackdropExample,
    DatapickerComponent,
    NewTaskDialogDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
