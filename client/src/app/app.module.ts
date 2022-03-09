import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpClientModule } from '@angular/common/http'
import { InMemoryCache } from '@apollo/client/core'
import { HttpLink } from 'apollo-angular/http'

import { AppComponent } from './app.component'

import { AppRoutingModule } from './app-routing.module'
import { HeaderModule } from './header/header.module'
import { LoginModule } from './auth/login/login.module'
import { SignUpModule } from './auth/sign-up/sign-up.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    LoginModule,
    SignUpModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => ({
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: 'api/graphql',
        }),
      }),
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
