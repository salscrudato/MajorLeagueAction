const express = require('express');
const router = express.Router();
const request = require('request');
const apicache = require('apicache');
const Action = require('../classes/action.js');
const Action2 = require('../classes/action2.js');
const BetsApiAction = require('../classes/betsApiAction.js');
const Bet365Live = require('../classes/Bet365Live.js');

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
  var eventsUrl = 'https://api.betsapi.com/v1/bet365/inplay_filter?token='
  + apiKey + '&sport_id=' + sportId;
  //+ apiKey + '&sport_id=' + sportId + '&league_id=' + leagueId;
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

router.get('/upcomingEvents', function(req, res, next){
  var sportId = req.query.sportId;
  var leagueId = req.query.leagueId;
  var apiKey = '10744-6nAVE6st6PH0mD';
  var eventsUrl = 'https://api.betsapi.com/v1/bet365/upcoming?token='
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
          homeTeam: events.results[i].away.name,
          homeTeamImage: events.results[i].home.image_id,
          awayTeam: events.results[i].home.name,
          awayTeamImage: events.results[i].away.image_id,
          sport: sportId
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
  var apiKey = '10744-6nAVE6st6PH0mD';
  var oddsUrl = 'https://api.betsapi.com/v1/bet365/event?token=' + apiKey + '&FI=' + eventId;
  console.log(oddsUrl);
  var oddsOptions = {
    url: oddsUrl,
    method: 'GET'
  }
  request(oddsOptions, function (error, response, body){
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      if(data != undefined && data.results != undefined){
        var oddsArr = data.results[0];
        var liveEventOdds = new Bet365Live(eventId, homeTeam, awayTeam, oddsArr);
      }
      res.send(liveEventOdds);
    }
  });
});

router.get('/upcomingEventOdds', function(req, res, next){
  var eventId = req.query.eventId;
  var homeTeam = req.query.homeTeam;
  var awayTeam = req.query.awayTeam;
  var gameTime = req.query.gameTime;
  var sport = req.query.sport;
  var apiKey = '10744-6nAVE6st6PH0mD';
  var oddsUrl = 'https://api.betsapi.com/v1/bet365/start_sp?token=' + apiKey + '&FI=' + eventId;
  var oddsOptions = {
    url: oddsUrl,
    method: 'GET'
  }
  request(oddsOptions, function (error, response, body){
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      console.log('getting for ' + eventId);
      var oddsArr = data.results[0].main;
      var eventOdds = new Action2(eventId, gameTime, oddsArr, sport, homeTeam, awayTeam);
      res.send(eventOdds);
    }
  });
});

module.exports = router;
