import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './_components/home-page/home-page.component'
import { LoginComponent } from './_components/login/login.component'
import { RegistrationComponent } from './_components/registration/registration.component'
import { UserPageComponent } from './_components/user-page/user-page.component'
import { ProfileComponent } from './_components/profile/profile.component'
import { MyVehicleComponent } from './_components/vehicle/my-vehicle/my-vehicle.component';
import { DoneTasksComponent } from './_components/task-list/done-tasks/done-tasks.component'


const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user-page', component: UserPageComponent },
  {
    path: 'vehicle',
    children: [
      { path: 'my-vehicle', component: MyVehicleComponent }
    ]
  },
  {
    path: 'task-list',
    children: [
      { path: 'task-done', component: DoneTasksComponent }
    ]
  }

];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
