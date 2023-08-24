import { Injectable } from '@angular/core';
import { ITask } from '../models'

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private index: number = 2;

    tasks: ITask[];

    constructor() {
        this.tasks = [
            {
                id: 0,
                name: 'Do homework',
                details: 'Doing matha and chemistry',
                dateTime: new Date(),
            },
            {
                id: 1,
                name: 'Relax',
                details: 'Spa time with friends',
                dateTime: new Date(),
            },
        ]
    }

    get(): ITask[] {
        return <ITask[]>JSON.parse(JSON.stringify(this.tasks));
    }

    add(task: ITask): void {
        this.tasks.push({ ...task, id: this.index++ });
    }
    edit(task: ITask): void {
        const index = this.tasks.findIndex((elem) => elem.id == task.id);
        if (index != -1) {
            this.tasks.splice(index, 1, task)
        }
    };
    delete(id: number | undefined): void {
        console.log("delete in services", this.tasks);
        const index = this.tasks.findIndex((elem) => elem.id == id);
        if (index != -1) {
            this.tasks.splice(index, 1)
        }
    }


    // this.persons.map((elem) => (
    //   elem.id == person.id
    //     ? { ...elem, person  }
    //     : elem
    // )
    // );

    //   const foundTask = this.tasks.find((elem) => elem.id == task.id);
    //     if (foundTask) {
    //         foundTask.nataskNameme = task.nataskNameme;
    //         foundTask.taskDetails = task.taskDetails;
    //     }
}
