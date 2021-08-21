const models = require('../models');
const fs = require('fs');

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

exports.addItem = async (itemName, itemPrice, imgUrl) => {
    let newItem = {};
    try {
        newItem = await models.Item.create({
            ItemName: itemName,
            Price: itemPrice,
            ImageUrl: imgUrl
        });
    } catch(error) {
        return {
            error: 'Something went wrong',
            reason: error,
        };
    }
    return { ok: 'Success', item: newItem};
}

exports.importItemList = async () => {

}