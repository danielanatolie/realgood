const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({region: 'us-east-2', apiVersion: '2012-08-10'});

exports.handler = (event, context, callback) => {
    const params = {
        Item: {
            "ResourceId": {
                S: event.ResourceId
            },
            "date": {
                S: event.date
            },
            "location": {
                S: event.location
            },
            "name": {
                S: event.name
            },
            "type": {
                S: event.type
            }
        },
        TableName: "resources"
    };
    dynamodb.putItem(params, function(err, data) {
       if (err) {
           console.log(err);
           callback(err);
       } else {
           console.log(data);
           callback(null, data);
       }
    });
};
