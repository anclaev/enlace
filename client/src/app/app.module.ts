import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { HeaderModule } from './header/header.module'
import { SignUpModule } from './auth/sign-up/sign-up.module'
import { SignInModule } from './auth/sign-in/sign-in.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    SignUpModule,
    SignInModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
