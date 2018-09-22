const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({region: 'us-east-2', apiVersion: '2012-08-10'});

exports.handler = (event, context, callback) => {
    const id = guid();
    const params = {
        Item: {
            "ResourceId": {
                S: id
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
           console.log(id);
           callback(null, {
               "id": id
           });
       }
    });
};

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
