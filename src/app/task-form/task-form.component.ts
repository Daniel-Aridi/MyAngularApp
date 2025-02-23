import { Component } from '@angular/core';
import {Task, TaskService} from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})


export class TaskFormComponent {

  newTask: Task = {title: '', discription: ''};

  constructor(private taskService: TaskService){}

  addTask() {
    if(this.newTask.title || this.newTask.discription){

      this.taskService.addTask({ ...this.newTask});
      this.newTask = {title: '', discription: ''};
    }
  }
}
