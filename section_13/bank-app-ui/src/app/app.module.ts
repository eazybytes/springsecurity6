import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER,NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoticesComponent } from './components/notices/notices.component';
import { AccountComponent } from './components/account/account.component';
import { BalanceComponent } from './components/balance/balance.component';
import { LoansComponent } from './components/loans/loans.component';
import { CardsComponent } from './components/cards/cards.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8180/',
        realm: 'eazybankdev',
        clientId: 'eazypublicclient',
      },
      initOptions: {
        pkceMethod: 'S256',
        redirectUri: 'http://localhost:4200/dashboard',
      },loadUserProfileAtStartUp: false
    });
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    DashboardComponent,
    NoticesComponent,
    AccountComponent,
    BalanceComponent,
    LoansComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    KeycloakAngularModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
