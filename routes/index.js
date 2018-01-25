const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

// router.get('/css/style.css', function(req, res, next) {
//   res.sendFile('/css/style.css', { root: __dirname + '/../public' });
// });
router.use(express.static('public')); // req.path // fs.readFile // mime.lookup

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render( 'index', { title: 'Tweeter.js', tweets: tweets } );
});

router.get('/users/:id', function(req, res, next) {
  var id = req.params.id;
  // console.log( req.params.name );
  var list = tweetBank.find( {id: id} );
  // console.log('get list:', id, list);
  res.render( 'index', { list: list } );
});

module.exports = router;
