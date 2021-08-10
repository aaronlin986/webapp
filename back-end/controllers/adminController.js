const models = require('../models');

exports.verifyAdmin = async (username) => {
    let admin = {};
    try {
        admin = await models.User.findAll({
            limit: 1,
            raw: true,
            where: {
                Username: username,
                IsAdmin: true
            }
        });
    } catch (error) {
        return false;
    }

    if (!admin.length) {
        return false;
    }

    return true;
};


