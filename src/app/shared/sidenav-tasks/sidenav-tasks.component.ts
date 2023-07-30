import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';

/** @title Drawer with explicit backdrop setting */
@Component({
  selector: 'app-sidenav-tasks',
  templateUrl: './sidenav-tasks.component.html',
  styleUrls: ['./sidenav-tasks.component.scss'],
  standalone: true,
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
})
export class SidenavBackdropExample {

  @Output() onSidenav = new EventEmitter<void>();

  onSidenavrClick() {
    this.onSidenav.emit();
  }
}
