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
        this.homeImagePath = '/assets/images/mets.png';
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
       }
    }
}

module.exports = router;
