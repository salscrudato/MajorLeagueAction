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
	login: string;
	register: string;

  constructor(private authService:AuthService) {
    console.log(authService.loggedIn());
  	//var arr = [1,5,3,6,2,100,30];
  	//console.log(arr);
  	//this.bubbleSort(arr);
  }

  bubbleSort(arr){
  	const arrLen = arr.length;
  	for(var i = 0; i < arrLen - 1; i++){
  		for(var j = 0; j < arrLen - 1 - i; j++){
  			if(arr[j]>arr[j+1]){
  				const temp = arr[j];
  				arr[j] = arr[j+1];
  				arr[j+1] = temp;
  			}
  		}
  	}
  	console.log(arr);
  }

  onLogoutClick(){
    this.authService.logout();
  }

  ngOnInit() {
  }

}
