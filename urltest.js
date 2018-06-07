'use strict';

var url = require('url');

console.log(url.parse('http://localhost:8080/path/index?key=value&key1=value1#hash'));