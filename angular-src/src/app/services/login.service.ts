import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Login } from '../models/Login'

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  public login(login: Login) {
    //let URI = `${this.serverApi}/bucketlist/`;
    let headers = new Headers;
    let body = JSON.stringify({username: login.username, password: login.password});
    console.log("In Service "+body);
    // headers.append('Content-Type', 'application/json');
    // return this.http.post(URI, body ,{headers: headers})
    // .map(res => res.json());
  }



}
