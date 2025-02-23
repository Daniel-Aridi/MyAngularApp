import { Injectable } from '@angular/core';


//defining task structure
export interface Task {
  title: string;
  discription: string;
}


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private tasks: Task[] = [
    {title: 'my title', discription: 'this is a discription of the task'},
    {title: 'my second title', discription: 'this is the discription of my second task'}
  ];

  getTasks(): Task[] {
    
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
