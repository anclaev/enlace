import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AuthModule } from '../auth.module'

import { SignUpComponent } from './sign-up.component'

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, AuthModule],
})
export class SignUpModule {}
