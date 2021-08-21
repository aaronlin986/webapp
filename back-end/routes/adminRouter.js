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

router.post('/add-item', (req, res) => {
    adminController.addItem(req.body.itemName, req.body.itemPrice, req.body.imageUrl).then((result) => {
        if (result.error) res.status(400);
        res.send(result);
    });
});

module.exports = router;