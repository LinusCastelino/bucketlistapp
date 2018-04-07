import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';
import { ListService } from './services/list.service';
import { LoginService } from './services/login.service';
import { RegistrationService } from './services/registration.service';
// import { ConfirmEqualValidatorDirective } from './directives/validation/confirm-equal-validator.directive';
//import { HomeComponent } from './home/home.component';
// import { AddListComponent } from './add-list/add-list.component';
// import { ViewListComponent } from './view-list/view-list.component';
// import { LoginComponent } from './login/login.component';
// import { RegistrationComponent } from './registration/registration.component';
// import { NavigationTabComponent } from './navigation-tab/navigation-tab.component';
// import { ViewOthersListComponent } from './view-others-list/view-others-list.component';


@NgModule({

  //Components are added here
  declarations: [
     AppComponent,
     routingComponents,
 ],
  //All the modules are declared as imports
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  //All the services go here.
  providers: [ListService, LoginService, RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
