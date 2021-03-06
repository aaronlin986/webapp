module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        OrderID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Username: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    Order.associate = (models) => {
        Order.belongsToMany(models.Item, { through: 'OrderItems', foreignKey: 'OrderID' });
        Order.belongsTo(models.User);
    }
    return Order;
}