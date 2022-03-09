import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

import { HomeComponent } from './home/home.component'

import { LoginComponent } from './auth/login/login.component'
import { SignUpComponent } from './auth/sign-up/sign-up.component'

import { AuthGuard } from './auth/auth.guard'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
