class Action {
  constructor(id, details, matchTime,
    odds, homeTeam, awayTeam, homePitcher, awayPitcher, sport) {
      this.id = id;
      this.details = details;
      this.matchDate = this.constructor.setDate(matchTime);
      this.matchTime = this.constructor.setTime(matchTime);
      if (sport == 0){
        this.homeTeam = homeTeam + ' [' + homePitcher + ']';
        this.awayTeam = awayTeam + ' [' + awayPitcher + ']';
      } else {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
      }
      for(var i = 0; i < odds.length; i++){
        if(odds[i].OddType=="Game"){
          this.homeTeamML = odds[i].MoneyLineHome;
          this.awayTeamML = odds[i].MoneyLineAway;
          this.homeTeamRL = odds[i].PointSpreadHome;
          this.homeTeamRLOdds = odds[i].PointSpreadHomeLine;
          this.awayTeamRL = odds[i].PointSpreadAway;
          this.awayTeamRLOdds = odds[i].PointSpreadAwayLine;
          this.totalNumber = odds[i].TotalNumber;
        }
      }
      this.homeImagePath = this.constructor.setHomeAndAwayImages(homeTeam);
      this.awayImagePath = this.constructor.setHomeAndAwayImages(awayTeam);
      this.sport = sport;
    }

    static setDate(gameTime){
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var year = Number(gameTime.substr(0,4));
      var month = Number(gameTime.substr(5,2));
      var day = Number(gameTime.substr(8,2));
      var hour = Number(gameTime.substr(11,2));
      if(hour < 4){
        day = day - 1;
      }
      return months[month - 1] + " " + day + " " + year;
    }

    static setTime(gameTime){
      var amOrPm;
      var hour = Number(gameTime.substr(11,2));
      //Move to EST
      var hour = hour - 4;
      if(hour < 0){
        hour = 24 + hour;
      }
      if(hour > 12){
        hour = hour-12;
        amOrPm = "PM";
      } else if(hour == 12) {
        amOrPm = "PM";
      } else {
        amOrPm = "AM";
      }
      return hour + gameTime.substr(13,3) + " " + amOrPm;
    }

    static setHomeAndAwayImages(team){
      switch (team){
        case "New York Mets":
        return '/assets/images/mets.png';
        break;
        case "Minnesota Twins":
        return '/assets/images/twins.png';
        break;
        case "Baltimore Orioles":
        return '/assets/images/orioles.png';
        break;
        case "Pittsburgh Pirates":
        return '/assets/images/pirates.png';
        break;
        case "Detroit Tigers":
        return '/assets/images/tigers.png';
        break;
        case "Kansas City Royals":
        return '/assets/images/royals.png';
        break;
        case "Seattle Mariners":
        return '/assets/images/mariners.png';
        break;
        case "Arizona Diamondbacks":
        return '/assets/images/diamondbacks.png';
        break;
        case "San Francisco Giants":
        return '/assets/images/giants.png';
        break;
        case "Tampa Bay Rays":
        return '/assets/images/rays.png';
        break;
        case "Texas Rangers":
        return '/assets/images/rangers.png';
        break;
        case "Milwaukee Brewers":
        return '/assets/images/brewers.png';
        break;
        case "New York Yankees":
        return '/assets/images/yankees.png';
        break;
        case "Washington Nationals":
        return '/assets/images/nationals.png';
        break;
        case "Houston Astros":
        return '/assets/images/astros.png';
        break;
        case "Los Angeles Dodgers":
        return '/assets/images/dodgers.png';
        break;
        case "Atlanta Braves":
        return '/assets/images/braves.png';
        break;
        case "Chicago Cubs":
        return '/assets/images/cubs.png';
        break;
        case "Miami Marlins":
        return '/assets/images/marlins.png';
        break;
        case "Boston Red Sox":
        return '/assets/images/redsox.png';
        break;
        case "Los Angeles Angels":
        return '/assets/images/angels.png';
        break;
        case "Oakland Athletics":
        return '/assets/images/athletics.png';
        break;
        case "Cincinnati Reds":
        return '/assets/images/reds.png';
        break;
        case "San Diego Padres":
        return '/assets/images/padres.png';
        break;
        case "Toronto Blue Jays":
        return '/assets/images/bluejays.png';
        break;
        case "Cleveland Indians":
        return '/assets/images/indians.png';
        break;
        case "Colorado Rockies":
        return '/assets/images/rockies.png';
        break;
        case "Philadelphia Phillies":
        return '/assets/images/phillies.png';
        break;
        case "St. Louis Cardinals":
        return '/assets/images/cardinals.png';
        break;
        case "Chicago White Sox":
        return '/assets/images/whitesox.png';
        break;
        default:
        return '/assets/images/mlb.png';
      }
    }
  }

  module.exports = Action;
