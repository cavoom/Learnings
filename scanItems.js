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

    // ****** COMMENTED OUT FOR TEST
    // FilterExpression: "campaignCode = :campaign",
    FilterExpression: "id = :theUserId",

      // Define the expression attribute value, which are substitutes for the values you want to compare.
      ExpressionAttributeValues: {

    // ****** COMMENTED OUT FOR TEST
     // ":campaign": {S: "aaa"}
     ":theUserId" : {S: "amzn1.ask.account.AF423XPDEBEAV5LOUMXGL4FUGNH2K6W4CZLIG32UGNSCWTQOTBPSOJFVW23365CG35FLPRYACBFYELICFPBR7IRV2ST3AXW4H6MF3XJ4Q24RTBNN2B6DIOYRMYFQLDLLTF2LQMRLOSM6C7RTZKFFMFPDVSNXGG4FZ3G2IVEBL3E267DXVPGTZN24ZYB32OVZJPW3FUIYSI6P27I"}
      
  
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
          // This will print the names in the object
        console.log(element.name.S);
        });
      }
    });