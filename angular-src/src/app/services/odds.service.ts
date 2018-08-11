import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OddsService {

  constructor(private http: Http) {

  }

  getOdds(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //return this.http.get('http://localhost:8080/odds/all')
    return this.http.get('odds/all')
    .map(res => res.json());
  }

  getLiveEvents(sportId, leagueId){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //return this.http.get('http://localhost:8080/odds/events?sportId=' + sportId + '&leagueId=' + leagueId)
    return this.http.get('odds/events?sportId=' + sportId + '&leagueId=' + leagueId)
    .map(res => res.json())
    .toPromise();
  }

  getLiveEventOdds(eventId, homeTeam, homeTeamImage, awayTeam, awayTeamImage){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //return this.http.get('http://localhost:8080/odds/eventOdds?eventId=' + eventId + '&homeTeam=' + homeTeam + '&awayTeam=' + awayTeam + "&awayTeamImage=" + awayTeamImage + '&homeTeamImage=' + homeTeamImage)
    return this.http.get('odds/eventOdds?eventId=' + eventId)
    .map(res => res.json());
  }

}
