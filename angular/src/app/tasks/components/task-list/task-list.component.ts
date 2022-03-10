import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<any[]> | null  = null;
  tasks: any[] = [];

  constructor(
    private taskService: TasksService
  ) { }

  ngOnInit(): void {
    this.taskService.loadTasks();
    
    this.tasks$ = this.taskService.get();
    this.tasks$.subscribe((tasks) => this.tasks = tasks)
  }

}
