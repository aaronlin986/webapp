module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        ItemID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ItemName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    Item.associate = (models) => {
        Item.belongsToMany(models.Order, { through: 'OrderItems', foreignKey: 'ItemID' });
    }
    return Item;
}