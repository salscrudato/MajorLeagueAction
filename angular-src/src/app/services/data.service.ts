import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  bets:any;

  constructor() { }

  addBets(action){
    this.bets=action;
    console.log("In data service " + this.bets);
  }

  getBets(){
    return this.bets;
  }


}
