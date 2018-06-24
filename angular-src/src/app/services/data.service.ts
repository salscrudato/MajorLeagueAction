import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  bets:any;
  profile:any;
  type:string;

  constructor() { }

  addBets(action, type, profile){
    this.bets=action;
    this.type=type;
    this.profile=profile;
    console.log(type);
  }

  getBets(){
    return this.bets;
  }

  getProfile(){
    return this.profile;
  }

  getBetType(){
    return this.type;
  }

}
