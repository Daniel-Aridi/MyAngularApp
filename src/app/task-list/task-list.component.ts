import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  template: `
    <h2>My Tasks</h2>
    <input [(ngModel)]="newTask" placeholder="Add a task" (keyup.enter)="addTask()">
    <ul>
      <li *ngFor="let task of tasks, let i = index">{{ task }}
        <button (click)="deleteTask(i)">Delete</button>
      </li>
    </ul>
  `,
  styles: ['li { list-style-type: none; }']
})
export class TaskListComponent {
  tasks: string[] = ['Learn Angular', 'Build a project'];
  newTask: string = '';

  addTask() {
    if (this.newTask) {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    
    this.tasks.splice(index, 1);
  }
}
