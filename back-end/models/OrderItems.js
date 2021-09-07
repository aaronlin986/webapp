module.exports = (sequelize, DataTypes) => {
    const OrderItems = sequelize.define('OrderItems', {
        ItemID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ItemQuantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        OrderID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return OrderItems
}