module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        Username: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true
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
        User.hasMany(models.Order)
    }
    return User;
}