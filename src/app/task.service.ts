import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task, TaskFormState} from './models/model';




@Injectable({
  providedIn: 'root'
})




export class TaskService {

  private apiUrl = 'http://localhost:5264/api/Tasks';


  private taskSource = new BehaviorSubject<TaskFormState>({ task:{id: 0, title: '', description: '', done: false}, isEditing: false });
  currentTask = this.taskSource.asObservable(); 

  private tasksSource = new BehaviorSubject<Task[]>([]);
  updateTasks = this.tasksSource.asObservable();



  constructor(private http: HttpClient){
    this.refreshTasks();
  }



  private refreshTasks(): void {
    this.get().subscribe(tasks => {this.tasksSource.next(tasks);});
  }
  private get(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  private post(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }
  private put(task: Task): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${task.id}`, task);
  }
  private delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }



  getTasks(): Observable<Task[]> {
    return this.get();
  }

  addTask(task: Task): void {
    this.post(task).subscribe(() => {
      this.refreshTasks();
    });
  }

  updateTask(task: Task): void {
    this.put(task).subscribe(() => {
      this.refreshTasks();
    });
  }

  editTask(task: Task): void {
    this.taskSource.next({task: task, isEditing: true});
  }

  deleteTask(id: number): void {
    this.delete(id).subscribe(() => {
      this.refreshTasks();
    });
  }

  toggleDone(task: Task): void {
    task.done = !task.done;
    this.put(task).subscribe(() => {
      this.refreshTasks();
    });
  }
}
