/*
  All of these functions are going to be living in the aws cloud as lambdas
*/

// Sample POST request to APIGateway -> postResource Lambda
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://5tg521dz44.execute-api.us-east-2.amazonaws.com/dev/realgood');
xhr.onreadystatechange = function(event) {
  console.log(event.target.response);
}
xhr.send();
