const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authentication = require('../utils/authenticaction');

router.get('/verify-admin', async (req, res) => {
    if (!req.cookies.access_token) {
        res.send({
            ok: 'Not logged in',
            IsAdmin: false
        });
    } else {
        const authorized = await authentication.validateJWT(req.cookies.access_token);
        const result = await adminController.verifyAdmin(authorized.username);
        res.send({
            ok: 'Successfully verified admin',
            IsAdmin: result
        });
    }
});

router.post('/inventory', async (req, res) => {
    if(!req.cookies.access_token){
        res.send({
            ok: 'Not logged in',
            isAdmin: false
        });
    }
    else{
        const authorized = await authentication.validateJWT(req.cookies.access_token);
        const result = await adminController.verifyAdmin(authorized.username);
        
        if(result){
            const status = await adminController.addToInventory(req.body.name, req.body.cost, req.body.id)
            if(status.error){
                res.status(400);
            }
            res.send(status)
        }
        else{
            res.status(401).send({
                error: 'User does not have authorized access to this page'
            })
        }
    }
})

module.exports = router;