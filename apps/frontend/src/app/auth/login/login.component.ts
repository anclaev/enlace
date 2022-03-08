import { Component, OnInit } from '@angular/core'

import { AuthCredentials } from '@enlace/common'

@Component({
  selector: 'enlace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  signIn(credentials: AuthCredentials) {
    console.log(credentials)
  }
}
