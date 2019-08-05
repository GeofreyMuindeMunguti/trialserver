var express = require('express');
const controller = require('./payments.controller');

var router = express.Router();

router.post('/', controller.pay);
router.post('/confirm', controller.confirm);

module.exports = router;