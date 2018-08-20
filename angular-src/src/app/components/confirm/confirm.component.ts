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
  betAmount:number;
  odds:number;

  constructor(
    private dataService: DataService,
    private betService: BetService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ){}

  ngOnInit(){
    this.bet = this.dataService.getBet();
    console.log(this.bet);
    this.betType = this.dataService.getBetType().toUpperCase();
    this.setBetDetailsAndOdds(this.bet);
    this.odds = this.calculateOdds(this.bet);
  }

  clickPlaceBet(){
    if(this.betAmount > 0){
      var profile = this.dataService.getProfile();
      var winAmount = this.calcWinAmount(this.odds, this.betAmount);
      // console.log(this.bet);
      var confirmedBet = new Bet(profile, this.bet, this.bet[0].source, this.odds, this.betAmount, winAmount, this.betType);
      this.betService.placeBet(confirmedBet).subscribe(data => {
        if(data.success){
          this.router.navigate(['profile']);
        }
      });
    } else {
      this.flashMessage.show('You must enter a number greater than 0', {cssClass: 'alert-warning'});
    }
  }

  setBetDetailsAndOdds(bets){
    for(var i = 0; i < bets.length; i++){
      bets[i] = this.setBetDescription(bets[i]);
    }
  }

  setBetDescription(bet){
    const awayTeam = bet.awayTeam;
    const homeTeam = bet.homeTeam;
    switch(bet.betType){
      case 'awayTeamRL':
      const awayTeamRL = bet.awayTeamRL;
      const awayTeamRLOdds = bet.awayTeamRLOdds;
      bet.betDetails = awayTeam + " Spread " + awayTeamRL + " " + awayTeamRLOdds;
      bet.odds = awayTeamRLOdds;
      bet.line = awayTeamRL;
      break;
      case 'homeTeamRL':
      const homeTeamRL = bet.homeTeamRL;
      const homeTeamRLOdds = bet.homeTeamRLOdds;
      bet.betDetails = homeTeam + " Spread " + homeTeamRL + " " + homeTeamRLOdds;
      bet.odds = homeTeamRLOdds;
      bet.line = homeTeamRL;
      break;
      case 'awayTeamML':
      const awayTeamML = bet.awayTeamML;
      bet.betDetails = awayTeam + " Money Line " + awayTeamML;
      bet.odds = awayTeamML;
      break;
      case 'homeTeamML':
      const homeTeamML = bet.homeTeamML;
      bet.betDetails = homeTeam + " Money Line " + homeTeamML;
      bet.odds = homeTeamML;
      break;
      case 'over':
      if(bet.sport !='1'){
        bet.betDetails = awayTeam + " @ " + homeTeam + " Over " + bet.totalNumber + ' ' + bet.overLine;
        bet.odds = bet.overLine;
        bet.line = bet.totalNumber;
      } else {
        bet.betDetails = awayTeam + " @ " + homeTeam + " Over " + bet.over.number + ' ' + bet.over.odds;
        bet.odds = bet.over.odds;
        bet.line = bet.over.number;
      }
      break;
      case 'under':
      if(bet.sport != '1'){
        bet.betDetails = awayTeam + " @ " + homeTeam + " Under " + bet.totalNumber + ' ' + bet.underLine;
        bet.odds = bet.underLine;
        bet.line = bet.underLine;
      } else {
        bet.betDetails = awayTeam + " @ " + homeTeam + " Under " + bet.under.number + ' ' + bet.under.odds;
        bet.odds = bet.under.odds;
        bet.line = bet.totalNumber;
      }
      break;
      case 'draw':
      bet.betDetails = awayTeam + " @ " + homeTeam + " Draw " + bet.drawOdds;
      bet.odds = bet.drawOdds;
      break;
      case 'awayTeamFirstHalf':
      bet.betDetails = awayTeam + ' First 5 Innings ' + bet.awayTeamFirstHalf;
      bet.odds = bet.awayTeamFirstHalf;
      break;
      case 'homeTeamFirstHalf':
      bet.betDetails = homeTeam + ' First 5 Innings ' + bet.homeTeamFirstHalf;
      bet.odds = bet.homeTeamFirstHalf;
      break;
      case 'awayTeamFirstHalfFB':
      bet.betDetails = awayTeam + ' First Half ' + bet.awayTeamFirstHalf;
      bet.odds = bet.awayTeamFirstHalf;
      break;
      case 'homeTeamFirstHalfFB':
      bet.betDetails = homeTeam + ' First Half ' + bet.homeTeamFirstHalf;
      bet.odds = bet.homeTeamFirstHalf;
      break;
      case 'awayTeamFirstHalfSpread':
      const awayTeamFirstHalfSpread = bet.awayTeamRLFirstHalf;
      const awayTeamFirstHalfSpreadOdds = bet.awayTeamRLOddsFirstHalf;
      bet.betDetails = awayTeam + " Spread " + awayTeamFirstHalfSpread + " " + awayTeamFirstHalfSpreadOdds;
      bet.odds = bet.awayTeamRLFirstHalfOdds;
      bet.line = bet.awayTeamRLFirstHalf;
      break;
      case 'homeTeamFirstHalfSpread':
      const homeTeamFirstHalfSpread = bet.homeTeamRLFirstHalf;
      const homeTeamFirstHalfSpreadOdds = bet.homeTeamRLOddsFirstHalf;
      bet.betDetails = homeTeam + " Spread " + homeTeamFirstHalfSpread + " " + homeTeamFirstHalfSpreadOdds;
      bet.odds = bet.homeTeamRLFirstHalfOdds;
      bet.line = bet.homeTeamRLFirstHalf;
      break;
      case 'firstHalfOverFB':
      bet.betDetails = awayTeam + ' @ ' + homeTeam + 'First Half Over ' + bet.firstHalfOver + ' ' +  bet.firstHalfOverOdds;
      bet.odds = bet.firstHalfOverOdds;
      bet.line = bet.firstHalfOver;
      break;
      case 'firstHalfUnderFB':
      bet.betDetails = awayTeam + ' @ ' + homeTeam + 'First Half Under ' + bet.firstHalfUnder + ' ' +  bet.firstHalfUnderOdds;
      bet.odds = bet.firstHalfUnderOdds;
      bet.line = bet.firstHalfUnder;
      break;
      case 'homeTeamFirstHalf':
      bet.betDetails = awayTeam + ' First 5 Innings ' + bet.homeTeamFirstHalf;
      bet.odds = bet.homeTeamFirstHalf;
      break;
      case 'homeTeamOver':
      bet.betDetails = homeTeam + ' Over ' + bet.homeTeamTotalLine;
      bet.odds = bet.homeTeamOverOdds;
      break;
      case 'homeTeamUnder':
      bet.betDetails = homeTeam + ' Under ' + bet.homeTeamTotalLine;
      bet.odds = bet.homeTeamUnderOdds;
      break;
      case 'awayTeamOver':
      bet.betDetails = awayTeam + ' Over ' + bet.awayTeamTotalLine;
      bet.odds = bet.awayTeamOverOdds;
      break;
      case 'awayTeamUnder':
      bet.betDetails = awayTeam + ' Under ' + bet.awayTeamTotalLine;
      bet.odds = bet.awayTeamUnderOdds;
      break;
      case 'runInFirst':
      bet.betDetails = awayTeam + ' @ ' + homeTeam + ' Run In First';
      bet.odds = bet.runInFirst;
      break;
      case 'noRunInFirst':
      bet.betDetails = awayTeam + ' @ ' + homeTeam + ' No Runs In First';
      bet.odds = bet.noRunInFirst;
      break;
      case 'bothScoreYes':
      bet.betDetails = awayTeam + ' @ ' + homeTeam + ' Both Score - Yes ' + bet.bothScoreYes;
      bet.odds = bet.bothScoreYes;
      break;
      case 'bothScoreNo':
      bet.betDetails = awayTeam + ' @ ' + homeTeam + ' Both Score - No ' + bet.bothScoreNo;
      bet.odds = bet.bothScoreNo;
      break;
      default:
      break;
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
