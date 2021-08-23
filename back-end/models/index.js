const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    username:"root",
    password:"abc123", // fill with password
    database:"webapp_db",
    host:"localhost"
});

const db = {};

const models = [
    require('./user'),
    require('./item'),
    require('./order'),
    require('./OrderItems')
];

for (const model of models) {
    const modelObj = model(sequelize, DataTypes);
    db[modelObj.name] = modelObj;
}

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
