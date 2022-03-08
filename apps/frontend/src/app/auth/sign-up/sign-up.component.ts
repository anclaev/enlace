import { Component } from '@angular/core'

import { CreateUserGQL } from '../../../generated-types'

import { AuthCredentials } from '@enlace/common'

@Component({
  selector: 'enlace-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass'],
})
export class SignUpComponent {
  constructor(private readonly createUserGql: CreateUserGQL) {}

  signUp({ email, password }: AuthCredentials) {
    this.createUserGql.mutate(
      {
        createUserData: {
          email: email,
          password: password,
        },
      },
      {
        useMutationLoading: true,
      }
    )
  }
}
