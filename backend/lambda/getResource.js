const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({region: 'us-east-2', apiVersion: '2012-08-10'});

exports.handler = (event, context, callback) => {
    const type = event.type;
    if (type === 'all') {
        const params = {
            TableName: 'resources'
        };
        dynamodb.scan(params, function(err, data) {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                const items = data.Items.map(
                    (resource) => {
                        return transform(resource);
                    }
                );
                console.log(data);
                callback(null, data);
            }
        });
    } else {
        const params = {
          Key: {
              "ResourceId": {
                  S: type
              }
          },
          TableName: "resources"
        };
        dynamodb.getItem(params, function(err, data) {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                const item = transform(data.Item);
                console.log(item);
                callback(null, item);
            }
        });
    }
};

function transform(resource) {
    return {
        date: resource.date.S,
        location: resource.location.S,
        name: resource.name.S,
        ResourceId: resource.ResourceId.S,
        type: resource.type.S
    }
}
