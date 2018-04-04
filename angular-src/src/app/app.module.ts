import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AddListComponent } from './add-list/add-list.component';
import { ViewListComponent } from './view-list/view-list.component';
import { ListService } from './services/list.service';
import { ViewAllComponent } from './view-all/view-all.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { RegistrationComponent } from './registration/registration.component';
@NgModule({

  //Components are added here
  declarations: [
    AppComponent,  
    AddListComponent,
    ViewListComponent,
    ViewAllComponent,
    LoginComponent,
    RegistrationComponent
  ],
  //All the modules are declared as imports
  imports: [
  
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  //All the services go here.
  providers: [ListService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }