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
    var rulesArray = [];
    rulesArray[0] = {};
    rulesArray[1] = {};
    rulesArray[2] = {};
    rulesArray[3] = {};
    rulesArray[4] = {};


    
    const params = {
      // Specify which items in the results are returned.
    //   FilterExpression: "Subtitle = :topic AND Season = :s AND Episode = :e",

    // ****** COMMENTED OUT FOR TEST
    // FilterExpression: "campaignCode = :campaign",
    FilterExpression: "thing = :theThing",

      // Define the expression attribute value, which are substitutes for the values you want to compare.
      ExpressionAttributeValues: {

    // ****** COMMENTED OUT FOR TEST
     // ":campaign": {S: "aaa"}
     ":theThing" : {S: "hockey"}
      
  
      },
      // Set the projection expression, which are the attributes that you want.
      //ProjectionExpression: "Season, Episode, Title, Subtitle",
      
      // ****** COMMENTED OUT FOR TEST
      // TableName: "CUSTOMER_LIST2",
      TableName: "twentyOneTable",
    };
    
    ddb.scan(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        data.Items.forEach(function (element, index, array) {
        rulesArray[index].theId = element.id;
        rulesArray[index].theSport = element.thing
        console.log(rulesArray[index].theId,rulesArray[index].theSport);

        });
      }
    });