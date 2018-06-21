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
    amount: req.body.amount
	});

	Bet.placeBet(bet, function(err,user){
		if(err){
			res.json({success: false, msg: 'Failed to place bet'});
		} else {
			res.json({success: true, msg: 'Bet placed'});
		}
	});
});

module.exports = router;
