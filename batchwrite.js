// This script batch writes to Da ynamoDB table
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-1'});

// Create DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

// for test of an array
var testArray = [
    {
        PutRequest: {
          Item: {
            "id": { "S": "xxx26rq" },
              "theSport": { "S": "running" },
              "theSecondSport": { "N": "222" }
          }
        }
      },       
      {
       PutRequest: {
         Item: {
           "id": { "S": "xxx26r45x5q" },
             "theSport": { "S": "running" },
             "theSecondSport": { "N": "222" }
         }
       }
     }
];

//console.log(testArray);

var params = {
  RequestItems: {
    "admr_questions": //testArray
    [
       {
         PutRequest: {
           Item: {
             "id": { "S": "aaa26rrr" },
               "theSport": { "S": "running" },
               "theSecondSport": { "N": "222" }
           }
         }
       },       
       {
        PutRequest: {
          Item: {
            "id": { "S": "aaa26r45x5rr" },
              "theSport": { "S": "running" },
              "theSecondSport": { "N": "222" }
          }
        }
      }

    ]
  }
};

//console.log('params:', params.RequestItems.admr_questions[0].PutRequest.Item.id.S);

ddb.batchWriteItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});