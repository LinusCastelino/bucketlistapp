
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
  public incorrectPwd = false;

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
     const response = this.loginServ.login(this.newLogin);
     this.incorrectPwd = false;
  			if(response == true){
          //this.addList.emit(this.newList);
          console.log(response);
         // this.router.navigateByUrl('/bucketlist');
          //this.router.navigateByUrl('/bucketlist');
          
        }
        if(response == false){
          console.log("In false");
          this.incorrectPwd = true;
        }
	}

}
