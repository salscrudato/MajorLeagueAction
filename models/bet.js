const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Bet schema
const BetSchema = mongoose.Schema({
  userId: {
    type: String
  },
  username: {
    type: String
  },
  source: {
    type: String
  },
  oddsId: {
    type: String
  },
  description: {
    type: String
  },
  odds: {
    type: Number
  },
  betAmount: {
    type: Number
  },
  betType: {
    type:String
  },
  winAmount: {
    type:Number
  },
  status: {
    type:String
  }
});

const Bet = module.exports = mongoose.model('Bet', BetSchema);

module.exports.placeBet = function(bet, callback){
  bet.save(callback);
}

module.exports.closeBet = function(betId, status, callback){
	const closeStatus = {status: status};
	Bet.findByIdAndUpdate(betId, closeStatus, callback);
}
