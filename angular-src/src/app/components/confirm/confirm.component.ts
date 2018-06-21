import { Component, OnInit } from '@angular/core';
import {BetService} from '../../services/bets.service';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  username:string;
  amount:number;
  bets:any;

  constructor(
    private dataService:DataService,
    private betService:BetService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
    console.log("in confirm component onInit");
    this.bets = this.dataService.getBets();
  }

  placeBet(){
    const bet = {
      username: this.username,
      oddsId: '12345',
      description: 'test',
      odds: 110,
      amount: this.amount
    }

    this.betService.placeBet(bet).subscribe(data => {
      if(data.success){
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
      }
    });

  }

}
