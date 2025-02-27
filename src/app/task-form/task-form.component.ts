import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task, TaskFormState } from '../models/model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})


export class TaskFormComponent implements OnInit{

  protected newTask: TaskFormState = { task: { id: 0, title: '', description: '', done: false }, isEditing: false};

  constructor(private taskService: TaskService){}


  ngOnInit() {
    this.taskService.currentTask.subscribe(state => {this.newTask = state;});
  }

  private clearEditing(): void {
    this.newTask = {task: { id: 0, title: '', description: '', done: false }, isEditing: false };
  }


  addOrUpdateTask() {
    if (this.newTask.task.title) {
      if (this.newTask.isEditing) {
        this.taskService.updateTask(this.newTask.task);
      } else {
        this.taskService.addTask(this.newTask.task);
      }
      this.clearEditing();
    }
  }

  cancelEdit(){
    this.clearEditing();
  }
}
