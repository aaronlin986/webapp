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

exports.addToInventory = async (name, cost, id) => {
    let newItem = {};
    try{
        let itemExists = await models.Item.findOne({where: {ItemID: id}})
        if(itemExists){
            return {
                error: 'Failed to add item to inventory',
                reason: 'Item already exists'
            }
        }
        newItem = await models.Item.create({
            ItemName: name,
            Price: cost,
            ItemID: id
        })
    } catch(error) {
        return {
            error: 'Failed to add item to inventory',
            reason: error
        }
    }
    return {ok: 'Success', item: newItem}
};

exports.deleteFromInventory = async (id) => {
    try{
        let foundItem = await models.Item.findOne({where: {ItemID: id}})
        if(foundItem){
            await foundItem.destroy();
        }
        else{
            return {
                error: 'Failed to delete item from inventory',
                reason: 'Item with given ID cannot be found'
            }
        }
        return {ok: 'Success', item: foundItem}
    } catch(error) {
        return {
            error: 'Failed to delete item from inventory',
            reason: error
        }
    }
}

