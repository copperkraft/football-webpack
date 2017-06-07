const express = require('express');
const path = require('path');
const apiRegistrator = require('../api/registrator');

module.exports = function (app) {
    app.use(express.static(path.resolve(__dirname, '../../client/dist')));

    apiRegistrator(app);
};
