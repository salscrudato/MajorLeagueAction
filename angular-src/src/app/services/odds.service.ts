import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OddsService {

  constructor(private http: Http) {

  }

  getMLBOdds(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //return this.http.get('http://localhost:8080/odds/mlb')
    return this.http.get('odds/mlb')
    .map(res => res.json());
  }

  getMLBLiveOddsEvents(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //return this.http.get('http://localhost:8080/betsAPI/mlbEvents')
    return this.http.get('betsAPI/mlbEvents')
    .map(res => res.json());
  }

  getMLBLiveOdds(event){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //return this.http.post('http://localhost:8080/betsAPI/mlbEventOdds', event)
    return this.http.post('betsAPI/mlbEventOdds', event)
    .map(res => res.json());
  }

}
