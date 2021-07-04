module.exports = (sequelize, DataTypes) => {
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
    Order.hasMany(Item, { foreignKey: 'ItemID'});
    Order.hasOne(User, { foreignKey: 'UserID'});
    return Order;
}