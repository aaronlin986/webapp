const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        UserID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Username: {
            type: DataTypes.STRING,
            unique: true
        },
        Password: {
            type: DataTypes.CHAR(60),
            allowNull: false
        },
        IsAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    return User;
}