const sequelize = require('sequelize');
const models = require('../models');
const bcrypt = require('bcrypt')

exports.createUser = async (username, password) => {
    let newUser = {};
    let passwordHash = await bcrypt.hash(password, 10);
    try {
        newUser = await models.User.create({
            Username: username,
            PasswordHash: passwordHash
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

exports.login = async (username, password) => {
    let user = {};
    user = await models.User.findOne({where: {username}});
    let accExists = user === null 
        ? false
        : bcrypt.compare(password, user.PasswordHash);
    if(!accExists){
        return {error: 'Username or password is incorrect', reason: error};
    }
    return user;
}