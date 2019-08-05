var express = require('express');

exports.register = (app) => {

    app.use('/api/pay', require('./api/payments'));
}