const SQSProducer = require("../services/sqs_producer");

module.exports = {
    add(req,res){
        let sqs = new SQSProducer();
        sqs.sendToQueue({ "params": req.params, "body": req.body}, "SUBSCRIPTIONS_NOTIFICATIONS", function (result) {
            return res.status(200).send(result)
        });
    },

};