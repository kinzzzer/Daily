import { Component } from '@angular/core';
import { ITask } from './core/models';
import { EditMode } from './core/models/editMode';
import { TasksService } from './core/services';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onSelectedDateChange(value: Date | null): void {
    console.log(value);

  }

  tasks: ITask[] = [];
  // editTask: ITask = {}; 

  mode = EditMode.New;

  constructor(private tasksService: TasksService) { }



  ngOnInit(): void {
    this.refresh();
    console.log(this.tasksService);
  }

  private refresh(): void {
    this.tasks = this.tasksService.get();
  }

  // onAddClick(): void {
  //   this.tasksService.add(this.editTask);
  //   this.refresh();
  //   // this.editTask = {};
  // }
