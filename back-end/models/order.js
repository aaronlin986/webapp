const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Order = sequelize.define('Order', {
        OrderID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        UserID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ItemID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ItemQuantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Total: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    Order.associate = (models) => {
        Order.hasMany(models.Item, { foreignKey: 'ItemID'});
        Order.hasOne(models.User, { foreignKey: 'UserID'});
    }
    return Order;
}