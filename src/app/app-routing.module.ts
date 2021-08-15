import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { WelcomeComponent } from './Component/welcome/welcome.component';

const routes: Routes = [
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
   path:'',
   component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
