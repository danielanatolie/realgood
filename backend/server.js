/*
  All of these functions are going to be living in the aws cloud as lambdas
*/
// Sample POST request to APIGateway -> postResource Lambda
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://5tg521dz44.execute-api.us-east-2.amazonaws.com/dev/realgood');
xhr.onreadystatechange = function(event) {
  console.log(event.target.response);
}
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
  ResourceId: "test_2",
  date: "Sat. Sep. 22, 2018",
  location: "UBC Hospital",
  name: "Health Check",
  type: "healthcare"
}));

// Sample GET request to APIGateway -> getResource Lambda

// Sample DELETE request to APIGateway -> deleteResource Lambda
