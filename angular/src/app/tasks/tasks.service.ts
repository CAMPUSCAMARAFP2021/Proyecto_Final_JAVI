import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  
  constructor(
    private http: HttpClient
  ) { }

  loadTasks():Observable<any[]> {
    this.http.get('http://localhost:3000/tasks')
      .subscribe((tasks:any) => this.tasks.next(tasks));
    return this.tasks.asObservable();
  }

  get(): Observable<any[]> {
    return this.tasks.asObservable();
  }
}
