const express = require('express');
const router = express.Router();
const Bet = require('../models/bet');
const config = require('../config/database');

//Route to place a bet
router.post('/placeBet', function(req, res, next){
	let bet = new Bet({
		userId: req.body.userId,
    oddsId: req.body.oddsId,
    description: req.body.description,
    odds: req.body.odds,
    betAmount: req.body.betAmount,
		betType: req.body.betType,
		winAmount: req.body.winAmount,
		closed: 0
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
	console.log(userId);
	var query = {userId: userId}
	Bet.find(query, function(err, bet) {
    	var pendingBets = [];
    	bet.forEach(function(oneBet) {
      		pendingBets.push(oneBet);
    	});
    	//console.log('The first name in the list is '+userMap[0].name);
    	res.send(pendingBets);
  });
});

router.get('/getAllPendings', function(req, res, next){
	var query = {closed: false}
	Bet.find(query, function(err, bet) {
    	var pendingBets = [];
    	bet.forEach(function(oneBet) {
      		pendingBets.push(oneBet);
    	});
    	//console.log('The first name in the list is '+userMap[0].name);
    	res.send(pendingBets);
  });
});

module.exports = router;
