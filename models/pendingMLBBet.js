const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Bet schema
const PendingMLBBetSchema = mongoose.Schema({
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
  betAmount: {
    type: Number
  },
  betType: {
    type:String
  },
  winAmount: {
    type:Number
  },
  closed: {
    type:Boolean
  }
});

const PendingMLBBet = module.exports = mongoose.model('PendingMLBBet', PendingMLBBetSchema);

module.exports.placeBet = function(bet, callback){
  bet.save(callback);
}
