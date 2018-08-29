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

  users:any;
  showUsers:boolean = false;
  totalBalance:number = 0;
  userBalArray:any = [];
  showCreateBet:boolean = false;
  showCustom:boolean = false;
  propArray:any = [];

  //for custom bets
  details:string;
  odds:number;
  sport:string;
  type:string;

  constructor(
    private authService:AuthService,
    private router:Router,
    private betService:BetService,
    private userService:UserService
  ){}

  ngOnInit() {
    this.getAllUsers();
    this.getProps();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
      this.getCurrentBalance();
    },
    err =>{
      return false;
    });
  }

  getCurrentBalance(){
    for(var i = 0; i < this.users.length; i++){
      this.totalBalance = this.totalBalance + this.users[i].currentBalance;
      this.userBalArray.push({id:this.users[i]._id, curBal:this.users[i].currentBalance});
    }
  }

  showHideUsers(){
    if (this.showUsers){
      this.showUsers = false;
    } else {
      this.showUsers = true;
    }
  }

  showHideCustom(){
    if (this.showCustom){
      this.showCustom = false;
    } else {
      this.showCustom = true;
    }
  }

  clickMethod() {
    if(confirm("Are you sure you want to clear all balances?")) {
      this.clearAllBalances();
    }
  }

  getProps(){
    this.betService.getAllCustomBets().subscribe(bets => {
      for(var i = 0; i < bets.length; i++){
        if(bets[i].expired == false){
          this.propArray.push(bets[i]);
        }
      }
    });
  }

  clearAllBalances(){
    for(var i = 0; i < this.userBalArray.length; i++){
      const updatedAmount = {
        userId: this.userBalArray[i].id,
        amount: this.userBalArray[i].curBal * -1
      }
      console.log(updatedAmount);
      this.userService.updateBalance(updatedAmount).subscribe(data => {
        if(data){
          console.log(data);
        }else {
          // console.log(err);
        }
      });
    }
  }

  showHideCreateBet(){
    if(this.showCreateBet == false){
      this.showCreateBet = true;
    } else {
      this.showCreateBet = false;
    }
  }

  createBet(){
    var customBet = {
      details:this.details,
      odds:this.odds,
      sport:this.sport,
      type: this.type
    }
    this.betService.createCustom(customBet).subscribe(res => {
      this.details = null;
      this.odds = null;
      this.sport = null;
      this.type = null;
    });
  }

  expireCustomBet(bet){
    this.betService.expireCustomBet(bet).subscribe(res => {
      this.propArray = [];
      this.getProps();
    });
  }


}


// closePendingBet(pendingBet, result){
//   var amount;
//   if(result=='win'){
//     amount = pendingBet.winAmount;
//   } else {
//     amount = pendingBet.betAmount * -1;
//   }
//   const updatedAmount = {
//     userId: pendingBet.userId,
//     amount: amount
//   }
//   this.userService.updateBalance(updatedAmount).subscribe(data => {
//     if(data.success) {
//       this.betService.closeBet(pendingBet._id, result).subscribe(data => {
//         this.getAllPendings();
//         return true;
//       },
//       err =>{
//         console.log(err);
//         return false;
//       });
//     } else {
//       //whatever action if we can't update balance
//     }
//   });
// }
