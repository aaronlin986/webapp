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

    return Item;
}