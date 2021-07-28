const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', (req, res) => {
    userController.createUser(req.body.username, req.body.password).then((result) => {
        if (result.error) res.status(400);
        res.send(result);
    });
});

router.post('/login', (req, res) => {
    userController.login(req.body.username, req.body.password).then((result) => {
        if (result.error)  {
            res.status(400);
            res.send(result);
        } else {
            res.cookie('access_token', result.access_token, {
                maxAge: new Date(Date.now() + (1000 * 60 * 60 * 24 * 7))
            });
            res.send({ ok: result.ok });
        }
    });
});

router.get('/logout', (req, res) => {
    res.clearCookie('access_token');
    res.send({
        ok: 'Logged out'
    });
});

module.exports = router;