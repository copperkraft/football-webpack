const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const apiRegistrator = require('../api/registrator');

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true
    }));

    app.use(express.static(path.resolve(__dirname, '../../client/dist')));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
    });
    apiRegistrator(app);
};
