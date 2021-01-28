var http = require ('http');
http.createServer (function (req, res){
  res.writeHead(200, {'content-type':'text.html'});
  res.end('Hello world');
}).listen(8080);

//create a module
exports.myDatetime = function (){
  return Date()
};
// now you can include and use your own module
var http = require ('http');
var dt = require ('./module address');
http.createServer(function (req, res){
  res.writeHead(200, {'content-type':'text.html'});
  res.write('the time is ' + dt.myDatetime());
  res.end();
}).listen(8080);
//built in http module
//to include the hhtp module we use the require() method
//use the createServerO() method to create a http server
var http = require('http');
http.createServer(function (req, res){
  res.writeHead(200, {'content':'text.html'});
  res.write ('hello world');
}).listen(8080);
//  the function passed into the hhtp create server has a req argument that represents the request from the client
var http = require ('http');
http.createServer(function (req, res){
  res.writeHead(200, {'content-type':'text.html'});
  res.write(req.url);
  res.end();
}).listen(8080);
//split query string into readable parts
