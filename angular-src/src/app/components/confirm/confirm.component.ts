import {Component, OnInit} from '@angular/core';
import {BetService} from '../../services/bets.service';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Bet} from '../../../../../classes/bet';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit{

  bet:any = [];
  betType:string;
  betAmount:number = null;
  odds:number;

  constructor(
    private dataService: DataService,
    private betService: BetService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ){}

  ngOnInit(){
    this.bet = this.dataService.getBet();
    this.betType = this.dataService.getBetType().toUpperCase();
    this.setBetDetailsAndOdds(this.bet);
    console.log(this.bet)
    this.odds = this.calculateOdds(this.bet);
  }

  clickPlaceBet(){
    var profile = this.dataService.getProfile();
    var winAmount = this.calcWinAmount(this.odds, this.betAmount);
    var confirmedBet = new Bet(profile, this.bet, this.bet.source, this.odds, this.betAmount, winAmount, this.betType);
    this.betService.placeBet(confirmedBet).subscribe(data => {
      if(data.success){
        this.router.navigate(['profile']);
      }
    });
  }

  setBetDetailsAndOdds(bets){
    for(var i = 0; i < bets.length; i++){
      bets[i] = this.setBetDescription(bets[i]);
    }
  }

  setBetDescription(bet){
    const awayTeam = bet.awayTeam;
    const homeTeam = bet.homeTeam;
    if(bet.sport=='0' || bet.sport=='16' || bet.sport=='4' || bet.sport=='3' || bet.sport=='1'){
      switch(bet.betType){
        case 'awayTeamRL':
        const awayTeamRL = this.addPlus(bet.awayTeamRL);
        const awayTeamRLOdds = this.addPlus(bet.awayTeamRLOdds);
        bet.betDetails = awayTeam + " Spread " + awayTeamRL + " " + awayTeamRLOdds;
        bet.odds = awayTeamRLOdds;
        break;
        case 'homeTeamRL':
        const homeTeamRL = this.addPlus(bet.homeTeamRL);
        const homeTeamRLOdds = this.addPlus(bet.homeTeamRLOdds);
        bet.betDetails = homeTeam + " Spread " + homeTeamRL + " " + homeTeamRLOdds;
        bet.odds = homeTeamRLOdds;
        break;
        case 'awayTeamML':
        const awayTeamML = this.addPlus(bet.awayTeamML);
        bet.betDetails = awayTeam + " Money Line " + awayTeamML;
        bet.odds = awayTeamML;
        break;
        case 'homeTeamML':
        const homeTeamML = this.addPlus(bet.homeTeamML);
        bet.betDetails = homeTeam + " Money Line " + homeTeamML;
        bet.odds = homeTeamML;
        break;
        case 'over':
          if(bet.sport !='1'){
            bet.betDetails = awayTeam + " @ " + homeTeam + " Over " + bet.totalNumber;
            bet.odds = bet.overLine;
          } else {
            bet.betDetails = awayTeam + " @ " + homeTeam + " Over " + bet.over.number;
            bet.odds = bet.over.odds;
          }
        break;
        case 'under':
        if(bet.sport != '1'){
          bet.betDetails = awayTeam + " @ " + homeTeam + " Under " + bet.totalNumber;
          bet.odds = bet.underLine;
        } else {
          bet.betDetails = awayTeam + " @ " + homeTeam + " Under " + bet.under.number;
          bet.odds = bet.under.odds;
        }
        break;
        case 'draw':
        bet.betDetails = awayTeam + " @ " + homeTeam + " Draw " + bet.drawOdds;
        bet.odds = bet.drawOdds;
        break;
        case 'awayTeamFirstHalf':
        bet.betDetails = awayTeam + ' First 5 Innings ' + bet.awayTeamFirstHalf;
        bet.odds = bet.awayTeamFirstHalf;
        case 'homeTeamFirstHalf':
        bet.betDetails = homeTeam + ' First 5 Innings ' + bet.homeTeamFirstHalf;
        bet.odds = bet.homeTeamFirstHalf;
        case 'homeTeamFirstHalf':
        bet.betDetails = awayTeam + ' First 5 Innings ' + bet.homeTeamFirstHalf;
        bet.odds = bet.homeTeamFirstHalf;
        case 'homeTeamOver':
        bet.betDetails = homeTeam + ' Over ' + bet.homeTeamTotalLine;
        bet.odds = bet.homeTeamOverOdds;
        case 'homeTeamUnder':
        bet.betDetails = homeTeam + ' Under ' + bet.homeTeamTotalLine;
        bet.odds = bet.homeTeamUnderOdds;
        case 'awayTeamOver':
        bet.betDetails = awayTeam + ' Over ' + bet.awayTeamTotalLine;
        bet.odds = bet.awayTeamOverOdds;
        case 'awayTeamUnder':
        bet.betDetails = awayTeam + ' Under ' + bet.awayTeamTotalLine;
        bet.odds = bet.awayTeamUnderOdds;
        case 'runInFirst':
        bet.betDetails = awayTeam + ' @ ' + homeTeam + ' Run In First';
        bet.odds = bet.runInFirst;
        case 'noRunInFirst':
        bet.betDetails = awayTeam + ' @ ' + homeTeam + ' No Runs In First';
        bet.odds = bet.noRunInFirst;
        case 'bothScoreYes':
        bet.betDetails = awayTeam + ' @ ' + homeTeam + ' Both Score - Yes';
        bet.odds = bet.bothScoreYes;
        case 'bothScoreNo':
        bet.betDetails = awayTeam + ' @ ' + homeTeam + ' Both Score - No';
        bet.odds = bet.bothScoreNo;
        default:
        break;
      }
    }
    return bet;
  }

  placeBet(bet){
    this.betService.placeBet(bet).subscribe(data => {
      if(data.success){
        this.flashMessage.show(data.msg, {cssClass: 'alert-success'});
        this.router.navigate(['profile']);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
        this.router.navigate(['menu']);
      }
    })
  }

  calcWinAmount(odds, betAmount){
    if(odds > 0){
      return this.round((odds/100) * betAmount);
    } else {
      return this.round(betAmount / (odds*-1) * 100);
    }
  }

  round(amount){
    return Math.round(amount);
  }

  addPlus(odd){
    if(odd > 0){
      return "+" + odd;
    } else {
      return odd;
    }
  }

  calculateOdds(bets){
    if(bets.length == 1){
      return parseInt(bets[0].odds);
    } else {
      var oddsArray = [];
      for(var i = 0; i < bets.length; i++){
        var tempOdds = parseInt(bets[i].odds);
        if(tempOdds > 0){
          oddsArray.push((100+tempOdds)/100);
        } else {
          oddsArray.push((100+(tempOdds*-1))/(tempOdds*-1));
        }
      }
      return this.round((oddsArray.reduce(function(a,b){return a*b;}) -1 ) * 100);
    }
  }

}
