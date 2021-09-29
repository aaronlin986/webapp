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

exports.searchInventory = async (id) => {
    try{
        let foundItem = await models.Item.findOne({where: {ItemID: id}});
        if(foundItem){
            return {ok: 'Success', item: foundItem};
        }
        return {
            error: 'Failed to search for item with given ItemID',
            reason: "Couldn't find item with given ItemID"
        }
    } catch(error){
        return {
            error: 'Failed to search inventory',
            reason: error
        }
    }
}

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
        let foundItem = await this.searchInventory(id)
        if(foundItem.ok){
            await foundItem.item.destroy();
        }
        else{
            return foundItem
        }
        return {ok: 'Success', item: foundItem}
    } catch(error) {
        return {
            error: 'Failed to delete item from inventory',
            reason: error
        }
    }
};

exports.updateFromInventory = async (id, name, cost) => {
    try {
        let foundItem = await this.searchInventory(id);
        if(foundItem.ok){
            foundItem.name = name;
            foundItem.cost = cost;
            await foundItem.save();
        }
        else{
            return foundItem;
        }
        return {ok: 'Success', item: foundItem}
    } catch(error){
        return {
            error: 'Failed to update item from inventory',
            reason: error
        }
    }
}

