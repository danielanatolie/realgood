/*
  All of these functions are going to be living in the aws cloud as lambdas
*/
// Sample POST request to APIGateway -> postResource Lambda
function postResource() {
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
}

// Sample DELETE request to APIGateway -> deleteResource Lambda
function deleteResource() {
  var xhr = new XMLHttpRequest();
  xhr.open('DELETE', 'https://5tg521dz44.execute-api.us-east-2.amazonaws.com/dev/realgood');
  xhr.onreadystatechange = function(event) {
    console.log(event.target.response);
  }
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
}

// Sample GET request to APIGateway -> getResource Lambda
function getAllResource() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://5tg521dz44.execute-api.us-east-2.amazonaws.com/dev/realgood/all');
  xhr.onreadystatechange = function(event) {
    console.log(event.target.response);
  }
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
}

function getResource() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://5tg521dz44.execute-api.us-east-2.amazonaws.com/dev/realgood/single');
  xhr.onreadystatechange = function(event) {
    console.log(event.target.response);
  }
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
}
