// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  TableName: 'CUSTOMER_LIST2',
  Item: {
    'CUSTOMER_ID' : {N: '2'},
    'CUSTOMER_NAME' : {S: 'Richard Roe 2'},
    'Stuff' :  {S: 'likes art'}
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