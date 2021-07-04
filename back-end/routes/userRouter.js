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
        if (result.error) res.status(400);
        res.send(result);
    });
});