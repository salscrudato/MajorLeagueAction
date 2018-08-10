import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  bet:any = [];
  profile:any;
  type:string;
  sportMenu:any = [];

  constructor() { }

  addSport(sport){
    this.sportMenu.push(sport);
  }

  getSports(){
    return this.sportMenu;
  }

  addStraightBet(bet, profile, type){
    this.bet.push(bet);
    this.profile = profile;
    this.type = type;
  }

  addMultipleBet(bet, profile, type){
    for(var i = 0; i < bet.length; i++){
      this.bet.push(bet[i]);
    }
    this.profile = profile;
    this.type = type;
  }

  getBet(){
    return this.bet;
  }

  getProfile(){
    return this.profile;
  }

  getBetType(){
    return this.type;
  }

  sortBets(unsorted){
    for(var i = 0; i < unsorted.length; i++){
      var year = unsorted[i].gameDate.substr(0,3);
      var month = unsorted[i].gameDate.substr(0,3);
      var day = unsorted[i].gameDate.substr(0,3);
      console.log(month);
    }
  }

}
