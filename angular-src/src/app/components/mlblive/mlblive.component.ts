import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {OddsService} from '../../services/odds.service';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-mlblive',
  templateUrl: './mlblive.component.html',
  styleUrls: ['./mlblive.component.css']
})
export class MlbliveComponent implements OnInit {

  events:Array<String> = []
  actions: Array<String> = [];

  constructor(
    private userService:UserService,
    private oddsService:OddsService,
    private authService:AuthService,
    private router:Router,
    private dataService:DataService,
    private flashMessage:FlashMessagesService
  ) {}

  ngOnInit() {
    this.getEvents();

  }



  getEvents(){
      console.log('getting events');
      this.oddsService.getMLBLiveOddsEvents().subscribe(data =>{
        for (var i = 0; i < data.length; i++) {
          this.events.push(data[i]);
        }
      });
  }

  getOdds(){
    this.actions = [];
    for(var i = 0; i < this.events.length; i++){
      this.oddsService.getMLBLiveOdds(this.events[i]).subscribe(data =>{
        this.actions.push(data);
      });
    }
  }

  // getOdds(){
  //   this.oddsService.getMLBLiveOdds().subscribe(data =>{
  //     for (var i = 0; i < data.length; i++) {
  //       console.log(data[i]);
  //       this.actions.push(data[i]);
  //     }
  //   });
  // }

}
