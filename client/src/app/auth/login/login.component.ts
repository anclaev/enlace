import { Component, OnInit } from '@angular/core'

import { LoginService } from './login.service'

import { CreateUserInput } from 'src/generated-types'

@Component({
  selector: 'enlace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private readonly loginService: LoginService) {}

  ngOnInit(): void {}

  signIn(createUserData: CreateUserInput) {
    this.loginService.login(createUserData).subscribe(() => {})
  }
}
