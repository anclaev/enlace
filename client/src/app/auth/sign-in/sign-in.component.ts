import { Component, OnInit } from '@angular/core'

import { AuthCredentials } from '@common/auth'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass'],
})
export class SignInComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  signIn(credentials: AuthCredentials) {
    console.log(credentials)
  }
}
