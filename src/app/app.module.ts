import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from "./app.route";
import {FormsModule} from "@angular/forms";
import {ConnectionService} from "./services/connection/connection.service";
import { HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      ROUTES,
      {
        enableTracing: true
      }
    )
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
