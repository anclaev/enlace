import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { InMemoryCache } from '@apollo/client/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { SignUpModule } from './auth/sign-up/sign-up.module'
import { LoginModule } from './auth/login/login.module'
import { HeaderModule } from './header/header.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ApolloModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    SignUpModule,
    LoginModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => ({
        cache: new InMemoryCache(),
        links: httpLink.create({
          uri: '/api/graphql',
        }),
      }),
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
