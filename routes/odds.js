const express = require('express');
const router = express.Router();
const request = require('request');
const apicache = require('apicache');

let cache = apicache.middleware;

router.get('/mlb', cache('20 minutes'), function(req, res, next){
//router.get('/mlb', function(req, res, next){
  console.log('In Odds Service');
  //router.get('/mlb', function(req, res, next){
  var headers = {
    'x-api-key':'d3e32b4c-80f4-4522-8054-2992b1177805'
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
          data[i].AwayTeam,
          data[i].HomePitcher,
          data[i].AwayPitcher
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
    odds, homeTeam, awayTeam, homePitcher, awayPitcher) {
      this.id = id;
      this.details = details;
      this.matchDate = this.constructor.setTime(matchTime);
      this.matchTime = matchTime.substr(11,5);
      this.homeTeam = homeTeam + ' [' + homePitcher + ']';
      this.awayTeam = awayTeam + ' [' + awayPitcher + ']';
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
    }

    static setTime(gameTime){
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var month = Number(gameTime.substr(5,2));
      return months[month - 1] + " " + gameTime.substr(8,2);
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

  module.exports = router;
