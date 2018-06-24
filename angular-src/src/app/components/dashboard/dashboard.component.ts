import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';
import {BetService} from '../../services/bets.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users:any;
  profile:any;
  pendingBets:any;

  constructor(private userService:UserService,
    private authService:AuthService,
    private betService:BetService
  ) {

    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
    this.authService.getProfile().subscribe(data => {
      this.betService.getPendingBets(data).subscribe(bets => {
        this.pendingBets = bets;
        console.log(this.pendingBets);
      });
    });

  }

  ngOnInit() {


  }

}
