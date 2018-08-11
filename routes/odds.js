const express = require('express');
const router = express.Router();
const request = require('request');
const apicache = require('apicache');
const Action = require('../classes/action.js');
const BetsApiAction = require('../classes/betsApiAction.js');

let cache = apicache.middleware;

router.get('/all', cache('10 minutes'), function(req, res, next){
  var headers = {
    'x-api-key':'d3e32b4c-80f4-4522-8054-2992b1177805'
  }
  var actions = [];
  var options = {
    url: 'https://jsonodds.com/api/odds',
    method: 'GET',
    headers: headers
  }
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      for(var i = 0; i < data.length; i++){
        var action = new Action(
          data[i].ID,
          data[i].Details,
          data[i].MatchTime,
          data[i].Odds,
          data[i].HomeTeam,
          data[i].AwayTeam,
          data[i].HomePitcher,
          data[i].AwayPitcher,
          data[i].Sport
        );
        actions.push(action);
      }
      res.send(actions);
    }
  });
});

router.get('/events', function(req, res, next){
  var sportId = req.query.sportId;
  var leagueId = req.query.leagueId;
  var apiKey = '10744-6nAVE6st6PH0mD';
  var eventsUrl = 'https://api.betsapi.com/v1/events/inplay?token='
  + apiKey + '&sport_id=' + sportId + '&league_id=' + leagueId;
  var options = {
    url:eventsUrl,
    method: 'GET'
  }
  var tempEventsArray = [];
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var events = JSON.parse(body);
      for(var i = 0; i < events.results.length; i++){
        tempEventsArray.push({
          id: events.results[i].id,
          time: events.results[i].time,
          homeTeam: events.results[i].home.name,
          homeTeamImage: events.results[i].home.image_id,
          awayTeam: events.results[i].away.name,
          awayTeamImage: events.results[i].away.image_id
        });
      }
      res.send(tempEventsArray);
    } else {
      res.send({success:false, msg:'Failed to get events'});
    }
  });
});

router.get('/eventOdds', function(req, res, next){
  var eventId = req.query.eventId;
  var homeTeam = req.query.homeTeam;
  var homeTeamImage = req.query.homeTeamImage;
  var awayTeam = req.query.awayTeam;
  var awayTeamImage = req.query.awayTeamImage;
  console.log(req.query)
  var apiKey = '10744-6nAVE6st6PH0mD';
  var oddsUrl = 'https://api.betsapi.com/v1/event/odds?token=' + apiKey + '&event_id=' + eventId + '&source=bet365';
  console.log(oddsUrl);
  var oddsOptions = {
    url: oddsUrl,
    method: 'GET'
  }
  request(oddsOptions, function (error, response, body){
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      var overUnder = data.results["16_3"][0].handicap;
      var overLine = data.results["16_3"][0].over_od;
      var underLine = data.results["16_3"][0].under_od;
      var runLine = data.results["16_2"][0].handicap;
      var homeTeamRL = data.results["16_2"][0].home_od;
      var awayTeamRL = data.results["16_2"][0].away_od;
      var homeTeamML = data.results["16_1"][0].home_od;
      var awayTeamML = data.results["16_1"][0].away_od;
      var eventOdds = new BetsApiAction(eventId, homeTeam, awayTeam, homeTeamImage, awayTeamImage,
      overUnder, overLine, underLine, homeTeamML, awayTeamML, homeTeamRL, awayTeamRL, runLine);
      res.send(eventOdds);
    }
  });
});

module.exports = router;
