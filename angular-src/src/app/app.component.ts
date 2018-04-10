import { Component } from '@angular/core';
import { AppStateService } from './services/app.state.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Awesome Bucketlist App';
  
  
  constructor(private _loginService: LoginService, public appStateService: AppStateService) {
  }

}
