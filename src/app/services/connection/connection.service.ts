import {Injectable} from '@angular/core';
import {Http, RequestOptionsArgs, Headers} from "@angular/http";

@Injectable()
export class ConnectionService {
  private arguments: RequestOptionsArgs;
  private base_url;

  constructor(private http: Http) {

    this.arguments = {};

    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.arguments.headers = headers;

  }

  createSession(url: string, username: string, password: string) {
    this.base_url = url;

    this.doAPICall('', '/_session', {name: username, password: password}).subscribe(raw_response => {
      let response = raw_response.json();
      console.log(response);
    });
  }


  private doAPICall(method, uri, body) {
    return this.http.post(this.base_url + uri, body, this.arguments);
  }
}
