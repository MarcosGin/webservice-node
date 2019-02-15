'use strict';
var fs = require('fs');
var httpRequest = require('request');

module.exports = class SQSProducer {
    constructor(){
        this.urlProducer = process.env.APP_PRODUCER_SQS;

        try{
            this.listOfSQS = JSON.parse(fs.readFileSync(process.env.APP_SQS, 'utf8'));
        }catch (err) {
            console.log(`Not found file of list sqs ${err}`);
        }

    }

    sendToQueue(data, sqsName, callback){
        var result = { status: false, message: "Error sending the data to SQS"};
        httpRequest.post({
            headers: {'Content-Type' : 'application/json'},
            url: this.urlProducer + this.listOfSQS[sqsName].name,
            json: data
        }, function (error,response, body) {
            if (error || response.statusCode !== 200) {
                return callback(result);
            }
            result.status = true;
            result.message = "Data send correctly";
            return callback(result);

        });

    }
};