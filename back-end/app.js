const express = require('express');
const cors = require("cors");
const db = require("./models");

const indexRouter = require('./routes/index');
const userRouter = require('./routes/userRouter');
// const itemRouter = require('./routes/itemRouter');
// const orderRouter = require('./routes/orderRouter');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', userRouter);
// app.use('/items', itemRouter);
// app.use('/orders', orderRouter);

db.sequelize.sync();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;