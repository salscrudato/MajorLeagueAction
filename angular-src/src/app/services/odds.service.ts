import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OddsService {

  constructor(private http: Http) { }

  getMLBOdds(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/odds/mlb')
    //return this.http.get('odds/mlb')
      .map(res => res.json());
  }

}
