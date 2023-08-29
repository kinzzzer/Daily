import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'new-task-dialog',
  templateUrl: 'new-task-dialog.component.html'
})
export class NewTaskDialogDialog {
  constructor(
    public dialogRef: MatDialogRef<NewTaskDialogDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string, task: string},
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
