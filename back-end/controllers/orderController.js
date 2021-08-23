const models = require('../models')

exports.submitOrder = async (items, username) => {
    let newOrders = {}
    try{
        console.log(items)
        newOrders = await models.Order.create({
            Username: username
        })
        items.map(async (i) => {
            const item = await models.Item.findByPk(i.id)
            if(item){
                console.log(models.Order.addItem)
                await newOrders.addItem(item)
            }
        })
    }
    catch(error){
        console.log(error)
    }
}