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
  public areNotEqual = false;

  constructor(private registrationServ: RegistrationService) { }

  ngOnInit() {
    console.log("Initial data!");
    this.newRegistration = {
  		username:'',
      password2:'',
      password3:''
  	}
  }
  public registration() {
    if(this.newRegistration.password2 == this.newRegistration.password3){
      this.areNotEqual = false;
      const response = this.registrationServ.registration(this.newRegistration);   
      if(response == true){
        console.log("In true");
        this.userAdded=true;
      }
    }
    else{
      this.areNotEqual = true;
      //password3.setCustomValidity("Passwords Don't Match");
    }
  }
}
