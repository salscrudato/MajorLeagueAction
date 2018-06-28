import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BetService {

  constructor(private http: Http) {

      }

  placeBet(bet) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:8080/bets/placeBet', bet, {headers: headers})
      //return this.http.post('bets/placeBet', bet, {headers: headers})
        .map(res => res.json());
  }

  getPendingBets(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(user);
      return this.http.post('http://localhost:8080/bets/getPendings', user, {headers: headers})
      //return this.http.post('bets/getPendings', user, {headers: headers})
        .map(res => res.json());
  }

}
