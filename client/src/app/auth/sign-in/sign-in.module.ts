import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AuthModule } from '../auth.module'

import { SignInComponent } from './sign-in.component'

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, AuthModule],
})
export class SignInModule {}
