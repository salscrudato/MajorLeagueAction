class Bet365Live {
  constructor(id, homeTeam, awayTeam, oddsArray) {
    this.id = id;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.overArray = [];
    this.underArray = [];
    this.homeTeamRLArray = [];
    this.awayTeamRLArray = [];
    this.showAltLines = false;

    for(var i = 0; i < oddsArray.length; i++){
      if(oddsArray[i].type == 'EV'){
        this.description = oddsArray[i].NA;
        var score = oddsArray[i].SS.split('-');
        this.homeScore = score[0];
        this.awayScore = score[1];
        this.time = oddsArray[i].ED;
      }
    }

    for(var i = 0; i < oddsArray.length; i++){
      if(oddsArray[i].type == 'PA'){
        oddsArray[i].OD = this.constructor.convertOdds(oddsArray[i].OD);
        if(oddsArray[i].NA == 'Over'){
          this.overArray.push({number: oddsArray[i].HA, odds: oddsArray[i].OD});
        } else if(oddsArray[i].NA == 'Under'){
          this.underArray.push({number: oddsArray[i].HA, odds: oddsArray[i].OD});
        } else if(oddsArray[i].NA == this.homeTeam && oddsArray[i].HA == ''){
          if(oddsArray[i].BS == '' || oddsArray[i].BS == undefined){
            this.homeTeamML = oddsArray[i].OD;
          }
        } else if(oddsArray[i].NA == this.awayTeam && oddsArray[i].HA == ''){
          if(oddsArray[i].BS == '' || oddsArray[i].BS == undefined){
            this.awayTeamML = oddsArray[i].OD;
          }
        } else if(oddsArray[i].NA == this.awayTeam && oddsArray[i].HA != ''){
          if((parseFloat(this.awayScore) + parseFloat(oddsArray[i].HA) - parseFloat(this.homeScore)) < 1){
            this.awayTeamRL = oddsArray[i].HA;
            this.awayTeamRLOdds = oddsArray[i].OD;
          } else {
            this.awayTeamRLArray.push({number: oddsArray[i].HA, odds: oddsArray[i].OD});
          }
        } else if(oddsArray[i].NA == this.homeTeam && oddsArray[i].HA != ''){
          console.log(this.homeScore + parseFloat(oddsArray[i].HA));
          if((parseFloat(this.homeScore) + parseFloat(oddsArray[i].HA) - parseFloat(this.awayScore)) < 1){
            this.homeTeamRL = oddsArray[i].HA;
            this.homeTeamRLOdds = oddsArray[i].OD;
          } else {
            this.homeTeamRLArray.push({number: oddsArray[i].HA, odds: oddsArray[i].OD});
          }
        }
      }
    }
  }

  static convertOdds(odd){
    if(odd != null && odd != undefined && typeof odd == 'string'){
      odd = odd.split('/');
      if(odd.length>0){
        odd[0] = parseInt(odd[0]);
        odd[1] = parseInt(odd[1]);
        var decOdd = (odd[0]/odd[1]) + 1.00;
        if(decOdd >= 2){
          return Math.round((decOdd - 1)*100);
        }else{
          return Math.round((-100)/(decOdd-1));
        }
      }
    }
    return odd;
  }

}

module.exports = Bet365Live;
