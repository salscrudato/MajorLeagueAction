const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/mlb', function(req, res, next){

  var headers = {
      'x-api-key':'72812f76-4cbe-11e8-91fa-06aae780a1ef'
  }

  // Configure the request
  var options = {
      url: 'https://jsonodds.com/api/odds/mlb',
      method: 'GET',
      headers: headers
  }

  // Start the request
  request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          res.send(body);
      }
  });
});

module.exports = router;
