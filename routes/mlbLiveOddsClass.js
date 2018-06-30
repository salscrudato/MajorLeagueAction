class MlbLiveOdds {
  constructor(id, homeTeam, awayTeam, homeTeamImage, awayTeamImage, overUnder, homeTeamML, awayTeamML, homeTeamRL, awayTeamRL, runLine) {
      this.id = id;
      this.homeTeam = homeTeam;
      this.awayTeam = awayTeam;
      this.homeTeamImage = 'https://assets.b365api.com/images/team/l/'+homeTeamImage+'.png';
      this.awayTeamImage = 'https://assets.b365api.com/images/team/l/'+awayTeamImage+'.png';;
      this.overUnder = overUnder;
      this.homeTeamML = this.constructor.convertOdds(homeTeamML);
      this.awayTeamML = this.constructor.convertOdds(awayTeamML);
      this.homeTeamRL = this.constructor.convertOdds(homeTeamRL);
      this.awayTeamRL = this.constructor.convertOdds(awayTeamRL);
      this.homeRunLine = runLine*-1;
      this.awayRunLine = runLine;
    }

    static convertOdds(odd){

      if(odd >= 2){
        return Math.round((odd - 1)*100);
      }else{
        return Math.round((-100)/(odd-1));
      }

    }

}

  module.exports = MlbLiveOdds;
