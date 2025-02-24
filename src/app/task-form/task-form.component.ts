import { Component, OnInit } from '@angular/core';
import {Task, TaskService} from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})


export class TaskFormComponent implements OnInit{

  newTask: Task = {title: '', description: '', done: false};
  editingIndex: number | null = null;

  constructor(private taskService: TaskService){}


  ngOnInit() {
    this.taskService.currentTask.subscribe(state => {this.newTask = { ...state.task}; this.editingIndex = state.editingIndex});
  }


  addTask() {
    if(this.newTask.title){

      this.taskService.addTask({ ...this.newTask});
      this.newTask = {title: '', description: '', done: false};
    }
  }
}
