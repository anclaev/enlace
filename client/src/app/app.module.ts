import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

import { AppRoutingModule } from './app-routing.module'
import { HeaderModule } from './header/header.module'
import { LoginModule } from './auth/login/login.module'
import { SignUpModule } from './auth/sign-up/sign-up.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    LoginModule,
    SignUpModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
