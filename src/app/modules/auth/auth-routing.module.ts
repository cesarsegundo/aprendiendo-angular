import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginPageComponent } from './page/login-page.component';

//Al llegar qui ya se tiene el prefijo auth: http:localhost/auth/
const routes: Routes = [
  {
    path: 'login',
    component:LoginPageComponent
  },
  {
    path: 'register',
    component:RegisterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
