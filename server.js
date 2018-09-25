require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var method = require('method-override')

var indexRouter = require('./routes')
var usersRouter = require('./routes/users')
var eventsRouter = require('./routes/events')
// var vendorsRouter = require('./routes/vendors')

var app = express();

const mongoose = require('mongoose');
if (process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI); //{ useNewUrlParser: true }
} else {
  mongoose.connect('mongodb://localhost/users')
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(method('_method'))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/users/:userId/events', eventsRouter)
// app.use('/users/:userId/events/:eventId/vendors', vendorsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
