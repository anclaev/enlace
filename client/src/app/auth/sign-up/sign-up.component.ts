import { Component, OnInit } from '@angular/core'

import { AuthCredentials } from '@common'

@Component({
  selector: 'enlace-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass'],
})
export class SignUpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  signUp({ email, password }: AuthCredentials) {
    console.log(email, ' ', password)
  }
}
