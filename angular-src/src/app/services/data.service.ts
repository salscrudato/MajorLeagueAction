import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  bet:any = [];
  profile:any;
  type:string;
  sport:number;
  league:number;
  jsonOddsEvents = [];

  constructor() { }

  addSport(sport){
    this.sport = sport;
  }

  getSports(){
    var tempSport = this.sport;
    this.sport = null;
    return tempSport;
  }

  setLeague(league){
    this.league = league;
  }

  getLeague(){
    var tempLeague = this.league;
    this.league = null;
    return tempLeague;
  }

  setJsonOddsEvents(events){
    this.jsonOddsEvents = events;
  }

  getJsonOddsEvents(){
    return this.jsonOddsEvents;
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
    var tempBet = this.bet;
    this.bet = [];
    return tempBet;
  }

  getProfile(){
    return this.profile;
  }

  getBetType(){
    var tempBetType = this.type;
    this.type = null;
    return tempBetType;
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
