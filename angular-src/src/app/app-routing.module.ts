import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddListComponent } from './add-list/add-list.component';
import { ViewListComponent } from './view-list/view-list.component';
import { ViewOthersListComponent } from './view-others-list/view-others-list.component';
import { NavigationTabComponent } from './navigation-tab/navigation-tab.component';
import { ConfirmEqualValidatorDirective } from './directives/validation/confirm-equal-validator.directive';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bucketlist', component: NavigationTabComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent, LoginComponent, RegistrationComponent, AddListComponent,
                                  ViewListComponent, ViewOthersListComponent, NavigationTabComponent, ConfirmEqualValidatorDirective]
