var express = require('express');
var router = express.Router();

const SubscriptionController = require('../controllers').subscription;
const PaymentController = require('../controllers').payment;
/* GET docs page. */
router.get('/docs', function(req, res, next) {
  res.render('index', { title: 'Media Moob - API Viva Bolivia' });
});

/* Notifications endpoints */
router.post('/notifications/:endUserId/subscription/:subscriptionId', SubscriptionController.add);

router.post('/notifications/:endUserId/payment/:transactionId', PaymentController.add);

/*  todo: verify if this endpoint is going to be implemented */
router.post('/notifications/service/:serviceId/keyword/:keywordId', function (req, res, next) {
    return res.json(req.params);
});

module.exports = router;
