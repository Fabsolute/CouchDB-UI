import {Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";

export const ROUTES: Routes = [
  {
    path: 'heroes',
    component: LoginComponent,
    data: {title: 'Heroes List'}
  },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  }
];
