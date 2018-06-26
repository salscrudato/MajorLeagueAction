import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService,
              private router:Router
  ) {

  }

  onLogoutClick(){
    this.authService.logout();
  }

  route(route){
    this.router.navigate([route]);
  }

  ngOnInit() {
  }

}
