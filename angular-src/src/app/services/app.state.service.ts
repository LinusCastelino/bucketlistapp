import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AppStateService {

  constructor(private cookieService: CookieService) { }

  get userName(): string {
    return this.cookieService.get('BKT_USER');
  }
  
}
