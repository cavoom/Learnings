// You need the Key of the items for Batch Read

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  RequestItems: {
    'twentyOneTable': {
      Keys: [
        {'id': {S: '234567yu'}}
      ],
      //ProjectionExpression: 'KEY_NAME, ATTRIBUTE'
    }
  }
};

ddb.batchGetItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    data.Responses.twentyOneTable.forEach(function(element, index, array) {
      console.log(element);
    });
  }
});