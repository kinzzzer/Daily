import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskDialogDialog } from '../new-task-dialog/new-task-dialog.component';

/** @title Drawer with explicit backdrop setting */
@Component({
  selector: 'app-sidenav-tasks',
  templateUrl: './sidenav-tasks.component.html',
  styleUrls: ['./sidenav-tasks.component.scss']
})
export class SidenavBackdropExample {
  @Output() onSidenav = new EventEmitter<void>();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewTaskDialogDialog, {
      data: {name: "asd", animal: "asd"},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onSidenavrClick() {
    this.onSidenav.emit();
  }
}
