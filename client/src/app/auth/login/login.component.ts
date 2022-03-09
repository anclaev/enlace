import { Component, OnInit } from '@angular/core'

import { AuthCredentials } from '@common'

@Component({
  selector: 'enlace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  signIn({ email, password }: AuthCredentials) {
    console.log(email, ' ', password)
  }
}
