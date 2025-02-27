import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task, TaskFormState } from '../models/model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
    
})
export class TaskListComponent implements OnInit{

  protected tasks: Task[] = [];


  constructor(private taskService: TaskService) {
    this.taskService.updateTasks.subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  ngOnInit() {}


  
  deleteTask(index: number): void {
    this.taskService.deleteTask(this.tasks[index].id);
  }

  toggleDone(index: number): void {
    this.taskService.toggleDone({ ...this.tasks[index]});
  }
  
  editTask(index: number): void {
    this.taskService.editTask({ ...this.tasks[index]});
  }
}
