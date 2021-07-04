const express = require('express');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/userRouter');
// const itemRouter = require('./routes/itemRouter');
// const orderRouter = require('./routes/orderRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', userRouter);
// app.use('/items', itemRouter);
// app.use('/orders', orderRouter);

module.exports = app;