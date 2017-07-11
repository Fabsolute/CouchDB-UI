import {Component, OnInit} from '@angular/core';
import {ConnectionService} from "../../services/connection/connection.service";
import {RequestOptionsArgs, Headers} from "@angular/http";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  private url: string = 'http://tictactoe.allef.mobi:5984';
  private username: string = 'byfabs';
  private password: string = '13487171a';
  constructor(private connection_service: ConnectionService) {
  }

  login() {
    this.connection_service.createSession(this.url, this.username, this.password);
  }

}
