const express = require('express');
const router = express.Router();
const request = require('request');
const apicache = require('apicache');
const Action = require('../classes/actionClass.js');

let cache = apicache.middleware;

router.get('/mlb', cache('10 minutes'), function(req, res, next){

  var headers = {
    'x-api-key':'d3e32b4c-80f4-4522-8054-2992b1177805'
  }
  var actions = [];

  var options = {
    url: 'https://jsonodds.com/api/odds',
    method: 'GET',
    headers: headers
  }
  // Start the request
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

  module.exports = router;
