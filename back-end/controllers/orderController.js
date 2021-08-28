const models = require('../models')

exports.submitOrder = async (items, username) => {
    let newOrders = {}
    try{
        newOrders = await models.Order.create({
            Username: username
        })
        items.map(async (i) => {
            const item = await models.Item.findByPk(i.id)
            if(item){
                try{
                    await newOrders.addItem(item, {through: {ItemQuantity: i.quantity}})
                }
                catch(error){
                    console.log(error)
                }
                
            }
        })
    }
    catch(error){
        console.log(error)
    }
}