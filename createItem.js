// This script writes a single item to a dynamoDB table
// N is an integer and must be passed as a string in the program
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
var numbah = 145;
var someValue = numbah.toString();

var scoreArray = {
  name: 'Dave',
  anId: someValue,
  sport: 'biking hiking ttrking'
}


var params = {
  TableName: 'testerTable',
  Item: {
    'theId' : {N: scoreArray.anId},
    'theSport' : {S: scoreArray.sport},
    'theName' : {S: scoreArray.name}
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