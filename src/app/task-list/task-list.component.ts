import { Component } from '@angular/core';
import {Task, TaskService} from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
    
})
export class TaskListComponent {

  tasks: Task[];

  constructor(private taskService: TaskService) {

    this.tasks = taskService.getTasks();
  }
  
  deleteTask(i: number): void {
    this.taskService.deleteTask(i);
    this.tasks = [...this.taskService.getTasks()];
  }

  toggleDone(i: number): void {
    this.taskService.toggleDone(i);
    this.tasks = [...this.taskService.getTasks()];
  }
  
  editTask(i: number): void {
    this.taskService.editTask(i);
    //this.tasks = [...this.taskService.getTasks()]; //THIS IS CAUSING A PROB. WHY?
  }
}
