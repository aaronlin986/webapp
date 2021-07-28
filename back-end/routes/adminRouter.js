const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/verify-admin', (req, res) => {
    if (!req.cookies.access_token) {
        res.send({
            ok: 'Not logged in',
            IsAdmin: false
        });
    } else {
        console.log(req);
    }
});

module.exports = router;