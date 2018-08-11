class BetsApiAction {
  constructor(id, homeTeam, awayTeam, homeTeamImage, awayTeamImage, overUnder, overLine, underLine, homeTeamML, awayTeamML, homeTeamRL, awayTeamRL, runLine) {
    this.id = id;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.homeImagePath = 'https://assets.b365api.com/images/team/b/'+homeTeamImage+'.png';
    this.awayImagePath = 'https://assets.b365api.com/images/team/b/'+awayTeamImage+'.png';;
    this.totalNumber = overUnder;
    this.homeTeamML = this.constructor.convertOdds(homeTeamML);
    this.awayTeamML = this.constructor.convertOdds(awayTeamML);
    this.homeTeamRLOdds = this.constructor.convertOdds(homeTeamRL);
    this.awayTeamRLOdds = this.constructor.convertOdds(awayTeamRL);
    this.overLine = this.constructor.convertOdds(overLine);
    this.underLine = this.constructor.convertOdds(underLine);
    this.homeTeamRL = runLine*-1;
    this.awayTeamRL = runLine;
  }

  static convertOdds(odd){
    if(odd >= 2){
      return Math.round((odd - 1)*100);
    }else{
      return Math.round((-100)/(odd-1));
    }
  }
}

module.exports = BetsApiAction;
