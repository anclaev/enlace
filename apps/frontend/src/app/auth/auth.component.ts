import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

import { AuthCredentials } from '@enlace/common'

@Component({
  selector: 'enlace-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
})
export class AuthComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<AuthCredentials>()
  @Input() submitLabel!: string

  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.minLength(8)])

  constructor() {}

  ngOnInit(): void {}

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value.'
    }

    return this.email.hasError('email') ? 'Not a valid email.' : ''
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value.'
    }

    return this.password.hasError('minLength') ? 'Not a valid password.' : ''
  }

  onSubmit() {
    this.submitEvent.emit({
      email: this.email.value,
      password: this.password.value,
    })
  }
}
