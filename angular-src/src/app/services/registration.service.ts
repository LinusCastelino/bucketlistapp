import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Registration } from '../models/Registration';

import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationService {

  constructor(private http: Http) { }
  private serverApi= 'http://10.8.6.43:3000';

  public registration(registration: Registration): any {
    let URI = `${this.serverApi}/api/registration`;
    let headers = new Headers;
    let body = JSON.stringify({username: registration.username, password: registration.password2});

    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body ,{headers: headers})
    .map(res => res.json());

  }



}
