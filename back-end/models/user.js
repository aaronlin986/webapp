module.exports = (sequelize, DataTypes) => {
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
        PasswordHash: {
            type: DataTypes.CHAR(60),
            allowNull: false
        },
        IsAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    User.associate = (models) => {
        User.belongsToMany(models.Item, { through: 'Order', foreignKey: 'UserID' });
    }
    return User;
}