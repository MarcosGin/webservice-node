var express = require('express');
var path = require('path');
var rfs = require('rotating-file-stream');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
require('dotenv').config();

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

function generateName(time, index) {
    if(! time)
        return 'access.log';

    return 'access.'+ time.toISOString() + '.' + index + '.log';
}

var accessLogStream = rfs(generateName, {
    interval: '1d', // rotate daily
    path: process.env.APP_LOG_PATH
});

app.use(logger('combined', {
    stream: accessLogStream
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send({ error: 'Not found endpoint, check the docs' })
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).send({ error: err })
});

module.exports = app;
