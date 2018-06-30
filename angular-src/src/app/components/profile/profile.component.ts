import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {BetService} from '../../services/bets.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  allPendings:any;
  constructor(private authService:AuthService,
    private router:Router,
    private betService:BetService
  ){ }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err =>{
      console.log(err);
      return false;
    });

    this.betService.getAllPendings().subscribe(pendings => {
      this.allPendings = pendings;
      console.log(pendings);
    },
    err =>{
      console.log(err);
      return false;
    })
  }

  closePendingBet(){

  }

  userIsAdmin(){
    return this.user.username='admin';

  }

}
