const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');

//Register route
router.post('/register', function(req, res, next){
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
	});

	User.addUser(newUser, function(err,user){
		if(err){
			res.json({success: false, msg: 'Failed to register user'});
		} else {
			res.json({success: true, msg: 'User registered'});
		}
	});
});

router.post('/authenticate', function(req, res, next){
	const username = req.body.username;
	const password = req.body.password;

	User.getUserByUsername(username, function(err, user){
		if(err) throw err;
		if(!user){
			return res.json({success: false, msg: 'User not found'});
		}
		User.comparePassword(password, user.password, function(err, isMatch){
			if(err) throw err;
			if(isMatch){
				const token = jwt.sign({data: user}, config.secret, {
					expiresIn: 604800
				});
				res.json({
					success: true,
					token: 'JWT '+token,
					user: {
						id: user._id,
						name: user.name,
						username: user.username,
						email: user.email
					}
				});
			} else {
				return res.json({success: false, msg: 'Wrong Password'});
			}
		});
	});
});

router.get('/profile', passport.authenticate('jwt', {session:false}), function(req, res, next){
	res.json({user: req.user});
});

router.get('/allProfiles', function(req, res){
	//var query = {name: 'Salvatore Scrudato'}
	User.find(function(err, user) {
    	var userMap = [];
    	user.forEach(function(oneUser) {
      		userMap.push(oneUser);
    	});
    	//console.log('The first name in the list is '+userMap[0].name);
    	res.send(userMap);
  });
});

module.exports = router;
