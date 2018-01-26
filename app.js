const express = require('express');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const tweetBank = require('./tweetBank');
const routes = require('./routes');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use(morgan('dev'));

// router.get('/css/style.css', function(req, res, next) {
//   res.sendFile('/css/style.css', { root: __dirname + '/../public' });
// });
app.use(express.static(__dirname + '/public')); // req.path // fs.readFile // mime.lookup

app.use(bodyParser.urlencoded( { extended: true })); // HTML form submits
app.use(bodyParser.json()); // AJAX form submits

// var locals = {
//   title: 'An Example',
//   people: [
//       { name: 'Gandalf'},
//       { name: 'Frodo' },
//       { name: 'Hermione'}
//   ]
// };

// nunjucks.render('index.html', locals, function(err, output) {
//   if (err) console.log(err);
// });

app.use('/', routes);

// app.use((req, res, next) => {
//   console.log(req.method, req.url);
//   next();
// });

// app.get('/', (req, res) => {
//   //res.send('hello');
//   res.render('index', locals);
// });

// app.get('/news', (req, res) => {
//   res.send('News');
// });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// tweetBank.add('baltazar', 'chirp');
// console.log(tweetBank.list());

