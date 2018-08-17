import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {BetService} from '../../services/bets.service';
import {UserService} from '../../services/user.service';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user:any;
  pendingBets:any = [];
  closedBets:any = [];

  constructor(
    private authService:AuthService,
    private betService:BetService,
    private dataService:DataService
  ){}

  ngOnInit() {
    this.getAllBets();
  }

  //Gets current logged in user and then gets corresponding bets for that user
  getAllBets(){
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.betService.getBets(profile, 'all').subscribe(bets => {
        for(var i = 0; i < bets.length; i++){
          if(bets[i].status == 'open'){
            this.pendingBets.push(bets[i]);
          } else {
            this.closedBets.push(bets[i]);
          }
        }
        this.pendingBets = this.dataService.sortBets(this.pendingBets);
        this.closedBets = this.dataService.sortBets(this.closedBets);
        console.log(this.pendingBets);
      }, error =>{
        console.log(error);
        return false;
      });
    },
    error =>{
      console.log(error);
      return false;
    });
  }

}
