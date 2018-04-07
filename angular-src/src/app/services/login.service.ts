import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Login } from '../models/Login';

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }
   private serverApi= 'http://localhost:3000';

  public login(login: Login) : any {
    let URI = `${this.serverApi}/api/login`;
    let headers = new Headers;
    let body = JSON.stringify({username: login.username, password: login.password});

    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body ,{headers: headers})
  }
}
