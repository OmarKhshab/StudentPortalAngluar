import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LandingPortalComponent } from './landing-portal/landing-portal.component';
import { LoginGuard } from './login-component/login.guard';



@NgModule({
  imports: [RouterModule.forRoot([
    {path:"landing", component: LandingPortalComponent},
    {path:"login", component: LoginComponentComponent},
    {path:'student', loadChildren:()=>
    import('./students/students.module')
     .then(m=>m.StudentsModule), canActivate : [LoginGuard]},
     {path:'' , component : WelcomeComponent},
     {path:'**' , component : WelcomeComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
