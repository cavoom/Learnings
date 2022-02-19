// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

// Note that the TABLE was defined with a key object that included
// both CUSTOMER_ID and CUSTOMER_NAME
var params = {
  TableName: 'CUSTOMER_LIST2',
  Key: {
        'CUSTOMER_ID' : {N: '2'}
  },
  // Use ProjectionExpression to get one item
  // ProjectionExpression: 'CUSTOMER_NAME'
};

// Call DynamoDB to read the item from the table
ddb.getItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Item);
  }
});