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
          this.overLine = odds[i].OverLine;
          this.underLine = odds[i].UnderLine;
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
        case "Philadelphia Eagles":
        return '/assets/images/Eagles.png';
        break;
        case "New York Giants":
        return '/assets/images/Giants.png';
        break;
        case "Washington Redskins":
        return '/assets/images/Redskins.png';
        break;
        case "Dallas Cowboys":
        return '/assets/images/Cowboys.png';
        break;
        case "New Orleans Saints":
        return '/assets/images/Saints.png';
        break;
        case "Atlanta Falcons":
        return '/assets/images/Falcons.png';
        break;
        case "Carolina Panthers":
        return '/assets/images/Panthers.png';
        break;
        case "Tampa Bay Buccaneers":
        return '/assets/images/Buccaneers.png';
        break;
        case "Green Bay Packers":
        return '/assets/images/Packers.png';
        break;
        case "Minnesota Vikings":
        return '/assets/images/Vikings.png';
        break;
        case "Chicago Bears":
        return '/assets/images/eagles.png';
        break;
        case "Detroit Lions":
        return '/assets/images/Lions.png';
        break;
        case "Seattle Seahawks":
        return '/assets/images/Seahawks.png';
        break;
        case "Los Angeles Rams":
        return '/assets/images/Rams.png';
        break;
        case "San Francisco 49ers":
        return '/assets/images/49ers.png';
        break;
        case "Arizona Cardinals":
        return '/assets/images/CardinalsNFL.png';
        break;
        case "New York Jets":
        return '/assets/images/Jets.png';
        break;
        case "New England Patriots":
        return '/assets/images/Patriots.png';
        break;
        case "Miami Dolphins":
        return '/assets/images/Dolphins.png';
        break;
        case "Buffalo Bills":
        return '/assets/images/Bills.png';
        break;
        case "Tennessee Titans":
        return '/assets/images/Titans.png';
        break;
        case "Jacksonville Jaguars":
        return '/assets/images/Jaguars.png';
        break;
        case "Houston Texans":
        return '/assets/images/Texans.png';
        break;
        case "Indianapolis Colts":
        return '/assets/images/Colts.png';
        break;
        case "Pittsburgh Steelers":
        return '/assets/images/Steelers.png';
        break;
        case "Baltimore Ravens":
        return '/assets/images/Ravens.png';
        break;
        case "Cincinnati Bengals":
        return '/assets/images/Bengals.png';
        break;
        case "Cleveland Browns":
        return '/assets/images/Browns.png';
        break;
        case "Los Angeles Chargers":
        return '/assets/images/Chargers.png';
        break;
        case "Kansas City Chiefs":
        return '/assets/images/Chiefs.png';
        break;
        case "Oakland Raiders":
        return '/assets/images/Raiders.png';
        break;
        case "Denver Broncos":
        return '/assets/images/Broncos.png';
        break;
        default:
        return '/assets/images/mlb.png';
      }
    }
  }

  module.exports = Action;
