const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');

const globalErrorHandler = require('./Controller/errorController');

const app = express();

const ToursRouter = require('./Routers/ToursRouter');
const UsersRouter = require('./Routers/UsersRouter');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(express.static(`${__dirname}/starter/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.headers);
  next();
});

app.use('/api/v1/tours', ToursRouter);
app.use('/api/v1/users', UsersRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
