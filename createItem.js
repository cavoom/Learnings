// This script writes a single item to a dynamoDB table
// N is an integer and must be passed as a string in the program
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});


var newTime = new Date();
var timeId = newTime.getTime();
var theRandom = String(Math.floor((Math.random() * 9999)));
var uniqueId = timeId + theRandom;
var theDate = new Date();
// Today's date
theDate = theDate.toString();

// Setup object to place in DynamoDB
var params = {
  TableName: 'admr_analytics',
  Item: {
    'analyticsId' : {S: uniqueId},
    'theDate' : {S: theDate},
    'theType' : {S: "General Intent"},
    'theItem' : {S: "Join"},
    'alexaId' : {S : "adfqwerx44567afdadfR"},
    'theResponse': {S: "You can join by getting a text message"}
  }
};

// Call DynamoDB to add the item to the table
ddb.putItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});