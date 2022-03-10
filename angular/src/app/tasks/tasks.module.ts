import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  {path: '', component: TasksComponent}
]

@NgModule({
  declarations: [
    TasksComponent,
    TaskListComponent,
    TaskComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TasksModule { }
