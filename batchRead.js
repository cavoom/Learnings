// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  RequestItems: {
    'CUSTOMER_LIST2': {
      Keys: [
        {'CUSTOMER_ID': {N: '1'}}
      ],
      //ProjectionExpression: 'KEY_NAME, ATTRIBUTE'
    }
  }
};

ddb.batchGetItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    data.Responses.CUSTOMER_LIST2.forEach(function(element, index, array) {
      console.log(element);
    });
  }
});