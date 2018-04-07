
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Login } from '../models/Login';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private newLogin :Login;
  public incorrectPwd = false;

  constructor(private loginServ: LoginService, private router: Router) { }

  ngOnInit() {
    console.log("Initial data!");
    this.newLogin = {
  		username:'',
      password:'',
  	}
  }

  public login() {
  	//console.log(this.newLogin.password);
     const response = this.loginServ.login(this.newLogin)
     .subscribe(
       res => {
           localStorage.setItem('token', res.token)
           this.router.navigate(['bucketlist']);
         }
       ,
       err => {console.log(err);
           this.incorrectPwd = true;
       }
     );

	}

}
