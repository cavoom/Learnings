// This one will scan through DB and pull out the record
// with a specific value in a specific table column



    // Load the AWS SDK for Node.js.
    var AWS = require("aws-sdk");
    // Set the AWS Region.
    AWS.config.update({ region: "us-east-1" });
    
    // Create DynamoDB service object.
    var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
    
    const params = {
      // Specify which items in the results are returned.
    //   FilterExpression: "Subtitle = :topic AND Season = :s AND Episode = :e",
    FilterExpression: "campaignCode = :campaign",

      // Define the expression attribute value, which are substitutes for the values you want to compare.
      ExpressionAttributeValues: {
     ":campaign": {S: "aaa"}
      
  
      },
      // Set the projection expression, which are the attributes that you want.
      //ProjectionExpression: "Season, Episode, Title, Subtitle",
      TableName: "CUSTOMER_LIST2",
    };
    
    ddb.scan(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data, '***************');
        data.Items.forEach(function (element, index, array) {
        //   console.log(
        //       "printing",
        //       element.Title.S + " (" + element.Subtitle.S + ")"
        //   );
        console.log(element);
        });
      }
    });