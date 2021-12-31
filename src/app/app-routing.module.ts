import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './_components/home-page/home-page.component'
import { LoginComponent } from './_components/login/login.component'
import { RegistrationComponent } from './_components/registration/registration.component'
import { UserPageComponent } from './_components/user-page/user-page.component'
import { ProfileComponent } from './_components/profile/profile.component'


const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user-page', component: UserPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
