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

  constructor(
    private authService:AuthService,
    private router:Router,
    private betService:BetService,
    private userService:UserService
  ){}

  ngOnInit() {
    this.getAllUsers();
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
    }
  }

  showHideUsers(){
    if (this.showUsers){
      this.showUsers = false;
    } else {
      this.showUsers = true;
    }
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
