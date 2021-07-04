const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    username:"root",
    password:"password", // fill with password
    database:"localhost",
    host:"localhost"
});

const models = [
    require('./user'),
    require('./item'),
    require('./order')
];

for (const model of models) {
    model(sequelize);
}

module.exports = sequelize;
