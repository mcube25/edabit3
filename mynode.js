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
