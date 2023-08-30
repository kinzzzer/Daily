import { Component, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
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
  @Output() onEditTask = new EventEmitter<ITask>();
  @Output() onDeleteTask = new EventEmitter<ITask>();

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

  onEditClick(item: ITask): void{
    this.onEditTask.emit(item)
  }
  
  onDeleteClick(item: ITask): void{
    this.onDeleteTask.emit(item)
  }
}

export class TableDynamicArrayDataExample {
  displayedColumns: string[] = ['id', 'name', 'details', 'dataTime'];
  dataSource = [...dataTask.name];

  @ViewChild(MatTable) table: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
