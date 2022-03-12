// This one will scan through DB and pull out the record
// with a specific value in a specific table column
// no key needed

    // Load the AWS SDK for Node.js.
    var AWS = require("aws-sdk");
    // Set the AWS Region.
    AWS.config.update({ region: "us-east-1" });
    
    // Create DynamoDB service object.
    var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

    // Create an array (use PUSH instead of this method!!!)
    var responseArray = [];

    const params = {
    // Specify which items in the results are returned.
    //   FilterExpression: "Subtitle = :topic AND Season = :s AND Episode = :e",

    // This is for filtering by campaign name
    // You need to create a variable that represents the DynamoDB column name
    FilterExpression: "campaign = :theCampaign",

    // Define the expression attribute value, which are substitutes for the values you want to compare.
    ExpressionAttributeValues: {

    // Set the filter to only find records of campaign = Triple A
     ":theCampaign" : {S: "Triple A"}
      
  
      },
      // Set the projection expression, which are the attributes that you want.
      //ProjectionExpression: "campaign, user_response, assistant_response",
      
      TableName: "admr_questions",
    };
    
    ddb.scan(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        data.Items.forEach(function (element, index, array) {

        // Do a push fn here to put in an array that we return
        // For Test
        //console.log(element.id.S,"||", element.campaign.S, "||", element.user_response.S, "||", element.assistant_response.S)
        responseArray.push(element);
        console.log(responseArray)
        })
      }
    });