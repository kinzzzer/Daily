import { Component, EventEmitter, Output, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITask } from 'src/app/core/models';
import { EditMode } from 'src/app/core/models/editMode';
import { NewTaskDialogDialog } from '../new-task-dialog/new-task-dialog.component';

/** @title Drawer with explicit backdrop setting */
@Component({
  selector: 'app-sidenav-tasks',
  templateUrl: './sidenav-tasks.component.html',
  styleUrls: ['./sidenav-tasks.component.scss']
})
export class SidenavBackdropExample {
  @Input() dataTask!: ITask;
  @Input() mode: EditMode = EditMode.New;

  @Output() onSidenav = new EventEmitter<void>();

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewTaskDialogDialog, {
      data: { name: "Honey", task: "" },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onSidenavrClick() {
    this.onSidenav.emit();
  }

  checkDataTask() : boolean {
    return this.dataTask.id !== undefined
  }
}
