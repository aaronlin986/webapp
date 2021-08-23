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
        Order.belongsToMany(models.User, { through: 'OrderItems', foreignKey: 'OrderID' });
    }
    return Order;
}