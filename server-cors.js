(function() {
  'use strict';
  /* jshint esnext:true */

  var koa = require('koa');
  var os = require('os');
  var cors = require('koa-cors');
  var app = koa();

  app.use(cors());

  var PORT = process.env.PORT || 3333;
  var HOSTNAME = os.hostname();

  console.log('check the output of curl -i ' + HOSTNAME + ':' + PORT);

  app.listen(PORT);

}());
