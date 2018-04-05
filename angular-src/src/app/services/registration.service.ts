import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Registration } from '../models/Registration';

import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationService {  

  constructor(private http: Http) { }

  public registration(registration: Registration) {
    //let URI = `${this.serverApi}/bucketlist/`;
    let headers = new Headers;
    let body = JSON.stringify({username: registration.username});
    console.log (body);
    
    if(registration.username == 'rohit' && registration.password2 == 'Welcome123'){
      console.log("In If "+body);
      return true;
    }
    else{
      return false;
    }


  }
  


}
