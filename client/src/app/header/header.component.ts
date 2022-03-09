import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'

import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'enlace-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  isLoggenIn$: Observable<boolean>

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {
    this.isLoggenIn$ = authService.authenticated$
  }

  toHomePage() {
    this.router.navigate(['/'])
  }

  ngOnInit(): void {}

  onLogout() {}
}
