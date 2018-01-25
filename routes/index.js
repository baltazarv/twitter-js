const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
  let allTweets = tweetBank.list();
  res.render( 'index', { title: 'Welcome to Twitter.js', tweets: allTweets, showForm: true } );
});

router.get('/users/:name', function(req, res, next) {
  var tweetsForName = tweetBank.find( { name: req.params.name } );
  // console.log('get list:', id, list);
  res.render( 'index', { title: 'Tweets from ' + req.params.name, tweets: tweetsForName, showForm: true, username: req.params.name } );
});

router.get('/tweets/:id', function(req, res, next) {
  var tweetsForId = tweetBank.find( { id: req.params.id * 1 } );
  // console.log('get list:', id, list);
  res.render( 'index', { title: '1 Tweet', tweets: tweetsForId } );
});

router.post('/tweets', function(req, res, next) {
  tweetBank.add(req.body.name, req.body.text);
  res.redirect('/');
});

module.exports = router;
