import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { LoginService } from './login.service'

import { CreateUserInput } from 'src/generated-types'

@Component({
  selector: 'enlace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {}

  signIn(createUserData: CreateUserInput) {
    this.loginService.login(createUserData).subscribe(() => {
      this.router.navigate(['/'])
    })
  }
}
