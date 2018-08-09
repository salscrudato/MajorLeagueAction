import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {BetService} from '../../services/bets.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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

  this.getAllPendings();
}

getAllPendings(){
  this.betService.getAllPendings().subscribe(pendings => {
    this.allPendings = pendings;
  },
  err =>{
    return false;
  });
}

closePendingBet(pendingBet, result){
  var amount;
  if(result=='win'){
    amount = pendingBet.winAmount;
  } else {
    amount = pendingBet.betAmount * -1;
  }
  const updatedAmount = {
    userId: pendingBet.userId,
    amount: amount
  }
  this.userService.updateBalance(updatedAmount).subscribe(data => {
    if(data.success) {
      this.betService.closeBet(pendingBet._id, result).subscribe(data => {
        this.getAllPendings();
        return true;
      },
      err =>{
        console.log(err);
        return false;
      });
    } else {
      //whatever action if we can't update balance
    }
  });

}

}
