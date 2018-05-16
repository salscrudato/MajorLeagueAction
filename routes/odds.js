const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/mlb', function(req, res, next){

  var headers = {
      'x-api-key':'72812f76-4cbe-11e8-91fa-06aae780a1ef'
  }
  var actions = [];
  // Configure the request
  var options = {
      url: 'https://jsonodds.com/api/odds/mlb',
      method: 'GET',
      headers: headers
  }
  // Start the request
  request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          var data = JSON.parse(body);
          for(var i = 0; i < data.length; i++){
            var action = new Action(data[i].ID,
              data[i].Details,
              data[i].MatchTime,
              data[i].Odds,
              data[i].HomeTeam,
              data[i].AwayTeam
              );
              actions.push(action);
          }

          res.send(actions);
          //res.send(body);
      }
  });
});

class Action {
    constructor(id, details, matchTime,
      odds, homeTeam, awayTeam) {
        this.id = id;
        this.details = details;
        this.matchDate = matchTime.substr(0,10);
        this.matchTime = matchTime.substr(11,matchTime.length-3);
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        for(var i = 0; i < odds.length; i++){
          if(odds[i].OddType=="Game"){
            this.homeTeamML = odds[i].MoneyLineHome;
            this.awayTeamML = odds[i].MoneyLineAway;
          }
        }
        switch (this.homeTeam){
          case "New York Mets":
            this.homeImagePath = '/assets/images/mets.png';
            break;
          case "Minnesota Twins":
            this.homeImagePath = '/assets/images/twins.png';
            break;
          case "Baltimore Orioles":
            this.homeImagePath = '/assets/images/orioles.png';
            break;
          case "Pittsburgh Pirates":
            this.homeImagePath = '/assets/images/pirates.png';
            break;
          case "Detroit Tigers":
            this.homeImagePath = '/assets/images/tigers.png';
            break;
          case "Kansas City Royals":
            this.homeImagePath = '/assets/images/royals.png';
            break;
          case "Seattle Mariners":
            this.homeImagePath = '/assets/images/mariners.png';
            break;
          case "Arizona Diamondbacks":
            this.homeImagePath = '/assets/images/diamondbacks.png';
            break;
          case "San Francisco Giants":
            this.homeImagePath = '/assets/images/giants.png';
            break;
          case "Tampa Bay Rays":
            this.homeImagePath = '/assets/images/rays.png';
            break;
          case "Texas Rangers":
            this.homeImagePath = '/assets/images/rangers.png';
            break;
          case "Milwaukee Brewers":
            this.homeImagePath = '/assets/images/brewers.png';
            break;
          case "New York Yankees":
            this.homeImagePath = '/assets/images/yankees.png';
            break;
          case "Washington Nationals":
            this.homeImagePath = '/assets/images/nationals.png';
            break;
          case "Houston Astros":
            this.homeImagePath = '/assets/images/astros.png';
            break;
          case "Los Angeles Dodgers":
            this.homeImagePath = '/assets/images/dodgers.png';
            break;
          case "Atlanta Braves":
              this.homeImagePath = '/assets/images/braves.png';
              break;
          case "Chicago Cubs":
              this.homeImagePath = '/assets/images/cubs.png';
              break;
          case "Miami Marlins":
              this.homeImagePath = '/assets/images/marlins.png';
              break;
          case "Boston Red Sox":
              this.homeImagePath = '/assets/images/redsox.png';
              break;
          case "Los Angeles Angels":
              this.homeImagePath = '/assets/images/angels.png';
              break;
          case "Oakland Athletics":
              this.homeImagePath = '/assets/images/athletics.png';
              break;
          case "Cincinnati Reds":
              this.homeImagePath = '/assets/images/reds.png';
              break;
          default:
            this.homeImagePath = '/assets/images/mlb.png';
       }
       switch (this.awayTeam){
         case "New York Mets":
           this.awayImagePath = '/assets/images/mets.png';
           break;
         case "Minnesota Twins":
           this.awayImagePath = '/assets/images/twins.png';
           break;
         case "Baltimore Orioles":
           this.awayImagePath = '/assets/images/orioles.png';
           break;
         case "Pittsburgh Pirates":
           this.awayImagePath = '/assets/images/pirates.png';
           break;
         case "Detroit Tigers":
           this.awayImagePath = '/assets/images/tigers.png';
           break;
         case "Kansas City Royals":
           this.awayImagePath = '/assets/images/royals.png';
           break;
         case "Seattle Mariners":
           this.awayImagePath = '/assets/images/mariners.png';
           break;
         case "Arizona Diamondbacks":
           this.awayImagePath = '/assets/images/diamondbacks.png';
           break;
         case "San Francisco Giants":
           this.awayImagePath = '/assets/images/giants.png';
           break;
          case "Tampa Bay Rays":
           this.awayImagePath = '/assets/images/rays.png';
           break;
         case "Texas Rangers":
           this.awayImagePath = '/assets/images/rangers.png';
           break;
        case "Milwaukee Brewers":
           this.awayImagePath = '/assets/images/brewers.png';
           break;
        case "New York Yankees":
           this.awayImagePath = '/assets/images/yankees.png';
           break;
        case "Washington Nationals":
           this.awayImagePath = '/assets/images/nationals.png';
           break;
        case "Houston Astros":
           this.awayImagePath = '/assets/images/astros.png';
           break;
        case "Los Angeles Dodgers":
           this.awayImagePath = '/assets/images/dodgers.png';
           break;
        case "Atlanta Braves":
           this.awayImagePath = '/assets/images/braves.png';
           break;
        case "Chicago Cubs":
           this.awayImagePath = '/assets/images/cubs.png';
           break;
        case "Miami Marlins":
           this.awayImagePath = '/assets/images/marlins.png';
           break;
        case "Boston Red Sox":
           this.awayImagePath = '/assets/images/redsox.png';
           break;
        case "Los Angeles Angels":
           this.awayImagePath = '/assets/images/angels.png';
           break;
        case "Oakland Athletics":
           this.awayImagePath = '/assets/images/athletics.png';
           break;
        case "Cincinnati Reds":
           this.awayImagePath = '/assets/images/reds.png';
           break;
        default:
           this.awayImagePath = '/assets/images/mlb.png';
      }
    }
}

module.exports = router;
