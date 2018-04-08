import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _logService: LoginService,
    private _router: Router) { }

  canActivate(): boolean {
    if (this._logService.loggedIn()) {
      console.log('true')
      return true
    } else {
      console.log('false')
      this._router.navigate(['/home'])
      return false
    }
  }
}
