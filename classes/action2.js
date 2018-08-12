class Action2 {
    constructor(id, gameTime, oddsArr, sport, homeTeam, awayTeam){
      this.id = id;
      this.gameTime = gameTime;
      this.sport = sport;
      this.homeTeam = homeTeam;
      this.awayTeam = awayTeam;
      if (oddsArr != undefined){
        if(oddsArr.sp != undefined){
          this.awayTeamML = this.constructor.convertOdds(oddsArr.sp.money_line[0].odds);
          this.homeTeamML = this.constructor.convertOdds(oddsArr.sp.money_line[1].odds);
        }
      }
    }

    static convertOdds(odd){
      if(odd >= 2){
        return Math.round((odd - 1)*100);
      }else{
        return Math.round((-100)/(odd-1));
      }
    }

  }

  module.exports = Action2;
