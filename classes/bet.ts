export class Bet {
  userId:string;
  username:string;
  oddsId:any = [];
  source:string;
  description:any = [];
  odds:number;
  betAmount:number;
  winAmount:number;
  gameDate:string;
  gameTime:string;
  betType:string;
  subBets:any = [];
  constructor(profile, bets, source, odds, betAmount, winAmount, betType){
    this.userId = profile.user._id;
    this.username = profile.user.username;
    console.log(bets)
    for (var i = 0; i < bets.length; i++){
      console.log(bets[i]);
      this.oddsId.push(bets[i].id);
      this.description.push(bets[i].betDetails);
      this.subBets.push(bets[i]);
    }
    this.source = source;
    this.odds = odds;
    this.betAmount = betAmount;
    this.winAmount = winAmount;
    this.gameDate = bets[0].matchDate;
    this.gameTime = bets[0].matchTime;
    this.betType = betType;
  }
}
