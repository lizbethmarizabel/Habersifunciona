const request = require('request');

request('http://www.google.com', function(error,response, body){
    console.log('error',error);
    console.log('statusCode:',response && response.statusCode);
    console.log('body',body);
});