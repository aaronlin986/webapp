const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    username:"root",
    password:"password", // fill with password 7k8%te6V$fWgy$Ud
    database:"localhost",
    host:"localhost"
});

const models = [
    require('./models/user'),
    require('./models/item'),
    require('./models/order')
];

for (const model of models) {
    model(sequelize);
}

module.exports = sequelize;
