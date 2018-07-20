import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  straightBet:any;
  profile:any;
  type:string;

  constructor() { }

  addStraightBet(action, type, profile){
    this.straightBet=action;
    this.type=type;
    this.profile=profile;
  }

  getStraightBet(){
    return this.straightBet;
  }

  getProfile(){
    return this.profile;
  }

  getBetType(){
    return this.type;
  }

}
