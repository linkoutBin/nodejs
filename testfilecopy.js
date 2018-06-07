'use strict';

var path = require('path');
var fs = require('fs');
var workDir = path.resolve('.');
var filePath = path.join(workDir,'pub','index.html');
var rf = fs.createReadStream('test.html');
var wf = fs.createWriteStream(filePath);
rf.pipe(wf);
