import { Injectable } from '@angular/core';


//defining task structure
export interface Task {
  title: string;
  description: string;
  done: boolean;
}


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private tasks: Task[] = [
    {title: 'my title', description: 'this is a discription of the task', done: false},
    {title: 'my second title', description: 'this is the discription of my second task', done: false}
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

  toggleDone(index: number): void {
    this.tasks[index].done =! this.tasks[index].done;
  }
}
