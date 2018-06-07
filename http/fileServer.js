'use strict';

var http = require('http');
var	path = require('path');
var	url  = require('url');
var	fs   = require('fs');
var root = path.resolve(process.argv[2]||'.');

console.log('获取文件根目录：'+root);

var fileServer = http.createServer(function(request,response){
	var pathname = url.parse(request.url).pathname;
	var filepath = path.join(root,pathname);

	fs.stat(filepath,function(err,stats){
		if(!err && stats.isFile()){
			console.log('200' + request.url);
			response.writeHead(200);
			fs.createReadStream(filepath).pipe(response);
		}else{
			console.log('404' + request.url);
			response.writeHead(400);
			response.end('404 Not Found');
		}
	});
});

fileServer.listen(8080);

console.log("server is running at localhost");
