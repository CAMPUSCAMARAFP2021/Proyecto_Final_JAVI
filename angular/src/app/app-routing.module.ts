import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { TasksModule } from './tasks/tasks.module';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
