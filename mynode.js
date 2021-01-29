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
var http = require('http');
var url = require('url');
htt.createServer(function (req, res){
  res.writeHead(200, {'content-type':'text.html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt)
}).listen(8080);

//read files
var http = require('http');
var fs = require ('fs');
http.createServer(function(req, res){
  fs.readFile(demoFile1.html, function (err, data){
    res. writeHead(200, {'content-type': 'text.html'});
    res.write(data);
    res.end();
  })
}).listen(8080);

//create a file
//the file system module has methods for creating new files
//fs.appendFile();
//fs.open()
//fs,writeFile()
//creat a file using the fs.appendFile();

var fs = require ('fs');
fs.appendFile('mynewfile1.html', 'Hello Content' function (err){
  if (err){
    return err;
    console.log('funkified')
  }})
//node url module
