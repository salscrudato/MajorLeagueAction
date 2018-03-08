import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	login: string;
	register: string;

  constructor() { 
  	this.login = 'Login';
  	this.register = 'Register';
  	var arr = [1,5,3,6,2,100,30];
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

  ngOnInit() {
  }

}
