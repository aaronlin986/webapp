const orderRouter = require('express').Router()
const orderController = require('../controllers/orderController')
const authentication = require('../utils/authenticaction')

orderRouter.post('/submit', async (req, res) => {
    if(!req.cookies.access_token){
        res.send({
            error: 'Not logged in'
        })
    }
    else{
        try{
            const jwt = await authentication.validateJWT(req.cookies.access_token)
            orderController.submitOrder(req.body.items, jwt.username)
            res.send()
        }
        catch(error){
            res.send({
                error
            })
        }
    }
})

module.exports = orderRouter
