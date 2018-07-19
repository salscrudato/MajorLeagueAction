const express = require('express');
const router = express.Router();
const Bet = require('../models/bet');
const config = require('../config/database');

router.post('/placeBet', function(req, res, next){
	let bet = new Bet({
		userId: req.body.userId,
		username: req.body.username,
		oddsId: req.body.oddsId,
		source: req.body.source,
		description: req.body.description,
		odds: req.body.odds,
		betAmount: req.body.betAmount,
		betType: req.body.betType,
		winAmount: req.body.winAmount,
		status: 'open'
	});

	Bet.placeBet(bet, function(err, placedBet){
		if(err){
			res.json({success: false, msg: 'Failed to place bet'});
		} else {
			res.json({success: true, msg: 'Bet placed'});
		}
	});

});

router.get('/getBets', function(req, res, next){
	const userId = req.query.userId;
	const status = req.query.status;
	if(status=='all'){
		var query = {userId: userId};
	} else {
		var query = {userId: userId, status: status};
	}
	Bet.find(query, function(err, bet) {
		if(err){
			res.json({sucess:false, msg: 'Could not retrieve bets'});
		} else {
			var bets = [];
			bet.forEach(function(oneBet){
				bets.push(oneBet);
			});
			res.send(bets);
		}
	});
});

router.post('/closePending', function(req, res, next){
	const betId = req.body.betId;
	const status = req.body.status;
	Bet.closeBet(betId, status, function(err, bet) {
		if(err){
			res.json({sucess:false, msg: 'Failed to close bet'});
		} else {
			res.json({sucess:true, msg: 'Bet successfully closed'});
		}
	});
});

router.get('/getAllPendings', function(req, res, next){
	var query = {status: 'open'};
	Bet.find(query, function(err, bet) {
		if(err){
			res.json({success:false, msg: 'Could not retrieve all bets'});
		} else {
			var pendingBets = [];
			bet.forEach(function(oneBet) {
				pendingBets.push(oneBet);
			});
			res.send(pendingBets);
		}
	});
});

module.exports = router;
