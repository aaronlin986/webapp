const sequelize = require('sequelize');
const models = require('../models');

exports.createUser = async (username, password) => {
    let newUser = {};
    try {
        newUser = await models.User.create({
            Username: username,
            Password: password
        });
    } catch(error) {
        if (error instanceof sequelize.UniqueConstraintError) {
            return { error: 'Username must be unique', reason: error.errors[0].message };
        }
        return {
            error: 'Something went wrong',
            reason: error,
        };
    }
    return { ok: 'Success', user: newUser};
}