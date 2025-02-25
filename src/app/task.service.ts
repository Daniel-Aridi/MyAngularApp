import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


//defining task structure
export interface Task {
  title: string;
  description: string;
  done: boolean;
}

interface TaskFormState {
  task: Task;
  editingIndex: number | null;
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private taskSource = new BehaviorSubject<TaskFormState>({ task:{title: '', description: '', done: false}, editingIndex: null });
  currentTask = this.taskSource.asObservable(); 

  private tasks: Task[] = [
    {title: 'REGISTER JOBVERSE', description: 'this is a discription of the task', done: false},
    {title: 'my second title', description: 'this is the discription of my second task', done: false}
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    if(this.taskSource.value.editingIndex != null){
      this.tasks[this.taskSource.value.editingIndex] = { ...task};
      this.clearEditing();
    }
    else{
      this.tasks.push(task);
    }
  }

  editTask(index: number): void {
    this.taskSource.next({task:{ ...this.tasks[index]}, editingIndex: index});
  }

  clearEditing(): void {
    this.taskSource.next({task:{title: '', description: '', done: false}, editingIndex: null});
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  toggleDone(index: number): void {
    this.tasks[index].done =! this.tasks[index].done;
  }
}
