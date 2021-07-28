const sequelize = require('sequelize');
const models = require('../models');
const bcrypt = require('bcrypt');

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
    try {
        user = await models.User.findOne({where: {username}});
    } catch (error) {
        return {
            error: 'Invalid user',
            reason: error
        }
    }
    if (!user) {
        return {
            error: 'User not found',
            reason: 'User does not exist in DB'
        }
    }
    let checkPassword = false;
    try {
        checkPassword = await bcrypt.compare(password, user.PasswordHash);
    } catch (error) {
        return {
            error: 'Error checking password', 
            reason: error
        };
    }
    if(!checkPassword){
        return {
            error: 'Password is incorrect', 
            reason: 'User did not input correct password'
        };
    }
    return { ok: 'Success', user: user };
}