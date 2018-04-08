import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Awesome Bucketlist App';
  username = '';
  constructor(private _loginService: LoginService){
  }

  public getUsername() {
     const response = this._loginService.getUsername()
     .subscribe(
       res => {
           this.username = res.username;
         }
       ,
       err => {console.log(err);
       }
     );

	}

}
