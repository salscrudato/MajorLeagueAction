import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import {OddsService} from './services/odds.service';
import {DataService} from './services/data.service';
import {BetService} from './services/bets.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/app.guards';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { StartComponent } from './components/start/start.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { LiveComponent } from './components/live/live.component';
import { AdminComponent } from './components/admin/admin.component';
import { ParlayComponent } from './components/parlay/parlay.component';
import { StraightComponent } from './components/straight/straight.component';
import { Straight2Component } from './components/straight2/straight2.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'menu', component: MenuComponent},
  {path: 'start', component: StartComponent},
  {path: 'confirm', component: ConfirmComponent},
  {path: 'live', component: LiveComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'parlay', component: ParlayComponent},
  {path: 'straight', component: StraightComponent},
  {path: 'straight2', component: Straight2Component}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    MenuComponent,
    StartComponent,
    ConfirmComponent,
    LiveComponent,
    AdminComponent,
    ParlayComponent,
    StraightComponent,
    Straight2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, UserService, OddsService, AuthGuard, DataService, BetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
