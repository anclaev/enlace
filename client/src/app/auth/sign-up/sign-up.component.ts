import { Component, OnInit } from '@angular/core'

import { AuthCredentials } from '@common/auth'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass'],
})
export class SignUpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  signUp(credentials: AuthCredentials) {
    console.log(credentials)
  }
}
