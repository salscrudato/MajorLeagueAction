const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Bet schema
const BetSchema = mongoose.Schema({
  username: {
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
  amount: {
    type: Number
  }
});

const Bet = module.exports = mongoose.model('Bet', BetSchema);

module.exports.placeBet = function(bet, callback){
  bet.save(callback);
}
