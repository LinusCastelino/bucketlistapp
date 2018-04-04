
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Login } from '../models/Login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private newLogin :Login;
  @Output() addList: EventEmitter<Login> = new EventEmitter<Login>();
  constructor(private loginServ: LoginService) { }

  ngOnInit() {
    console.log("Initial data!");
    this.newLogin = {
      
  		username:'',
      password:'',
  	}
  }

  public login() {
  	//console.log(this.newLogin.password);
     this.loginServ.login(this.newLogin)
     //.subscribe(
  // 		response=> {
  			
  // 			if(response.success== true)
  // 				this.addList.emit(this.newList);
  // 		},
	// );

	}

}
