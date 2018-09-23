const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({region: 'us-east-2', apiVersion: '2012-08-10'});

exports.handler = (event, context, callback) => {
    const filterType = event.type;
    const params = {
       ExpressionAttributeValues: {
           ":filterBy": {
             S: filterType
            }
        },
      FilterExpression: "resourceType = :filterBy",
      TableName: "resources"
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
            console.log(items);
            callback(null, items);
        }
    });
};

function transform(resource) {
    return {
        date: {
            start: resource.date_start.S,
            end: resource.date_end.S
        },
        description: resource.description.S,
        location: resource.location.S,
        name: resource.name.S,
        id: resource.ResourceId.S,
        type: resource.resourceType.S
    }
}
