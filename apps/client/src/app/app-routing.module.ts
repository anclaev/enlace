import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

import { SignUpComponent } from './auth/sign-up/sign-up.component'
import { LoginComponent } from './auth/login/login.component'

const appRoutes: Routes = [
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class RoutingModule {}
