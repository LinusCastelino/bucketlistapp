import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Registration } from '../models/Registration';
import { RegistrationService } from '../services/registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private newRegistration :Registration;
  public userAdded = false;
  public userAlreadyExists = false;
  public error = false;

  constructor(private registrationServ: RegistrationService) { }

  ngOnInit(): void {
    console.log("Initial data!");
    this.newRegistration = {
  		username:'',
      password2:'',
      password3:''
    }
  }

  public registration() {
    const response = this.registrationServ.registration(this.newRegistration)
    .subscribe(
      res => {
          console.log("registration response "  + JSON.stringify(res));
          if(res.message === 'User Id Already Exist'){
            this.userAlreadyExists = true;
          }
          else {
            this.userAlreadyExists = false;
            this.error = false;
            this.userAdded = true;
          }
        }
      ,
      err => {console.log(err);
          this.error = true;
      }
    );

  }
}
