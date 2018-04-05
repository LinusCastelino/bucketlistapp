import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Login } from '../models/Login';

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  public login(login: Login) :boolean {
    //let URI = `${this.serverApi}/bucketlist/`;
    let headers = new Headers;
    let body = JSON.stringify({username: login.username, password: login.password});
    
    if(login.username == 'rohit' && login.password == 'Welcome123'){
      console.log("In If "+body);
      return true;
    }
    else{
      return false;
    }


    // headers.append('Content-Type', 'application/json');
    // return this.http.post(URI, body ,{headers: headers})
    // .map(res => res.json());
  }



}
