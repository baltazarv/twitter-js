const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:id', function(req, res) {
  var id = req.params.id;
  // console.log( req.params.name );
  var list = tweetBank.find( {id: id} );
  console.log('get list:', id, list);
  res.render( 'index', { list: list } );
});

module.exports = router;
