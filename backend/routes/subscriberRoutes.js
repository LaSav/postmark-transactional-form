const express = require('express');
const router = express.Router();
const { addSubscriber } = require('../controllers/subscriberController');

router.route('/').post(addSubscriber);

module.exports = router;
