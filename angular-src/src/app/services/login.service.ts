import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Login } from '../models/Login';
import { Router } from '@angular/router'

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http, private _router: Router) { }
   private serverApi= 'http://localhost:3000';

  public login(login: Login) : any {
    let URI = `/api/login`;
    let headers = new Headers;
    let body = JSON.stringify({username: login.username, password: login.password});

    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body ,{headers: headers})
    .map(res => res.json())
  }

  public loggedIn() {
    return !!localStorage.getItem('token')
  }

  public logoutUser() {
    let URI = `/api/logout`;
    this.http.get(URI,{
      withCredentials: true
    })
    .map(res => res.json)
    .subscribe(res => {
      localStorage.removeItem('token')
      this._router.navigate(['/home'])
      },
      err => {
        console.log('Unable to logout user');
      }
     );

  }

  public getUsername() : any {
    let URI = `/api/getUsername`;
    this.http.get(URI,{
      withCredentials: true
    })
    .map(res => res.json);
  }

  public getToken() {
    return localStorage.getItem('token')
  }
}
