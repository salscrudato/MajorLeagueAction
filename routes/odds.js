const express = require('express');
const router = express.Router();
const request = require('request');
const apicache = require('apicache');
const Action = require('../classes/action.js');
const Bet365Upcoming = require('../classes/Bet365Upcoming.js');
const Bet365Live = require('../classes/Bet365Live.js');
const Bet365LiveFootball = require('../classes/Bet365LiveFootball.js');
const Bet365Soccer = require('../classes/Bet365Soccer.js');
const Bet365Football = require('../classes/Bet365Football.js');

let cache = apicache.middleware;

//router.get('/all', cache('2 minutes'), function(req, res, next){
router.get('/all', cache('5 minutes'), function(req, res, next){
  //router.get('/all', function(req, res, next){
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
          data[i].Sport,
          data[i].League
        );
        actions.push(action);
      }
      res.send(actions);
    } else {
      res.send({success:false, msg: 'Failed to get odds'});
    }
  });
});

//Live Events
router.get('/events', cache(1000), function(req, res, next){
  var sportId = req.query.sportId;
  var leagueId = req.query.leagueId;
  var apiKey = '10744-6nAVE6st6PH0mD';
  var eventsUrl = 'https://api.betsapi.com/v1/bet365/inplay_filter?token='
  + apiKey + '&sport_id=' + sportId + '&league_id=' + leagueId;
  var options = {
    url:eventsUrl,
    method: 'GET'
  }
  if(leagueId == 0){
    leagueId = '';
  }
  var tempEventsArray = [];
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var events = JSON.parse(body);
      if(events != undefined && events.results != undefined){
        for(var i = 0; i < events.results.length; i++){
          tempEventsArray.push({
            id: events.results[i].id,
            time: events.results[i].time,
            homeTeam: events.results[i].home.name,
            homeTeamImage: events.results[i].home.image_id,
            awayTeam: events.results[i].away.name,
            awayTeamImage: events.results[i].away.image_id,
            epoch: events.results[i].time,
            sport: sportId
          });
        }
      }
      res.send(tempEventsArray);
    } else {
      res.send({success:false, msg:'Failed to get events'});
    }
  });
});

//Live Odds by Event
router.get('/eventOdds', cache(1000), function(req, res, next){
  var eventId = req.query.eventId;
  var homeTeam = req.query.homeTeam;
  var homeTeamImage = req.query.homeTeamImage;
  var awayTeam = req.query.awayTeam;
  var awayTeamImage = req.query.awayTeamImage;
  var sportId = req.query.sportId;
  var epoch = req.query.epoch;
  var apiKey = '10744-6nAVE6st6PH0mD';
  var oddsUrl = 'https://api.betsapi.com/v1/bet365/event?token=' + apiKey + '&FI=' + eventId;
  var oddsOptions = {
    url: oddsUrl,
    method: 'GET'
  }
  request(oddsOptions, function (error, response, body){
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      if(data != undefined && data.results != undefined){
        var oddsArr = data.results[0];
        if(sportId==16 || sportId==1){
          var liveEventOdds = new Bet365Live(eventId, homeTeam, awayTeam, oddsArr, sportId, epoch);
        } else if (sportId==12){
          var liveEventOdds = new Bet365LiveFootball(eventId, homeTeam, awayTeam, oddsArr, sportId, epoch);
        }
      }
      res.send(liveEventOdds);
    }
  });
});

//Upcoming Events
router.get('/upcomingEvents', cache(1000), function(req, res, next){
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
      if(events.results != undefined){
        for(var i = 0; i < events.results.length; i++){
          tempEventsArray.push({
            id: events.results[i].id,
            league: events.results[i].league.name,
            leagueId: events.results[i].league.id,
            time: events.results[i].time,
            homeTeam: events.results[i].away.name,
            homeTeamImage: events.results[i].home.image_id,
            awayTeam: events.results[i].home.name,
            awayTeamImage: events.results[i].away.image_id,
            sport: sportId
          });
        }
        res.send(tempEventsArray);
      }
    } else {
      res.send({success:false, msg:'Failed to get events'});
    }
  });
});

//Upcoming Odds by Event
router.get('/upcomingEventOdds', cache(1000), function(req, res, next){
  var eventId = req.query.eventId;
  var homeTeam = req.query.homeTeam;
  console.log('Getting Live Odds ' + homeTeam);
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
      if(data.results != undefined && data.success){
        var oddsArr = data.results[0].main;
        if(sport==16){
          var eventOdds = new Bet365Upcoming(eventId, gameTime, oddsArr, sport, homeTeam, awayTeam);
        } else if(sport==1){
          var eventOdds = new Bet365Soccer(eventId, gameTime, oddsArr, sport, homeTeam, awayTeam);
        } else if(sport==12){
          var eventOdds = new Bet365Football(eventId, gameTime, oddsArr, sport, homeTeam, awayTeam);
        }
      } else {
        var oddsArr = undefined;
      }
      //var eventOdds = new Bet365Upcoming(eventId, gameTime, oddsArr, sport, homeTeam, awayTeam);
      res.send(eventOdds);
    } else {
      res.send({success:false, msg:'Failed to get odds'});
    }
  });
});

module.exports = router;
