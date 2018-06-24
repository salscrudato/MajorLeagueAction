const express = require('express');
const router = express.Router();
const Bet = require('../models/bet');
const config = require('../config/database');

//Route to place a bet
router.post('/placeBet', function(req, res, next){
	let bet = new Bet({
		username: req.body.username,
    oddId: req.body.oddsId,
    description: req.body.description,
    odds: req.body.odds,
    betAmount: req.body.betAmount,
		winAmount: req.body.winAmount
	});

	Bet.placeBet(bet, function(err,user){
		if(err){
			res.json({success: false, msg: 'Failed to place bet'});
		} else {
			res.json({success: true, msg: 'Bet placed'});
		}
	});
});

router.post('/getPendings', function(req, res, next){
	const userId = req.body.user._id;
	var query = {username: userId}
	Bet.find(function(err, bet) {
    	var pendingBets = [];
    	bet.forEach(function(oneBet) {
      		pendingBets.push(oneBet);
    	});
    	//console.log('The first name in the list is '+userMap[0].name);
    	res.send(pendingBets);
  });
});

module.exports = router;
