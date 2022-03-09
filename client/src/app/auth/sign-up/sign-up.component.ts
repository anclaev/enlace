import { Component, OnInit } from '@angular/core'

import { AuthCredentials } from '@common'

import { CreateUserGQL } from 'src/generated-types'

@Component({
  selector: 'enlace-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass'],
})
export class SignUpComponent implements OnInit {
  constructor(private readonly createUserGql: CreateUserGQL) {}

  ngOnInit(): void {}

  signUp({ email, password }: AuthCredentials) {
    this.createUserGql
      .mutate({
        createUserData: {
          email,
          password,
        },
      })
      .subscribe((res) => console.log(res))
  }
}
