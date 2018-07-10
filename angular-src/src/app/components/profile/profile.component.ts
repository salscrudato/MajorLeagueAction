import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {BetService} from '../../services/bets.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user:any;
  allPendings:any;

  constructor(
    private authService:AuthService,
    private router:Router,
    private betService:BetService,
    private userService:UserService
  ){}

  ngOnInit() {

    //Gets current logged in user profile
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err =>{
      return false;
    });

    this.betService.getAllPendings().subscribe(pendings => {
      this.allPendings = pendings;
    },
    err =>{
      return false;
    })
  }

  closePendingBet(pending, result){
    const updatedAmount = {
      userId: pending.userId,
      amount: pending.winAmount
    }

    this.userService.updateBalance(updatedAmount).subscribe(data => {
    if(data.success) {
      console.log(data);
    } else {
      //whatever action if we can't update balance
    }
  });

  }

  userIsAdmin(){
    return this.user.username='admin';
  }

}
