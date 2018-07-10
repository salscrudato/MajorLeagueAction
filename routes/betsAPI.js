const express = require('express');
const router = express.Router();
const request = require('request');
const reqThen = require('then-request');
const apicache = require('apicache');
const MlbLiveOdds = require('../classes/mlbLiveOddsClass.js');
//Can add global variables here i think
const apiKey = '9095-0czQGV5X2XtHOn';
var events = [];
var eventReturns = 0;

router.get('/mlbEvents', function(req, res, next){

  events = [];

  var tempEvents = [];
  var sportId = '16';
  var eventsUrl = 'https://api.betsapi.com/v1/events/inplay?sport_id=16&token=' +
  apiKey + '&league_id=225';

  var options = {
    url: eventsUrl,
    method: 'GET'
  }
  // This request gets all events
  request(options, function (error, response, body) {

    if (!error && response.statusCode == 200) {
      var eventData = JSON.parse(body);
      var numEvents = eventData.results.length;

      for (var i = 0; i < numEvents; i++){
        var eventId = eventData.results[i].id;
        var eventTime = eventData.results[i].id;
        var eventHomeTeam = eventData.results[i].home.name;
        var eventHomeTeamImage = eventData.results[i].home.image_id;
        var eventAwayTeam = eventData.results[i].away.name;
        var eventAwayTeamImage = eventData.results[i].away.image_id;
        tempEvents.push({
          id: eventId,
          time: eventTime,
          homeTeam: eventHomeTeam,
          homeTeamImage: eventHomeTeamImage,
          awayTeam: eventAwayTeam,
          awayTeamImage: eventAwayTeamImage
        });
      }
      res.send(tempEvents);
    }

  });
});

router.post('/mlbEventOdds', function(req, res, next){
  console.log(req.body);
  eventId = req.body.id;

  var oddsUrl = 'https://api.betsapi.com/v1/event/odds?token='+apiKey+'&source=bet365&event_id='+eventId;
  var oddsOptions = {
    url: oddsUrl,
    method: 'GET'
  }
  request(oddsOptions, function (error, response, body){

    if (!error && response.statusCode == 200) {
      eventHomeTeam = req.body.homeTeam;
      eventHomeTeamImage = req.body.homeTeamImage;
      eventAwayTeam = req.body.awayTeam;
      eventAwayTeamImage = req.body.awayTeamImage;
      var data = JSON.parse(body);
      var overUnder = data.results["16_3"][0].handicap;
      var runLine = data.results["16_2"][0].handicap;
      var homeTeamRL = data.results["16_2"][0].home_od;
      var awayTeamRL = data.results["16_2"][0].away_od;
      var homeTeamML = data.results["16_1"][0].home_od;
      var awayTeamML = data.results["16_1"][0].away_od;
      console.log(eventHomeTeam);
      var liveOdds = new MlbLiveOdds(eventId, eventHomeTeam, eventAwayTeam, eventHomeTeamImage, eventAwayTeamImage,
      overUnder, homeTeamML, awayTeamML, homeTeamRL, awayTeamRL, runLine);
      res.send(liveOdds);
    }
  });
});


// function getAllEvents(callback){
//   var tempEvents = [];
//   var sportId = '16';
//   var eventsUrl = 'https://api.betsapi.com/v1/events/inplay?sport_id=16&token=' +
//   apiKey + '&league_id=225';
//
//   var options = {
//     url: eventsUrl,
//     method: 'GET'
//   }
//   // This request gets all events
//   request(options, function (error, response, body) {
//
//     if (!error && response.statusCode == 200) {
//       var eventData = JSON.parse(body);
//       var numEvents = eventData.results.length;
//
//       for (var i = 0; i < numEvents; i++){
//         var eventId = eventData.results[i].id;
//         var eventTime = eventData.results[i].id;
//         var eventHomeTeam = eventData.results[i].home.name;
//         var eventHomeTeamImage = eventData.results[i].home.image_id;
//         var eventAwayTeam = eventData.results[i].away.name;
//         var eventAwayTeamImage = eventData.results[i].away.image_id;
//         tempEvents.push({
//           id: eventId,
//           time: eventTime,
//           homeTeam: eventHomeTeam,
//           homeTeamImage: eventHomeTeamImage,
//           awayTeam: eventAwayTeam,
//           awayTeamImage: eventAwayTeamImage
//         });
//       }
//       callback(tempEvents);
//     }
//   });
// }

function getEventOdds(event, callback){
  eventId = event.id;
  eventHomeTeam = event.homeTeam;
  eventHomeTeamImage = event.homeTeamImage;
  eventAwayTeam = event.awayTeam;
  eventAwayTeamImage = event.awayTeamImage;
  var oddsUrl = 'https://api.betsapi.com/v1/event/odds?token='+apiKey+'&source=bet365&event_id='+eventId;
  var oddsOptions = {
    url: oddsUrl,
    method: 'GET'
  }
  request(oddsOptions, function (error, response, body){

    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      var overUnder = data.results["16_3"][0].handicap;
      var runLine = data.results["16_2"][0].handicap;
      var homeTeamRL = data.results["16_2"][0].home_od;
      var awayTeamRL = data.results["16_2"][0].away_od;
      var homeTeamML = data.results["16_1"][0].home_od;
      var awayTeamML = data.results["16_1"][0].away_od;
      var liveOdds = new MlbLiveOdds(eventId, eventHomeTeam, eventAwayTeam, eventHomeTeamImage, eventAwayTeamImage,
      overUnder, homeTeamML, awayTeamML, homeTeamRL, awayTeamRL, runLine);
      events.push(liveOdds);
      eventReturns = eventReturns + 1;
      callback();
    }
  });

}


module.exports = router;
