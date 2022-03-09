import { catchError, of, Subject, tap } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authenticated = new Subject<boolean>()
  authenticated$ = this.authenticated.asObservable()

  constructor(private readonly httpClient: HttpClient) {}

  isAuthenticated() {
    return this.httpClient.get<boolean>('api/auth').pipe(
      tap(() => this.authenticated.next(true)),
      catchError(() => of(false)),
    )
  }
}
