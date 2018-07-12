import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BetService {
  urlPrefix = '';

  constructor(private http: Http) {

      }

  placeBet(bet) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      //return this.http.post('http://localhost:8080/bets/placeBet', bet, {headers: headers})
      return this.http.post('bets/placeBet', bet, {headers: headers})
        .map(res => res.json());
  }

  closeBet(betId, result) {
    let headers = new Headers();
    const bet = {
      betId: betId,
      status: result
    }
    console.log('in close bet in bet service');
    console.log(bet);
    headers.append('Content-Type', 'application/json');
      //return this.http.post('http://localhost:8080/bets/closePending', bet, {headers: headers})
      return this.http.post('bets/closePending', bet, {headers: headers})
        .map(res => res.json());
  }

  getPendingBets(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      //return this.http.post('http://localhost:8080/bets/getPendings', user, {headers: headers})
      return this.http.post('bets/getPendings', user, {headers: headers})
        .map(res => res.json());
  }

  getAllPendings() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      //return this.http.get('http://localhost:8080/bets/getAllPendings', {headers: headers})
      return this.http.get('bets/getAllPendings', {headers: headers})
        .map(res => res.json());
  }

}
